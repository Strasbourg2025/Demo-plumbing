
import React, { useState, useRef, useEffect } from 'react';
import { getDesignAdvice } from '../services/geminiService';
import { Message } from '../types';

const AIDesignAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hello! I am your Plumbing & System Assistant. How can I help you plan your home systems or address a plumbing need today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const advice = await getDesignAdvice(messages, userMsg);
    setMessages(prev => [...prev, { role: 'model', text: advice }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform ring-4 ring-white"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-neutral-100">
          <div className="p-6 bg-neutral-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect></svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-widest">Plumbing AI</h4>
                <p className="text-[10px] text-white/60 uppercase tracking-widest">Robert's Digital Assistant</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed font-dm-sans ${m.role === 'user' ? 'bg-neutral-900 text-white rounded-br-none' : 'bg-white border border-neutral-100 text-neutral-800 rounded-bl-none shadow-sm'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-neutral-100 p-3 rounded-2xl flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 animate-bounce"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-neutral-100">
            <div className="flex gap-2">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about tankless upgrades..."
                className="flex-1 bg-neutral-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-neutral-900 focus:outline-none font-dm-sans"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center disabled:opacity-50 transition-all hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIDesignAssistant;
