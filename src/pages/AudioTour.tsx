import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Play, Pause, Download, Volume2, MapPin, Clock, Smartphone, Loader2, Search, VolumeX, Volume1 } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { useSearchParams } from "react-router-dom";

interface AudioGuide {
  id: string;
  title: string;
  palace: string;
  duration: string;
  language: string;
  narrator: string;
  description: string;
  type: "tour" | "history" | "architecture" | "culture";
  offline: boolean;
  premium: boolean;
  audioFile: string;
}

// Import the audio file
import vijayPalaceAudio from "@/assets/audio/vijay palace.mp3";

// Vijay Palace Audio Guide - Single Card
const audioGuides: AudioGuide[] = [
  {
    id: "1",
    title: "Vijay Palace Complete Audio Tour",
    palace: "Vijay Palace",
    duration: "25 min",
    language: "English",
    narrator: "Heritage Guide",
    description: "Comprehensive audio tour covering the entire Vijay Palace complex, including its rich history, stunning architecture, cultural significance, royal heritage, and beautiful gardens. Experience the palace's journey from its foundation in the 1820s to modern conservation efforts.",
    type: "tour",
    offline: true,
    premium: false,
    audioFile: vijayPalaceAudio
  }
];

export const AudioTour = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioDurations, setAudioDurations] = useState<Record<string, number>>({});
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [pausedId, setPausedId] = useState<string | null>(null);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [searchParams] = useSearchParams();
  const palaceParam = searchParams.get('palace');

  // Set search query from URL parameter on component mount
  useEffect(() => {
    if (palaceParam) {
      setSearchQuery(palaceParam);
    }
  }, [palaceParam]);

  const filteredGuides = audioGuides.filter(guide => {
    const matchesSearch = searchQuery === "" || 
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.palace.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.narrator.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.language.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case "tour": return "bg-heritage-gold/20 text-heritage-royal";
      case "history": return "bg-heritage-royal/20 text-heritage-royal";
      case "architecture": return "bg-heritage-terracotta/20 text-heritage-terracotta";
      case "culture": return "bg-heritage-cream/20 text-heritage-royal";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const capitalizeFirst = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Audio player functions
  const handlePlayPause = (guideId: string, audioFile: string) => {
    if (!audioFile) {
      return; // playback disabled when no file
    }
    if (playingId === guideId) {
      // Pause current audio
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setPlayingId(null);
      setPausedId(guideId);
    } else if (pausedId === guideId) {
      // Resume paused audio
      if (audioRef.current) {
        audioRef.current.play().catch(error => {
          console.error('Error resuming audio:', error);
          setPlayingId(null);
          setPausedId(null);
        });
        setPlayingId(guideId);
        setPausedId(null);
      }
    } else {
      // Stop any currently playing audio
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      
      // Load new audio
      const audio = new Audio(audioFile);
      audioRef.current = audio;
      
      audio.addEventListener('loadedmetadata', () => {
        setDuration(audio.duration);
      });
      
      audio.addEventListener('timeupdate', () => {
        setCurrentTime(audio.currentTime);
      });
      
      audio.addEventListener('ended', () => {
        setPlayingId(null);
        setPausedId(null);
        setCurrentTime(0);
      });
      
      audio.addEventListener('error', (e) => {
        console.error('Audio playback error:', e);
        setPlayingId(null);
        setPausedId(null);
      });
      
      audio.play().catch(error => {
        console.error('Error playing audio:', error);
        setPlayingId(null);
        setPausedId(null);
      });
      setPlayingId(guideId);
      setPausedId(null);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  // Load audio durations when component mounts
  useEffect(() => {
    const loadAudioDurations = async () => {
      const durations: Record<string, number> = {};
      
      // Load durations in parallel for better performance
      const loadPromises = audioGuides.map(async (guide) => {
        try {
          const audio = new Audio(guide.audioFile);
          
          return new Promise<{id: string, duration: number}>((resolve) => {
            const timeout = setTimeout(() => {
              console.warn(`Timeout loading duration for ${guide.title}, using fallback`);
              resolve({ id: guide.id, duration: parseDuration(guide.duration) });
            }, 5000);
            
            audio.addEventListener('loadedmetadata', () => {
              clearTimeout(timeout);
              resolve({ id: guide.id, duration: audio.duration });
            });
            
            audio.addEventListener('error', (e) => {
              clearTimeout(timeout);
              console.warn(`Error loading duration for ${guide.title}:`, e);
              resolve({ id: guide.id, duration: parseDuration(guide.duration) });
            });
            
            // Load the audio to trigger metadata loading
            audio.load();
          });
        } catch (error) {
          console.warn(`Could not load duration for ${guide.title}:`, error);
          return { id: guide.id, duration: parseDuration(guide.duration) };
        }
      });
      
      try {
        const results = await Promise.all(loadPromises);
        results.forEach(({ id, duration }) => {
          durations[id] = duration;
        });
        setAudioDurations(durations);
      } catch (error) {
        console.error('Error loading audio durations:', error);
      }
    };

    loadAudioDurations();
  }, []);

  // Currently selected/active guide (for global controls)
  const currentGuide = (playingId || pausedId)
    ? audioGuides.find(g => g.id === (playingId || pausedId)) || null
    : null;

  // Helper function to parse duration string to seconds
  const parseDuration = (durationStr: string): number => {
    const match = durationStr.match(/(\d+)\s*min/);
    return match ? parseInt(match[1]) * 60 : 0;
  };

  // Helper function to format seconds to duration string
  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    if (minutes > 0) {
      return remainingSeconds > 0 ? `${minutes}m ${remainingSeconds}s` : `${minutes} min`;
    }
    return `${remainingSeconds} sec`;
  };

  // Download audio file function
  const handleDownload = async (guide: AudioGuide) => {
    if (!guide.audioFile) return;
    setDownloadingId(guide.id);
    
    try {
      // Fetch the audio file
      const response = await fetch(guide.audioFile);
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
      const fileName = `${guide.palace.replace(/[^a-zA-Z0-9]/g, '_')}_${guide.title.replace(/[^a-zA-Z0-9]/g, '_')}.mp3`;
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
        link.href = guide.audioFile;
        link.download = `${guide.palace.replace(/[^a-zA-Z0-9]/g, '_')}_${guide.title.replace(/[^a-zA-Z0-9]/g, '_')}.mp3`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (fallbackError) {
        console.error('Fallback download failed:', fallbackError);
        // Final fallback: open in new tab
        window.open(guide.audioFile, '_blank');
      }
    } finally {
      setDownloadingId(null);
    }
  };

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

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space' && (playingId || pausedId)) {
        e.preventDefault();
        const currentGuide = audioGuides.find(g => g.id === (playingId || pausedId));
        if (currentGuide) {
          handlePlayPause(currentGuide.id, currentGuide.audioFile);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [playingId, pausedId]);

  // Cleanup audio on component unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      setPlayingId(null);
      setPausedId(null);
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
              Explore Vijay Palace through immersive audio guides covering architecture, history, and culture. 
              Professional narration brings the palace's heritage to life.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search audio guides by title, narrator, type, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 text-base"
            />
          </div>
        </div>

        {/* Global Audio Controls - Only show when audio is playing */}
        {(playingId || pausedId) && (
          <div className="mb-8">
            <Card className="p-4 bg-gradient-to-r from-heritage-royal/10 to-heritage-gold/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-heritage-royal/20 rounded-full flex items-center justify-center">
                    <Volume2 className="w-6 h-6 text-heritage-royal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {audioGuides.find(g => g.id === (playingId || pausedId))?.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {audioGuides.find(g => g.id === (playingId || pausedId))?.palace}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  {/* Play/Pause */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      if (!currentGuide) return;
                      handlePlayPause(currentGuide.id, currentGuide.audioFile);
                    }}
                    className="flex-shrink-0"
                  >
                    {playingId ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                  {/* Volume Controls */}
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleMuteToggle}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume1 className="w-4 h-4" />}
                    </Button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={isMuted ? 0 : volume}
                      onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                      className="w-28 h-2 rounded-lg appearance-none cursor-pointer bg-muted"
                      style={{ accentColor: 'hsl(var(--heritage-royal))' }}
                    />
                  </div>
                  
                  {/* Progress Display */}
                  <div className="text-sm text-muted-foreground">
                    {formatTime(currentTime)} / {formatTime(duration || audioDurations[playingId || pausedId || ''] || 0)}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Search Results Info */}
        {searchQuery && (
          <div className="mb-4">
            <p className="text-sm text-muted-foreground">
              {filteredGuides.length} audio guide{filteredGuides.length !== 1 ? 's' : ''} found for "{searchQuery}"
            </p>
          </div>
        )}

        {/* Audio Guide Card */}
        {filteredGuides.length === 0 ? (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No audio guides found</h3>
            <p className="text-muted-foreground">
              No results found for "{searchQuery}". Try adjusting your search terms.
            </p>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {filteredGuides.map((guide) => (
            <Card key={guide.id} className="overflow-hidden hover:shadow-heritage transition-all duration-300 bg-gradient-to-br from-heritage-royal/5 to-heritage-gold/5 border-heritage-royal/20">
              <div className="p-6 sm:p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-heritage-royal to-heritage-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Volume2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-heritage-royal mb-2">{guide.title}</h3>
                  <div className="flex items-center justify-center text-muted-foreground mb-4">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="text-lg">{guide.palace}</span>
                  </div>
                  <Badge className={`${getTypeColor(guide.type)} text-lg px-4 py-2`}>
                    {capitalizeFirst(guide.type)} Audio Guide
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-6 text-lg text-center leading-relaxed">{guide.description}</p>

                <div className="flex justify-center items-center gap-8 mb-8 text-lg">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-5 h-5 mr-2" />
                    {audioDurations[guide.id] ? formatDuration(audioDurations[guide.id]) : (
                      <span className="flex items-center">
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Loading...
                      </span>
                    )}
                  </div>
                  <div className="text-muted-foreground">
                    {guide.language}
                  </div>
                  <div className="flex items-center">
                    {guide.offline && (
                      <Badge variant="outline" className="text-sm">
                        Offline Ready
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Audio Player Controls */}
                <div className="flex items-center justify-center gap-4">
                  <Button
                    variant="heritage"
                    size="lg"
                    onClick={() => handlePlayPause(guide.id, guide.audioFile)}
                    className="px-8 py-3 text-lg"
                  >
                    {playingId === guide.id ? (
                      <>
                        <Pause className="w-5 h-5 mr-3" />
                        Pause Tour
                      </>
                    ) : pausedId === guide.id ? (
                      <>
                        <Play className="w-5 h-5 mr-3" />
                        Resume Tour
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5 mr-3" />
                        Start Audio Tour
                      </>
                    )}
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => handleDownload(guide)}
                    title={`Download ${guide.title}`}
                    disabled={downloadingId === guide.id}
                    className="px-6 py-3"
                  >
                    {downloadingId === guide.id ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Download className="w-5 h-5" />
                    )}
                  </Button>
                </div>

                {/* Progress Bar (when playing or paused) */}
                {(playingId === guide.id || pausedId === guide.id) && (
                  <div className="mt-8">
                    <div className="w-full bg-muted rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-heritage-royal to-heritage-gold h-3 rounded-full transition-all duration-300"
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground mt-2">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration || audioDurations[guide.id] || parseDuration(guide.duration))}</span>
                    </div>
                  </div>
                )}
              </div>
            </Card>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default AudioTour;
