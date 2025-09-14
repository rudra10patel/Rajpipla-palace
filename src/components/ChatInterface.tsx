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
import { useChatBot } from '@/hooks/useChatBot';
import { ChatMessage } from '@/components/ChatMessage';
import { TypingIndicator } from '@/components/TypingIndicator';

interface ChatInterfaceProps {
  className?: string;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ className }) => {
  const [inputMessage, setInputMessage] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  
  const {
    messages,
    isLoading,
    error,
    isConnected,
    isSpeaking,
    messagesEndRef,
    sendMessage,
    handleVoiceInput,
    handleSpeakMessage,
    handleQuickQuestion,
    clearChat
  } = useChatBot();

  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Listen for quick question events from sidebar
  useEffect(() => {
    const handleQuickQuestionEvent = (event: CustomEvent) => {
      const question = event.detail;
      setInputMessage(question);
      setShowSuggestions(false);
      inputRef.current?.focus();
    };

    window.addEventListener('quickQuestion', handleQuickQuestionEvent as EventListener);
    return () => {
      window.removeEventListener('quickQuestion', handleQuickQuestionEvent as EventListener);
    };
  }, []);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    await sendMessage(inputMessage);
    setInputMessage('');
    setShowSuggestions(false);
  };

  const handleQuickQuestionClick = (question: string) => {
    setInputMessage(question);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  const handleVoiceInputClick = () => {
    handleVoiceInput();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      window.speechSynthesis.cancel();
    } else {
      window.speechSynthesis.cancel();
    }
    setIsMuted(!isMuted);
  };

  const quickQuestions = [
    "Tell me about Rajpipla Palace's history",
    "What architectural features does the palace have?",
    "Who built the palace and when?",
    "What can I see during a visit?",
    "Tell me about the royal family",
    "What are the nearby attractions?"
  ];

  return (
    <Card className={`bg-card/80 backdrop-blur-sm border-heritage-stone/20 h-[600px] flex flex-col ${className}`}>
      <CardHeader className="flex-shrink-0 border-b border-heritage-stone/20">
        <div className="flex items-center gap-4">
          <Avatar className="w-12 h-12">
            <AvatarFallback className="bg-heritage-royal text-heritage-cream">
              <Bot className="w-6 h-6" />
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-heritage-royal">Rajpipla AI Guide</CardTitle>
            <CardDescription className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
              {isConnected ? 'Online • AI Powered' : 'Offline • Check Connection'}
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
      
      {/* Error Message */}
      {error && (
        <div className="px-6 py-2 bg-red-100 border-b border-red-200">
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}
      
      {/* Chat Messages */}
      <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.length === 0 && (
          <div className="flex justify-center items-center h-full">
            <div className="text-center">
              <Bot className="w-12 h-12 text-heritage-royal/50 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-heritage-royal mb-2">Welcome to Rajpipla AI Guide!</h3>
              <div className="text-muted-foreground">Ask me anything about the palace's history, architecture, or heritage.</div>
            </div>
          </div>
        )}
        
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            onSpeak={handleSpeakMessage}
            isSpeaking={isSpeaking}
          />
        ))}
        
        {isLoading && <TypingIndicator />}
        
        <div ref={messagesEndRef} />
      </CardContent>
      
      {/* Quick Questions */}
      {showSuggestions && messages.length === 0 && (
        <div className="px-6 pb-4">
          <div className="text-sm text-muted-foreground mb-3">Quick questions to get started:</div>
          <div className="flex flex-wrap gap-2">
            {quickQuestions.slice(0, 6).map((question, index) => (
              <Badge
                key={index}
                variant="outline"
                className="cursor-pointer hover:bg-heritage-royal hover:text-heritage-cream transition-colors text-xs"
                onClick={() => handleQuickQuestionClick(question)}
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
            variant="palace" 
            size="icon"
            onClick={handleVoiceInputClick}
            disabled={isLoading}
            title="Voice Input"
          >
            <Mic className="w-4 h-4" />
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
