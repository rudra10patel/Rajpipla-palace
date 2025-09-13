import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Car, 
  Utensils, 
  Bed, 
  Ticket,
  Star,
  Phone,
  Mail,
  Globe,
  CreditCard,
  Camera,
  Shield
} from "lucide-react";

const visitInfo = {
  hours: {
    summer: "9:00 AM - 6:00 PM (April - September)",
    winter: "9:30 AM - 5:30 PM (October - March)",
    closed: "Mondays (except holidays)"
  },
  tickets: {
    adult: "₹500",
    student: "₹250",
    foreign: "₹1000",
    group: "₹400 per person (10+ people)"
  }
};

const nearbyHotels = [
  {
    name: "Heritage Palace Resort",
    category: "Luxury",
    rating: 4.8,
    price: "₹8,500/night",
    distance: "0.2 km",
    amenities: ["Pool", "Spa", "Restaurant", "WiFi"],
    contact: "+91 98765 43210"
  },
  {
    name: "Royal Garden Hotel",
    category: "Premium",
    rating: 4.6,
    price: "₹5,200/night",
    distance: "0.8 km",
    amenities: ["Garden View", "Restaurant", "WiFi", "Parking"],
    contact: "+91 98765 43211"
  },
  {
    name: "Rajpipla Guest House",
    category: "Budget",
    rating: 4.2,
    price: "₹2,100/night",
    distance: "1.2 km",
    amenities: ["Clean Rooms", "WiFi", "Local Cuisine"],
    contact: "+91 98765 43212"
  }
];

const guidedTours = [
  {
    name: "Complete Palace Tour",
    duration: "3 hours",
    price: "₹1,500",
    includes: ["All Rooms", "Gardens", "Museum", "Tea/Coffee"],
    languages: ["English", "Hindi", "Gujarati"],
    maxGroup: 15,
    timing: ["10:00 AM", "2:00 PM"]
  },
  {
    name: "Heritage Photography Tour",
    duration: "4 hours",
    price: "₹2,500",
    includes: ["Photography Guide", "Best Spots", "Historical Context", "Digital Album"],
    languages: ["English", "Hindi"],
    maxGroup: 8,
    timing: ["8:00 AM", "3:00 PM"]
  },
  {
    name: "Royal Sunset Experience",
    duration: "2 hours",
    price: "₹1,800",
    includes: ["Sunset Views", "Royal Tea", "Cultural Performance"],
    languages: ["English", "Hindi", "Gujarati"],
    maxGroup: 20,
    timing: ["4:30 PM"]
  }
];

const nearbyAttractions = [
  {
    name: "Shoolpaneshwar Wildlife Sanctuary",
    distance: "45 km",
    description: "Rich biodiversity and wildlife spotting opportunities",
    category: "Nature"
  },
  {
    name: "Sardar Sarovar Dam",
    distance: "52 km",
    description: "One of India's largest dams with spectacular views",
    category: "Engineering Marvel"
  },
  {
    name: "Kevadia Colony",
    distance: "48 km",
    description: "Tourist hub near Statue of Unity with multiple attractions",
    category: "Tourism Hub"
  },
  {
    name: "River Narmada Cruise",
    distance: "15 km",
    description: "Scenic boat rides on the holy Narmada river",
    category: "Recreation"
  }
];

