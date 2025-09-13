import { Button } from "@/components/ui/button";
import { Play, Camera, Maximize2, Volume2 } from "lucide-react";

export const VirtualTourSection = () => {
  return (
    <section className="py-24 bg-heritage-royal text-heritage-cream relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border border-heritage-gold rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-heritage-gold rounded-lg rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 border border-heritage-gold/30 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-heritage-cream to-heritage-gold bg-clip-text text-transparent">
                Step Into History
              </h2>
              <p className="text-xl text-heritage-cream/80 leading-relaxed mb-8">
                Experience the grandeur of Rajpipla Palace like never before. Our immersive virtual tours 
                transport you through centuries of royal heritage, allowing you to explore intricate 
                architecture and discover hidden stories.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-heritage-gold/20 rounded-lg flex items-center justify-center">
                  <Camera className="w-6 h-6 text-heritage-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">360° Photography</h3>
                  <p className="text-heritage-cream/70">Ultra-high resolution panoramic views</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-heritage-gold/20 rounded-lg flex items-center justify-center">
                  <Volume2 className="w-6 h-6 text-heritage-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Audio Guides</h3>
                  <p className="text-heritage-cream/70">Expert narration in multiple languages</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-heritage-gold/20 rounded-lg flex items-center justify-center">
                  <Maximize2 className="w-6 h-6 text-heritage-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">VR Compatibility</h3>
                  <p className="text-heritage-cream/70">Full immersion with VR headsets</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button variant="heritage" size="xl" className="group">
                <Play className="w-5 h-5" />
                Start Tour
              </Button>
              <Button variant="palace" size="xl">
                Watch Preview
              </Button>
            </div>
          </div>
          
          {/* Virtual Tour Preview */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-heritage-gold/20 to-heritage-terracotta/20 rounded-2xl border border-heritage-gold/30 flex items-center justify-center group cursor-pointer hover:shadow-heritage transition-royal">
              <div className="w-20 h-20 bg-heritage-gold/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-royal backdrop-blur-sm">
                <Play className="w-10 h-10 text-heritage-cream ml-1" />
              </div>
            </div>
            
            {/* Tour Stats */}
            <div className="absolute -bottom-8 left-0 right-0">
              <div className="bg-heritage-cream/10 backdrop-blur-md rounded-xl p-4 border border-heritage-gold/20">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-heritage-gold">45</div>
                    <div className="text-sm text-heritage-cream/70">Rooms</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-heritage-gold">2.5hrs</div>
                    <div className="text-sm text-heritage-cream/70">Duration</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-heritage-gold">8K</div>
                    <div className="text-sm text-heritage-cream/70">Quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};