import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChatInterface } from "@/components/ChatInterface";
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
import { ChatbotService } from "@/services/chatbotService";

// Get dynamic data from chatbot service
const quickQuestions = ChatbotService.getQuickQuestions();
const conversationTopics = ChatbotService.getConversationTopics();



const AIGuide = () => {

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
            <Button 
              variant="palace" 
              size="xl"
              onClick={() => {
                // Scroll to the chat interface
                const chatInterface = document.querySelector('[data-chat-interface]');
                if (chatInterface) {
                  chatInterface.scrollIntoView({ behavior: 'smooth' });
                  // Focus on the input field
                  setTimeout(() => {
                    const input = chatInterface.querySelector('input[type="text"]');
                    if (input) {
                      (input as HTMLInputElement).focus();
                    }
                  }, 500);
                }
              }}
            >
              <MessageCircle className="w-5 h-5" />
              Ask a Question
            </Button>
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-2" data-chat-interface>
            <ChatInterface />
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
                {quickQuestions.slice(0, 6).map((question, index) => (
                  <Button
                    key={index}
                    variant="palace"
                    size="sm"
                    className="w-full text-left justify-start h-auto p-3"
                    onClick={() => {
                      // This will be handled by the ChatInterface component
                      const event = new CustomEvent('quickQuestion', { detail: question });
                      window.dispatchEvent(event);
                    }}
                  >
                    <MessageCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{question}</span>
                  </Button>
                ))}
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
                      onClick={() => {
                        const event = new CustomEvent('quickQuestion', { detail: `Tell me about ${topic.toLowerCase()}` });
                        window.dispatchEvent(event);
                      }}
                    >
                      {topic}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AIGuide;