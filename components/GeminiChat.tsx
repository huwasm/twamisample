import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

const GeminiChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'model', text: 'Hi! I can help you reflect on "The Power of Now". Ask me anything about the chapter.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // In a real app, ensure process.env.API_KEY is defined.
      // Assuming the environment variable is available as per instructions.
      const apiKey = process.env.API_KEY || '';
      
      if (!apiKey) {
        throw new Error("API Key not found");
      }

      const ai = new GoogleGenAI({ apiKey });
      const model = 'gemini-2.5-flash';

      const response = await ai.models.generateContent({
        model,
        contents: [
            {
                role: 'user',
                parts: [{ text: `Context: The user is reading 'The Power of Now' by Eckhart Tolle.
                
                User Query: ${input}` }]
            }
        ],
        config: {
          systemInstruction: "You are a helpful reading assistant for the book 'The Power of Now'. Keep answers concise, mindful, and insightful.",
        }
      });

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: response.text || "I'm contemplating that..."
      };

      setMessages(prev => [...prev, aiMessage]);

    } catch (error) {
      console.error("Gemini Error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "I'm having trouble connecting to the universal mind right now. Please check your API key or try again later."
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#112217]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`flex items-start max-w-[85%] gap-2 rounded-lg p-3 ${
                msg.role === 'user'
                  ? 'bg-[#13ec5b] text-[#112217]'
                  : 'bg-[#193322] text-white'
              }`}
            >
                <div className="mt-1 shrink-0">
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
              <p className="text-sm leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
            <div className="flex justify-start">
                <div className="bg-[#193322] p-3 rounded-lg text-[#92c9a4] text-sm animate-pulse">
                    Thinking...
                </div>
            </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-[#112217] border-t border-[#326744]">
        <div className="flex items-center gap-2 bg-[#23482f] rounded-full px-4 py-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about this chapter..."
            className="flex-1 bg-transparent border-none text-white placeholder-[#92c9a4] focus:ring-0 text-sm"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="text-[#13ec5b] disabled:text-[#92c9a4] p-1"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeminiChat;