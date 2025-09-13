import { Button } from "@/components/ui/button";
import { ArrowRight, Play, MapPin, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/rajpipla-palace-hero.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-heritage-royal/80 via-heritage-royal/60 to-transparent"></div>
      </div>
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-heritage-gold/30 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-heritage-gold/30 rounded-lg animate-float" style={{animationDelay: "2s"}}></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-heritage-cream">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-heritage-cream to-heritage-gold bg-clip-text text-transparent">
            Rajpipla Palace
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-heritage-cream/90">
            Digital Heritage Preservation & Tourism Platform
          </h2>
          <p className="text-lg md:text-xl mb-12 text-heritage-cream/80 max-w-2xl mx-auto leading-relaxed">
            Experience centuries of royal heritage through cutting-edge technology. Explore, preserve, and celebrate the magnificent history of Rajpipla Palace.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link to="/virtual-tour">
              <Button variant="heritage" size="xl" className="group">
                <Play className="w-5 h-5" />
                Start Virtual Tour
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/visit">
              <Button variant="palace" size="xl" className="group">
                <MapPin className="w-5 h-5" />
                Plan Your Visit
              </Button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="animate-slide-up" style={{animationDelay: "0.2s"}}>
              <div className="text-3xl font-bold text-heritage-gold mb-2">300+</div>
              <div className="text-heritage-cream/80">Years of History</div>
            </div>
            <div className="animate-slide-up" style={{animationDelay: "0.4s"}}>
              <div className="text-3xl font-bold text-heritage-gold mb-2">50+</div>
              <div className="text-heritage-cream/80">Royal Chambers</div>
            </div>
            <div className="animate-slide-up" style={{animationDelay: "0.6s"}}>
              <div className="text-3xl font-bold text-heritage-gold mb-2">1000+</div>
              <div className="text-heritage-cream/80">Artifacts Preserved</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-heritage-cream/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-heritage-cream/40 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};