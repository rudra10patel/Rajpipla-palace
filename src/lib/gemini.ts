import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI('AIzaSyASb4jrGs-Q-dKcFSfbDLLP5A5-p2dpMw0');
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
      
      // Generate response with timeout
      const result = await Promise.race([
        model.generateContent(conversationContext),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Request timeout after 30 seconds')), 30000)
        )
      ]) as { response: { text: () => string } };
      
      const response = await result.response;
      const aiMessage = response.text();

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
