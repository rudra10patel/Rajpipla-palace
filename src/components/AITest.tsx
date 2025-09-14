import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { geminiChatService } from '@/lib/gemini';

export const AITest = () => {
  const [testResult, setTestResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const testAPI = async () => {
    setIsLoading(true);
    setError('');
    setTestResult('');

    try {
      console.log('Testing API connection...');
      const response = await geminiChatService.sendMessage('Hello, can you tell me about Rajpipla Palace?');
      setTestResult(response);
      console.log('API test successful:', response);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMessage);
      console.error('API test failed:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>AI Guide Test</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button 
          onClick={testAPI} 
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? 'Testing...' : 'Test AI Guide'}
        </Button>
        
        {error && (
          <div className="p-4 bg-red-100 border border-red-300 rounded-md">
            <h3 className="font-semibold text-red-800">Error:</h3>
            <p className="text-red-700">{error}</p>
          </div>
        )}
        
        {testResult && (
          <div className="p-4 bg-green-100 border border-green-300 rounded-md">
            <h3 className="font-semibold text-green-800">Success:</h3>
            <p className="text-green-700">{testResult}</p>
          </div>
        )}
        
        <div className="text-sm text-gray-600">
          <p><strong>API Key Status:</strong> {import.meta.env.VITE_GEMINI_API_KEY ? '✅ Configured' : '❌ Missing'}</p>
          <p><strong>Environment:</strong> {import.meta.env.MODE}</p>
        </div>
      </CardContent>
    </Card>
  );
};
