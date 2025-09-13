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
    year: "1820s",
    title: "Foundation of Vijay Palace",
    description: "Initial construction of Vijay Palace begins under the Gohil dynasty. Strategic location chosen in Rajpipla for administrative and residential purposes with Indo-Islamic architectural style.",
    type: "Foundation",
    artifacts: ["Foundation Stones", "Initial Blueprints", "Royal Charter", "Construction Records"]
  },
  {
    year: "1850s",
    title: "Palace Expansion Era",
    description: "Major expansion of the palace complex with additional wings, courtyards, royal gardens, and pavilions. Establishment of royal treasury and administrative offices.",
    type: "Architecture",
    artifacts: ["Expansion Plans", "Garden Designs", "Treasury Records", "Administrative Documents"]
  },
  {
    year: "1870s",
    title: "Golden Era Begins",
    description: "Major architectural enhancements with European influences. Construction of the Durbar Hall for royal audiences and installation of modern amenities.",
    type: "Architecture",
    artifacts: ["Durbar Hall Plans", "European Artifacts", "Modern Fixtures", "Royal Portraits"]
  },
  {
    year: "1890s",
    title: "Cultural Center Establishment",
    description: "Palace becomes the center of cultural and political activities. Royal library established with rare manuscripts and heritage artifacts curated.",
    type: "Cultural",
    artifacts: ["Library Catalog", "Manuscript Collection", "Cultural Records", "Art Collections"]
  },
  {
    year: "1900s",
    title: "Modernization Period",
    description: "Introduction of electricity and modern conveniences. Renovation of royal chambers and public spaces. Establishment of the palace museum.",
    type: "Modernization",
    artifacts: ["Electrical Plans", "Modern Amenities", "Museum Catalog", "Renovation Records"]
  },
  {
    year: "1920s",
    title: "Political Transition",
    description: "Political changes during British colonial period. Palace adapts to new administrative roles while maintaining cultural preservation efforts.",
    type: "Political",
    artifacts: ["Political Documents", "Administrative Records", "Cultural Preservation Plans", "Colonial Correspondence"]
  },
  {
    year: "1947",
    title: "Independence Era",
    description: "Post-independence era brings administrative changes. Palace continues as cultural and heritage center with first public access granted to certain areas.",
    type: "Political",
    artifacts: ["Independence Documents", "Public Access Records", "Heritage Recognition", "Cultural Programs"]
  },
  {
    year: "1960s",
    title: "Heritage Conservation",
    description: "Heritage conservation initiatives begin. Palace recognized as important cultural monument with tourism and educational programs introduced.",
    type: "Heritage",
    artifacts: ["Conservation Plans", "Heritage Documentation", "Tourism Records", "Educational Materials"]
  },
  {
    year: "1980s",
    title: "Official Heritage Recognition",
    description: "Official heritage site designation with major restoration and conservation projects. Digital documentation of palace artifacts begins.",
    type: "Heritage",
    artifacts: ["Heritage Certificates", "Restoration Records", "Digital Archives", "Conservation Reports"]
  },
  {
    year: "2000s",
    title: "UNESCO Consideration",
    description: "UNESCO heritage consideration with modern visitor facilities added. Cultural festivals and events established for public engagement.",
    type: "Recognition",
    artifacts: ["UNESCO Documents", "Visitor Facilities", "Festival Records", "Public Engagement Programs"]
  },
  {
    year: "2010s",
    title: "Digital Heritage Era",
    description: "Digital archive project initiated with virtual tour development begins. Online heritage documentation and global accessibility.",
    type: "Digital",
    artifacts: ["Digital Archives", "Virtual Tour Development", "Online Documentation", "Global Access Records"]
  },
  {
    year: "2020s",
    title: "AI & Virtual Reality",
    description: "360° virtual tour implementation with AI-guided heritage experiences. Global accessibility through digital platforms and next-generation heritage technology.",
    type: "Technology",
    artifacts: ["VR Implementation", "AI Development", "Global Platform Records", "Technology Integration"]
  }
];

const digitalArtifacts = [
  {
    id: 1,
    title: "Vijay Palace Architectural Evolution",
    type: "Document",
    year: "1820-2024",
    description: "Complete collection of architectural plans, blueprints, and renovation records showing the evolution of Vijay Palace from foundation to modern conservation.",
    count: 156,
    category: "Architecture",
    thumbnail: "/api/placeholder/300/200"
  },
  {
    id: 2,
    title: "Gohil Dynasty Royal Portraits",
    type: "Photography",
    year: "1850-1947",
    description: "Extensive collection of royal family portraits, ceremonial photographs, and daily life documentation of the Gohil dynasty rulers.",
    count: 234,
    category: "Photos",
    thumbnail: "/api/placeholder/300/200"
  },
  {
    id: 3,
    title: "Heritage Museum Artifacts",
    type: "Art",
    year: "1820-1900",
    description: "Digital documentation of royal artifacts, ceremonial objects, jewelry, and decorative arts preserved in the palace museum.",
    count: 189,
    category: "Art",
    thumbnail: "/api/placeholder/300/200"
  },
  {
    id: 4,
    title: "Cultural Festival Documentation",
    type: "Photography",
    year: "1890-2024",
    description: "Comprehensive records of traditional festivals, cultural celebrations, and heritage events held at Vijay Palace.",
    count: 127,
    category: "Ceremonies",
    thumbnail: "/api/placeholder/300/200"
  },
  {
    id: 5,
    title: "Royal Library Manuscripts",
    type: "Manuscript",
    year: "1820-1947",
    description: "Rare manuscripts, royal documents, administrative records, and historical correspondence from the palace library.",
    count: 98,
    category: "Documents",
    thumbnail: "/api/placeholder/300/200"
  },
  {
    id: 6,
    title: "Palace Garden Heritage",
    type: "Photography",
    year: "1850-2024",
    description: "Documentation of palace gardens, landscaping evolution, and outdoor architectural features through different eras.",
    count: 145,
    category: "Photos",
    thumbnail: "/api/placeholder/300/200"
  },
  {
    id: 7,
    title: "Conservation & Restoration Records",
    type: "Document",
    year: "1980-2024",
    description: "Detailed records of heritage conservation efforts, restoration projects, and preservation initiatives at Vijay Palace.",
    count: 78,
    category: "Documents",
    thumbnail: "/api/placeholder/300/200"
  },
  {
    id: 8,
    title: "Digital Heritage Collection",
    type: "Digital",
    year: "2010-2024",
    description: "Modern digital documentation including 360° photography, virtual tour development, and AI-guided heritage experiences.",
    count: 267,
    category: "Digital",
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
            Vijay Palace Digital Archive
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore 200+ years of Vijay Palace's rich history and cultural significance through our comprehensive digital archive. 
            Discover architectural evolution, royal heritage, and cultural preservation efforts.
          </p>
        </div>

        {/* Archive Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-heritage-royal mb-2">1,294</div>
            <div className="text-muted-foreground">Digital Items</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-heritage-gold mb-2">200+</div>
            <div className="text-muted-foreground">Years Covered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-heritage-terracotta mb-2">8</div>
            <div className="text-muted-foreground">Collections</div>
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
              <h2 className="text-3xl font-bold text-heritage-royal mb-4">200+ Years of Vijay Palace Heritage</h2>
              <p className="text-muted-foreground">Journey through the major milestones in Vijay Palace's rich history and cultural significance</p>
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
              
              <div className="flex flex-wrap gap-2">
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
                <Button 
                  variant={selectedCategory === "architecture" ? "heritage" : "palace"} 
                  size="sm"
                  onClick={() => setSelectedCategory("architecture")}
                >
                  Architecture
                </Button>
                <Button 
                  variant={selectedCategory === "ceremonies" ? "heritage" : "palace"} 
                  size="sm"
                  onClick={() => setSelectedCategory("ceremonies")}
                >
                  Ceremonies
                </Button>
                <Button 
                  variant={selectedCategory === "digital" ? "heritage" : "palace"} 
                  size="sm"
                  onClick={() => setSelectedCategory("digital")}
                >
                  Digital
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