const Visit = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTour, setSelectedTour] = useState("");

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-heritage-royal mb-6">
            Plan Your Visit
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Everything you need to know for an unforgettable visit to Rajpipla Palace. 
            From tickets and tours to accommodation and nearby attractions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heritage" size="xl" className="group">
              <Ticket className="w-5 h-5" />
              Book Tickets Now
            </Button>
            <Button variant="palace" size="xl">
              <Calendar className="w-5 h-5" />
              Schedule Visit
            </Button>
          </div>
        </div>

        <Tabs defaultValue="tickets" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="tickets">Tickets & Hours</TabsTrigger>
            <TabsTrigger value="tours">Guided Tours</TabsTrigger>
            <TabsTrigger value="hotels">Stay</TabsTrigger>
            <TabsTrigger value="attractions">Nearby</TabsTrigger>
            <TabsTrigger value="planning">Trip Planning</TabsTrigger>
          </TabsList>

          {/* Tickets & Hours */}
          <TabsContent value="tickets" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Ticket Prices */}
              <Card className="bg-card/80 backdrop-blur-sm border-heritage-stone/20">
                <CardHeader>
                  <CardTitle className="text-heritage-royal flex items-center gap-2">
                    <Ticket className="w-5 h-5" />
                    Ticket Prices
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-heritage-cream/50 rounded-lg">
                    <div>
                      <span className="font-medium">Indian Adult</span>
                      <p className="text-sm text-muted-foreground">Age 18+</p>
                    </div>
                    <span className="font-bold text-heritage-royal">{visitInfo.tickets.adult}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-heritage-cream/50 rounded-lg">
                    <div>
                      <span className="font-medium">Student (with ID)</span>
                      <p className="text-sm text-muted-foreground">Valid student ID required</p>
                    </div>
                    <span className="font-bold text-heritage-royal">{visitInfo.tickets.student}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-heritage-cream/50 rounded-lg">
                    <div>
                      <span className="font-medium">Foreign Visitor</span>
                      <p className="text-sm text-muted-foreground">Non-Indian nationals</p>
                    </div>
                    <span className="font-bold text-heritage-royal">{visitInfo.tickets.foreign}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-heritage-cream/50 rounded-lg">
                    <div>
                      <span className="font-medium">Group Booking</span>
                      <p className="text-sm text-muted-foreground">10+ people</p>
                    </div>
                    <span className="font-bold text-heritage-royal">{visitInfo.tickets.group}</span>
                  </div>
                  
                  <Button variant="heritage" className="w-full">
                    <CreditCard className="w-4 h-4" />
                    Book Online & Save 10%
                  </Button>
                </CardContent>
              </Card>

              {/* Visiting Hours */}
              <Card className="bg-card/80 backdrop-blur-sm border-heritage-stone/20">
                <CardHeader>
                  <CardTitle className="text-heritage-royal flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Visiting Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Summer Schedule</h4>
                    <p className="text-green-700">{visitInfo.hours.summer}</p>
                  </div>
                  
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Winter Schedule</h4>
                    <p className="text-blue-700">{visitInfo.hours.winter}</p>
                  </div>
                  
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Closed</h4>
                    <p className="text-red-700">{visitInfo.hours.closed}</p>
                  </div>
                  
                  <div className="p-4 bg-heritage-royal/10 border border-heritage-royal/20 rounded-lg">
                    <h4 className="font-semibold text-heritage-royal mb-2">Special Guidelines</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Last entry 1 hour before closing</li>
                      <li>• Photography permitted (₹200 camera fee)</li>
                      <li>• Guided tours available in 5 languages</li>
                      <li>• Wheelchair accessible areas marked</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Booking */}
            <Card className="bg-heritage-royal/5 border border-heritage-royal/10">
              <CardHeader>
                <CardTitle className="text-heritage-royal text-center">Quick Booking</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="text-sm font-medium text-heritage-royal mb-2 block">Visit Date</label>
                    <input 
                      type="date" 
                      className="w-full p-2 border border-heritage-stone/20 rounded-lg"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-heritage-royal mb-2 block">Visitors</label>
                    <select className="w-full p-2 border border-heritage-stone/20 rounded-lg">
                      <option>1 Adult</option>
                      <option>2 Adults</option>
                      <option>Family (2+2)</option>
                      <option>Group (5+)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-heritage-royal mb-2 block">Time Slot</label>
                    <select className="w-full p-2 border border-heritage-stone/20 rounded-lg">
                      <option>Morning (9:00-12:00)</option>
                      <option>Afternoon (12:00-15:00)</option>
                      <option>Evening (15:00-18:00)</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <Button variant="heritage" className="w-full">
                      Book Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Guided Tours */}
          <TabsContent value="tours" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-heritage-royal mb-4">Expert-Led Guided Tours</h2>
              <p className="text-muted-foreground">Enhance your visit with our knowledgeable guides who bring history to life</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {guidedTours.map((tour, index) => (
                <Card key={index} className="group hover:shadow-heritage transition-royal bg-card/80 backdrop-blur-sm border-heritage-stone/20">
                  <CardHeader>
                    <CardTitle className="text-heritage-royal">{tour.name}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {tour.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        Max {tour.maxGroup}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <span className="text-2xl font-bold text-heritage-royal">{tour.price}</span>
                      <span className="text-muted-foreground"> per person</span>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-heritage-royal mb-2">Includes:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {tour.includes.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-heritage-royal mb-2">Languages:</h4>
                      <div className="flex flex-wrap gap-2">
                        {tour.languages.map((lang, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-heritage-royal mb-2">Available Times:</h4>
                      <div className="flex flex-wrap gap-2">
                        {tour.timing.map((time, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {time}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button variant="heritage" className="w-full">
                      Book This Tour
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Hotels */}
          <TabsContent value="hotels" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-heritage-royal mb-4">Where to Stay</h2>
              <p className="text-muted-foreground">Comfortable accommodations near Rajpipla Palace for every budget</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {nearbyHotels.map((hotel, index) => (
                <Card key={index} className="group hover:shadow-heritage transition-royal bg-card/80 backdrop-blur-sm border-heritage-stone/20">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-heritage-royal">{hotel.name}</CardTitle>
                      <Badge variant="outline">{hotel.category}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        {hotel.rating}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {hotel.distance}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <span className="text-2xl font-bold text-heritage-royal">{hotel.price}</span>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-heritage-royal mb-2">Amenities:</h4>
                      <div className="flex flex-wrap gap-2">
                        {hotel.amenities.map((amenity, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      {hotel.contact}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="heritage" size="sm" className="flex-1">
                        Book Room
                      </Button>
                      <Button variant="palace" size="sm">
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Nearby Attractions */}
          <TabsContent value="attractions" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-heritage-royal mb-4">Explore the Region</h2>
              <p className="text-muted-foreground">Discover other fascinating attractions near Rajpipla Palace</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {nearbyAttractions.map((attraction, index) => (
                <Card key={index} className="group hover:shadow-heritage transition-royal bg-card/80 backdrop-blur-sm border-heritage-stone/20">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-heritage-royal">{attraction.name}</CardTitle>
                      <Badge variant="outline">{attraction.category}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {attraction.distance} from palace
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {attraction.description}
                    </CardDescription>
                    
                    <div className="flex gap-2">
                      <Button variant="heritage" size="sm">
                        <MapPin className="w-4 h-4" />
                        Get Directions
                      </Button>
                      <Button variant="palace" size="sm">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Trip Planning */}
          <TabsContent value="planning" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-heritage-royal mb-4">Plan Your Perfect Visit</h2>
              <p className="text-muted-foreground">Essential information and tips for an unforgettable experience</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-card/80 backdrop-blur-sm border-heritage-stone/20">
                <CardHeader>
                  <CardTitle className="text-heritage-royal flex items-center gap-2">
                    <Car className="w-5 h-5" />
                    Getting There
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">By Air</h4>
                    <p className="text-sm text-muted-foreground">Vadodara Airport (85 km) - Regular flights from major cities</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">By Train</h4>
                    <p className="text-sm text-muted-foreground">Rajpipla Railway Station (8 km) - Connected to major routes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">By Road</h4>
                    <p className="text-sm text-muted-foreground">Well-connected via NH53. Taxi and bus services available</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-heritage-stone/20">
                <CardHeader>
                  <CardTitle className="text-heritage-royal flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Important Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Camera className="w-4 h-4 mt-1 text-heritage-terracotta flex-shrink-0" />
                    <p className="text-sm">Photography allowed with camera fee (₹200)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="w-4 h-4 mt-1 text-heritage-terracotta flex-shrink-0" />
                    <p className="text-sm">Group discounts available for 10+ visitors</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="w-4 h-4 mt-1 text-heritage-terracotta flex-shrink-0" />
                    <p className="text-sm">Security check required at entrance</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 mt-1 text-heritage-terracotta flex-shrink-0" />
                    <p className="text-sm">Allow 2-3 hours for complete visit</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-heritage-stone/20">
                <CardHeader>
                  <CardTitle className="text-heritage-royal">Best Time to Visit</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Winter (Oct-Mar)</h4>
                    <p className="text-sm text-blue-700">Perfect weather, ideal for photography and outdoor exploration</p>
                  </div>
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="font-semibold text-yellow-800">Summer (Apr-Jun)</h4>
                    <p className="text-sm text-yellow-700">Early morning visits recommended, extended hours available</p>
                  </div>
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-semibold text-green-800">Monsoon (Jul-Sep)</h4>
                    <p className="text-sm text-green-700">Lush gardens, fewer crowds, special monsoon photography tours</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-heritage-stone/20">
                <CardHeader>
                  <CardTitle className="text-heritage-royal flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-heritage-terracotta" />
                    <span className="text-sm">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-heritage-terracotta" />
                    <span className="text-sm">visit@rajpipla-heritage.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-heritage-terracotta" />
                    <span className="text-sm">www.rajpipla-heritage.com</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-1 text-heritage-terracotta flex-shrink-0" />
                    <span className="text-sm">Rajpipla Palace, Rajpipla, Gujarat 393145</span>
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

export default Visit;