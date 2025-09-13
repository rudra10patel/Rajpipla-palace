import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Heart, Share2, Upload, Users } from "lucide-react";

const communityStories = [
  {
    author: "Priya Sharma",
    role: "Local Historian",
    avatar: "/api/placeholder/40/40",
    story: "My grandmother used to tell me stories about the royal festivals held in these very halls. Being able to share her memories here feels like preserving her legacy.",
    likes: 124,
    comments: 18
  },
  {
    author: "Dr. James Wilson",
    role: "Heritage Researcher",
    avatar: "/api/placeholder/40/40", 
    story: "The architectural details captured in the virtual tour are extraordinary. This platform is revolutionizing how we study and preserve historical sites.",
    likes: 89,
    comments: 12
  },
  {
    author: "Anita Patel",
    role: "Tourist",
    avatar: "/api/placeholder/40/40",
    story: "Visiting virtually before my actual trip helped me appreciate so much more during my physical visit. The virtual tour features were incredible!",
    likes: 156,
    comments: 24
  }
];

export const CommunitySection = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-heritage-royal mb-6">
            Community Heritage Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join thousands of heritage enthusiasts sharing memories, discoveries, and experiences. 
            Your stories help preserve the living history of Rajpipla Palace.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heritage" size="lg" className="group">
              <Upload className="w-5 h-5" />
              Share Your Story
            </Button>
            <Button variant="palace" size="lg">
              <Users className="w-5 h-5" />
              Join Community
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {communityStories.map((story, index) => (
            <Card key={index} className="group hover:shadow-heritage transition-royal bg-card/80 backdrop-blur-sm border-heritage-stone/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <Avatar>
                    <AvatarImage src={story.avatar} alt={story.author} />
                    <AvatarFallback className="bg-heritage-gold text-heritage-cream">
                      {story.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg text-heritage-royal">{story.author}</CardTitle>
                    <CardDescription className="text-heritage-terracotta">{story.role}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{story.story}"
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 hover:text-heritage-terracotta transition-smooth">
                      <Heart className="w-4 h-4" />
                      {story.likes}
                    </button>
                    <button className="flex items-center gap-1 hover:text-heritage-terracotta transition-smooth">
                      <MessageCircle className="w-4 h-4" />
                      {story.comments}
                    </button>
                  </div>
                  <button className="hover:text-heritage-terracotta transition-smooth">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Community Stats */}
        <div className="bg-heritage-royal/5 rounded-2xl p-8 border border-heritage-royal/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-heritage-royal mb-2">2,500+</div>
              <div className="text-muted-foreground">Community Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-heritage-gold mb-2">850+</div>
              <div className="text-muted-foreground">Stories Shared</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-heritage-terracotta mb-2">1,200+</div>
              <div className="text-muted-foreground">Photos Uploaded</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-heritage-royal mb-2">95%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};