import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Calendar, 
  Image, 
  FileText, 
  Download, 
  Eye, 
  Filter,
  Clock,
  User,
  Crown,
  Scroll,
  MapPin
} from "lucide-react";

const timelineEvents = [
  {
    year: "1736",
    title: "Foundation of Rajpipla State",
    description: "Maharaja Wakhat Singh establishes the princely state and begins construction of the palace.",
    type: "Foundation",
    artifacts: ["Royal Charter", "Foundation Stones", "Early Sketches"]
  },
  {
    year: "1768",
    title: "Palace Construction Completed",
    description: "The main palace structure is completed with 45 rooms and beautiful gardens.",
    type: "Architecture",
    artifacts: ["Construction Records", "Architectural Drawings", "Payment Ledgers"]
  },
  {
    year: "1820",
    title: "British Recognition",
    description: "The British recognize Rajpipla as a salute state with 13-gun salute privilege.",
    type: "Political",
    artifacts: ["British Treaties", "Official Letters", "Ceremonial Documents"]
  },
  {
    year: "1885",
    title: "Palace Renovation",
    description: "Major renovations add European architectural elements and modern amenities.",
    type: "Architecture",
    artifacts: ["Renovation Plans", "European Artifacts", "Modern Fixtures"]
  },
  {
    year: "1920",
    title: "Golden Jubilee Celebrations",
    description: "Grand celebrations mark 50 years of progressive rule and cultural patronage.",
    type: "Cultural",
    artifacts: ["Celebration Photos", "Guest Lists", "Commemorative Items"]
  },
  {
    year: "1947",
    title: "Integration with India",
    description: "Rajpipla State merges with the Indian Union, marking the end of princely rule.",
    type: "Political",
    artifacts: ["Merger Documents", "Final Royal Proclamations", "Transition Records"]
  }
];

const digitalArtifacts = [
  {
    id: 1,
    title: "Royal Family Portrait Collection",
    type: "Photography",
    year: "1890-1920",
    description: "Rare photographs of the royal family during various ceremonies and daily life.",
    count: 127,
    category: "Photos",
    thumbnail: "/api/placeholder/300/200"
  },
  {
    id: 2,
    title: "Architectural Blueprints",
    type: "Document",
    year: "1750-1885",
    description: "Original construction and renovation plans showing the evolution of palace design.",
    count: 45,
    category: "Architecture",
    thumbnail: "/api/placeholder/300/200"
  },
  {
    id: 3,
    title: "Royal Correspondence",
    type: "Manuscript",
    year: "1800-1947",
    description: "Letters between maharajas and British officials, revealing political relationships.",
    count: 89,
    category: "Documents",
    thumbnail: "/api/placeholder/300/200"
  },
  {
    id: 4,
    title: "Court Ceremony Records",
    type: "Document",
    year: "1820-1940",
    description: "Detailed records of royal ceremonies, festivals, and state functions.",
    count: 156,
    category: "Ceremonies",
    thumbnail: "/api/placeholder/300/200"
  },
  {
    id: 5,
    title: "Palace Artwork Collection",
    type: "Art",
    year: "1750-1900",
    description: "Digital scans of paintings, sculptures, and decorative arts from the palace.",
    count: 234,
    category: "Art",
    thumbnail: "/api/placeholder/300/200"
  },
  {
    id: 6,
    title: "Traditional Music Recordings",
    type: "Audio",
    year: "1920-1947",
    description: "Rare recordings of court musicians and traditional performances.",
    count: 67,
    category: "Music",
    thumbnail: "/api/placeholder/300/200"
  }
];

