import { Button } from "@/components/ui/button";
import { ArrowRight, Play, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/rajpipla-palace-hero.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-zoom-in"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-heritage-royal/0 via-heritage-royal/0 to-transparent animate-fade-in-slow"></div>
        {/* Animated overlay pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-heritage-gold/10 via-transparent to-heritage-royal/10 animate-pulse-slow"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-heritage-cream">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-heritage-royal to-heritage-gold bg-clip-text text-transparent drop-shadow-lg animate-title-slide-in" style={{lineHeight: '1.2', paddingBottom: '0.2em'}}>
            Rajpipla Palace
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-heritage-royal/70 leading-tight animate-subtitle-slide-in" style={{animationDelay: "0.3s"}}>
            Digital Heritage Preservation & Tourism Platform
          </h2>
          <p className="text-lg md:text-xl mb-12 text-white drop-shadow-lg max-w-2xl mx-auto leading-relaxed animate-description-slide-in" style={{animationDelay: "0.6s"}}>
            Experience centuries of royal heritage through cutting-edge technology. Explore, preserve, and celebrate the magnificent history of Rajpipla Palace.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-buttons-slide-in" style={{animationDelay: "0.9s"}}>
            <Link to="/virtual-tour">
              <Button variant="heritage" size="xl" className="group hover:scale-105 transition-all duration-300 hover:shadow-heritage">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Start Virtual Tour
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/visit">
              <Button variant="palace" size="xl" className="group hover:scale-105 transition-all duration-300 hover:shadow-elegant">
                <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Plan Your Visit
              </Button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-stats-slide-in" style={{animationDelay: "1.2s"}}>
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-heritage-gold mb-2 group-hover:text-heritage-gold/80 transition-colors">600+</div>
              <div className="text-heritage-cream/80 group-hover:text-heritage-cream transition-colors">Years of Dynasty</div>
            </div>
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-heritage-gold mb-2 group-hover:text-heritage-gold/80 transition-colors">7</div>
              <div className="text-heritage-cream/80 group-hover:text-heritage-cream transition-colors">Acre Complex</div>
            </div>
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-heritage-gold mb-2 group-hover:text-heritage-gold/80 transition-colors">1915</div>
              <div className="text-heritage-cream/80 group-hover:text-heritage-cream transition-colors">Palace Built</div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};