import { Button } from "@/components/ui/button";
import { ArrowRight, Play, MapPin, Camera, Crown, Castle, Throne, Flower2 } from "lucide-react";
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
        <div className="absolute inset-0 bg-gradient-to-r from-heritage-royal/0 via-heritage-royal/0 to-transparent"></div>
      </div>
      
      {/* Floating Royal Decorative Elements */}
      {/* Upper Left Corner */}
      <div className="absolute top-8 left-4 w-8 h-8 text-heritage-gold/30 animate-float">
        <Crown className="w-full h-full" />
      </div>
      <div className="absolute top-12 left-12 w-6 h-6 text-heritage-gold/25 animate-float" style={{animationDelay: "1s"}}>
        <Flower2 className="w-full h-full" />
      </div>
      <div className="absolute top-20 left-6 w-7 h-7 text-heritage-gold/20 animate-float" style={{animationDelay: "2s"}}>
        <Castle className="w-full h-full" />
      </div>
      
      {/* Upper Right Corner */}
      <div className="absolute top-16 right-8 w-10 h-10 text-heritage-gold/25 animate-float" style={{animationDelay: "3s"}}>
        <Throne className="w-full h-full" />
      </div>
      <div className="absolute top-24 right-4 w-8 h-8 text-heritage-gold/20 animate-float" style={{animationDelay: "4s"}}>
        <Crown className="w-full h-full" />
      </div>
      
      {/* Lower Left Area */}
      <div className="absolute bottom-24 left-8 w-12 h-12 text-heritage-gold/15 animate-float" style={{animationDelay: "5s"}}>
        <Castle className="w-full h-full" />
      </div>
      <div className="absolute bottom-40 left-16 w-6 h-6 text-heritage-gold/25 animate-float" style={{animationDelay: "6s"}}>
        <Flower2 className="w-full h-full" />
      </div>
      
      {/* Lower Right Area */}
      <div className="absolute bottom-32 right-12 w-9 h-9 text-heritage-gold/20 animate-float" style={{animationDelay: "7s"}}>
        <Throne className="w-full h-full" />
      </div>
      <div className="absolute bottom-48 right-6 w-7 h-7 text-heritage-gold/25 animate-float" style={{animationDelay: "8s"}}>
        <Crown className="w-full h-full" />
      </div>
      
      {/* Middle Left Area */}
      <div className="absolute top-1/2 left-4 w-8 h-8 text-heritage-gold/15 animate-float" style={{animationDelay: "9s"}}>
        <Flower2 className="w-full h-full" />
      </div>
      
      {/* Middle Right Area */}
      <div className="absolute top-1/3 right-6 w-10 h-10 text-heritage-gold/20 animate-float" style={{animationDelay: "10s"}}>
        <Castle className="w-full h-full" />
      </div>
      
      {/* Additional Floating Elements for More Coverage */}
      {/* Top Center */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-7 h-7 text-heritage-gold/25 animate-float" style={{animationDelay: "11s"}}>
        <Flower2 className="w-full h-full" />
      </div>
      
      {/* Center Left */}
      <div className="absolute top-1/2 left-12 w-9 h-9 text-heritage-gold/15 animate-float" style={{animationDelay: "12s"}}>
        <Throne className="w-full h-full" />
      </div>
      
      {/* Center Right */}
      <div className="absolute top-1/2 right-16 w-8 h-8 text-heritage-gold/20 animate-float" style={{animationDelay: "13s"}}>
        <Crown className="w-full h-full" />
      </div>
      
      {/* Bottom Center */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-6 h-6 text-heritage-gold/30 animate-float" style={{animationDelay: "14s"}}>
        <Flower2 className="w-full h-full" />
      </div>
      
      {/* Scattered Small Elements */}
      <div className="absolute top-40 left-1/4 w-5 h-5 text-heritage-gold/20 animate-float" style={{animationDelay: "15s"}}>
        <Castle className="w-full h-full" />
      </div>
      <div className="absolute top-56 right-1/4 w-6 h-6 text-heritage-gold/25 animate-float" style={{animationDelay: "16s"}}>
        <Throne className="w-full h-full" />
      </div>
      <div className="absolute bottom-56 left-1/3 w-5 h-5 text-heritage-gold/20 animate-float" style={{animationDelay: "17s"}}>
        <Crown className="w-full h-full" />
      </div>
      <div className="absolute bottom-40 right-1/3 w-7 h-7 text-heritage-gold/15 animate-float" style={{animationDelay: "18s"}}>
        <Flower2 className="w-full h-full" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-heritage-cream">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-heritage-royal to-heritage-gold bg-clip-text text-transparent drop-shadow-lg" style={{lineHeight: '1.2', paddingBottom: '0.2em'}}>
            Rajpipla Palace
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-heritage-royal/60 leading-tight">
            Digital Heritage Preservation & Tourism Platform
          </h2>
          <p className="text-lg md:text-xl mb-12 text-white drop-shadow-lg max-w-2xl mx-auto leading-relaxed">
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
              <div className="text-3xl font-bold text-heritage-gold mb-2">600+</div>
              <div className="text-heritage-cream/80">Years of Dynasty</div>
            </div>
            <div className="animate-slide-up" style={{animationDelay: "0.4s"}}>
              <div className="text-3xl font-bold text-heritage-gold mb-2">11</div>
              <div className="text-heritage-cream/80">Royal Bedrooms</div>
            </div>
            <div className="animate-slide-up" style={{animationDelay: "0.6s"}}>
              <div className="text-3xl font-bold text-heritage-gold mb-2">1000+</div>
              <div className="text-heritage-cream/80">Teak Doors & Windows</div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};