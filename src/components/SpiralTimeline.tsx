import { useState, useEffect, useRef, useCallback } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "./LoadingSpinner";
import { 
  Calendar, 
  Crown, 
  Scroll, 
  MapPin, 
  Clock,
  ChevronUp,
  ChevronDown,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move3D,
  Play,
  Pause,
  SkipForward,
  SkipBack
} from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: string;
  artifacts: string[];
  period: string;
  significance: string;
  color: string;
  position: { x: number; y: number; z: number };
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1820s",
    title: "Foundation of Vijay Palace",
    description: "Initial construction of Vijay Palace begins under the Gohil dynasty. Strategic location chosen in Rajpipla for administrative and residential purposes with Indo-Islamic architectural style.",
    type: "Foundation",
    period: "19th Century",
    significance: "Royal Establishment",
    color: "#3B82F6",
    artifacts: ["Foundation Stones", "Initial Blueprints", "Royal Charter", "Construction Records"],
    position: { x: 0, y: 0, z: 0 }
  },
  {
    year: "1850s",
    title: "Palace Expansion Era",
    description: "Major expansion of the palace complex with additional wings, courtyards, royal gardens, and pavilions. Establishment of royal treasury and administrative offices.",
    type: "Architecture",
    period: "19th Century",
    significance: "Architectural Growth",
    color: "#10B981",
    artifacts: ["Expansion Plans", "Garden Designs", "Treasury Records", "Administrative Documents"],
    position: { x: 0, y: 0, z: 0 }
  },
  {
    year: "1870s",
    title: "Golden Era Begins",
    description: "Major architectural enhancements with European influences. Construction of the Durbar Hall for royal audiences and installation of modern amenities.",
    type: "Architecture",
    period: "19th Century",
    significance: "Cultural Renaissance",
    color: "#F59E0B",
    artifacts: ["Durbar Hall Plans", "European Artifacts", "Modern Fixtures", "Royal Portraits"],
    position: { x: 0, y: 0, z: 0 }
  },
  {
    year: "1890s",
    title: "Cultural Center Establishment",
    description: "Palace becomes the center of cultural and political activities. Royal library established with rare manuscripts and heritage artifacts curated.",
    type: "Cultural",
    period: "19th Century",
    significance: "Cultural Hub",
    color: "#8B5CF6",
    artifacts: ["Library Catalog", "Manuscript Collection", "Cultural Records", "Art Collections"],
    position: { x: 0, y: 0, z: 0 }
  },
  {
    year: "1900s",
    title: "Modernization Period",
    description: "Introduction of electricity and modern conveniences. Renovation of royal chambers and public spaces. Establishment of the palace museum.",
    type: "Modernization",
    period: "20th Century",
    significance: "Technological Advancement",
    color: "#EF4444",
    artifacts: ["Electrical Plans", "Modern Amenities", "Museum Catalog", "Renovation Records"],
    position: { x: 0, y: 0, z: 0 }
  },
  {
    year: "1920s",
    title: "Political Transition",
    description: "Political changes during British colonial period. Palace adapts to new administrative roles while maintaining cultural preservation efforts.",
    type: "Political",
    period: "20th Century",
    significance: "Colonial Adaptation",
    color: "#06B6D4",
    artifacts: ["Political Documents", "Administrative Records", "Cultural Preservation Plans", "Colonial Correspondence"],
    position: { x: 0, y: 0, z: 0 }
  },
  {
    year: "1947",
    title: "Independence Era",
    description: "Post-independence era brings administrative changes. Palace continues as cultural and heritage center with first public access granted to certain areas.",
    type: "Political",
    period: "20th Century",
    significance: "National Independence",
    color: "#84CC16",
    artifacts: ["Independence Documents", "Public Access Records", "Heritage Recognition", "Cultural Programs"],
    position: { x: 0, y: 0, z: 0 }
  },
  {
    year: "1960s",
    title: "Heritage Conservation",
    description: "Heritage conservation initiatives begin. Palace recognized as important cultural monument with tourism and educational programs introduced.",
    type: "Heritage",
    period: "20th Century",
    significance: "Heritage Recognition",
    color: "#F97316",
    artifacts: ["Conservation Plans", "Heritage Documentation", "Tourism Records", "Educational Materials"],
    position: { x: 0, y: 0, z: 0 }
  },
  {
    year: "1980s",
    title: "Official Heritage Recognition",
    description: "Official heritage site designation with major restoration and conservation projects. Digital documentation of palace artifacts begins.",
    type: "Heritage",
    period: "20th Century",
    significance: "Official Protection",
    color: "#EC4899",
    artifacts: ["Heritage Certificates", "Restoration Records", "Digital Archives", "Conservation Reports"],
    position: { x: 0, y: 0, z: 0 }
  },
  {
    year: "2000s",
    title: "UNESCO Consideration",
    description: "UNESCO heritage consideration with modern visitor facilities added. Cultural festivals and events established for public engagement.",
    type: "Recognition",
    period: "21st Century",
    significance: "Global Recognition",
    color: "#6366F1",
    artifacts: ["UNESCO Documents", "Visitor Facilities", "Festival Records", "Public Engagement Programs"],
    position: { x: 0, y: 0, z: 0 }
  },
  {
    year: "2010s",
    title: "Digital Heritage Era",
    description: "Digital archive project initiated with virtual tour development begins. Online heritage documentation and global accessibility.",
    type: "Digital",
    period: "21st Century",
    significance: "Digital Transformation",
    color: "#14B8A6",
    artifacts: ["Digital Archives", "Virtual Tour Development", "Online Documentation", "Global Access Records"],
    position: { x: 0, y: 0, z: 0 }
  },
  {
    year: "2020s",
    title: "AI & Virtual Reality",
    description: "360° virtual tour implementation with AI-guided heritage experiences. Global accessibility through digital platforms and next-generation heritage technology.",
    type: "Technology",
    period: "21st Century",
    significance: "Future Innovation",
    color: "#A855F7",
    artifacts: ["VR Implementation", "AI Development", "Global Platform Records", "Technology Integration"],
    position: { x: 0, y: 0, z: 0 }
  }
];

