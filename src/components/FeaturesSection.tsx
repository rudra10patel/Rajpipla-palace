import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Camera, 
  Smartphone, 
  Users, 
  BarChart3, 
  Globe, 
  Crown,
  ArrowRight,
  Headset,
  BookOpen,
  MapPin
} from "lucide-react";

const features = [
  {
    icon: Headset,
    title: "Virtual 3D/VR Tours",
    description: "Explore every corner of Rajpipla Palace from anywhere in the world with immersive virtual reality experiences.",
    category: "Heritage Preservation"
  },
  {
    icon: BookOpen,
    title: "Digital Archive & Timeline",
    description: "Discover centuries of history through digitized manuscripts, photographs, and architectural designs.",
    category: "Heritage Preservation"
  },
  {
    icon: Smartphone,
    title: "AR Heritage Experience",
    description: "Use augmented reality to see historical overlays and witness how the palace looked across different eras.",
    category: "Tourism Enhancement"
  },
  {
    icon: MapPin,
    title: "Smart Tourism Hub",
    description: "Plan your visit with real-time information on tours, tickets, accommodations, and nearby attractions.",
    category: "Tourism Enhancement"
  },
  {
    icon: Users,
    title: "Community Memories",
    description: "Share stories, upload memories, and connect with fellow heritage enthusiasts from around the globe.",
    category: "Community Engagement"
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track visitor engagement, popular sections, and tourism trends to enhance preservation efforts.",
    category: "For Authorities"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-heritage-royal mb-6">
            Preserving Heritage Through Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform bridges the gap between ancient heritage and modern technology, 
            creating an immersive experience that preserves history for future generations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-heritage transition-royal border-heritage-stone/20 bg-card/50 backdrop-blur-sm"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 rounded-lg bg-gradient-heritage group-hover:scale-110 transition-royal">
                    <feature.icon className="w-6 h-6 text-heritage-cream" />
                  </div>
                  <span className="text-sm font-medium text-heritage-terracotta uppercase tracking-wide">
                    {feature.category}
                  </span>
                </div>
                <CardTitle className="text-xl text-heritage-royal group-hover:text-heritage-royal/80 transition-smooth">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="royal" size="xl" className="group">
            <Crown className="w-5 h-5" />
            Explore All Features
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};