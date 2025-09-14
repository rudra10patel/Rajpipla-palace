import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Volume1 } from 'lucide-react';

interface VolumeSliderProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
  isMuted: boolean;
  onMuteToggle: () => void;
}

export const VolumeSlider = ({ volume, onVolumeChange, isMuted, onMuteToggle }: VolumeSliderProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateVolume(e);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      updateVolume(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateVolume = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    onVolumeChange(percentage);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging && sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = Math.max(0, Math.min(1, x / rect.width));
        onVolumeChange(percentage);
      }
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, onVolumeChange]);

  const currentVolume = isMuted ? 0 : volume;
  const percentage = currentVolume * 100;

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={onMuteToggle}
        className="p-1 hover:bg-muted rounded transition-colors"
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4 text-muted-foreground" />
        ) : volume === 0 ? (
          <Volume1 className="w-4 h-4 text-muted-foreground" />
        ) : volume < 0.5 ? (
          <Volume1 className="w-4 h-4 text-foreground" />
        ) : (
          <Volume2 className="w-4 h-4 text-foreground" />
        )}
      </button>

      <div className="flex items-center space-x-2">
        <div
          ref={sliderRef}
          className="relative w-32 h-2 bg-muted rounded-full cursor-pointer group"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {/* Track */}
          <div className="absolute inset-0 bg-muted rounded-full"></div>
          
          {/* Progress */}
          <div
            className="absolute left-0 top-0 h-full bg-heritage-royal rounded-full transition-all duration-150"
            style={{ width: `${percentage}%` }}
          ></div>
          
          {/* Thumb */}
          <div
            className="absolute top-1/2 w-4 h-4 bg-heritage-royal rounded-full border-2 border-background shadow-md transform -translate-y-1/2 transition-all duration-150 group-hover:scale-110 group-hover:bg-heritage-gold"
            style={{ left: `calc(${percentage}% - 8px)` }}
          ></div>
        </div>

        <span className="text-sm text-muted-foreground w-12 text-center font-medium">
          {Math.round(percentage)}%
        </span>
      </div>
    </div>
  );
};
