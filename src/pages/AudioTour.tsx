import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Play, Pause, Volume2, Languages, Download } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { VolumeSlider } from "@/components/VolumeSlider";

// Import audio files
import englishAudio from "@/assets/audio/vijay palace.mp3";
import hindiAudio from "@/assets/audio/Vijay palace hindi.mp3";
import gujaratiAudio from "@/assets/audio/vijay palace gujarati.mp3";

// Language configuration
const LANGUAGE_CONFIG = {
  en: {
    name: 'English',
    code: 'en',
    flag: '🇺🇸',
    audioFile: englishAudio
  },
  hi: {
    name: 'हिंदी (Hindi)',
    code: 'hi',
    flag: '🇮🇳',
    audioFile: hindiAudio
  },
  gu: {
    name: 'ગુજરાતી (Gujarati)',
    code: 'gu',
    flag: '🇮🇳',
    audioFile: gujaratiAudio
  }
} as const;

type SupportedLanguage = keyof typeof LANGUAGE_CONFIG;

export const AudioTour = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<SupportedLanguage>('en');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Get current audio file based on selected language
  const currentAudioFile = LANGUAGE_CONFIG[selectedLanguage].audioFile;

  // Audio player functions
  const handlePlayPause = () => {
    if (!currentAudioFile) return;

    if (isPlaying) {
      // Pause current audio
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
      setIsPaused(true);
    } else if (isPaused) {
      // Resume paused audio
      if (audioRef.current) {
        audioRef.current.play().catch(error => {
          console.error('Error resuming audio:', error);
          setIsPlaying(false);
          setIsPaused(false);
        });
        setIsPlaying(true);
        setIsPaused(false);
      }
    } else {
      // Start new audio
      setIsLoading(true);
      
      // Stop any currently playing audio
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      
      // Load new audio
      const audio = new Audio(currentAudioFile);
      audioRef.current = audio;
      
      audio.addEventListener('loadedmetadata', () => {
        setDuration(audio.duration);
        setIsLoading(false);
      });
      
      audio.addEventListener('timeupdate', () => {
        setCurrentTime(audio.currentTime);
      });
      
      audio.addEventListener('ended', () => {
        setIsPlaying(false);
        setIsPaused(false);
        setCurrentTime(0);
      });
      
      audio.addEventListener('error', (e) => {
        console.error('Audio playback error:', e);
        setIsPlaying(false);
        setIsPaused(false);
        setIsLoading(false);
      });
      
      audio.addEventListener('canplaythrough', () => {
        setIsLoading(false);
      });
      
      audio.play().catch(error => {
        console.error('Error playing audio:', error);
        setIsPlaying(false);
        setIsPaused(false);
        setIsLoading(false);
      });
      setIsPlaying(true);
      setIsPaused(false);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentTime(0);
  };

  const handleLanguageChange = (language: string) => {
    const newLanguage = language as SupportedLanguage;
    setSelectedLanguage(newLanguage);
    
    // Stop current audio when changing language
    handleStop();
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  // Volume control functions
  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleMuteToggle = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume;
        setIsMuted(false);
      } else {
        audioRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  // Download audio file function
  const handleDownload = async () => {
    if (!currentAudioFile) return;
    
    try {
      // Fetch the audio file
      const response = await fetch(currentAudioFile);
      if (!response.ok) {
        throw new Error('Failed to fetch audio file');
      }
      
      // Convert to blob
      const blob = await response.blob();
      
      // Create download URL
      const url = window.URL.createObjectURL(blob);
      
      // Create a temporary anchor element to trigger download
      const link = document.createElement('a');
      link.href = url;
      
      // Create a clean filename
      const fileName = `Vijay_Palace_Audio_Tour_${LANGUAGE_CONFIG[selectedLanguage].name.replace(/[^a-zA-Z0-9]/g, '_')}.mp3`;
      link.download = fileName;
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the URL object
      window.URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error('Error downloading audio file:', error);
      // Fallback: try direct download
      try {
        const link = document.createElement('a');
        link.href = currentAudioFile;
        link.download = `Vijay_Palace_Audio_Tour_${LANGUAGE_CONFIG[selectedLanguage].name.replace(/[^a-zA-Z0-9]/g, '_')}.mp3`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (fallbackError) {
        console.error('Fallback download failed:', fallbackError);
        // Final fallback: open in new tab
        window.open(currentAudioFile, '_blank');
      }
    }
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space' && (isPlaying || isPaused)) {
        e.preventDefault();
        handlePlayPause();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isPlaying, isPaused]);

  // Cleanup audio on component unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      setIsPlaying(false);
      setIsPaused(false);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-heritage-royal/10 to-background dark:from-heritage-royal/20 dark:to-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              <span className="bg-gradient-to-r from-heritage-royal to-heritage-gold bg-clip-text text-transparent">Audio Tours</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience Vijay Palace through immersive audio guides. 
              Listen to the palace's rich history and cultural heritage in English, Hindi, or Gujarati.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Main Audio Player */}
        <div className="mb-12">
          <Card className="p-4 sm:p-8 bg-gradient-to-r from-heritage-gold/10 to-heritage-royal/10 border-heritage-gold/20">
            <div className="text-center mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-heritage-gold to-heritage-royal rounded-full flex items-center justify-center mx-auto mb-6">
                <Volume2 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-heritage-royal mb-4">Vijay Palace Complete Audio Tour</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
                Immerse yourself in the rich history and cultural heritage of Vijay Palace. 
                Professional narration brings the palace's story to life in English, Hindi, and Gujarati.
              </p>
              
              {/* Language Selection */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 mb-6">
                <div className="flex items-center space-x-2">
                  <Languages className="w-5 h-5 text-heritage-royal" />
                  <span className="text-sm font-medium">Language:</span>
                </div>
                <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(LANGUAGE_CONFIG).map(([code, config]) => (
                      <SelectItem key={code} value={code}>
                        <div className="flex items-center space-x-2">
                          <span>{config.flag}</span>
                          <span>{config.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Audio Player Controls */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                <Button
                  variant="heritage"
                  size="lg"
                  onClick={handlePlayPause}
                  disabled={isLoading}
                  className="px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                  ) : isPlaying ? (
                    <Pause className="w-5 h-5 mr-3" />
                  ) : (
                    <Play className="w-5 h-5 mr-3" />
                  )}
                  {isLoading ? 'Loading...' : isPlaying ? 'Pause Tour' : isPaused ? 'Resume Tour' : 'Start Audio Tour'}
                </Button>

                <div className="flex space-x-4 w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleStop}
                    disabled={!isPlaying && !isPaused}
                    className="px-4 sm:px-6 py-3 flex-1 sm:flex-none"
                  >
                    Stop
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleDownload}
                    className="px-4 sm:px-6 py-3 flex-1 sm:flex-none"
                  >
                    <Download className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Volume Controls */}
              <div className="flex items-center justify-center mb-6">
                <VolumeSlider
                  volume={volume}
                  onVolumeChange={handleVolumeChange}
                  isMuted={isMuted}
                  onMuteToggle={handleMuteToggle}
                />
              </div>

              {/* Progress Bar */}
              {(isPlaying || isPaused) && (
                <div className="space-y-2">
                  <div className="w-full bg-muted rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-heritage-royal to-heritage-gold h-3 rounded-full transition-all duration-300"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>
              )}

              {/* Status */}
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mt-4">
                {isPlaying && <span className="text-green-600 font-medium">● Playing</span>}
                {isPaused && <span className="text-yellow-600 font-medium">⏸ Paused</span>}
                <span>{LANGUAGE_CONFIG[selectedLanguage].name}</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center">
            <Languages className="w-12 h-12 text-heritage-royal mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Multi-Language Support</h3>
            <p className="text-muted-foreground">
              Listen to the palace tour in English, Hindi, or Gujarati with professional narration
            </p>
          </Card>
          
          <Card className="p-6 text-center">
            <Volume2 className="w-12 h-12 text-heritage-royal mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">High Quality Audio</h3>
            <p className="text-muted-foreground">
              Professional audio recordings for crystal clear listening experience
            </p>
          </Card>
          
          <Card className="p-6 text-center">
            <Download className="w-12 h-12 text-heritage-royal mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Download & Offline</h3>
            <p className="text-muted-foreground">
              Download audio files to listen offline during your palace visit
            </p>
          </Card>
        </div>

        {/* Additional Information */}
        <Card className="p-6 bg-gradient-to-r from-heritage-cream/10 to-heritage-royal/10 border-heritage-cream/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-heritage-royal mb-4">About This Audio Tour</h3>
            <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              This comprehensive audio tour takes you on a journey through the magnificent Vijay Palace, 
              also known as Rajvant Palace. Built during the rule of Maharaja Vijaysinhji, the palace 
              represents a perfect fusion of Indian tradition and European elegance. From the grand 
              architecture and royal lifestyle to the cultural significance and historical importance, 
              this tour covers every aspect of this heritage treasure. Whether you're interested in 
              the architectural marvels, royal history, or cultural heritage, our professional 
              audio guides ensure you can enjoy this experience in English, Hindi, or Gujarati.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AudioTour;