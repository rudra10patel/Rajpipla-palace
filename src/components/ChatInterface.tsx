import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Send, 
  Mic, 
  MicOff,
  Bot, 
  User, 
  Loader2,
  Volume2,
  VolumeX,
  RotateCcw,
  ThumbsUp,
  ThumbsDown
} from "lucide-react";
import { ChatbotService, ChatMessage } from '@/services/chatbotService';

interface ChatInterfaceProps {
  className?: string;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ className }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'ai',
      message: "Namaste! I'm Rajpipla, your AI heritage guide. I know everything about this magnificent palace. What would you like to explore today?",
      timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const speechSynthesis = window.speechSynthesis;

  // Removed auto-scroll to prevent unwanted scrolling behavior
  // Users can manually scroll to see new messages

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Listen for quick question events from sidebar
  useEffect(() => {
    const handleQuickQuestion = (event: CustomEvent) => {
      const question = event.detail;
      setInputMessage(question);
      setShowSuggestions(false);
      inputRef.current?.focus();
    };

    window.addEventListener('quickQuestion', handleQuickQuestion as EventListener);
    return () => {
      window.removeEventListener('quickQuestion', handleQuickQuestion as EventListener);
    };
  }, []);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = ChatbotService.createUserMessage(inputMessage);
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    setShowSuggestions(false);

    try {
      const aiResponse = await ChatbotService.sendMessage(inputMessage);
      setMessages(prev => [...prev, aiResponse]);
      
      // Speak the response if not muted
      if (!isMuted && speechSynthesis) {
        const utterance = new SpeechSynthesisUtterance(aiResponse.message);
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.volume = 0.8;
        speechSynthesis.speak(utterance);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: ChatMessage = {
        id: Date.now().toString(),
        type: 'ai',
        message: "I apologize, but I'm having trouble processing your request right now. Please try again in a moment.",
        timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Voice input is not supported in this browser. Please use Chrome or Edge.');
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInputMessage(transcript);
      setIsListening(false);
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        type: 'ai',
        message: "Namaste! I'm Rajpipla, your AI heritage guide. I know everything about this magnificent palace. What would you like to explore today?",
        timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
      }
    ]);
    setShowSuggestions(true);
  };

  const toggleMute = () => {
    if (isMuted) {
      speechSynthesis.cancel();
    } else {
      speechSynthesis.cancel();
    }
    setIsMuted(!isMuted);
  };

  const quickQuestions = ChatbotService.getQuickQuestions();

  return (
    <Card className={`bg-card/80 backdrop-blur-sm border-heritage-stone/20 h-[600px] flex flex-col ${className}`}>
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
            <Button 
              variant="palace" 
              size="sm" 
              onClick={toggleMute}
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </Button>
            <Button 
              variant="palace" 
              size="sm" 
              onClick={clearChat}
              title="Clear Chat"
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      {/* Chat Messages */}
      <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
              <div className={`flex items-start gap-3 ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <Avatar className="w-8 h-8 flex-shrink-0">
                  {message.type === 'ai' ? (
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
                  message.type === 'user' 
                    ? 'bg-heritage-royal text-heritage-cream' 
                    : 'bg-heritage-cream border border-heritage-stone/20'
                }`}>
                  <p className="text-sm whitespace-pre-wrap">{message.message}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className={`text-xs ${
                      message.type === 'user' ? 'text-heritage-cream/70' : 'text-muted-foreground'
                    }`}>
                      {message.timestamp}
                    </p>
                    {message.type === 'ai' && (
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <ThumbsUp className="w-3 h-3" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <ThumbsDown className="w-3 h-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-heritage-royal text-heritage-cream">
                  <Bot className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
              <div className="bg-heritage-cream border border-heritage-stone/20 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm text-muted-foreground">Rajpipla is thinking...</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </CardContent>
      
      {/* Quick Questions */}
      {showSuggestions && messages.length === 1 && (
        <div className="px-6 pb-4">
          <div className="text-sm text-muted-foreground mb-3">Quick questions to get started:</div>
          <div className="flex flex-wrap gap-2">
            {quickQuestions.slice(0, 6).map((question, index) => (
              <Badge
                key={index}
                variant="outline"
                className="cursor-pointer hover:bg-heritage-royal hover:text-heritage-cream transition-colors text-xs"
                onClick={() => handleQuickQuestion(question)}
              >
                {question}
              </Badge>
            ))}
          </div>
        </div>
      )}
      
      {/* Message Input */}
      <div className="flex-shrink-0 p-4 border-t border-heritage-stone/20">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about Rajpipla Palace..."
            className="flex-1 p-3 border border-heritage-stone/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-heritage-royal/20 bg-background"
            disabled={isLoading}
          />
          <Button 
            variant={isListening ? "heritage" : "palace"} 
            size="icon"
            onClick={handleVoiceInput}
            disabled={isLoading}
            title="Voice Input"
          >
            {isListening ? (
              <MicOff className="w-4 h-4 animate-pulse" />
            ) : (
              <Mic className="w-4 h-4" />
            )}
          </Button>
          <Button 
            variant="heritage" 
            size="icon" 
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isLoading}
            title="Send Message"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>
    </Card>
  );
};
