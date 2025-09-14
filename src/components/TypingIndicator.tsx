import { Avatar } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Bot } from 'lucide-react';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex justify-start mb-4">
      <div className="flex items-start space-x-3 max-w-[80%]">
        <Avatar className="w-8 h-8 flex-shrink-0">
          <div className="w-full h-full bg-heritage-gold rounded-full flex items-center justify-center">
            <Bot className="w-4 h-4 text-heritage-royal" />
          </div>
        </Avatar>
        
        <Card className="bg-card/80 backdrop-blur-sm border-heritage-stone/20">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Rajpipla is typing</span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-heritage-royal rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-heritage-royal rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-heritage-royal rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