const DigitalArchive = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredArtifacts = selectedCategory === "all" 
    ? digitalArtifacts 
    : digitalArtifacts.filter(artifact => artifact.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-heritage-royal mb-6">
            Digital Heritage Archive
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore centuries of preserved history through our comprehensive digital archive. 
            Discover rare photographs, manuscripts, architectural plans, and cultural artifacts.
          </p>
        </div>

        {/* Archive Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-heritage-royal mb-2">2,500+</div>
            <div className="text-muted-foreground">Digital Items</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-heritage-gold mb-2">300</div>
            <div className="text-muted-foreground">Years Covered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-heritage-terracotta mb-2">12</div>
            <div className="text-muted-foreground">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-heritage-royal mb-2">4K</div>
            <div className="text-muted-foreground">Resolution</div>
          </div>
        </div>

        <Tabs defaultValue="timeline" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="timeline">Heritage Timeline</TabsTrigger>
            <TabsTrigger value="artifacts">Digital Artifacts</TabsTrigger>
            <TabsTrigger value="search">Advanced Search</TabsTrigger>
          </TabsList>

          {/* Timeline Tab */}
          <TabsContent value="timeline" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-heritage-royal mb-4">300 Years of Royal History</h2>
              <p className="text-muted-foreground">Journey through the major milestones in Rajpipla Palace's history</p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-heritage-gold transform md:-translate-x-1/2"></div>

              {timelineEvents.map((event, index) => (
                <div key={index} className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-12`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-heritage-gold rounded-full border-4 border-heritage-cream transform md:-translate-x-1/2 z-10"></div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="group hover:shadow-heritage transition-royal bg-card/80 backdrop-blur-sm border-heritage-stone/20">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="secondary" className="bg-heritage-royal text-heritage-cream">
                            {event.year}
                          </Badge>
                          <Badge variant="outline">
                            {event.type}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl text-heritage-royal">{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base mb-4">
                          {event.description}
                        </CardDescription>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-heritage-royal mb-2">Related Artifacts:</h4>
                          <div className="flex flex-wrap gap-2">
                            {event.artifacts.map((artifact, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {artifact}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Artifacts Tab */}
          <TabsContent value="artifacts" className="space-y-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-heritage-royal">Digital Collections</h2>
              
              <div className="flex gap-2">
                <Button 
                  variant={selectedCategory === "all" ? "heritage" : "palace"} 
                  size="sm"
                  onClick={() => setSelectedCategory("all")}
                >
                  All
                </Button>
                <Button 
                  variant={selectedCategory === "photos" ? "heritage" : "palace"} 
                  size="sm"
                  onClick={() => setSelectedCategory("photos")}
                >
                  Photos
                </Button>
                <Button 
                  variant={selectedCategory === "documents" ? "heritage" : "palace"} 
                  size="sm"
                  onClick={() => setSelectedCategory("documents")}
                >
                  Documents
                </Button>
                <Button 
                  variant={selectedCategory === "art" ? "heritage" : "palace"} 
                  size="sm"
                  onClick={() => setSelectedCategory("art")}
                >
                  Art
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArtifacts.map((artifact) => (
                <Card key={artifact.id} className="group hover:shadow-heritage transition-royal bg-card/80 backdrop-blur-sm border-heritage-stone/20 overflow-hidden">
                  <div className="relative">
                    <div 
                      className="aspect-video bg-heritage-stone/20 bg-cover bg-center"
                      style={{ backgroundImage: `url(${artifact.thumbnail})` }}
                    >
                      <div className="absolute inset-0 bg-heritage-royal/20 group-hover:bg-heritage-royal/40 transition-royal flex items-center justify-center">
                        <Button variant="heritage" size="icon" className="opacity-0 group-hover:opacity-100 transition-all">
                          <Eye className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-heritage-cream/90 text-heritage-royal">
                        {artifact.count} items
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{artifact.category}</Badge>
                      <Badge variant="outline">{artifact.year}</Badge>
                    </div>
                    <CardTitle className="text-lg text-heritage-royal">{artifact.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {artifact.description}
                    </CardDescription>
                    
                    <div className="flex gap-2">
                      <Button variant="heritage" size="sm" className="flex-1">
                        <Eye className="w-4 h-4" />
                        View Collection
                      </Button>
                      <Button variant="palace" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Search Tab */}
          <TabsContent value="search" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-heritage-royal mb-4">Advanced Archive Search</h2>
              <p className="text-muted-foreground">Search through our extensive digital collection using advanced filters</p>
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-heritage-stone/20 p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-heritage-royal">Search Term</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <input 
                      type="text" 
                      placeholder="Search artifacts, people, events..."
                      className="w-full pl-10 pr-4 py-2 border border-heritage-stone/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-heritage-royal/20"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-heritage-royal">Date Range</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <select className="w-full pl-10 pr-4 py-2 border border-heritage-stone/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-heritage-royal/20">
                      <option>All Periods</option>
                      <option>1700-1800</option>
                      <option>1800-1900</option>
                      <option>1900-1947</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-heritage-royal">Content Type</label>
                  <div className="relative">
                    <Filter className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <select className="w-full pl-10 pr-4 py-2 border border-heritage-stone/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-heritage-royal/20">
                      <option>All Types</option>
                      <option>Photographs</option>
                      <option>Documents</option>
                      <option>Artwork</option>
                      <option>Audio</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex gap-4">
                <Button variant="heritage" className="flex-1">
                  <Search className="w-4 h-4" />
                  Search Archive
                </Button>
                <Button variant="palace">
                  Clear Filters
                </Button>
              </div>
            </Card>

            {/* Search Results Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card/80 backdrop-blur-sm border-heritage-stone/20">
                <CardHeader>
                  <CardTitle className="text-heritage-royal">Recent Discoveries</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { title: "Royal Wedding Album 1892", type: "Photography", items: 23 },
                    { title: "Palace Construction Diary", type: "Manuscript", items: 1 },
                    { title: "Court Musician Records", type: "Audio", items: 12 }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-heritage-cream/50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-heritage-royal">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.type}</p>
                      </div>
                      <Badge variant="outline">{item.items} items</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-heritage-stone/20">
                <CardHeader>
                  <CardTitle className="text-heritage-royal">Popular Collections</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { title: "Royal Portraits Gallery", views: "45.2K", rating: 4.9 },
                    { title: "Architecture Evolution", views: "32.1K", rating: 4.8 },
                    { title: "Festival Celebrations", views: "28.7K", rating: 4.9 }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-heritage-cream/50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-heritage-royal">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.views} views</p>
                      </div>
                      <Badge variant="outline">★ {item.rating}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DigitalArchive;