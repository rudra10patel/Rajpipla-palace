import { useRef, useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, ExternalLink, Play, Loader2, Smartphone, Monitor, Tablet, Eye, Clock, Users, Star, Maximize2, Volume2, Camera } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { useNavigate } from "react-router-dom";

const vijayPalace = {
    id: 1,
  name: "Vijay Palace",
  location: "Rajpipla, Gujarat, India",
  established: "19th Century",
  description: "A magnificent royal palace showcasing the architectural grandeur and cultural heritage of the princely state of Rajpipla. The palace features stunning Indo-Islamic architecture with beautiful gardens, heritage museum, and rich historical significance.",
  architecture: "Indo-Islamic with European influences",
  significance: "Former royal residence of the Gohil dynasty, now a heritage site preserving centuries of royal history and culture",
  festivals: ["Navratri", "Diwali", "Holi", "Heritage Festival"],
  tourUrl: "https://www.google.com/maps/embed?pb=!4v1757611286269!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRDR0WXFNVHc.!2m2!1d21.87151329014791!2d73.50305328539163!3f359.93950069039767!4f0!5f0.7820865974627469",
  highlights: ["Architectural Beauty", "Cultural Heritage", "Historical Significance", "Heritage Museum", "Palace Gardens"],
  duration: "30 min",
  views: "12.5K",
  rating: 4.9
};

