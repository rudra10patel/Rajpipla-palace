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
  entry: {
    adult: "₹100",
    student: "₹50",
    child: "₹25 (under 12)",
    senior: "₹50 (60+ years)"
  }
};

const nearbyHotels = [
  {
    name: "Hotel Rajpipla Palace",
    category: "Heritage",
    rating: 4.5,
    price: "₹3,500/night",
    distance: "0.5 km",
    amenities: ["Heritage Rooms", "Restaurant", "WiFi", "Parking"],
    contact: "+91 2642 220001"
  },
  {
    name: "Narmada Hotel",
    category: "Premium",
    rating: 4.3,
    price: "₹2,800/night",
    distance: "1.0 km",
    amenities: ["River View", "Restaurant", "WiFi", "AC Rooms"],
    contact: "+91 2642 220002"
  },
  {
    name: "Rajpipla Guest House",
    category: "Budget",
    rating: 4.0,
    price: "₹1,200/night",
    distance: "1.5 km",
    amenities: ["Clean Rooms", "WiFi", "Local Cuisine", "Parking"],
    contact: "+91 2642 220003"
  }
];

const guidedTours = [
  {
    name: "Vijay Palace Heritage Tour",
    duration: "2 hours",
    price: "₹300",
    includes: ["Palace History", "Architecture", "Museum", "Garden Walk"],
    languages: ["English", "Hindi", "Gujarati"],
    maxGroup: 20,
    timing: ["10:00 AM", "2:00 PM", "4:00 PM"]
  },
  {
    name: "Gohil Dynasty History Tour",
    duration: "1.5 hours",
    price: "₹250",
    includes: ["Royal History", "Family Portraits", "Cultural Context", "Tea Service"],
    languages: ["English", "Hindi", "Gujarati"],
    maxGroup: 15,
    timing: ["11:00 AM", "3:00 PM"]
  },
  {
    name: "Architecture & Art Tour",
    duration: "1 hour",
    price: "₹200",
    includes: ["Indo-Islamic Design", "Art Collections", "Photography Spots"],
    languages: ["English", "Hindi"],
    maxGroup: 12,
    timing: ["9:00 AM", "1:00 PM", "5:00 PM"]
  }
];

