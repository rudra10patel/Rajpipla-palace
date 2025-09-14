import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  MapPin, 
  Clock, 
  AlertTriangle, 
  Shield, 
  Heart,
  Users,
  Car,
  Building,
  FileText,
  ExternalLink
} from "lucide-react";

const emergencyContacts = [
  {
    name: "Rajpipla Police Station",
    number: "+91 2640 220973",
    description: "Local police station - 2 km from palace",
    icon: Shield,
    priority: "high"
  },
  {
    name: "Vijay Palace Security",
    number: "+91 XXXXX XXXXX",
    description: "On-site palace security team",
    icon: Building,
    priority: "medium"
  },
  {
    name: "Narmada District Emergency",
    number: "+91 2640 224001",
    description: "District emergency helpline, Disaster management",
    icon: AlertTriangle,
    priority: "high"
  },
  {
    name: "Gujarat Tourism Helpline",
    number: "1800 233 7951",
    description: "State tourism assistance",
    icon: Users,
    priority: "medium"
  }
];

const emergencyProcedures = [
  {
    title: "Medical Emergency",
    steps: [
      "Call 108 for ambulance immediately",
      "Inform palace security at +91 XXXXX XXXXX",
      "Stay with the person if safe to do so",
      "Clear the area for emergency personnel",
      "Provide first aid if trained to do so"
    ],
    icon: Heart
  },
  {
    title: "Fire Emergency",
    steps: [
      "Call 101 for fire department",
      "Pull the nearest fire alarm",
      "Evacuate the building immediately",
      "Use emergency exits only",
      "Meet at the designated assembly point"
    ],
    icon: AlertTriangle
  },
  {
    title: "Security Incident",
    steps: [
      "Call 100 for police",
      "Contact palace security immediately",
      "Move to a safe location",
      "Do not confront the threat",
      "Follow security personnel instructions"
    ],
    icon: Shield
  }
];

const safetyInfo = [
  {
    title: "First Aid Station",
    location: "Ground floor, near main entrance",
    hours: "9:00 AM - 6:00 PM",
    description: "Basic first aid supplies and trained personnel available"
  },
  {
    title: "Emergency Assembly Point",
    location: "Main courtyard, near the fountain",
    description: "Designated meeting point for all visitors during emergencies"
  },
  {
    title: "Emergency Exits",
    location: "Multiple locations throughout the palace",
    description: "Clearly marked with green exit signs and emergency lighting"
  }
];

const nearbyFacilities = [
  {
    name: "Civil Hospital Rajpipla",
    distance: "3 km",
    address: "Opposite Vijay Prasuti Gruh, Rajpipla, Narmada District, Gujarat 393145",
    phone: "+91 2640 220030",
    services: "Public hospital, ICU, Ambulance, Emergency care",
    icon: Heart,
    directions: "https://www.google.com/maps/search/?api=1&query=Civil+Hospital+Rajpipla,+Opposite+Vijay+Prasuti+Gruh,+Rajpipla,+Gujarat+393145"
  },
  {
    name: "Shreeji Clinic",
    distance: "2.5 km",
    address: "Dolat Bazar (Bhattsheri, Dolat Bazar), Rajpipla, Gujarat 393145",
    phone: "24/7 Available",
    services: "Public clinic, 24 hours service, General medicine",
    icon: Heart,
    directions: "https://www.google.com/maps/search/Shreeji+Clinic+Rajpipla+Dolat+Bazar"
  },
  {
    name: "Shreeji Medical Store",
    distance: "1.5 km",
    address: "Near Santosh Cross Road, Ranton Village, MV Road, Navapara, Rajpipla, Gujarat 393145",
    phone: "Open until 9:00 PM",
    services: "Chemist, Medical supplies, Emergency drugs",
    icon: Heart,
    directions: "https://mappls.com/3uz4tz"
  },
  {
    name: "Rajpipla Police Station",
    distance: "2 km",
    address: "Near Bus Stand, Rajpipla, Gujarat 393145",
    phone: "+91 2640 220973",
    services: "24/7 Police assistance, FIR registration, Security",
    icon: Shield,
    directions: "https://www.google.com/maps/search/Rajpipla+Police+Station"
  },
  {
    name: "Rajpipla Bus Stand",
    distance: "1.5 km",
    address: "Rajpipla Bus Terminal, Gujarat 393145",
    phone: "+91 2640 220200",
    services: "Public transport, Emergency evacuation, Long distance",
    icon: Car,
    directions: "https://www.google.com/maps/search/Rajpipla+Bus+Stand"
  },
  {
    name: "Narmada District Emergency",
    distance: "4 km",
    address: "District Collectorate, Rajpipla, Gujarat 393145",
    phone: "+91 2640 224001",
    services: "District Emergency Helpline, Administrative support, Disaster management",
    icon: Building,
    directions: "https://www.google.com/maps/search/Narmada+District+Collectorate+Rajpipla"
  }
];

