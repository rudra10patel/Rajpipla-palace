import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Upload, 
  MessageCircle, 
  Heart, 
  Share2, 
  Search, 
  Filter,
  Camera,
  FileText,
  Award,
  Users,
  TrendingUp,
  MapPin,
  Calendar,
  Star
} from "lucide-react";

const communityStories = [
  {
    id: 1,
    author: "Priya Sharma",
    role: "Local Historian",
    avatar: "/api/placeholder/40/40",
    story: "My grandmother used to tell me stories about the royal festivals held in these very halls. Being able to share her memories here feels like preserving her legacy for future generations. The community response has been overwhelming!",
    images: ["/api/placeholder/300/200", "/api/placeholder/300/200"],
    likes: 124,
    comments: 18,
    shares: 7,
    date: "2 days ago",
    category: "Family Heritage",
    verified: true
  },
  {
    id: 2,
    author: "Dr. James Wilson",
    role: "Heritage Researcher",
    avatar: "/api/placeholder/40/40", 
    story: "The architectural details captured in the virtual tour are extraordinary. This platform is revolutionizing how we study and preserve historical sites. I've been able to identify several previously undocumented architectural elements.",
    images: ["/api/placeholder/300/200"],
    likes: 89,
    comments: 12,
    shares: 15,
    date: "5 days ago",
    category: "Research",
    verified: true
  },
  {
    id: 3,
    author: "Anita Patel",
    role: "Tourist",
    avatar: "/api/placeholder/40/40",
    story: "Visiting virtually before my actual trip helped me appreciate so much more during my physical visit. The AR features were incredible! My children were fascinated by the interactive elements.",
    images: ["/api/placeholder/300/200", "/api/placeholder/300/200", "/api/placeholder/300/200"],
    likes: 156,
    comments: 24,
    shares: 12,
    date: "1 week ago",
    category: "Visitor Experience",
    verified: false
  },
  {
    id: 4,
    author: "Rajesh Kumar",
    role: "Photography Enthusiast",
    avatar: "/api/placeholder/40/40",
    story: "The golden hour lighting in the courtyards is absolutely magical. I've been documenting the palace for months now, and each visit reveals new photographic opportunities. This community helps me connect with fellow photographers.",
    images: ["/api/placeholder/300/200", "/api/placeholder/300/200"],
    likes: 203,
    comments: 31,
    shares: 28,
    date: "3 days ago",
    category: "Photography",
    verified: false
  }
];

const communityFeatures = [
  {
    icon: Upload,
    title: "Share Your Story",
    description: "Upload photos, memories, and experiences from your palace visit",
    count: "850+ stories shared"
  },
  {
    icon: Users,
    title: "Connect with Heritage Lovers",
    description: "Join discussions with fellow history enthusiasts and researchers",
    count: "2,500+ members"
  },
  {
    icon: Award,
    title: "Earn Heritage Badges",
    description: "Complete challenges and earn recognition for your contributions",
    count: "25+ badges available"
  },
  {
    icon: TrendingUp,
    title: "Trending Discoveries",
    description: "Stay updated with the latest heritage discoveries and discussions",
    count: "50+ weekly updates"
  }
];

const heritageEvents = [
  {
    title: "Royal Photography Contest",
    date: "Dec 15, 2024",
    location: "Palace Grounds",
    participants: 156,
    prize: "₹50,000",
    category: "Photography"
  },
  {
    title: "Heritage Storytelling Workshop",
    date: "Jan 8, 2025",
    location: "Virtual + On-site",
    participants: 89,
    prize: "Certificates",
    category: "Education"
  },
  {
    title: "Annual Heritage Festival",
    date: "Feb 20, 2025",
    location: "Rajpipla Palace",
    participants: 500,
    prize: "Cultural Programs",
    category: "Festival"
  }
];

