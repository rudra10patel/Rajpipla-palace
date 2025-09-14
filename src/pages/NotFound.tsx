import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Search, MapPin, Camera, BookOpen, Crown, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const quickLinks = [
    { name: "Virtual Tour", href: "/virtual-tour", icon: Camera, description: "Explore the palace virtually" },
    { name: "Digital Archive", href: "/archive", icon: BookOpen, description: "Browse historical documents" },
    { name: "Audio Tour", href: "/audio-tour", icon: Search, description: "Listen to palace stories" },
    { name: "Visit Information", href: "/visit", icon: MapPin, description: "Plan your visit" },
    { name: "AI Guide", href: "/ai-guide", icon: Crown, description: "Get personalized guidance" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Main 404 Content */}
          <div className="text-center mb-16">
            <div className="relative mb-8">
              <div className="text-9xl font-bold text-heritage-royal/20 mb-4">404</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Crown className="w-16 h-16 text-heritage-gold" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-heritage-royal mb-6">
              Lost in the Palace
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              It seems you've wandered into a hidden chamber of Rajpipla Palace that doesn't exist. 
              Don't worry - even the most experienced explorers sometimes take a wrong turn in these ancient halls.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild variant="heritage" size="lg" className="group">
                <Link to="/">
                  <Home className="w-5 h-5" />
                  Return to Main Palace
                </Link>
              </Button>
              <Button asChild variant="palace" size="lg" onClick={() => window.history.back()}>
                <div className="flex items-center gap-2">
                  <ArrowLeft className="w-5 h-5" />
                  Go Back
                </div>
              </Button>
            </div>
          </div>

          {/* Quick Navigation Cards */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-heritage-royal text-center mb-8">
              Discover Our Palace
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              While you're here, why not explore some of the most popular areas of our digital palace?
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickLinks.map((link) => (
                <Card key={link.name} className="group hover:shadow-heritage transition-royal bg-card/80 backdrop-blur-sm border-heritage-stone/20">
                  <CardHeader>
                    <div className="w-12 h-12 bg-heritage-gold/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-royal">
                      <link.icon className="w-6 h-6 text-heritage-gold" />
                    </div>
                    <CardTitle className="text-heritage-royal">{link.name}</CardTitle>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="palace" className="w-full">
                      <Link to={link.href}>
                        Explore Now
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Palace Quote */}
          <Card className="bg-heritage-royal/5 border-heritage-royal/20 text-center">
            <CardContent className="py-12">
              <blockquote className="text-2xl font-medium text-heritage-royal mb-4 italic">
                "Every corner of this palace tells a story, every corridor leads to discovery."
              </blockquote>
              <p className="text-muted-foreground">
                - Rajpipla Palace Heritage Guide
              </p>
            </CardContent>
          </Card>

          {/* Error Details for Development */}
          {process.env.NODE_ENV === 'development' && (
            <Card className="mt-8 bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-800">Development Info</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700 text-sm">
                  Attempted route: <code className="bg-red-100 px-2 py-1 rounded">{location.pathname}</code>
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
