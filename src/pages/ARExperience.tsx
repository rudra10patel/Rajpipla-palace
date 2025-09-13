import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Camera, Scan, Clock, MapPin, Star, Play, Download, Share2 } from "lucide-react";

const arExperiences = [
  {
    id: 1,
    title: "Palace Through Time",
    description: "See how different rooms looked across different eras with historical overlays",
    duration: "15 min",
    difficulty: "Easy",
    rating: 4.9,
    downloads: "25.2K",
    features: ["Historical Overlays", "Timeline Slider", "360° Views"],
    thumbnail: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "Royal Artifact Hunt",
    description: "Find hidden royal treasures using AR clues throughout the palace",
    duration: "30 min",
    difficulty: "Medium",
    rating: 4.8,
    downloads: "18.7K",
    features: ["Treasure Hunt", "Scoring System", "Achievements"],
    thumbnail: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Architectural Analysis",
    description: "Explore construction techniques and architectural details with AR annotations",
    duration: "20 min",
    difficulty: "Advanced",
    rating: 4.7,
    downloads: "12.3K",
    features: ["3D Models", "Technical Details", "Construction Timeline"],
    thumbnail: "/api/placeholder/400/250"
  },
  {
    id: 4,
    title: "Cultural Ceremonies",
    description: "Witness virtual recreations of royal ceremonies and festivals",
    duration: "25 min",
    difficulty: "Easy",
    rating: 4.9,
    downloads: "22.1K",
    features: ["Live Performances", "Cultural Context", "Music & Dance"],
    thumbnail: "/api/placeholder/400/250"
  },
  {
    id: 5,
    title: "Garden Seasons",
    description: "See the palace gardens in different seasons and time periods",
    duration: "12 min",
    difficulty: "Easy",
    rating: 4.8,
    downloads: "16.4K",
    features: ["Seasonal Changes", "Plant Information", "Weather Effects"],
    thumbnail: "/api/placeholder/400/250"
  },
  {
    id: 6,
    title: "Royal Portraits Come Alive",
    description: "Watch royal portraits animate and tell their stories",
    duration: "18 min",
    difficulty: "Easy",
    rating: 4.9,
    downloads: "28.9K",
    features: ["Animated Portraits", "Voice Narration", "Historical Facts"],
    thumbnail: "/api/placeholder/400/250"
  }
];

const arFeatures = [
  {
    icon: Camera,
    title: "AR Photo Mode",
    description: "Take photos with virtual historical elements and share them with friends"
  },
  {
    icon: Scan,
    title: "Object Recognition",
    description: "Point your camera at artifacts to get instant information and stories"
  },
  {
    icon: MapPin,
    title: "Location-Based Content",
    description: "Get relevant AR content based on your exact position in the palace"
  },
  {
    icon: Clock,
    title: "Time Machine",
    description: "Travel through different historical periods with time-shift overlays"
  }
];

const ARExperience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-heritage-royal mb-6">
            AR Heritage Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transform your visit with augmented reality. See the palace come alive through your smartphone 
            with interactive experiences that blend history with cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heritage" size="xl" className="group">
              <Smartphone className="w-5 h-5" />
              Download AR App
            </Button>
            <Button variant="palace" size="xl">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* AR Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {arFeatures.map((feature, index) => (
            <Card key={index} className="text-center group hover:shadow-heritage transition-royal bg-card/80 backdrop-blur-sm border-heritage-stone/20">
              <CardHeader>
                <div className="w-16 h-16 bg-heritage-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-royal">
                  <feature.icon className="w-8 h-8 text-heritage-gold" />
                </div>
                <CardTitle className="text-lg text-heritage-royal">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AR Experiences */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-heritage-royal text-center mb-8">
            Interactive AR Experiences
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {arExperiences.map((experience) => (
              <Card key={experience.id} className="group hover:shadow-heritage transition-royal bg-card/80 backdrop-blur-sm border-heritage-stone/20 overflow-hidden">
                <div className="relative">
                  <div 
                    className="aspect-video bg-heritage-stone/20 bg-cover bg-center"
                    style={{ backgroundImage: `url(${experience.thumbnail})` }}
                  >
                    <div className="absolute inset-0 bg-heritage-royal/20 group-hover:bg-heritage-royal/40 transition-royal flex items-center justify-center">
                      <Button variant="heritage" size="icon" className="opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100">
                        <Play className="w-6 h-6" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-heritage-cream/90 text-heritage-royal">
                      <Download className="w-3 h-3 mr-1" />
                      {experience.downloads}
                    </Badge>
                  </div>
                  
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-heritage-gold/90 text-heritage-cream">
                      <Star className="w-3 h-3 mr-1" />
                      {experience.rating}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg text-heritage-royal">{experience.title}</CardTitle>
                    <Badge variant="outline" className={
                      experience.difficulty === "Easy" ? "border-green-500 text-green-700" :
                      experience.difficulty === "Medium" ? "border-yellow-500 text-yellow-700" :
                      "border-red-500 text-red-700"
                    }>
                      {experience.difficulty}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {experience.duration}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {experience.description}
                  </CardDescription>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-heritage-royal mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="heritage" size="sm" className="flex-1">
                      <Smartphone className="w-4 h-4" />
                      Launch AR
                    </Button>
                    <Button variant="palace" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* AR Technology Info */}
        <div className="bg-heritage-royal/5 rounded-2xl p-8 border border-heritage-royal/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-heritage-royal mb-4">How AR Works at Rajpipla Palace</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our advanced AR technology creates seamless blends between the physical palace and digital heritage content.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-heritage-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-heritage-gold">1</span>
              </div>
              <h4 className="font-semibold text-heritage-royal mb-2">Scan & Recognize</h4>
              <p className="text-sm text-muted-foreground">Point your camera at any location or artifact in the palace</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-heritage-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-heritage-gold">2</span>
              </div>
              <h4 className="font-semibold text-heritage-royal mb-2">AR Overlay</h4>
              <p className="text-sm text-muted-foreground">Watch as digital content appears seamlessly over the real world</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-heritage-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-heritage-gold">3</span>
              </div>
              <h4 className="font-semibold text-heritage-royal mb-2">Interact & Learn</h4>
              <p className="text-sm text-muted-foreground">Touch, explore, and discover hidden stories and information</p>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="mt-16">
          <Card className="bg-card/80 backdrop-blur-sm border-heritage-stone/20">
            <CardHeader>
              <CardTitle className="text-heritage-royal text-center">System Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-heritage-royal mb-3">iOS Devices</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• iPhone 6s or newer</li>
                    <li>• iOS 11.0 or later</li>
                    <li>• ARKit compatible</li>
                    <li>• 2GB+ available storage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-heritage-royal mb-3">Android Devices</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• ARCore supported device</li>
                    <li>• Android 7.0 (API level 24) or higher</li>
                    <li>• OpenGL ES 3.0 or later</li>
                    <li>• 3GB+ RAM recommended</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ARExperience;