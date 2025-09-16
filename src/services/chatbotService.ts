// Chatbot Service for Rajpipla Palace AI Guide
export interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  message: string;
  timestamp: string;
  isTyping?: boolean;
}

export interface ChatbotResponse {
  message: string;
  suggestions?: string[];
  relatedTopics?: string[];
}

// Palace Knowledge Base
const palaceKnowledge = {
  siteFeatures: {
    audioTour: [
      "Audio Tour: Immersive guided experience with professional narration in English, Hindi, and Gujarati",
      "Multi-language Support: Listen to the palace tour in your preferred language",
      "Download Feature: Download audio files to listen offline",
      "Volume Control: Adjustable volume and mute functionality",
      "Progress Tracking: Visual progress bar showing tour completion",
      "High Quality Audio: Professional recording with clear narration"
    ],
    virtualTour: [
      "Virtual Tour: 360-degree immersive experience of palace rooms and grounds",
      "Interactive Navigation: Click to explore different areas of the palace",
      "Detailed Information: Learn about each room's history and significance",
      "Visual Experience: High-quality images and panoramic views"
    ],
    digitalArchive: [
      "Digital Archive: Collection of historical documents, photos, and artifacts",
      "Historical Documents: Royal correspondence, administrative records",
      "Photo Gallery: Vintage photographs of royal family and palace events",
      "Artifact Collection: Digital catalog of palace treasures and antiques"
    ],
    community: [
      "Community Section: Connect with other palace enthusiasts and visitors",
      "Share Experiences: Post photos and stories from your visit",
      "Discussion Forums: Ask questions and share knowledge about the palace",
      "Visitor Reviews: Read and write reviews about your palace experience"
    ],
    visit: [
      "Visit Information: Practical details for planning your palace visit",
      "Opening Hours: Current visiting times and seasonal schedules",
      "Ticket Prices: Admission fees and special package deals",
      "Location Details: Address, directions, and parking information",
      "Contact Information: Phone numbers and email for inquiries"
    ],
    navigation: [
      "Main Navigation: Access all sections from the top menu bar",
      "Audio Tour: Multi-language guided experience with professional narration",
      "Virtual Tour: 360-degree immersive palace exploration",
      "Digital Archive: Historical documents, photos, and artifacts collection",
      "Community: Visitor interactions, reviews, and discussion forums",
      "Visit: Practical information for planning your palace visit",
      "AI Guide: This intelligent chatbot for palace information"
    ]
  },
  history: {
    rulers: [
      "Maharaja Vijaysinhji (1879-1948) - The last and most progressive ruler of Rajpipla, commissioned Vijay Palace in 1910",
      "Maharana Chhatrasinhji - Built Vijay Palace for his son Yuvraj Vijaysinhji in 1910",
      "Gohil Dynasty - Ruled Rajpipla for 600 years from 14th century until 1948",
      "Maharani Uday Kunvarba - Elder Maharani for whom adjoining mansion was built in 1917"
    ],
    timeline: [
      "14th Century: Gohil Rajput dynasty established rule in Rajpipla",
      "1910: Vijay Palace constructed by Maharana Chhatrasinhji for Yuvraj Vijaysinhji",
      "1917: Adjoining mansion built for Maharani Uday Kunvarba",
      "1934: Maharaja Vijaysinhji's horse Windsor Lad wins Epsom Derby - only Indian owner to achieve this feat",
      "1948: Rajpipla princely state merges with Union of India",
      "Present: Palace operates as Rajvant Palace Resort and heritage tourism destination"
    ],
    significance: "Rajpipla was a princely state under British rule for 600 years, known for progressive policies, architectural patronage, and cultural heritage. The palace represents the fusion of Indian tradition with European influences and stands as a testament to the Gohil dynasty's legacy.",
    achievements: [
      "Epsom Derby Winner: Maharaja Vijaysinhji's horse Windsor Lad won in 1934 - only Indian owner to achieve this",
      "Polo Champion: Maharaja Vijaysinhji was an avid polo player and maintained finest stables in India and England",
      "Progressive Reforms: Introduced free primary education, healthcare, infrastructure development",
      "Railway Development: Expanded Rajpipla State Railway and introduced steam railroad and tramway",
      "Modern Infrastructure: Established power house supplying electricity and water to Rajpipla town",
      "Agricultural Reforms: Improved agricultural practices and regularized land revenue system"
    ]
  },
  
  architecture: {
    styles: [
      "Italian Villa Style: Resembles Italian villa with classical colonnaded semi-circular portico",
      "Indo-Saracenic: Blend of Indian and Islamic architectural elements with central dome",
      "Gothic Revival: Pointed arches, Corinthian pillars, and vertical emphasis",
      "Victorian: Ornate details, decorative elements, and European domes",
      "Bengali Influence: Bengal domes on the sides reflecting regional architectural styles"
    ],
    features: [
      "Classical Colonnaded Portico: Semi-circular entrance with Corinthian pillars",
      "Italianate Fountain: Surrounded by palm trees in the forecourt",
      "Central Dome: Prominent high dome supported by pillars",
      "Bengal Domes: Smaller domes on the sides with Bengali architectural influence",
      "Jharokhas and Jalis: Intricately carved stone windows and lattice work for ventilation",
      "Cusped Arches: Expansive porticoes at various entrances",
      "Seven-Acre Formal Gardens: Meticulously landscaped by professional architect",
      "Marble Floors: Throughout the palace with crested arch doors",
      "Karjan River Views: Picturesque views from the rear of the palace",
      "Satpura Hills Views: Scenic backdrop from palace grounds"
    ],
    materials: [
      "Italian Marble: Finest quality marble used throughout the palace",
      "Burma Teak: High-quality teak wood for furniture and structural elements",
      "European Statuary: Black metal European statuary in drawing rooms",
      "Frescoes: Beautiful frescoes by Polish artist Armande Herman Vallee Wolinski"
    ],
    rooms: [
      "Drawing Room: European settees, elegant tables, royal portraits, and European statuary",
      "Banquet Hall: Long wooden dining table with 24 carved wooden chairs, historic racing photographs",
      "Marble-Floored Halls: Grand entrance halls with crested arch doors",
      "Royal Bedrooms: Private quarters of the royal family with original European character",
      "Library: Collection of historical documents and books",
      "Terraces: Evening gatherings with river and hill views",
      "Adjoining Mansion: Built in 1917 for Maharani Uday Kunvarba"
    ]
  },
  
  culture: {
    festivals: [
      "Navratri: Nine nights of traditional dance and music celebrated with grandeur",
      "Diwali: Festival of lights with palace illumination and royal celebrations",
      "Holi: Spring festival with royal celebrations and traditional colors",
      "Dussehra: Victory of good over evil celebrations with royal processions",
      "Makar Sankranti: Harvest festival with kite flying over palace grounds",
      "Polo Matches: Regular polo games showcasing royal sporting traditions",
      "Horse Racing: Equestrian events celebrating the royal stables"
    ],
    arts: [
      "Frescoes by Polish Artist: Beautiful frescoes by Armande Herman Vallee Wolinski",
      "Royal Portraits: Historic photographs of Maharaja Vijaysinhji's racing achievements",
      "European Statuary: Black metal European statuary in drawing rooms",
      "Classical Music: Performances in the grand halls and banquet rooms",
      "Traditional Folk Dances: From Gujarat and Rajasthan in palace courtyards",
      "Royal Painting Collection: Featuring local and European artists",
      "Architectural Carvings: Intricate stone work and jharokhas throughout the palace"
    ],
    ceremonies: [
      "Royal Weddings: Traditional rituals with European and Indian elements",
      "Coronation Ceremonies: For new rulers with grand processions",
      "Diplomatic Receptions: For British officers and European guests",
      "Polo Tournaments: Regular polo matches showcasing royal sporting prowess",
      "Horse Racing Events: Celebrating the royal stables and racing achievements",
      "Cultural Exchange Programs: With European guests and dignitaries",
      "Religious Ceremonies: Temple visits and traditional rituals"
    ],
    sports: [
      "Polo: Maharaja Vijaysinhji was an avid polo player with finest stables",
      "Horse Racing: Windsor Lad won Epsom Derby in 1934 - only Indian owner achievement",
      "Equestrian Sports: Royal stables maintained in India and England",
      "Hunting: Royal hunting expeditions in nearby forests and hills"
    ]
  },
  
  dailyLife: {
    royalLifestyle: [
      "Morning prayers and temple visits in palace chapel",
      "Administrative meetings in the grand marble-floored halls",
      "Polo matches and hunting expeditions in nearby forests",
      "Evening gatherings on terraces overlooking Karjan River",
      "Cultural performances and music sessions in banquet hall",
      "Horse racing events and equestrian sports",
      "Diplomatic receptions for British officers and European guests"
    ],
    cuisine: [
      "Traditional Gujarati thali with royal touches and presentation",
      "Rajasthani delicacies and royal recipes from palace kitchen",
      "European cuisine for international guests and dignitaries",
      "Fresh produce from seven-acre formal gardens",
      "Traditional sweets and desserts prepared by royal chefs",
      "Banquet dinners with 24 carved wooden chairs in grand hall",
      "Royal feasts combining Indian and European culinary traditions"
    ],
    entertainment: [
      "Polo matches on palace grounds with royal stables",
      "Hunting expeditions in nearby forests and Satpura hills",
      "Music and dance performances in grand halls",
      "Card games and indoor entertainment in drawing rooms",
      "Garden parties and outdoor celebrations in formal gardens",
      "Horse racing events celebrating royal equestrian achievements",
      "Cultural exchange programs with European guests",
      "Film and television productions using palace as location"
    ],
    staff: [
      "Royal Household: Extensive staff maintaining palace operations",
      "Gardeners: Professional landscape architects maintaining seven-acre gardens",
      "Chefs: Royal chefs preparing traditional and European cuisine",
      "Stable Staff: Maintaining finest stables in India and England",
      "Administrative Staff: Managing princely state affairs and reforms",
      "Cultural Staff: Organizing performances and cultural events"
    ]
  },
  
  currentStatus: {
    resort: [
      "Rajvant Palace Resort: Palace now operates as heritage resort",
      "Accommodation: Unique opportunity to experience royal grandeur",
      "Modern Amenities: Contemporary facilities while preserving heritage",
      "Filming Location: Used for numerous films and television series",
      "Tourism: Heritage tourism destination attracting visitors worldwide",
      "Contact: Palace Road, Rajpipla, Dist. Narmada, Gujarat",
      "Phone: (02640) 220345, Email: rajpipla@rajvantpalace.com"
    ],
    restoration: [
      "Heritage Preservation: Efforts to restore and maintain palace",
      "International Resort Plans: Converting to international-class resort",
      "Tourism Development: Promoting heritage tourism in the region",
      "Cultural Significance: Preserving 600-year Gohil dynasty legacy",
      "Architectural Conservation: Maintaining original European character",
      "Historical Documentation: Preserving royal achievements and timeline"
    ]
  }
};