const Community = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const filteredStories = selectedCategory === "all" 
    ? communityStories 
    : communityStories.filter(story => story.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-heritage-royal mb-6">
            Heritage Community
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join thousands of heritage enthusiasts sharing memories, discoveries, and experiences. 
            Your stories help preserve the living history of Rajpipla Palace.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heritage" size="xl" className="group">
              <Upload className="w-5 h-5" />
              Share Your Story
            </Button>
            <Button variant="palace" size="xl">
              <Users className="w-5 h-5" />
              Join Community
            </Button>
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-heritage-royal mb-2">2,500+</div>
            <div className="text-muted-foreground">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-heritage-gold mb-2">850+</div>
            <div className="text-muted-foreground">Stories Shared</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-heritage-terracotta mb-2">1,200+</div>
            <div className="text-muted-foreground">Photos Uploaded</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-heritage-royal mb-2">95%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>

        <Tabs defaultValue="stories" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="stories">Community Stories</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="upload">Share Content</TabsTrigger>
          </TabsList>

          {/* Stories Tab */}
          <TabsContent value="stories" className="space-y-8">
            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex gap-2">
                <Button 
                  variant={selectedCategory === "all" ? "heritage" : "palace"} 
                  size="sm"
                  onClick={() => setSelectedCategory("all")}
                >
                  All Stories
                </Button>
                <Button 
                  variant={selectedCategory === "family" ? "heritage" : "palace"} 
                  size="sm"
                  onClick={() => setSelectedCategory("family")}
                >
                  Family Heritage
                </Button>
                <Button 
                  variant={selectedCategory === "research" ? "heritage" : "palace"} 
                  size="sm"
                  onClick={() => setSelectedCategory("research")}
                >
                  Research
                </Button>
                <Button 
                  variant={selectedCategory === "photography" ? "heritage" : "palace"} 
                  size="sm"
                  onClick={() => setSelectedCategory("photography")}
                >
                  Photography
                </Button>
              </div>
              
              <div className="flex gap-2">
                <Button variant="palace" size="sm">
                  <Search className="w-4 h-4" />
                  Search
                </Button>
                <Button variant="palace" size="sm">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
              </div>
            </div>

            {/* Stories Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredStories.map((story) => (
                <Card key={story.id} className="group hover:shadow-heritage transition-royal bg-card/80 backdrop-blur-sm border-heritage-stone/20">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar>
                        <AvatarImage src={story.avatar} alt={story.author} />
                        <AvatarFallback className="bg-heritage-gold text-heritage-cream">
                          {story.author.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-lg text-heritage-royal">{story.author}</CardTitle>
                          {story.verified && (
                            <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="text-heritage-terracotta">{story.role}</CardDescription>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {story.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      "{story.story}"
                    </p>
                    
                    {/* Story Images */}
                    {story.images && story.images.length > 0 && (
                      <div className={`grid ${story.images.length === 1 ? 'grid-cols-1' : story.images.length === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-2`}>
                        {story.images.map((image, index) => (
                          <div 
                            key={index}
                            className="aspect-square bg-heritage-stone/20 rounded-lg bg-cover bg-center cursor-pointer hover:opacity-80 transition-opacity"
                            style={{ backgroundImage: `url(${image})` }}
                          />
                        ))}
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t border-heritage-stone/20">
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1 hover:text-heritage-terracotta transition-smooth">
                          <Heart className="w-4 h-4" />
                          {story.likes}
                        </button>
                        <button className="flex items-center gap-1 hover:text-heritage-terracotta transition-smooth">
                          <MessageCircle className="w-4 h-4" />
                          {story.comments}
                        </button>
                        <button className="flex items-center gap-1 hover:text-heritage-terracotta transition-smooth">
                          <Share2 className="w-4 h-4" />
                          {story.shares}
                        </button>
                      </div>
                      <span className="text-xs">{story.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Features Tab */}
          <TabsContent value="features" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-heritage-royal mb-4">Community Features</h2>
              <p className="text-muted-foreground">Discover all the ways you can engage with our heritage community</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {communityFeatures.map((feature, index) => (
                <Card key={index} className="text-center group hover:shadow-heritage transition-royal bg-card/80 backdrop-blur-sm border-heritage-stone/20">
                  <CardHeader>
                    <div className="w-16 h-16 bg-heritage-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-royal">
                      <feature.icon className="w-8 h-8 text-heritage-gold" />
                    </div>
                    <CardTitle className="text-lg text-heritage-royal">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-3">
                      {feature.description}
                    </CardDescription>
                    <Badge variant="outline" className="text-xs">
                      {feature.count}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-heritage-royal mb-4">Upcoming Heritage Events</h2>
              <p className="text-muted-foreground">Join our community events and celebrate heritage together</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {heritageEvents.map((event, index) => (
                <Card key={index} className="group hover:shadow-heritage transition-royal bg-card/80 backdrop-blur-sm border-heritage-stone/20">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{event.category}</Badge>
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </div>
                    </div>
                    <CardTitle className="text-heritage-royal">{event.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      {event.participants} participants registered
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="w-4 h-4 text-heritage-gold" />
                      <span className="font-semibold text-heritage-royal">{event.prize}</span>
                    </div>
                    
                    <Button variant="heritage" className="w-full">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Upload Tab */}
          <TabsContent value="upload" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-heritage-royal mb-4">Share Your Heritage Story</h2>
              <p className="text-muted-foreground">Help preserve our collective memory by sharing your experiences and discoveries</p>
            </div>

            <Card className="max-w-2xl mx-auto bg-card/80 backdrop-blur-sm border-heritage-stone/20">
              <CardHeader>
                <CardTitle className="text-heritage-royal">Upload Your Content</CardTitle>
                <CardDescription>Share photos, stories, memories, or research findings with the community</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-heritage-royal">Content Type</label>
                  <select className="w-full p-3 border border-heritage-stone/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-heritage-royal/20">
                    <option>Select content type...</option>
                    <option>Photo Story</option>
                    <option>Family Memory</option>
                    <option>Research Finding</option>
                    <option>Visitor Experience</option>
                    <option>Historical Document</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-heritage-royal">Title</label>
                  <input 
                    type="text" 
                    placeholder="Give your story a compelling title..."
                    className="w-full p-3 border border-heritage-stone/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-heritage-royal/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-heritage-royal">Your Story</label>
                  <textarea 
                    rows={6}
                    placeholder="Tell us about your experience, discovery, or memory related to Rajpipla Palace..."
                    className="w-full p-3 border border-heritage-stone/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-heritage-royal/20 resize-none"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-heritage-royal">Upload Images</label>
                  <div className="border-2 border-dashed border-heritage-stone/30 rounded-lg p-8 text-center hover:border-heritage-royal/50 transition-colors cursor-pointer">
                    <Camera className="w-12 h-12 text-heritage-stone mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2">Click to upload images or drag and drop</p>
                    <p className="text-sm text-muted-foreground">PNG, JPG up to 10MB (max 5 images)</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button variant="heritage" className="flex-1">
                    <Upload className="w-4 h-4" />
                    Publish Story
                  </Button>
                  <Button variant="palace">
                    Save Draft
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Community;