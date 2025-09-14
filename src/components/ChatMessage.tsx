import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Bot, User, Volume2, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface ChatMessageProps {
  message: {
    id: string;
    content: string;
    role: 'user' | 'assistant';
    timestamp: Date;
  };
  onSpeak?: (message: string) => void;
  isSpeaking?: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ 
  message, 
  onSpeak, 
  isSpeaking = false 
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex items-start space-x-3 max-w-[80%] ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
        <Avatar className="w-8 h-8 flex-shrink-0">
          {isUser ? (
            <div className="w-full h-full bg-heritage-royal rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          ) : (
            <div className="w-full h-full bg-heritage-gold rounded-full flex items-center justify-center">
              <Bot className="w-4 h-4 text-heritage-royal" />
            </div>
          )}
        </Avatar>
        
        <Card className={`${isUser ? 'bg-heritage-royal text-white' : 'bg-card/80 backdrop-blur-sm border-heritage-stone/20'}`}>
          <CardContent className="p-4">
              <div className="space-y-2">
                <div className="text-sm leading-relaxed whitespace-pre-wrap">
                  {message.content}
                </div>
                
                <div className="flex items-center justify-between text-xs opacity-70">
                  <span>{formatTime(message.timestamp)}</span>
                  
                  <div className="flex items-center space-x-2">
                    {!isUser && onSpeak && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onSpeak(message.content)}
                        disabled={isSpeaking}
                        className="h-6 w-6 p-0 hover:bg-heritage-royal/10"
                      >
                        <Volume2 className={`w-3 h-3 ${isSpeaking ? 'text-heritage-royal' : ''}`} />
                      </Button>
                    )}
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCopy}
                      className="h-6 w-6 p-0 hover:bg-heritage-royal/10"
                    >
                      {copied ? (
                        <Check className="w-3 h-3 text-green-500" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