// AI Response Generator
export class ChatbotService {
  private static generateId(): string {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  }

  private static getCurrentTime(): string {
    return new Date().toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  }

  private static findMatchingContent(query: string, category: { [key: string]: string[] | string }): string[] {
    const results: string[] = [];
    const searchTerms = query.toLowerCase().split(' ');
    
    Object.values(category).forEach((items: string[] | string) => {
      if (Array.isArray(items)) {
        items.forEach((item: string) => {
          if (searchTerms.some(term => item.toLowerCase().includes(term))) {
            results.push(item);
          }
        });
      }
    });
    
    return results;
  }

  private static generateResponse(query: string): ChatbotResponse {
    const lowerQuery = query.toLowerCase();
    
    // Site Features and Navigation
    if (lowerQuery.includes('audio tour') || lowerQuery.includes('audio') || lowerQuery.includes('listen') || lowerQuery.includes('narration')) {
      const audioContent = this.findMatchingContent(query, palaceKnowledge.siteFeatures.audioTour);
      return {
        message: `The Audio Tour is an immersive guided experience of Vijay Palace! ${audioContent.length > 0 ? audioContent[0] : "You can listen to professional narration in English, Hindi, or Gujarati while exploring the palace. The tour includes detailed information about the palace's history, architecture, and cultural significance."} You can access it from the main navigation menu. Would you like to know more about the audio tour features?`,
        suggestions: ["How do I start the audio tour?", "What languages are available?", "Can I download the audio?", "Tell me about the audio tour features"]
      };
    }
    
    if (lowerQuery.includes('open audio tour') || lowerQuery.includes('start audio tour') || lowerQuery.includes('go to audio tour')) {
      return {
        message: `To access the Audio Tour, simply click on "Audio Tour" in the main navigation menu at the top of the page. The audio tour offers professional narration in English, Hindi, and Gujarati, with features like volume control, download options, and progress tracking. You can also use the direct link: /audio-tour`,
        suggestions: ["What languages are available?", "How do I control the volume?", "Can I download the audio files?", "Tell me about the tour content"]
      };
    }
    
    if (lowerQuery.includes('how to') && (lowerQuery.includes('audio') || lowerQuery.includes('tour'))) {
      return {
        message: `Here's how to use the Audio Tour: 1) Click "Audio Tour" in the navigation menu, 2) Select your preferred language (English, Hindi, or Gujarati), 3) Click the play button to start, 4) Use volume controls to adjust sound, 5) Download the audio for offline listening. The tour provides comprehensive information about the palace's history, architecture, and cultural significance!`,
        suggestions: ["What languages are available?", "How do I download the audio?", "Tell me about the tour content", "How long is the audio tour?"]
      };
    }
    
    if (lowerQuery.includes('languages') || lowerQuery.includes('language') || lowerQuery.includes('hindi') || lowerQuery.includes('gujarati') || lowerQuery.includes('english')) {
      return {
        message: `The Audio Tour is available in three languages: English, Hindi (हिंदी), and Gujarati (ગુજરાતી). You can switch between languages using the dropdown menu in the audio tour section. Each language version provides the same comprehensive content about the palace's history, architecture, and cultural significance, narrated by professional voice artists.`,
        suggestions: ["How do I change the language?", "Can I download in different languages?", "Tell me about the audio tour features", "How do I start the audio tour?"]
      };
    }
    
    if (lowerQuery.includes('download') || lowerQuery.includes('offline') || lowerQuery.includes('save')) {
      return {
        message: `Yes! You can download the audio tour files for offline listening. In the Audio Tour section, you'll find a download button that allows you to save the audio files to your device. This is perfect for listening during your actual visit to the palace or when you don't have internet access. The downloaded files are high-quality MP3 format.`,
        suggestions: ["How do I download the audio?", "What format are the audio files?", "Can I download in different languages?", "How much space do the files take?"]
      };
    }
    
    if (lowerQuery.includes('virtual tour') || lowerQuery.includes('virtual') || lowerQuery.includes('360') || lowerQuery.includes('panoramic')) {
      const virtualContent = this.findMatchingContent(query, palaceKnowledge.siteFeatures.virtualTour);
      return {
        message: `The Virtual Tour provides a 360-degree immersive experience of Vijay Palace! ${virtualContent.length > 0 ? virtualContent[0] : "You can explore different rooms and areas of the palace with interactive navigation and detailed information about each space."} It's perfect for getting a comprehensive view of the palace before or after your visit.`,
        suggestions: ["How do I access the virtual tour?", "What rooms can I explore?", "Tell me about the interactive features", "Can I see the palace grounds?"]
      };
    }
    
    if (lowerQuery.includes('digital archive') || lowerQuery.includes('archive') || lowerQuery.includes('documents') || lowerQuery.includes('photos')) {
      const archiveContent = this.findMatchingContent(query, palaceKnowledge.siteFeatures.digitalArchive);
      return {
        message: `The Digital Archive contains a rich collection of historical materials! ${archiveContent.length > 0 ? archiveContent[0] : "You can explore royal correspondence, administrative records, vintage photographs, and digital catalogs of palace artifacts."} It's a treasure trove of historical information about the palace and its royal family.`,
        suggestions: ["What documents are available?", "Can I see royal photographs?", "Tell me about the artifact collection", "How do I search the archive?"]
      };
    }
    
    if (lowerQuery.includes('community') || lowerQuery.includes('share') || lowerQuery.includes('discussion') || lowerQuery.includes('reviews')) {
      const communityContent = this.findMatchingContent(query, palaceKnowledge.siteFeatures.community);
      return {
        message: `The Community section connects palace enthusiasts and visitors! ${communityContent.length > 0 ? communityContent[0] : "You can share your experiences, post photos from your visit, participate in discussion forums, and read visitor reviews."} It's a great way to connect with others who share your interest in the palace.`,
        suggestions: ["How do I share my photos?", "Can I ask questions in the forums?", "Tell me about visitor reviews", "How do I join the community?"]
      };
    }
    
    if (lowerQuery.includes('visit') || lowerQuery.includes('tickets') || lowerQuery.includes('hours') || lowerQuery.includes('location') || lowerQuery.includes('address')) {
      const visitContent = this.findMatchingContent(query, palaceKnowledge.siteFeatures.visit);
      return {
        message: `Planning your visit to Vijay Palace? ${visitContent.length > 0 ? visitContent[0] : "You can find all the practical information you need including opening hours, ticket prices, location details, and contact information."} The Visit section has everything you need to plan your perfect palace experience.`,
        suggestions: ["What are the opening hours?", "How much do tickets cost?", "Where is the palace located?", "How do I contact the palace?"]
      };
    }
    
    if (lowerQuery.includes('navigation') || lowerQuery.includes('menu') || lowerQuery.includes('pages') || lowerQuery.includes('sections')) {
      return {
        message: `The website has several main sections to explore: Audio Tour (multi-language guided experience), Virtual Tour (360-degree exploration), Digital Archive (historical documents and photos), Community (visitor interactions), Visit (practical information), and AI Guide (this chatbot). Each section offers unique ways to experience and learn about Vijay Palace!`,
        suggestions: ["Tell me about the audio tour", "How do I access the virtual tour?", "What's in the digital archive?", "How do I join the community?"]
      };
    }
    
    // History and Rulers
    if (lowerQuery.includes('history') || lowerQuery.includes('ruler') || lowerQuery.includes('dynasty') || lowerQuery.includes('maharaja')) {
      const historyContent = this.findMatchingContent(query, palaceKnowledge.history);
      return {
        message: `The Gohil Rajput dynasty ruled Rajpipla for 600 years from the 14th century until 1948! ${historyContent.length > 0 ? historyContent[0] : "The most notable ruler was Maharaja Vijaysinhji, the last ruler who commissioned Vijay Palace in 1910. He was a progressive leader who introduced free education, healthcare, and infrastructure development. His horse Windsor Lad won the Epsom Derby in 1934 - the only Indian owner to achieve this feat!"} Would you like to know about his achievements or the dynasty's legacy?`,
        suggestions: ["Tell me about Maharaja Vijaysinhji's achievements", "What was the Epsom Derby victory?", "Tell me about the 600-year dynasty", "What reforms did he introduce?"]
      };
    }
    
    if (lowerQuery.includes('epsom derby') || lowerQuery.includes('windsor lad') || lowerQuery.includes('racing') || lowerQuery.includes('horse')) {
      return {
        message: `Maharaja Vijaysinhji achieved an incredible feat in 1934 when his horse Windsor Lad won the prestigious Epsom Derby! This made him the only Indian owner to ever win this famous British horse race. He maintained the finest stables in both India and England and was an avid polo player. The palace banquet hall displays historic photographs of his racing achievements!`,
        suggestions: ["Tell me about his polo achievements", "What other sports did he play?", "Tell me about the royal stables", "What reforms did he introduce?"]
      };
    }
    
    if (lowerQuery.includes('gohil') || lowerQuery.includes('600 years') || lowerQuery.includes('dynasty')) {
      return {
        message: `The Gohil Rajput dynasty ruled Rajpipla for an impressive 600 years from the 14th century until 1948! This makes it one of the longest-ruling dynasties in Indian history. The dynasty was known for its progressive policies, architectural patronage, and cultural heritage. Maharaja Vijaysinhji was the last ruler who commissioned Vijay Palace in 1910, blending Indian tradition with European influences.`,
        suggestions: ["Tell me about the dynasty's achievements", "What was their legacy?", "Tell me about Maharaja Vijaysinhji", "What happened after 1948?"]
      };
    }
    
    // Architecture
    if (lowerQuery.includes('architecture') || lowerQuery.includes('building') || lowerQuery.includes('design') || lowerQuery.includes('style') || lowerQuery.includes('durbar') || lowerQuery.includes('room')) {
      const archContent = this.findMatchingContent(query, palaceKnowledge.architecture);
      return {
        message: `Vijay Palace is an architectural masterpiece that resembles an Italian villa! ${archContent.length > 0 ? archContent[0] : "Built in 1910, it features a classical colonnaded semi-circular portico, Corinthian pillars, Gothic arches, and European domes. The palace is set in seven acres of formal gardens with views of the Karjan River and Satpura hills. It's built with finest Italian marble and Burma teak!"} Each room showcases different architectural influences!`,
        suggestions: ["Tell me about the Italian villa style", "What materials were used?", "Show me the formal gardens", "Tell me about the portico and pillars"]
      };
    }
    
    if (lowerQuery.includes('italian') || lowerQuery.includes('villa') || lowerQuery.includes('portico') || lowerQuery.includes('corinthian')) {
      return {
        message: `Vijay Palace is designed in Italian villa style with a classical colonnaded semi-circular portico at the entrance! It features Corinthian pillars, Gothic arches, and European domes. The forecourt has an Italianate fountain surrounded by palm trees. The palace was built with the finest Italian marble and Burma teak, creating a perfect blend of European elegance and Indian grandeur.`,
        suggestions: ["Tell me about the materials used", "What about the gardens?", "Show me the interior design", "Tell me about the construction timeline"]
      };
    }
    
    if (lowerQuery.includes('garden') || lowerQuery.includes('landscape') || lowerQuery.includes('seven acres') || lowerQuery.includes('karjan')) {
      return {
        message: `The palace is set in seven acres of meticulously landscaped formal gardens designed by a professional landscape architect! The gardens offer picturesque views of the Karjan River and the Satpura hills. The forecourt features an Italianate fountain surrounded by palm trees, creating a stunning European-style landscape that complements the palace's architecture.`,
        suggestions: ["Tell me about the river views", "What about the hills?", "Show me the fountain", "Tell me about the garden design"]
      };
    }
    
    if (lowerQuery.includes('marble') || lowerQuery.includes('teak') || lowerQuery.includes('materials') || lowerQuery.includes('frescoes')) {
      return {
        message: `Vijay Palace was built with the finest materials available! It features Italian marble throughout, Burma teak for furniture and structural elements, and beautiful frescoes by Polish artist Armande Herman Vallee Wolinski. The palace also includes European statuary and intricate stone carvings, creating a luxurious blend of materials and artistic elements.`,
        suggestions: ["Tell me about the frescoes", "What about the European statuary?", "Show me the stone carvings", "Tell me about the construction quality"]
      };
    }
    
    // Culture and Arts
    if (lowerQuery.includes('culture') || lowerQuery.includes('festival') || lowerQuery.includes('art') || lowerQuery.includes('music') || lowerQuery.includes('dance') || lowerQuery.includes('ceremony')) {
      const cultureContent = this.findMatchingContent(query, palaceKnowledge.culture);
      return {
        message: `The palace was a center of cultural excellence! ${cultureContent.length > 0 ? cultureContent[0] : "Royal festivals like Navratri and Diwali were celebrated with grandeur. The Durbar Hall hosted classical music performances and traditional folk dances."} The royal family was known for their patronage of the arts!`,
        suggestions: ["What festivals were celebrated?", "Tell me about royal ceremonies", "Show me the art collection", "What music was performed?"]
      };
    }
    
    // Daily Life
    if (lowerQuery.includes('daily') || lowerQuery.includes('life') || lowerQuery.includes('lifestyle') || lowerQuery.includes('food') || lowerQuery.includes('cuisine') || lowerQuery.includes('entertainment')) {
      const lifeContent = this.findMatchingContent(query, palaceKnowledge.dailyLife);
      return {
        message: `Royal life at Vijay Palace was a blend of tradition and luxury! ${lifeContent.length > 0 ? lifeContent[0] : "The royal family followed a structured daily routine with morning prayers, administrative meetings, and evening cultural performances. Polo matches and hunting expeditions were popular pastimes."} The palace kitchen served both traditional Indian and European cuisine!`,
        suggestions: ["Tell me about royal cuisine", "What entertainment was available?", "How did the royal family spend their day?", "Tell me about palace staff"]
      };
    }
    
    // General Palace Information
    if (lowerQuery.includes('palace') || lowerQuery.includes('vijay') || lowerQuery.includes('rajvant') || lowerQuery.includes('rajpipla')) {
      return {
        message: `Welcome to Vijay Palace, also known as Rajvant Palace! This magnificent heritage site was commissioned by Maharaja Vijaysinhji and represents a perfect fusion of Indian tradition and European elegance. The palace overlooks the Karjan River and features stunning architecture, royal history, and cultural significance. What would you like to explore?`,
        suggestions: ["Tell me about the palace history", "Show me the architecture", "What can I see here?", "Tell me about the royal family"]
      };
    }
    
    // Current Status and Resort
    if (lowerQuery.includes('resort') || lowerQuery.includes('hotel') || lowerQuery.includes('accommodation') || lowerQuery.includes('stay') || lowerQuery.includes('visit')) {
      const resortContent = this.findMatchingContent(query, palaceKnowledge.currentStatus.resort);
      return {
        message: `Vijay Palace now operates as the Rajvant Palace Resort! ${resortContent.length > 0 ? resortContent[0] : "It offers a unique opportunity to experience royal grandeur while enjoying modern amenities. The resort has been used as a filming location for numerous films and television series. You can contact them at (02640) 220345 or email rajpipla@rajvantpalace.com."} It's located on Palace Road, Rajpipla, Dist. Narmada, Gujarat.`,
        suggestions: ["How do I book accommodation?", "Tell me about the filming history", "What amenities are available?", "How do I contact the resort?"]
      };
    }
    
    if (lowerQuery.includes('filming') || lowerQuery.includes('movies') || lowerQuery.includes('television') || lowerQuery.includes('location')) {
      return {
        message: `Vijay Palace has served as a filming location for numerous films and television series over the years! The palace's stunning architecture, seven-acre gardens, and royal ambiance make it a perfect backdrop for period dramas and historical productions. The heritage complex, including the adjoining mansion built in 1917, provides various settings for different scenes.`,
        suggestions: ["Tell me about the resort facilities", "What about the palace architecture?", "How do I visit the palace?", "Tell me about the heritage preservation"]
      };
    }
    
    if (lowerQuery.includes('restoration') || lowerQuery.includes('preservation') || lowerQuery.includes('heritage') || lowerQuery.includes('future')) {
      return {
        message: `There are ongoing efforts to restore and preserve Vijay Palace as a heritage monument! Plans include converting it into an international-class resort while maintaining its historical character. The restoration aims to preserve the 600-year Gohil dynasty legacy and promote heritage tourism in the region. The palace's original European character and architectural features are being carefully maintained.`,
        suggestions: ["Tell me about the current resort", "What about the architectural conservation?", "How can I support preservation?", "Tell me about the tourism development"]
      };
    }
    
    // Default response
    return {
      message: `I'd be happy to help you learn about Vijay Palace! The palace has a rich history spanning 600 years of Gohil dynasty rule, stunning Italian villa architecture, and fascinating cultural heritage. Maharaja Vijaysinhji's achievements include winning the Epsom Derby in 1934! What specific aspect interests you most?`,
      suggestions: ["Tell me about the 600-year dynasty", "Show me the Italian villa architecture", "What about the Epsom Derby victory?", "Tell me about the current resort"]
    };
  }

