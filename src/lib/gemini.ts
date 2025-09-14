import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI with environment variable
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// System prompt for Rajpipla Palace AI Guide
const SYSTEM_PROMPT = `You are an AI Heritage Guide for Rajpipla Palace, a magnificent historical palace in Gujarat, India. You are knowledgeable about:

- Rajpipla Palace's rich history and architecture
- The Gohil dynasty and royal heritage
- Palace construction phases (1915-1939)
- Architectural features (Romanesque dome, Corinthian columns, Gothic arches)
- Cultural significance and heritage preservation
- Local attractions and tourism information
- Historical events and royal traditions

Always respond in a helpful, informative, and engaging manner. Provide accurate historical information and be enthusiastic about sharing the palace's heritage. If asked about topics outside Rajpipla Palace, politely redirect the conversation back to the palace and its history.

Keep responses concise but informative, and feel free to ask follow-up questions to engage visitors.`;

export interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export class GeminiChatService {
  private conversationHistory: ChatMessage[] = [];

  async sendMessage(userMessage: string): Promise<string> {
    // Validate API key
    if (!import.meta.env.VITE_GEMINI_API_KEY) {
      console.error('API key not configured');
      throw new Error('API key not configured. Please check your environment variables.');
    }

    console.log('Sending message to Gemini:', userMessage);
    
    try {
      // Add user message to history
      const userMsg: ChatMessage = {
        id: Date.now().toString(),
        content: userMessage,
        role: 'user',
        timestamp: new Date()
      };
      this.conversationHistory.push(userMsg);

      // Build conversation context
      const conversationContext = this.buildConversationContext();
      console.log('Conversation context built, length:', conversationContext.length);
      
      // Generate response with timeout
      const result = await Promise.race([
        model.generateContent(conversationContext),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Request timeout after 30 seconds')), 30000)
        )
      ]) as { response: { text: () => string } };
      
      const response = await result.response;
      const aiMessage = response.text();
      console.log('Received response from Gemini:', aiMessage);

      // Add AI response to history
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: aiMessage,
        role: 'assistant',
        timestamp: new Date()
      };
      this.conversationHistory.push(aiMsg);

      return aiMessage;
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      
      // Provide more specific error messages
      if (error instanceof Error) {
        if (error.message.includes('API key')) {
          throw new Error('Invalid API key. Please check your configuration.');
        } else if (error.message.includes('timeout')) {
          throw new Error('Request timed out. Please try again.');
        } else if (error.message.includes('quota')) {
          throw new Error('API quota exceeded. Please try again later.');
        }
      }
      
      throw new Error('Sorry, I encountered an error. Please try again.');
    }
  }

  private buildConversationContext(): string {
    let context = SYSTEM_PROMPT + '\n\n';
    
    // Add recent conversation history (last 10 messages)
    const recentHistory = this.conversationHistory.slice(-10);
    recentHistory.forEach(msg => {
      context += `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}\n`;
    });
    
    return context;
  }

  getChatHistory(): ChatMessage[] {
    return [...this.conversationHistory];
  }

  clearHistory(): void {
    this.conversationHistory = [];
  }

  setLanguage(language: string): void {
    // Language setting can be implemented here if needed
    console.log('Language set to:', language);
  }
}

// Export singleton instance
export const geminiChatService = new GeminiChatService();
