import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
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
    name: "Rajvant Palace Resort",
    category: "Heritage Resort",
    rating: 4.6,
    price: "₹3,200/night",
    distance: "0.2 km",
    amenities: ["Heritage Rooms", "Swimming Pool", "Restaurant", "WiFi", "Parking", "Garden View", "AC Rooms", "Room Service", "Conference Hall", "Games Room"],
    contact: "93289 59004",
    address: "Vijay Palace, Palace Road, Rajpipla, Dist. Narmada, Gujarat 393145",
    description: "Experience royal luxury at Rajvant Palace Resort, constructed in 1915 by Maharajah Vijay Singhji. This heritage resort offers 18 well-appointed rooms with original period furniture, blending European architectural elegance with modern amenities. Located within the historic Vijay Palace complex.",
    googleMapsLink: "https://www.google.co.in/maps/place/Rajvant+Palace+Resort/@21.864097,73.5072385,17z/data=!3m1!4b1!4m9!3m8!1s0x396000d5e9f6e6f5:0x762c20e116ffeb27!5m2!4m1!1i2!8m2!3d21.864097!4d73.5098134!16s%2Fg%2F11btstyffc?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D",
    bookingOptions: [
      {
        name: "Direct Booking",
        description: "Call the resort directly for reservations",
        contact: "93289 59004"
      },
      {
        name: "MakeMyTrip",
        description: "Popular travel booking platform",
        link: "https://www.makemytrip.com/hotels/rajvant_palace_resort_rajpipla-details.html"
      },
      {
        name: "Booking.com",
        description: "Global hotel booking platform",
        link: "https://www.booking.com/hotel/in/rajvant-palace-resort.html"
      },
      {
        name: "Goibibo",
        description: "Indian travel booking platform",
        link: "https://www.goibibo.com/hotels/rajvant-palace-resort-rajpipla-htlid-123456/"
      },
      {
        name: "OYO",
        description: "Budget-friendly booking platform",
        link: "https://www.oyorooms.com/hotels-in-rajpipla/rajvant-palace-resort"
      },
      {
        name: "Heritage Hotels of India",
        description: "Official heritage hotel booking platform",
        link: "https://www.heritagehotelsofindia.com/gujarat/rajvant-palace-resort.html"
      },
      {
        name: "TripAdvisor",
        description: "Book with reviews and ratings",
        link: "https://www.tripadvisor.in/Hotel_Review-g1156006-d1806554-Reviews-Rajvant_Palace_Resort-Rajpipla_Narmada_District_Gujarat.html"
      }
    ]
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
    category: "Nature",
    googleMapsLink: "https://www.google.com/maps/place/Shoolpaneshwar+Wildlife+Sanctuary,+Gujarat,+India",
    detailedInfo: `Located in the Narmada district of Gujarat, Shoolpaneshwar Wildlife Sanctuary spreads across over 600 sq. km of lush deciduous forests, rolling hills, and rivers. Nestled close to the Statue of Unity and the Sardar Sarovar Dam, it is a prime eco-tourism spot combining nature, wildlife, and culture.

Key Highlights:

🌿 Rich Biodiversity: Home to leopards, sloth bears, hyenas, barking deer, four-horned antelopes, langurs, and a wide variety of reptiles and birds.

🏞 Scenic Beauty: Dense forests, streams, and seasonal waterfalls offer stunning views and photography opportunities.

⛺ Adventure & Activities: Popular for trekking, jungle trails, and nature camps.

🛕 Cultural Heritage: The ancient Shoolpaneshwar Mahadev Temple adds a spiritual charm.

📍 Nearby Attractions: Statue of Unity, Zarwani Waterfall, Ninai Waterfall, and eco-tourism camps.

Best Time to Visit: October to March, when the weather is pleasant and wildlife sightings are easier.`
  },
  {
    name: "Sardar Sarovar Dam",
    distance: "52 km",
    description: "One of India's largest dams with spectacular views and visitor center",
    category: "Engineering Marvel",
    googleMapsLink: "https://www.google.com/maps/place/Sardar+Sarovar+Dam,+Kevadia,+Gujarat,+India",
    detailedInfo: `The Sardar Sarovar Dam, built on the mighty Narmada River in Gujarat, is one of the largest dams in India and a key landmark of modern engineering. Standing 163 meters tall and stretching 1.2 km in length, it provides water, irrigation, hydroelectric power, and drinking water to millions across Gujarat, Madhya Pradesh, Maharashtra, and Rajasthan.

Key Highlights:

🌊 Engineering Marvel: Among the world's largest concrete gravity dams.

⚡ Hydropower Generation: Produces clean electricity for multiple states.

🚰 Water Supply: Provides irrigation to thousands of villages and drinking water to drought-prone regions.

🏞 Tourist Spot: Offers breathtaking views of the Narmada River, lush greenery, and nearby eco-tourism attractions.

📍 Nearby Attractions: Statue of Unity, Valley of Flowers, Shoolpaneshwar Wildlife Sanctuary, and Zarwani Waterfall.

Best Time to Visit: Monsoon and post-monsoon months (July–October) when the dam is full and the views are most spectacular.`
  },
  {
    name: "Statue of Unity",
    distance: "48 km",
    description: "World's tallest statue of Sardar Vallabhbhai Patel with museum and attractions",
    category: "Monument",
    googleMapsLink: "https://www.google.com/maps/place/Statue+of+Unity,+Kevadia,+Gujarat,+India",
    detailedInfo: `The Statue of Unity, dedicated to India's Iron Man Sardar Vallabhbhai Patel, is the world's tallest statue at a height of 182 meters. Located on the banks of the Narmada River near Kevadia (Ekta Nagar), Gujarat, it has become one of India's most iconic tourist destinations.

Key Highlights:

🗽 World's Tallest Statue: Almost twice the height of the Statue of Liberty.

👀 Viewing Gallery: Situated at 153 meters, offering panoramic views of the Sardar Sarovar Dam, Narmada River, and surrounding hills.

🎥 Laser Show & Museum: A spectacular light and sound show narrates Sardar Patel's life and India's freedom struggle; the museum and exhibition hall showcase his legacy.

🌸 Nearby Attractions: Valley of Flowers, Jungle Safari, Cactus Garden, Butterfly Park, Ekta Cruise, and Children's Nutrition Park.

🛣 Connectivity: Well-connected by road, rail, and air with Ekta Nagar Railway Station nearby.

Best Time to Visit: October to March for pleasant weather; evenings are ideal to enjoy the laser show.`
  },
  {
    name: "River Narmada Ghat",
    distance: "8 km",
    description: "Sacred ghats on the holy Narmada river for spiritual experiences",
    category: "Spiritual",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Narmada+River+Ghat,+Kevadia,+Gujarat,+India",
    detailedInfo: `The Narmada River, often called the lifeline of central India, is one of the country's holiest and most picturesque rivers. Flowing through Madhya Pradesh, Maharashtra, and Gujarat before meeting the Arabian Sea, it holds immense spiritual, cultural, and ecological significance. The ghats along the Narmada are popular spots for prayers, festivals, and serene river views.

Key Highlights:

🌊 Sacred River: Considered one of the seven holy rivers of India; devotees believe that a dip in the Narmada purifies the soul.

🛕 Cultural Importance: Famous ghats like Chandika Ghat, Poicha Nilkanth Dham Ghat, and Maheshwar Ghats host daily aarti, rituals, and festivals.

🛶 Peaceful Experience: Boating, evening aarti, and riverside walks offer a spiritual and tranquil escape.

📸 Scenic Beauty: Ghats surrounded by temples, forests, and hills provide stunning views for photography and relaxation.

📍 Nearby Attractions: Statue of Unity, Sardar Sarovar Dam, Shoolpaneshwar Sanctuary, and local temples.

Best Time to Visit: Early mornings and evenings for peaceful river views, especially during festivals like Narmada Jayanti.`
  },
  {
    name: "Narmada River Cruise",
    distance: "15 km",
    description: "Scenic boat rides on the holy Narmada river with nature views",
    category: "Recreation",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Ekta+Cruise,+Kevadia,+Gujarat,+India",
    detailedInfo: `The Narmada River Cruise at Ekta Nagar (Kevadia) offers a unique way to experience the beauty of the Statue of Unity and the surrounding landscapes. Sailing on the calm waters of the Narmada, visitors can enjoy breathtaking views of the towering statue, Sardar Sarovar Dam, and lush green hills. The cruise is designed for leisure, sightseeing, and cultural experiences.

Key Highlights:

🚢 Unique Experience: Comfortable boat rides with panoramic views of the Statue of Unity and Narmada River.

🌅 Sunset & Evening Cruises: Stunning views at sunset and illuminated night-time surroundings.

🎶 Entertainment Onboard: Cultural programs, music, and dining options (varies by cruise package).

📸 Photography Spot: Perfect location for memorable clicks of the Statue of Unity from the river.

📍 Nearby Attractions: Valley of Flowers, Jungle Safari, Cactus Garden, and Shoolpaneshwar Sanctuary.

Best Time to Visit: Evening cruises are most popular for sunset views and the night illumination of the Statue of Unity.`
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
            <Button variant="palace" size="xl">
              <MapPin className="w-5 h-5" />
              Get Directions
            </Button>
          </div>
        </div>

        <Tabs defaultValue="hours" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3">
            <TabsTrigger value="hours">Hours & Entry</TabsTrigger>
            <TabsTrigger value="hotels">Stay</TabsTrigger>
            <TabsTrigger value="attractions">Nearby</TabsTrigger>
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

          </TabsContent>


          {/* Hotels */}
          <TabsContent value="hotels" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-heritage-royal mb-4">Recommended Accommodation</h2>
              <p className="text-muted-foreground">Experience royal luxury at our partner heritage resort</p>
            </div>

            <div className="max-w-4xl mx-auto">
              {nearbyHotels.map((hotel, index) => (
                <Card key={index} className="group hover:shadow-heritage transition-royal bg-card/80 backdrop-blur-sm border-heritage-stone/20 overflow-hidden">
                  <div className="relative">
                    <div 
                      className="aspect-[16/9] bg-heritage-stone/20 bg-cover bg-center"
                      style={{ backgroundImage: `url(/vijay-palace-photos/rajvant-palace-resort.jpg)` }}
                    >
                      <div className="absolute inset-0 bg-heritage-royal/10 group-hover:bg-heritage-royal/20 transition-royal"></div>
                    </div>
                    
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-heritage-royal text-heritage-cream border-heritage-royal">
                        {hotel.category}
                      </Badge>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="font-medium">{hotel.rating} Rating</span>
                        <span className="text-white/70">•</span>
                        <span className="text-white/90">{hotel.distance} from Vijay Palace</span>
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="mb-4">
                      <CardTitle className="text-2xl text-heritage-royal mb-2">{hotel.name}</CardTitle>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {hotel.address}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="text-center">
                      <span className="text-3xl font-bold text-heritage-royal">{hotel.price}</span>
                      <span className="text-muted-foreground ml-2">starting from</span>
                    </div>
                    
                    <div>
                      <p className="text-base text-muted-foreground mb-4">{hotel.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-heritage-royal mb-3">Amenities & Services:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {hotel.amenities.map((amenity, i) => (
                          <Badge key={i} variant="outline" className="text-xs justify-center">
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground p-3 bg-heritage-cream/50 rounded-lg">
                      <Phone className="w-4 h-4" />
                      <span className="font-medium">Contact:</span> {hotel.contact}
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-heritage-royal mb-3">Booking Options:</h4>
                      <div className="space-y-3">
                        {hotel.bookingOptions.map((option, i) => (
                          <div key={i} className="p-3 border border-heritage-stone/20 rounded-lg">
                            <div className="flex items-center justify-between">
                              <div>
                                <h5 className="font-medium text-heritage-royal">{option.name}</h5>
                                <p className="text-sm text-muted-foreground">{option.description}</p>
                                {option.contact && (
                                  <p className="text-sm text-muted-foreground mt-1">
                                    <Phone className="w-3 h-3 inline mr-1" />
                                    {option.contact}
                                  </p>
                                )}
                              </div>
                              {option.link && (
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => window.open(option.link, '_blank')}
                                >
                                  Book Online
                                </Button>
                              )}
                              {!option.link && (
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => window.open(`tel:${option.contact}`, '_self')}
                                >
                                  Call Now
                                </Button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button 
                        variant="palace" 
                        size="lg" 
                        className="flex-1"
                        onClick={() => window.open(hotel.googleMapsLink, '_blank')}
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        Get Directions
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
                       <Button 
                         variant="heritage" 
                         size="sm"
                         onClick={() => {
                           try {
                             // Try the direct method first
                             window.open(attraction.googleMapsLink, '_blank', 'noopener,noreferrer');
                           } catch (error) {
                             // Fallback method
                             const link = document.createElement('a');
                             link.href = attraction.googleMapsLink;
                             link.target = '_blank';
                             link.rel = 'noopener noreferrer';
                             document.body.appendChild(link);
                             link.click();
                             document.body.removeChild(link);
                           }
                         }}
                       >
                         <MapPin className="w-4 h-4" />
                         Get Directions
                       </Button>
                       <Dialog>
                         <DialogTrigger asChild>
                           <Button variant="palace" size="sm">
                             Learn More
                           </Button>
                         </DialogTrigger>
                         <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                           <DialogHeader>
                             <DialogTitle className="text-heritage-royal text-xl">{attraction.name}</DialogTitle>
                           </DialogHeader>
                           <div className="space-y-4">
                             <div className="flex items-center gap-2 text-sm text-muted-foreground">
                               <MapPin className="w-4 h-4" />
                               {attraction.distance} from Vijay Palace
                               <Badge variant="outline" className="ml-2">{attraction.category}</Badge>
                             </div>
                             <div className="text-base text-muted-foreground whitespace-pre-line leading-relaxed">
                               {attraction.detailedInfo}
                             </div>
                             <div className="flex gap-2 pt-4">
                               <Button 
                                 variant="heritage" 
                                 size="sm"
                                 onClick={() => {
                                   try {
                                     // Try the direct method first
                                     window.open(attraction.googleMapsLink, '_blank', 'noopener,noreferrer');
                                   } catch (error) {
                                     // Fallback method
                                     const link = document.createElement('a');
                                     link.href = attraction.googleMapsLink;
                                     link.target = '_blank';
                                     link.rel = 'noopener noreferrer';
                                     document.body.appendChild(link);
                                     link.click();
                                     document.body.removeChild(link);
                                   }
                                 }}
                               >
                                 <MapPin className="w-4 h-4 mr-2" />
                                 Get Directions
                               </Button>
                             </div>
                           </div>
                         </DialogContent>
                       </Dialog>
                     </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

        </Tabs>
      </div>
    </div>
  );
};

export default Visit;