export default function Emergency() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="bg-heritage-royal text-heritage-cream py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-title-slide-in">
            Emergency Information
          </h1>
          <p className="text-xl text-heritage-cream/80 max-w-3xl mx-auto animate-subtitle-slide-in">
            Your safety is our priority. Find all emergency contacts, procedures, and safety information for your visit to Rajpipla Palace.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Urgent Emergency Contacts */}
        <section className="mb-16">
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 animate-fade-in">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600" />
                <h2 className="text-3xl font-bold text-red-800">URGENT EMERGENCY CONTACTS</h2>
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <p className="text-lg text-red-700 font-medium">
                Call these numbers immediately in case of life-threatening emergencies
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 border-2 border-red-300 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-red-800 mb-2">POLICE</h3>
                  <div className="text-3xl font-bold text-red-600 mb-3">100</div>
                  <p className="text-sm text-gray-600 mb-4">Emergency police assistance</p>
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
                    onClick={() => window.open('tel:100', '_self')}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    CALL NOW
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-red-300 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-red-800 mb-2">AMBULANCE</h3>
                  <div className="text-3xl font-bold text-red-600 mb-3">108</div>
                  <p className="text-sm text-gray-600 mb-4">Medical emergency & ambulance</p>
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
                    onClick={() => window.open('tel:108', '_self')}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    CALL NOW
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-red-300 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-red-800 mb-2">FIRE</h3>
                  <div className="text-3xl font-bold text-red-600 mb-3">101</div>
                  <p className="text-sm text-gray-600 mb-4">Fire & rescue services</p>
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
                    onClick={() => window.open('tel:101', '_self')}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    CALL NOW
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-red-300 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-red-800 mb-2">WOMEN</h3>
                  <div className="text-3xl font-bold text-red-600 mb-3">1091</div>
                  <p className="text-sm text-gray-600 mb-4">Women safety helpline</p>
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
                    onClick={() => window.open('tel:1091', '_self')}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    CALL NOW
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-red-100 border border-red-300 rounded-lg p-4">
                <p className="text-red-800 font-semibold text-lg">
                  ⚠️ In case of emergency, call these numbers immediately. Stay calm and provide your location clearly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-heritage-royal mb-8 text-center animate-fade-in">
            Emergency Contacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyContacts.map((contact, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-heritage transition-royal border-heritage-stone/20 bg-card/50 backdrop-blur-sm animate-slide-up ${
                  contact.priority === 'high' ? 'border-red-200 bg-red-50/50' : ''
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`p-3 rounded-lg ${
                      contact.priority === 'high' 
                        ? 'bg-red-500 text-white' 
                        : 'bg-gradient-heritage text-heritage-cream'
                    } group-hover:scale-110 transition-royal`}>
                      <contact.icon className="w-6 h-6" />
                    </div>
                    <span className={`text-sm font-medium uppercase tracking-wide ${
                      contact.priority === 'high' ? 'text-red-600' : 'text-heritage-terracotta'
                    }`}>
                      {contact.priority === 'high' ? 'URGENT' : 'ASSISTANCE'}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-heritage-royal group-hover:text-heritage-royal/80 transition-smooth">
                    {contact.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-heritage-royal" />
                      <span className="text-lg font-semibold text-heritage-royal">
                        {contact.number}
                      </span>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {contact.description}
                    </CardDescription>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:bg-heritage-royal group-hover:text-heritage-cream transition-royal"
                      onClick={() => {
                        const phoneNumber = contact.number.replace(/[^\d+]/g, '');
                        window.open(`tel:${phoneNumber}`, '_self');
                      }}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Emergency Procedures */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-heritage-royal mb-8 text-center animate-fade-in">
            Emergency Procedures
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {emergencyProcedures.map((procedure, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-heritage transition-royal border-heritage-stone/20 bg-card/50 backdrop-blur-sm animate-slide-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-heritage group-hover:scale-110 transition-royal">
                      <procedure.icon className="w-6 h-6 text-heritage-cream" />
                    </div>
                    <CardTitle className="text-xl text-heritage-royal group-hover:text-heritage-royal/80 transition-smooth">
                      {procedure.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3">
                    {procedure.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-heritage-royal text-heritage-cream rounded-full flex items-center justify-center text-sm font-semibold">
                          {stepIndex + 1}
                        </span>
                        <span className="text-sm leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Nearby Emergency Facilities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-heritage-royal mb-8 text-center animate-fade-in">
            Nearby Emergency Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyFacilities.map((facility, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-heritage transition-royal border-heritage-stone/20 bg-card/50 backdrop-blur-sm animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-3 rounded-lg bg-gradient-heritage group-hover:scale-110 transition-royal">
                      <facility.icon className="w-6 h-6 text-heritage-cream" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-heritage-royal group-hover:text-heritage-royal/80 transition-smooth">
                        {facility.name}
                      </CardTitle>
                      <span className="text-sm text-heritage-terracotta font-medium">
                        {facility.distance} away
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-heritage-royal mt-1" />
                      <span className="text-sm">{facility.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-heritage-royal" />
                      <span className="text-sm font-medium">{facility.phone}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <strong>Services:</strong> {facility.services}
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 group-hover:bg-heritage-royal group-hover:text-heritage-cream transition-royal"
                        onClick={() => {
                          const phoneNumber = facility.phone.replace(/[^\d+]/g, '');
                          window.open(`tel:${phoneNumber}`, '_self');
                        }}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 group-hover:bg-heritage-royal group-hover:text-heritage-cream transition-royal"
                        onClick={() => window.open(facility.directions, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Safety Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-heritage-royal mb-8 text-center animate-fade-in">
            Palace Safety Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {safetyInfo.map((info, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-heritage transition-royal border-heritage-stone/20 bg-card/50 backdrop-blur-sm animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader>
                  <CardTitle className="text-lg text-heritage-royal group-hover:text-heritage-royal/80 transition-smooth">
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-heritage-royal" />
                      <span className="text-sm font-medium">{info.location}</span>
                    </div>
                    {info.hours && (
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-heritage-royal" />
                        <span className="text-sm">{info.hours}</span>
                      </div>
                    )}
                    <CardDescription className="text-sm leading-relaxed">
                      {info.description}
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Important Notes */}
        <section className="mb-16">
          <Card className="border-amber-200 bg-amber-50/50 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl text-amber-800 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Important Safety Notes for Rajpipla Palace
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-amber-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Always follow the instructions of palace security and staff during emergencies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Keep emergency contact numbers saved in your phone (100, 101, 108, 1091, 1098)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Familiarize yourself with emergency exits upon arrival</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Report any suspicious activity to security immediately</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Stay calm and help others if it's safe to do so</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Civil Hospital Rajpipla (+91 2640 220030) is 3 km away - Opposite Vijay Prasuti Gruh</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Shreeji Clinic in Dolat Bazar is 2.5 km away - 24/7 available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Rajpipla Police Station (+91 2640 220973) is 2 km away for immediate police assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>In case of fire, the nearest fire station is 2.5 km away</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>For women's safety, call 1091 (24/7 women helpline)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>For child safety, call 1098 (24/7 child helpline)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>For district emergencies, call Narmada District Emergency: +91 2640 224001</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>For tourist assistance, call Gujarat Tourism Helpline: 1800 233 7951</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>For electricity emergencies, call 1912</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Quick Actions */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-heritage-royal mb-8 animate-fade-in">
            Quick Actions
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="heritage" 
              size="lg" 
              className="group"
              onClick={() => window.open('tel:100', '_self')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Emergency (100)
            </Button>
            <Button 
              variant="palace" 
              size="lg" 
              className="group"
              onClick={() => window.open('tel:108', '_self')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Ambulance (108)
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group"
              onClick={() => window.open('tel:101', '_self')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Fire (101)
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
