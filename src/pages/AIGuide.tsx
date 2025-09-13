import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  MessageCircle, 
  Send, 
  Mic, 
  Globe, 
  Clock, 
  Star,
  MapPin,
  Camera,
  Calendar,
  Users,
  Headphones,
  Volume2,
  Bot,
  User,
  Play,
  ArrowRight
} from "lucide-react";

const chatHistory = [
  {
    type: "ai",
    message: "Namaste! I'm Rajpipla, your AI heritage guide. I know everything about this magnificent palace. What would you like to explore today?",
    timestamp: "9:30 AM"
  },
  {
    type: "user",
    message: "Tell me about the royal family that lived here",
    timestamp: "9:31 AM"
  },
  {
    type: "ai",
    message: "The Gohil Rajput dynasty ruled Rajpipla for over 300 years! The most notable ruler was Maharaja Wakhat Singh who founded the state in 1736. The family was known for their progressive policies and architectural patronage. Would you like to hear about any specific ruler or see their portraits?",
    timestamp: "9:31 AM"
  },
  {
    type: "user",
    message: "What about the architecture style?",
    timestamp: "9:32 AM"
  },
  {
    type: "ai",
    message: "Rajpipla Palace beautifully blends Indo-Islamic and European architectural styles! The main structure features Rajasthani arches, Mughal domes, and later Victorian additions. The courtyards follow traditional Indian haveli patterns while the facade incorporates neoclassical elements. Each wing tells a different architectural story!",
    timestamp: "9:32 AM"
  }
];

const quickQuestions = [
  "Tell me about the Durbar Hall",
  "What festivals were celebrated here?",
  "Show me the palace gardens",
  "How many rooms are in the palace?",
  "What artifacts are on display?",
  "Tell me about the royal treasury"
];

const aiFeatures = [
  {
    icon: Globe,
    title: "12 Languages",
    description: "Communicate in English, Hindi, Gujarati, and 9 other languages"
  },
  {
    icon: Camera,
    title: "Visual Recognition",
    description: "Take photos of artifacts and get instant information"
  },
  {
    icon: MapPin,
    title: "Location Aware",
    description: "Get relevant information based on your current location"
  },
  {
    icon: Volume2,
    title: "Voice Interaction",
    description: "Ask questions using voice commands and hear responses"
  },
  {
    icon: Clock,
    title: "24/7 Available",
    description: "Get heritage information anytime, day or night"
  },
  {
    icon: Star,
    title: "Expert Knowledge",
    description: "Trained on historical documents and expert research"
  }
];

const conversationTopics = [
  {
    category: "History & Rulers",
    topics: ["Royal Dynasty", "Wars & Battles", "Political Relations", "Important Events"],
    color: "bg-blue-100 text-blue-800"
  },
  {
    category: "Architecture",
    topics: ["Building Styles", "Construction Techniques", "Room Functions", "Restoration"],
    color: "bg-green-100 text-green-800"
  },
  {
    category: "Culture & Arts",
    topics: ["Festivals", "Music & Dance", "Royal Ceremonies", "Art Collections"],
    color: "bg-purple-100 text-purple-800"
  },
  {
    category: "Daily Life",
    topics: ["Royal Lifestyle", "Palace Staff", "Food & Cuisine", "Entertainment"],
    color: "bg-orange-100 text-orange-800"
  }
];