const SpiralTimeline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false); // Start with false - no auto-play
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 0, z: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [scale, setScale] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const spiralRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<NodeJS.Timeout>();

  // Calculate spiral positions
  const calculateSpiralPositions = useCallback(() => {
    const radius = 300;
    const height = 800;
    const turns = 3;
    
    return timelineEvents.map((event, index) => {
      const t = index / (timelineEvents.length - 1);
      const angle = t * turns * Math.PI * 2;
      const spiralRadius = radius * (1 - t * 0.3);
      const x = Math.cos(angle) * spiralRadius;
      const y = Math.sin(angle) * spiralRadius;
      const z = (t - 0.5) * height;
      
      return {
        ...event,
        position: { x, y, z }
      };
    });
  }, []);

  const [events, setEvents] = useState(calculateSpiralPositions());

  // Loading simulation
  useEffect(() => {
    const loadingSteps = [
      { progress: 20, delay: 500 },
      { progress: 40, delay: 800 },
      { progress: 60, delay: 600 },
      { progress: 80, delay: 700 },
      { progress: 100, delay: 1000 }
    ];

    let currentStep = 0;
    const loadingInterval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        setLoadingProgress(loadingSteps[currentStep].progress);
        currentStep++;
      } else {
        clearInterval(loadingInterval);
        // Add a small delay before hiding loading
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    }, loadingSteps[currentStep]?.delay || 1000);

    return () => clearInterval(loadingInterval);
  }, []);

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      setMousePosition({ x: x - 0.5, y: y - 0.5 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const elementTop = rect.top + scrollTop;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      const progress = Math.max(0, Math.min(1, (scrollTop - elementTop + windowHeight) / elementHeight));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-play animation - FIXED: Only runs when explicitly enabled
  useEffect(() => {
    if (!isPlaying) {
      // Clear any existing animation when stopped
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
      return;
    }

    const animate = () => {
      setCurrentIndex(prev => (prev + 1) % timelineEvents.length);
      // Use setTimeout instead of requestAnimationFrame for better control
      animationRef.current = setTimeout(() => {
        if (isPlaying) { // Check if still playing before continuing
          animate();
        }
      }, 4000); // 4 second delay between transitions
    };

    // Start animation after a delay
    animationRef.current = setTimeout(() => {
      if (isPlaying) {
        animate();
      }
    }, 4000);

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [isPlaying]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          setCurrentIndex(prev => (prev - 1 + timelineEvents.length) % timelineEvents.length);
          break;
        case 'ArrowRight':
        case 'ArrowDown':
          e.preventDefault();
          setCurrentIndex(prev => (prev + 1) % timelineEvents.length);
          break;
        case ' ':
          e.preventDefault();
          setIsPlaying(!isPlaying);
          break;
        case 'r':
        case 'R':
          e.preventDefault();
          resetView();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying]);

  const resetView = () => {
    setCurrentIndex(0);
    setScrollProgress(0);
    setIsPlaying(false); // Ensure auto-play is stopped
    setCameraPosition({ x: 0, y: 0, z: 0 });
    setRotation({ x: 0, y: 0, z: 0 });
    setScale(1);
  };

  const nextEvent = () => {
    setCurrentIndex(prev => (prev + 1) % timelineEvents.length);
  };

  const prevEvent = () => {
    setCurrentIndex(prev => (prev - 1 + timelineEvents.length) % timelineEvents.length);
  };

  const jumpToEvent = (index: number) => {
    setCurrentIndex(index);
  };

  // Show loading screen
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="text-center z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Heritage Timeline
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Journey through 200+ years of Vijay Palace's rich history in an immersive 3D spiral experience
          </p>
          
          {/* Controls */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm"
            >
              {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
              {isPlaying ? 'Pause' : 'Play'}
            </Button>
            <Button
              onClick={prevEvent}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm"
            >
              <SkipBack className="w-4 h-4 mr-2" />
              Previous
            </Button>
            <Button
              onClick={nextEvent}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm"
            >
              Next
              <SkipForward className="w-4 h-4 ml-2" />
            </Button>
            <Button
              onClick={resetView}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>

          {/* Instructions */}
          <p className="text-sm text-gray-400">
            Use arrow keys to navigate • Spacebar to play/pause • Drag to explore • Scroll to zoom
          </p>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, #1e40af 0%, transparent 70%)`
            }}
          />
        </div>
      </div>

      {/* 3D Spiral Container */}
      <div 
        ref={containerRef}
        className="relative h-[200vh] overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* 3D Scene */}
        <div 
          ref={spiralRef}
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: `
              perspective(2000px) 
              rotateX(${rotation.x + mousePosition.y * 10}deg) 
              rotateY(${rotation.y + mousePosition.x * 10}deg) 
              translateZ(${cameraPosition.z}px)
              scale(${scale})
            `,
            transformStyle: 'preserve-3d',
            transition: isHovering ? 'none' : 'transform 0.1s ease-out'
          }}
        >
          {/* Spiral Path */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg 
              className="absolute inset-0 w-full h-full opacity-30"
              viewBox="0 0 1000 1000"
            >
              <defs>
                <linearGradient id="spiralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="25%" stopColor="#8B5CF6" />
                  <stop offset="50%" stopColor="#EC4899" />
                  <stop offset="75%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
              <path
                d="M 500 500 Q 600 300 700 500 Q 600 700 500 500 Q 400 700 300 500 Q 400 300 500 500"
                stroke="url(#spiralGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="20,10"
                style={{
                  strokeDashoffset: scrollProgress * 200,
                  animation: 'spiralRotate 30s linear infinite'
                }}
              />
            </svg>
          </div>

          {/* Timeline Events */}
          {events.map((event, index) => {
            const isActive = index === currentIndex;
            const isVisible = Math.abs(index - currentIndex) <= 2;
            const distance = Math.abs(index - currentIndex);
            const opacity = Math.max(0.1, 1 - distance * 0.3);
            const scale = Math.max(0.3, 1 - distance * 0.2);

            return (
              <div
                key={index}
                className={`absolute transition-all duration-1000 ease-out ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  left: `calc(50% + ${event.position.x}px)`,
                  top: `calc(50% + ${event.position.y}px)`,
                  transform: `
                    translate3d(-50%, -50%, ${event.position.z}px) 
                    scale(${isActive ? scale * 1.5 : scale})
                    rotateY(${mousePosition.x * 20}deg)
                    rotateX(${mousePosition.y * 20}deg)
                  `,
                  transformStyle: 'preserve-3d',
                  opacity: isActive ? 1 : opacity,
                  zIndex: isActive ? 100 : 50 - distance
                }}
                onClick={() => jumpToEvent(index)}
              >
                {/* Event Card */}
                <Card 
                  className={`
                    group cursor-pointer transition-all duration-500 hover:shadow-2xl
                    w-80 h-96 backdrop-blur-sm border border-white/20
                    ${isActive ? 'bg-white/20 shadow-2xl' : 'bg-white/5 hover:bg-white/10'}
                  `}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <Badge 
                        className="text-white text-sm px-3 py-1"
                        style={{ backgroundColor: event.color }}
                      >
                        {event.year}
                      </Badge>
                      <Badge variant="outline" className="text-white border-white/30">
                        {event.period}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-xl text-white mb-2">
                      {event.title}
                    </CardTitle>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Crown className="w-4 h-4" />
                      <span>{event.significance}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-300 text-sm mb-4">
                      {event.description}
                    </CardDescription>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Scroll className="w-3 h-3" />
                        <span>Key Artifacts:</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {event.artifacts.slice(0, 3).map((artifact, i) => (
                          <Badge 
                            key={i} 
                            variant="outline" 
                            className="text-xs px-2 py-1 border-white/20 text-white"
                          >
                            {artifact}
                          </Badge>
                        ))}
                        {event.artifacts.length > 3 && (
                          <Badge 
                            variant="outline" 
                            className="text-xs px-2 py-1 border-white/20 text-white"
                          >
                            +{event.artifacts.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Connection Line */}
                {index < events.length - 1 && (
                  <div 
                    className="absolute top-1/2 left-full w-16 h-0.5 transform -translate-y-1/2"
                    style={{
                      background: `linear-gradient(90deg, ${event.color}, ${events[index + 1].color})`,
                      transform: `translate3d(-50%, -50%, ${event.position.z}px) rotate(${Math.atan2(events[index + 1].position.y - event.position.y, events[index + 1].position.x - event.position.x) * 180 / Math.PI}deg)`,
                      opacity: opacity * 0.8
                    }}
                  />
                )}
              </div>
            );
          })}

          {/* Center Hub */}
          <div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              transform: `translateZ(100px) scale(${scale})`,
              transformStyle: 'preserve-3d'
            }}
          >
            <div className="w-40 h-40 rounded-full border-2 border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <Clock className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-lg font-bold text-white">
                  {events[currentIndex]?.year}
                </div>
                <div className="text-sm text-gray-300">
                  {events[currentIndex]?.period}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex space-x-2">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => jumpToEvent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300"
          style={{ width: `${(currentIndex / (events.length - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default SpiralTimeline;