  static async sendMessage(userMessage: string): Promise<ChatMessage> {
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    const response = this.generateResponse(userMessage);
    
    return {
      id: this.generateId(),
      type: 'ai',
      message: response.message,
      timestamp: this.getCurrentTime()
    };
  }

  static createUserMessage(message: string): ChatMessage {
    return {
      id: this.generateId(),
      type: 'user',
      message,
      timestamp: this.getCurrentTime()
    };
  }

  static getQuickQuestions(): string[] {
    return [
      "What is the audio tour?",
      "How do I open the audio tour?",
      "Tell me about the 600-year Gohil dynasty",
      "What about the Epsom Derby victory?",
      "Tell me about the Italian villa architecture",
      "What materials were used in construction?",
      "Show me the seven-acre formal gardens",
      "Tell me about Maharaja Vijaysinhji's achievements",
      "What about the royal stables and polo?",
      "Tell me about the current resort",
      "How do I book accommodation?",
      "What about the filming history?",
      "Tell me about the frescoes and art",
      "What about the palace restoration?",
      "How do I access the virtual tour?",
      "What's in the digital archive?"
    ];
  }

  static getConversationTopics() {
    return [
      {
        category: "Site Features",
        topics: ["Audio Tour", "Virtual Tour", "Digital Archive", "Community", "Visit Info"],
        color: "bg-indigo-100 text-indigo-800"
      },
      {
        category: "History & Dynasty",
        topics: ["600-Year Gohil Dynasty", "Epsom Derby Victory", "Maharaja Vijaysinhji", "Progressive Reforms"],
        color: "bg-blue-100 text-blue-800"
      },
      {
        category: "Architecture & Design",
        topics: ["Italian Villa Style", "Seven-Acre Gardens", "Italian Marble", "Frescoes & Art"],
        color: "bg-green-100 text-green-800"
      },
      {
        category: "Royal Achievements",
        topics: ["Polo Champion", "Horse Racing", "Royal Stables", "Racing Photographs"],
        color: "bg-purple-100 text-purple-800"
      },
      {
        category: "Current Status",
        topics: ["Rajvant Palace Resort", "Filming Location", "Heritage Preservation", "Tourism Development"],
        color: "bg-orange-100 text-orange-800"
      }
    ];
  }
}
