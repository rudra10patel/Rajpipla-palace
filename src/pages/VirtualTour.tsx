import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Maximize2, Volume2, Camera, Eye, Clock, Users, Star } from "lucide-react";

const virtualRooms = [
  {
    id: 1,
    name: "Royal Durbar Hall",
    description: "The grand throne room where maharajas held court",
    duration: "12 min",
    views: "15.2K",
    rating: 4.9,
    thumbnail: "/api/placeholder/400/250",
    highlights: ["Golden Throne", "Intricate Ceiling", "Royal Portraits"]
  },
  {
    id: 2,
    name: "Maharani's Chambers",
    description: "Private quarters of the royal women",
    duration: "8 min",
    views: "12.8K",
    rating: 4.8,
    thumbnail: "/api/placeholder/400/250",
    highlights: ["Mirror Work", "Silk Textiles", "Jewelry Display"]
  },
  {
    id: 3,
    name: "Garden Courtyard",
    description: "Stunning Mughal-style gardens with fountains",
    duration: "10 min",
    views: "18.5K",
    rating: 4.9,
    thumbnail: "/api/placeholder/400/250",
    highlights: ["Fountain Complex", "Rose Gardens", "Pavilions"]
  },
  {
    id: 4,
    name: "Royal Library",
    description: "Ancient manuscripts and royal documents",
    duration: "15 min",
    views: "9.2K",
    rating: 4.7,
    thumbnail: "/api/placeholder/400/250",
    highlights: ["Rare Manuscripts", "Royal Seals", "Historical Maps"]
  },
  {
    id: 5,
    name: "Armory & Treasury",
    description: "Royal weapons and precious artifacts",
    duration: "11 min",
    views: "14.1K",
    rating: 4.8,
    thumbnail: "/api/placeholder/400/250",
    highlights: ["Ceremonial Swords", "Gold Artifacts", "Crown Jewels"]
  },
  {
    id: 6,
    name: "Temple Complex",
    description: "Sacred spaces within the palace",
    duration: "9 min",
    views: "11.7K",
    rating: 4.9,
    thumbnail: "/api/placeholder/400/250",
    highlights: ["Sacred Idols", "Prayer Hall", "Religious Art"]
  }
];

const VirtualTour = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-heritage-royal mb-6">
            Virtual Palace Tours
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore every corner of Rajpipla Palace through immersive 360° virtual reality experiences. 
            Walk through royal chambers, gardens, and sacred spaces from the comfort of your home.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heritage" size="xl" className="group">
              <Play className="w-5 h-5" />
              Start Full Tour (45 min)
            </Button>
            <Button variant="palace" size="xl">
              <Camera className="w-5 h-5" />
              Quick Preview
            </Button>
          </div>
        </div>

        {/* Tour Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-heritage-royal mb-2">50+</div>
            <div className="text-muted-foreground">Rooms & Spaces</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-heritage-gold mb-2">8K</div>
            <div className="text-muted-foreground">Ultra HD Quality</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-heritage-terracotta mb-2">VR</div>
            <div className="text-muted-foreground">Ready Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-heritage-royal mb-2">12</div>
            <div className="text-muted-foreground">Languages</div>
          </div>
        </div>

        {/* Room Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {virtualRooms.map((room) => (
            <Card key={room.id} className="group hover:shadow-heritage transition-royal bg-card/80 backdrop-blur-sm border-heritage-stone/20 overflow-hidden">
              <div className="relative">
                <div 
                  className="aspect-video bg-heritage-stone/20 bg-cover bg-center"
                  style={{ backgroundImage: `url(${room.thumbnail})` }}
                >
                  <div className="absolute inset-0 bg-heritage-royal/20 group-hover:bg-heritage-royal/40 transition-royal flex items-center justify-center">
                    <Button variant="heritage" size="icon" className="opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100">
                      <Play className="w-6 h-6" />
                    </Button>
                  </div>
                </div>
                
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-heritage-cream/90 text-heritage-royal">
                    <Eye className="w-3 h-3 mr-1" />
                    {room.views}
                  </Badge>
                </div>
                
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-heritage-gold/90 text-heritage-cream">
                    <Star className="w-3 h-3 mr-1" />
                    {room.rating}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg text-heritage-royal">{room.name}</CardTitle>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {room.duration}
                  </div>
                </div>
                <CardDescription className="text-base">
                  {room.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-heritage-royal mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.highlights.map((highlight, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="heritage" size="sm" className="flex-1">
                    <Play className="w-4 h-4" />
                    Start Tour
                  </Button>
                  <Button variant="palace" size="sm">
                    <Maximize2 className="w-4 h-4" />
                  </Button>
                  <Button variant="palace" size="sm">
                    <Volume2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* VR Information */}
        <div className="mt-16 bg-heritage-royal/5 rounded-2xl p-8 border border-heritage-royal/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-heritage-royal mb-4">Enhanced VR Experience</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              For the ultimate immersive experience, use VR headsets to feel like you're truly walking through the palace halls.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-heritage-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Maximize2 className="w-8 h-8 text-heritage-gold" />
              </div>
              <h4 className="font-semibold text-heritage-royal mb-2">360° Movement</h4>
              <p className="text-sm text-muted-foreground">Look around naturally in any direction</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-heritage-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Volume2 className="w-8 h-8 text-heritage-gold" />
              </div>
              <h4 className="font-semibold text-heritage-royal mb-2">3D Audio</h4>
              <p className="text-sm text-muted-foreground">Spatial audio that follows your movement</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-heritage-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-heritage-gold" />
              </div>
              <h4 className="font-semibold text-heritage-royal mb-2">Guided Tours</h4>
              <p className="text-sm text-muted-foreground">Expert historians as your virtual guides</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;