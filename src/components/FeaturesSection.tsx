import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
  MapPin,
  Play,
  Archive,
  Volume2,
  Calendar,
  Bot
} from "lucide-react";

const features = [
  {
    icon: Play,
    title: "Virtual Tour",
    description: "Experience the grandeur of Rajpipla Palace through immersive 360° virtual tours. Explore every room, corridor, and hidden corner from the comfort of your home.",
    category: "Immersive Experience",
    href: "/virtual-tour"
  },
  {
    icon: Archive,
    title: "Digital Archive",
    description: "Discover centuries of royal history through digitized manuscripts, photographs, architectural plans, and historical documents preserved for future generations.",
    category: "Heritage Preservation",
    href: "/archive"
  },
  {
    icon: Volume2,
    title: "Audio Tour",
    description: "Listen to expert narrations and royal stories as you explore the palace. Available in multiple languages with authentic sound effects and music.",
    category: "Guided Experience",
    href: "/audio-tour"
  },
  {
    icon: Calendar,
    title: "Visit",
    description: "Plan your physical visit to Rajpipla Palace with real-time information on tours, tickets, accommodations, and nearby attractions.",
    category: "Tourism Planning",
    href: "/visit"
  },
  {
    icon: Bot,
    title: "AI Guide",
    description: "Get personalized recommendations and answers about the palace history, architecture, and royal family through our intelligent AI assistant.",
    category: "Smart Assistance",
    href: "/ai-guide"
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
            <Link key={index} to={feature.href} className="block">
              <Card 
                className="group hover:shadow-heritage transition-royal border-heritage-stone/20 bg-card/50 backdrop-blur-sm cursor-pointer h-full hover:scale-105"
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
                  <CardTitle className="text-xl text-heritage-royal group-hover:text-heritage-royal/80 transition-smooth flex items-center justify-between">
                    {feature.title}
                    <ArrowRight className="w-5 h-5 text-heritage-royal/60 group-hover:text-heritage-royal group-hover:translate-x-1 transition-all" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};