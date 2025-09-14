import { Button } from "@/components/ui/button";
import { Crown, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-heritage-royal text-heritage-cream">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-heritage-gold rounded-lg flex items-center justify-center">
                <Crown className="w-6 h-6 text-heritage-cream" />
              </div>
              <span className="text-2xl font-bold">Rajpipla Palace</span>
            </div>
            <p className="text-heritage-cream/70 leading-relaxed">
              Preserving royal heritage through innovative digital experiences and immersive technology.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="text-heritage-cream/70 hover:text-heritage-gold hover:bg-heritage-gold/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-heritage-cream/70 hover:text-heritage-gold hover:bg-heritage-gold/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-heritage-cream/70 hover:text-heritage-gold hover:bg-heritage-gold/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-heritage-cream/70 hover:text-heritage-gold hover:bg-heritage-gold/10">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-heritage-gold">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-heritage-cream/70 hover:text-heritage-gold transition-smooth">Virtual Tours</a></li>
              <li><a href="#" className="text-heritage-cream/70 hover:text-heritage-gold transition-smooth">Digital Archive</a></li>
              <li><a href="#" className="text-heritage-cream/70 hover:text-heritage-gold transition-smooth">Heritage Timeline</a></li>
            </ul>
          </div>
          
          {/* Visit */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-heritage-gold">Visit</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-heritage-cream/70 hover:text-heritage-gold transition-smooth">Plan Your Visit</a></li>
              <li><a href="#" className="text-heritage-cream/70 hover:text-heritage-gold transition-smooth">Nearby Hotels</a></li>
              <li><a href="#" className="text-heritage-cream/70 hover:text-heritage-gold transition-smooth">Transportation</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-heritage-gold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-heritage-gold flex-shrink-0" />
                <span className="text-heritage-cream/70 text-sm">Rajpipla, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-heritage-gold flex-shrink-0" />
                <span className="text-heritage-cream/70 text-sm">+91 (02640) 220345, 220973</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-heritage-gold flex-shrink-0" />
                <span className="text-heritage-cream/70 text-sm">intrust@rajpiplaroyalmuseum.com</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-heritage-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-heritage-cream/70 text-sm">
              © 2025 Rajpipla Palace Digital Heritage Platform. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-heritage-cream/70 hover:text-heritage-gold transition-smooth">Privacy Policy</a>
              <a href="#" className="text-heritage-cream/70 hover:text-heritage-gold transition-smooth">Terms of Service</a>
              <a href="#" className="text-heritage-cream/70 hover:text-heritage-gold transition-smooth">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};