const AIGuide = () => {
  const [message, setMessage] = useState("");
  const [isListening, setIsListening] = useState(false);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Here you would typically send the message to your AI service
      setMessage("");
    }
  };

  const handleVoiceInput = () => {
    setIsListening(!isListening);
    // Here you would implement voice recognition
  };

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-heritage-royal mb-6">
            AI Heritage Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Meet Rajpipla, your intelligent AI companion who knows every story, every secret, 
            and every detail about the palace. Ask anything in your preferred language!
          </p>
          
          <div className="flex gap-4 justify-center">
            <Button variant="heritage" size="xl" className="group">
              <Play className="w-5 h-5" />
              Start AI Guide
            </Button>
            <Button variant="palace" size="xl">
              <MessageCircle className="w-5 h-5" />
              Ask a Question
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="bg-card/80 backdrop-blur-sm border-heritage-stone/20 h-[600px] flex flex-col">
              <CardHeader className="flex-shrink-0 border-b border-heritage-stone/20">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/api/placeholder/48/48" alt="AI Guide" />
                    <AvatarFallback className="bg-heritage-royal text-heritage-cream">
                      <Bot className="w-6 h-6" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-heritage-royal">Rajpipla AI Guide</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Online • Responds instantly
                    </CardDescription>
                  </div>
                  <div className="ml-auto flex gap-2">
                    <Button variant="palace" size="sm">
                      <Headphones className="w-4 h-4" />
                    </Button>
                    <Button variant="palace" size="sm">
                      <Globe className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              {/* Chat Messages */}
              <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
                {chatHistory.map((chat, index) => (
                  <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] ${chat.type === 'user' ? 'order-2' : 'order-1'}`}>
                      <div className={`flex items-start gap-3 ${chat.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <Avatar className="w-8 h-8 flex-shrink-0">
                          {chat.type === 'ai' ? (
                            <AvatarFallback className="bg-heritage-royal text-heritage-cream">
                              <Bot className="w-4 h-4" />
                            </AvatarFallback>
                          ) : (
                            <AvatarFallback className="bg-heritage-gold text-heritage-cream">
                              <User className="w-4 h-4" />
                            </AvatarFallback>
                          )}
                        </Avatar>
                        <div className={`rounded-lg p-3 ${
                          chat.type === 'user' 
                            ? 'bg-heritage-royal text-heritage-cream' 
                            : 'bg-heritage-cream border border-heritage-stone/20'
                        }`}>
                          <p className="text-sm">{chat.message}</p>
                          <p className={`text-xs mt-1 ${
                            chat.type === 'user' ? 'text-heritage-cream/70' : 'text-muted-foreground'
                          }`}>
                            {chat.timestamp}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
              
              {/* Message Input */}
              <div className="flex-shrink-0 p-4 border-t border-heritage-stone/20">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask me anything about Rajpipla Palace..."
                    className="flex-1 p-3 border border-heritage-stone/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-heritage-royal/20"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button 
                    variant={isListening ? "heritage" : "palace"} 
                    size="icon"
                    onClick={handleVoiceInput}
                  >
                    <Mic className={`w-4 h-4 ${isListening ? 'animate-pulse' : ''}`} />
                  </Button>
                  <Button variant="heritage" size="icon" onClick={handleSendMessage}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Questions */}
            <Card className="bg-card/80 backdrop-blur-sm border-heritage-stone/20">
              <CardHeader>
                <CardTitle className="text-heritage-royal">Quick Questions</CardTitle>
                <CardDescription>Popular questions to get you started</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {quickQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="palace"
                    size="sm"
                    className="w-full text-left justify-start h-auto p-3"
                    onClick={() => setMessage(question)}
                  >
                    <MessageCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{question}</span>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* AI Features */}
            <Card className="bg-card/80 backdrop-blur-sm border-heritage-stone/20">
              <CardHeader>
                <CardTitle className="text-heritage-royal">AI Capabilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {aiFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-2">
                    <div className="w-8 h-8 bg-heritage-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 h-4 text-heritage-gold" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-heritage-royal">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Language Settings */}
            <Card className="bg-card/80 backdrop-blur-sm border-heritage-stone/20">
              <CardHeader>
                <CardTitle className="text-heritage-royal">Language</CardTitle>
              </CardHeader>
              <CardContent>
                <select className="w-full p-2 border border-heritage-stone/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-heritage-royal/20">
                  <option>English</option>
                  <option>हिंदी (Hindi)</option>
                  <option>ગુજરાતી (Gujarati)</option>
                  <option>मराठी (Marathi)</option>
                  <option>বাংলা (Bengali)</option>
                  <option>தமிழ் (Tamil)</option>
                  <option>తెలుగు (Telugu)</option>
                  <option>ಕನ್ನಡ (Kannada)</option>
                  <option>Français (French)</option>
                  <option>Español (Spanish)</option>
                  <option>Deutsch (German)</option>
                  <option>中文 (Chinese)</option>
                </select>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Conversation Topics */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-heritage-royal text-center mb-8">
            Explore Heritage Topics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conversationTopics.map((category, index) => (
              <Card key={index} className="group hover:shadow-heritage transition-royal bg-card/80 backdrop-blur-sm border-heritage-stone/20">
                <CardHeader>
                  <CardTitle className="text-heritage-royal">{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {category.topics.map((topic, topicIndex) => (
                    <Badge 
                      key={topicIndex} 
                      variant="outline" 
                      className={`${category.color} border-transparent cursor-pointer hover:scale-105 transition-transform text-xs`}
                      onClick={() => setMessage(`Tell me about ${topic.toLowerCase()}`)}
                    >
                      {topic}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Usage Statistics */}
        <div className="mt-16 bg-heritage-royal/5 rounded-2xl p-8 border border-heritage-royal/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-heritage-royal mb-4">AI Guide Statistics</h3>
            <p className="text-muted-foreground">How our AI heritage guide has been helping visitors</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-heritage-royal mb-2">15,000+</div>
              <div className="text-muted-foreground">Questions Answered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-heritage-gold mb-2">98%</div>
              <div className="text-muted-foreground">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-heritage-terracotta mb-2">12</div>
              <div className="text-muted-foreground">Languages Supported</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-heritage-royal mb-2">2.5s</div>
              <div className="text-muted-foreground">Average Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIGuide;