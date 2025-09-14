import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { 
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
  MapPin,
  ZoomIn,
  ZoomOut,
  RotateCw,
  X
} from "lucide-react";
import { timelineEvents, getTimelineByType, getTimelineStats, type TimelineEvent } from "@/data/timelineData";



const DigitalArchive = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [rotation, setRotation] = useState(0);

  const vijayPalacePhotos = [
    "/vijay-palace-photos/front-side-of-rajvant.jpg",
    "/vijay-palace-photos/rajvant-palace-resort.jpg",
    "/vijay-palace-photos/MVIMG_20190211_095324.jpg",
    "/vijay-palace-photos/8289359377_b03475af81_b.jpg",
    "/vijay-palace-photos/10_960.jpg",
    "/vijay-palace-photos/09_960.jpg"
  ];

  // Display all timeline events without filtering

  // Memoized timeline stats
  const timelineStats = useMemo(() => getTimelineStats(), []);


  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
  };

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex(prev => prev === 0 ? vijayPalacePhotos.length - 1 : prev - 1);
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev => prev === vijayPalacePhotos.length - 1 ? 0 : prev + 1);
  };

  const resetViewer = () => {
    setZoomLevel(1);
    setRotation(0);
  };

  const downloadImage = (imageUrl: string, filename: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadAllPhotos = () => {
    vijayPalacePhotos.forEach((photo, index) => {
      setTimeout(() => {
        const filename = `vijay-palace-${index + 1}.jpg`;
        downloadImage(photo, filename);
      }, index * 500); // Stagger downloads by 500ms
    });
  };

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


        <Tabs defaultValue="timeline" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="timeline">Heritage Timeline</TabsTrigger>
            <TabsTrigger value="artifacts">Digital Artifacts</TabsTrigger>
          </TabsList>

          {/* Timeline Tab */}
          <TabsContent value="timeline" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-heritage-royal mb-4">Rajvant Palace Heritage Timeline</h2>
              <p className="text-muted-foreground">Journey through the major milestones in Rajvant Palace's rich history and cultural significance</p>
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
                          {event.significance && (
                            <Badge 
                              variant="outline" 
                              className={`${
                                event.significance === 'high' 
                                  ? 'bg-red-100 text-red-800 border-red-200' 
                                  : event.significance === 'medium'
                                  ? 'bg-yellow-100 text-yellow-800 border-yellow-200'
                                  : 'bg-gray-100 text-gray-800 border-gray-200'
                              }`}
                            >
                              {event.significance}
                            </Badge>
                          )}
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
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-heritage-royal mb-4">Vijay Palace Heritage Collection</h2>
              <p className="text-muted-foreground">Explore the magnificent Vijay Palace through our curated digital collection</p>
            </div>

            {/* Single Large Card */}
            <div className="max-w-5xl mx-auto">
              <Card className="group hover:shadow-heritage transition-royal bg-card/80 backdrop-blur-sm border-heritage-stone/20 overflow-hidden">
                <div className="relative">
                  <div 
                    className="aspect-[16/10] bg-heritage-stone/20 bg-cover bg-center"
                    style={{ backgroundImage: `url(${vijayPalacePhotos[0]})` }}
                  >
                    <div className="absolute inset-0 bg-heritage-royal/20 group-hover:bg-heritage-royal/40 transition-royal flex items-center justify-center">
                      <Dialog open={isViewerOpen} onOpenChange={setIsViewerOpen}>
                        <DialogTrigger asChild>
                          <Button variant="heritage" size="icon" className="opacity-0 group-hover:opacity-100 transition-all">
                            <Eye className="w-6 h-6" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-6xl max-h-[90vh] p-0">
                          <DialogHeader className="p-6 pb-0">
                            <DialogTitle className="text-heritage-royal">Vijay Palace Photo Gallery</DialogTitle>
                          </DialogHeader>
                          <div className="relative p-6">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm" onClick={handlePreviousImage}>
                                  ← Previous
                                </Button>
                                <span className="text-sm text-muted-foreground">
                                  {currentImageIndex + 1} of {vijayPalacePhotos.length}
                                </span>
                                <Button variant="outline" size="sm" onClick={handleNextImage}>
                                  Next →
                                </Button>
                              </div>
                              <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm" onClick={handleZoomOut}>
                                  <ZoomOut className="w-4 h-4" />
                                </Button>
                                <span className="text-sm text-muted-foreground">{Math.round(zoomLevel * 100)}%</span>
                                <Button variant="outline" size="sm" onClick={handleZoomIn}>
                                  <ZoomIn className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="sm" onClick={handleRotate}>
                                  <RotateCw className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="sm" onClick={resetViewer}>
                                  Reset
                                </Button>
                                <Button 
                                  variant="heritage" 
                                  size="sm" 
                                  onClick={() => downloadImage(vijayPalacePhotos[currentImageIndex], `vijay-palace-${currentImageIndex + 1}.jpg`)}
                                >
                                  <Download className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                            <div className="flex justify-center items-center bg-gray-100 rounded-lg overflow-hidden" style={{ height: '60vh' }}>
                              <img
                                src={vijayPalacePhotos[currentImageIndex]}
                                alt={`Vijay Palace ${currentImageIndex + 1}`}
                                className="max-w-full max-h-full object-contain transition-transform duration-200"
                                style={{
                                  transform: `scale(${zoomLevel}) rotate(${rotation}deg)`,
                                  cursor: zoomLevel > 1 ? 'grab' : 'default'
                                }}
                                draggable={false}
                              />
                            </div>
                            <div className="flex justify-center mt-4 gap-2">
                              {vijayPalacePhotos.map((photo, index) => (
                                <div key={index} className="relative group">
                                  <button
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`w-16 h-12 rounded border-2 overflow-hidden ${
                                      index === currentImageIndex 
                                        ? 'border-heritage-royal' 
                                        : 'border-gray-300 hover:border-heritage-royal/50'
                                    }`}
                                  >
                                    <img
                                      src={photo}
                                      alt={`Thumbnail ${index + 1}`}
                                      className="w-full h-full object-cover"
                                    />
                                  </button>
                                  <Button
                                    variant="heritage"
                                    size="sm"
                                    className="absolute -top-2 -right-2 w-6 h-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      downloadImage(photo, `vijay-palace-${index + 1}.jpg`);
                                    }}
                                  >
                                    <Download className="w-3 h-3" />
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-heritage-cream/90 text-heritage-royal text-sm px-3 py-1">
                      Available
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <CardTitle className="text-2xl text-heritage-royal">Vijay Palace Heritage Collection</CardTitle>
                    <Badge variant="outline" className="bg-orange-500 text-white border-orange-500">
                      Photography
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>1820-2024</span>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-heritage-royal">Vijay Palace Heritage Collection</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-heritage-royal">Language:</span> English, Hindi, Gujarati
                      </div>
                      <div>
                        <span className="font-medium text-heritage-royal">Category:</span> Heritage Photography
                      </div>
                      <div>
                        <span className="font-medium text-heritage-royal">Condition:</span> <span className="font-bold">Excellent</span>
                      </div>
                      <div>
                        <span className="font-medium text-heritage-royal">Material:</span> Digital, High-Resolution
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <CardDescription className="text-base mb-6">
                    A comprehensive digital collection showcasing the architectural grandeur and cultural significance of Vijay Palace. 
                    This collection includes rare photographs, architectural documentation, and historical records spanning over 200 years 
                    of the palace's rich heritage in Rajpipla. Explore the magnificent architecture, royal chambers, and cultural artifacts 
                    that tell the story of this historic landmark.
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="outline" className="text-xs">Heritage</Badge>
                    <Badge variant="outline" className="text-xs">Architecture</Badge>
                    <Badge variant="outline" className="text-xs">Gohil Dynasty</Badge>
                    <Badge variant="outline" className="text-xs">Rajpipla</Badge>
                    <Badge variant="outline" className="text-xs">Royal Palace</Badge>
                    <Badge variant="outline" className="text-xs">Cultural Heritage</Badge>
                  </div>
                  
                  <div className="flex gap-3">
                    <Dialog open={isViewerOpen} onOpenChange={setIsViewerOpen}>
                      <DialogTrigger asChild>
                        <Button variant="heritage" size="lg" className="flex-1">
                          <Eye className="w-5 h-5 mr-2" />
                          View Collection
                        </Button>
                      </DialogTrigger>
                    </Dialog>
                    <Button 
                      variant="palace" 
                      size="lg" 
                      onClick={downloadAllPhotos}
                      className="flex-1"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download All
                    </Button>
                  </div>
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