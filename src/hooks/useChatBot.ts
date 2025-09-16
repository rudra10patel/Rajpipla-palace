import { useState, useRef, useCallback } from 'react';
import { geminiChatService, type ChatMessage } from '@/lib/gemini';

export const useChatBot = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState('English');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await geminiChatService.sendMessage(content);
      setMessages(prev => [...prev, ...geminiChatService.getChatHistory().slice(-2)]);
      scrollToBottom();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setIsConnected(false);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, scrollToBottom]);

  const handleVoiceInput = useCallback(() => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setError('Voice input is not supported in this browser');
      return;
    }

    const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsLoading(true);
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      sendMessage(transcript);
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      setError('Voice recognition error: ' + event.error);
      setIsLoading(false);
    };

    recognition.onend = () => {
      setIsLoading(false);
    };

    recognition.start();
  }, [sendMessage]);

  const handleSpeakMessage = useCallback((message: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(message);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      utterance.pitch = 1;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      
      speechSynthesis.speak(utterance);
    }
  }, []);

  const handleQuickQuestion = useCallback((question: string) => {
    sendMessage(question);
  }, [sendMessage]);

  const clearChat = useCallback(() => {
    geminiChatService.clearHistory();
    setMessages([]);
    setError(null);
    setIsConnected(true);
  }, []);

  const exportChat = useCallback(() => {
    const chatData = {
      messages: messages,
      timestamp: new Date().toISOString(),
      language: currentLanguage
    };
    
    const blob = new Blob([JSON.stringify(chatData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `rajpipla-chat-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [messages, currentLanguage]);

  const importChat = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const chatData = JSON.parse(e.target?.result as string);
        if (chatData.messages && Array.isArray(chatData.messages)) {
          setMessages(chatData.messages);
          setCurrentLanguage(chatData.language || 'English');
        }
      } catch (err) {
        setError('Invalid chat file format');
      }
    };
    reader.readAsText(file);
  }, []);

  return {
    messages,
    isLoading,
    error,
    isConnected,
    currentLanguage,
    isSpeaking,
    messagesEndRef,
    sendMessage,
    handleVoiceInput,
    handleSpeakMessage,
    handleQuickQuestion,
    clearChat,
    exportChat,
    importChat,
    setCurrentLanguage
  };
};