const VirtualTour = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const viewerRef = useRef<HTMLDivElement>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleViewArchives = useCallback(() => {
    navigate(`/archive?palace=${encodeURIComponent(vijayPalace.name)}`);
  }, [navigate]);

  const handleAudioGuide = useCallback(() => {
    navigate(`/ai-guide?palace=${encodeURIComponent(vijayPalace.name)}`);
  }, [navigate]);

  const handleStartTour = useCallback(() => {
    if (viewerRef.current) {
      viewerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 pb-6 lg:pb-8 bg-gradient-to-br from-heritage-royal/10 to-background dark:from-heritage-royal/20 dark:to-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-6 lg:mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-foreground">
              <span className="bg-gradient-to-r from-heritage-royal to-heritage-gold bg-clip-text text-transparent">Virtual Tours</span>
          </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Immerse yourself in 360° experiences of Vijay Palace. 
              Explore the magnificent royal residence, heritage museum, and beautiful gardens from the princely era.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          {/* Virtual Tour Viewer */}
          <div className="w-full">
              <Card className="overflow-hidden">
                {/* Tour Player */}
                <div ref={viewerRef} className={`relative ${isMobile ? 'h-64' : 'h-96'} bg-gradient-to-br from-heritage-royal/20 to-heritage-gold/20 flex items-center justify-center`}>
                  {isLoading ? (
                    <div className="text-center text-heritage-royal">
                      <Loader2 className="w-12 h-12 animate-spin mb-4 mx-auto" />
                      <h3 className="text-lg font-semibold mb-2">Loading 360° Tour...</h3>
                      <p className="text-heritage-royal/80">Preparing immersive experience</p>
                    </div>
                  ) : vijayPalace.tourUrl ? (
                    <iframe
                      src={vijayPalace.tourUrl}
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${vijayPalace.name} 360° Tour`}
                      onLoad={() => setIsLoading(false)}
                      sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-top-navigation allow-presentation"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                      frameBorder="0"
                      scrolling="no"
                    />
                  ) : (
                    <div className="text-center text-heritage-royal p-6">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 bg-heritage-royal/20 rounded-full flex items-center justify-center mb-4 mx-auto hover:bg-heritage-royal/30 transition-colors cursor-pointer">
                        <Play className="w-6 h-6 lg:w-8 lg:h-8 ml-1" />
                      </div>
                      <h3 className="text-lg lg:text-xl font-semibold mb-2">Start 360° Virtual Tour</h3>
                      <p className="text-heritage-royal/80 text-sm lg:text-base">Experience {vijayPalace.name} in immersive detail</p>
                      <p className="text-heritage-royal/60 text-xs mt-2">Tour coming soon</p>
                    </div>
                  )}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-heritage-gold text-heritage-royal text-xs lg:text-sm">
                      360° Experience
                  </Badge>
                </div>
              </div>
              
                {/* Palace Info */}
                <div className="p-4 lg:p-6">
                  <div className="mb-4">
                    <h2 className="text-xl lg:text-2xl font-bold text-foreground">{vijayPalace.name}</h2>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-sm lg:text-base">Location & History</h4>
                      <p className="text-muted-foreground text-xs lg:text-sm mb-2">
                        <MapPin className="inline w-3 h-3 lg:w-4 lg:h-4 mr-1" />
                        {vijayPalace.location}
                      </p>
                      <p className="text-muted-foreground text-xs lg:text-sm mb-3">
                        <Calendar className="inline w-3 h-3 lg:w-4 lg:h-4 mr-1" />
                        Established {vijayPalace.established}
                      </p>
                      <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed">{vijayPalace.description}</p>
                </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-sm lg:text-base">Architecture & Significance</h4>
                      <p className="text-muted-foreground text-xs lg:text-sm mb-2">
                        <strong>Architecture:</strong> {vijayPalace.architecture}
                      </p>
                      <p className="text-muted-foreground text-xs lg:text-sm mb-3">
                        <strong>Significance:</strong> {vijayPalace.significance}
                      </p>
                      <div>
                        <p className="text-xs lg:text-sm font-medium text-foreground mb-2">Major Festivals:</p>
                        <div className="flex flex-wrap gap-1 lg:gap-2">
                          {vijayPalace.festivals.map((festival, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {festival}
                      </Badge>
                    ))}
                        </div>
                      </div>
                  </div>
                </div>
                
                  {/* Tour Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
                    <Button 
                      variant="heritage" 
                      className="w-full h-10 lg:h-11 text-sm lg:text-base"
                      disabled={!vijayPalace.tourUrl || isLoading}
                      onClick={handleStartTour}
                    >
                      {isLoading ? (
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      ) : (
                        <Play className="w-4 h-4 mr-2" />
                      )}
                      {vijayPalace.tourUrl ? 'Start Tour' : 'Coming Soon'}
                  </Button>
                    <Button 
                      variant="outline" 
                      className="w-full h-10 lg:h-11 text-sm lg:text-base"
                      onClick={handleAudioGuide}
                    >
                      AI Guide
                  </Button>
                    <Button 
                      variant="palace" 
                      className="w-full h-10 lg:h-11 text-sm lg:text-base"
                      onClick={handleViewArchives}
                    >
                      View Archives
                  </Button>
                  </div>
                </div>
            </Card>

              {/* Tour Features */}
              <div className="mt-6 lg:mt-8 grid sm:grid-cols-2 gap-4 lg:gap-6">
                <Card className="p-4 lg:p-6">
                  <h3 className="font-semibold text-foreground mb-3 text-sm lg:text-base">Tour Features</h3>
                  <ul className="space-y-1 lg:space-y-2 text-xs lg:text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-heritage-royal rounded-full mr-2 flex-shrink-0"></div>
                      360° panoramic views
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-heritage-royal rounded-full mr-2 flex-shrink-0"></div>
                      Multi-language narration
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-heritage-royal rounded-full mr-2 flex-shrink-0"></div>
                      Interactive hotspots
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-heritage-royal rounded-full mr-2 flex-shrink-0"></div>
                      Historical timeline
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-heritage-royal rounded-full mr-2 flex-shrink-0"></div>
                      Heritage artifact highlights
                    </li>
                  </ul>
                </Card>

                <Card className="p-4 lg:p-6">
                  <h3 className="font-semibold text-foreground mb-3 text-sm lg:text-base">Technical Info</h3>
                  <ul className="space-y-1 lg:space-y-2 text-xs lg:text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-heritage-royal rounded-full mr-2 flex-shrink-0"></div>
                      4K resolution imagery
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-heritage-royal rounded-full mr-2 flex-shrink-0"></div>
                      VR headset compatible
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-heritage-royal rounded-full mr-2 flex-shrink-0"></div>
                      Mobile optimized
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-heritage-royal rounded-full mr-2 flex-shrink-0"></div>
                      Offline mode available
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-heritage-royal rounded-full mr-2 flex-shrink-0"></div>
                      Bookmark favorite spots
                    </li>
                  </ul>
                </Card>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VirtualTour;