const nearbyAttractions = [
  {
    name: "Shoolpaneshwar Wildlife Sanctuary",
    distance: "45 km",
    description: "Rich biodiversity and wildlife spotting opportunities near Rajpipla",
    category: "Nature"
  },
  {
    name: "Sardar Sarovar Dam",
    distance: "52 km",
    description: "One of India's largest dams with spectacular views and visitor center",
    category: "Engineering Marvel"
  },
  {
    name: "Statue of Unity",
    distance: "48 km",
    description: "World's tallest statue of Sardar Vallabhbhai Patel with museum and attractions",
    category: "Monument"
  },
  {
    name: "River Narmada Ghat",
    distance: "8 km",
    description: "Sacred ghats on the holy Narmada river for spiritual experiences",
    category: "Spiritual"
  },
  {
    name: "Rajpipla Fort",
    distance: "2 km",
    description: "Historic fort ruins with panoramic views of the surrounding landscape",
    category: "Heritage"
  },
  {
    name: "Narmada River Cruise",
    distance: "15 km",
    description: "Scenic boat rides on the holy Narmada river with nature views",
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
            Everything you need to know for an unforgettable visit to Vijay Palace in Rajpipla. 
            From visiting hours and guided tours to accommodation and nearby attractions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heritage" size="xl" className="group">
              <Calendar className="w-5 h-5" />
              Plan Your Visit
            </Button>
            <Button variant="palace" size="xl">
              <MapPin className="w-5 h-5" />
              Get Directions
            </Button>
          </div>
        </div>

        <Tabs defaultValue="hours" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="hours">Hours & Entry</TabsTrigger>
            <TabsTrigger value="tours">Guided Tours</TabsTrigger>
            <TabsTrigger value="hotels">Stay</TabsTrigger>
            <TabsTrigger value="attractions">Nearby</TabsTrigger>
            <TabsTrigger value="planning">Trip Planning</TabsTrigger>
          </TabsList>

          {/* Hours & Entry */}
          <TabsContent value="hours" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Entry Fees */}
              <Card className="bg-card/80 backdrop-blur-sm border-heritage-stone/20">
                <CardHeader>
                  <CardTitle className="text-heritage-royal flex items-center gap-2">
                    <Ticket className="w-5 h-5" />
                    Entry Fees
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-heritage-cream/50 rounded-lg">
                    <div>
                      <span className="font-medium">Adult</span>
                      <p className="text-sm text-muted-foreground">Age 18+</p>
                    </div>
                    <span className="font-bold text-heritage-royal">{visitInfo.entry.adult}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-heritage-cream/50 rounded-lg">
                    <div>
                      <span className="font-medium">Student (with ID)</span>
                      <p className="text-sm text-muted-foreground">Valid student ID required</p>
                    </div>
                    <span className="font-bold text-heritage-royal">{visitInfo.entry.student}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-heritage-cream/50 rounded-lg">
                    <div>
                      <span className="font-medium">Child</span>
                      <p className="text-sm text-muted-foreground">Under 12 years</p>
                    </div>
                    <span className="font-bold text-heritage-royal">{visitInfo.entry.child}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-heritage-cream/50 rounded-lg">
                    <div>
                      <span className="font-medium">Senior Citizen</span>
                      <p className="text-sm text-muted-foreground">60+ years</p>
                    </div>
                    <span className="font-bold text-heritage-royal">{visitInfo.entry.senior}</span>
                  </div>
                  
                  <div className="p-4 bg-heritage-royal/10 border border-heritage-royal/20 rounded-lg">
                    <h4 className="font-semibold text-heritage-royal mb-2">Entry Information</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Entry fees payable at palace entrance</li>
                      <li>• Photography allowed (no additional fee)</li>
                      <li>• Guided tours available at extra cost</li>
                      <li>• Wheelchair accessible areas available</li>
                    </ul>
                  </div>
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
                    <h4 className="font-semibold text-heritage-royal mb-2">Visit Guidelines</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Last entry 1 hour before closing</li>
                      <li>• Photography permitted (no additional fee)</li>
                      <li>• Guided tours available in 3 languages</li>
                      <li>• Wheelchair accessible areas available</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Visit Planning */}
            <Card className="bg-heritage-royal/5 border border-heritage-royal/10">
              <CardHeader>
                <CardTitle className="text-heritage-royal text-center">Plan Your Visit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Calendar className="w-8 h-8 text-heritage-royal mx-auto mb-2" />
                    <h4 className="font-semibold text-heritage-royal mb-1">Choose Your Date</h4>
                    <p className="text-sm text-muted-foreground">Check opening hours and plan your visit accordingly</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 text-heritage-royal mx-auto mb-2" />
                    <h4 className="font-semibold text-heritage-royal mb-1">Group Size</h4>
                    <p className="text-sm text-muted-foreground">Individual or group visits welcome</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-heritage-royal mx-auto mb-2" />
                    <h4 className="font-semibold text-heritage-royal mb-1">Duration</h4>
                    <p className="text-sm text-muted-foreground">Allow 2-3 hours for complete palace tour</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Guided Tours */}
          <TabsContent value="tours" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-heritage-royal mb-4">Vijay Palace Guided Tours</h2>
              <p className="text-muted-foreground">Enhance your visit with our knowledgeable guides who bring Vijay Palace's history to life</p>
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
                      Inquire About Tour
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
              <p className="text-muted-foreground">Comfortable accommodations near Vijay Palace in Rajpipla for every budget</p>
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
                        Contact Hotel
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
              <p className="text-muted-foreground">Discover other fascinating attractions near Vijay Palace in Rajpipla</p>
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
                      {attraction.distance} from Vijay Palace
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
                    <p className="text-sm text-muted-foreground">Well-connected via NH53. Taxi and bus services available from Rajpipla</p>
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
                    <span className="text-sm">+91 2642 220000</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-heritage-terracotta" />
                    <span className="text-sm">info@vijaypalace-rajpipla.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-heritage-terracotta" />
                    <span className="text-sm">www.vijaypalace-rajpipla.com</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-1 text-heritage-terracotta flex-shrink-0" />
                    <span className="text-sm">Vijay Palace, Rajpipla, Narmada District, Gujarat 393145</span>
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