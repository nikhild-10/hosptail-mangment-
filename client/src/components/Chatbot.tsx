'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Settings, Sparkles, Bot, User, Trash2 } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
    id: string;
    role: 'user' | 'model';
    text: string;
    timestamp: number;
}

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [apiKey, setApiKey] = useState('');
    const [showSettings, setShowSettings] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Initial message
    const welcomeMessage: Message = {
        id: 'welcome',
        role: 'model',
        text: "Hello! I'm your HealWaitless AI assistant. How can I help you today?",
        timestamp: Date.now()
    };

    useEffect(() => {
        const storedKey = localStorage.getItem('gemini_api_key');
        if (storedKey) {
            setApiKey(storedKey);
        } else {
            setShowSettings(true); // Show settings if no key found initially
        }

        // Load messages from local storage or set welcome
        const storedMessages = localStorage.getItem('chat_history');
        if (storedMessages) {
            try {
                setMessages(JSON.parse(storedMessages));
            } catch (e) {
                setMessages([welcomeMessage]);
            }
        } else {
            setMessages([welcomeMessage]);
        }
    }, []);

    useEffect(() => {
        if (messages.length > 0) {
            localStorage.setItem('chat_history', JSON.stringify(messages));
            scrollToBottom();
        }
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSaveKey = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.setItem('gemini_api_key', apiKey);
        setShowSettings(false);
        setError(null);
    };

    const clearHistory = () => {
        setMessages([welcomeMessage]);
        localStorage.removeItem('chat_history');
        setIsOpen(false); // Close to reset view somewhat
        setTimeout(() => setIsOpen(true), 100);
    };

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || !apiKey) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            text: input.trim(),
            timestamp: Date.now()
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);
        setError(null);

        try {
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });

            const history = messages.map(m => ({
                role: m.role,
                parts: [{ text: m.text }]
            }));

            const chat = model.startChat({
                history: history,
            });

            const result = await chat.sendMessage(userMessage.text);
            const response = result.response;
            const text = response.text();

            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'model',
                text: text,
                timestamp: Date.now()
            };

            setMessages(prev => [...prev, botMessage]);
        } catch (err: any) {
            console.error("Gemini Error:", err);
            setError(err.message || "Failed to get response. Please check your API Key.");
            setShowSettings(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 p-4 rounded-full shadow-2xl transition-all duration-300 z-50 flex items-center justify-center ${isOpen ? 'bg-red-500 rotate-90' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-110'}`}
            >
                {isOpen ? <X className="text-white" size={24} /> : <MessageSquare className="text-white" size={24} />}
            </button>

            {/* Chat Window */}
            <div className={`fixed bottom-24 right-6 w-[90vw] md:w-[400px] bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 transition-all duration-300 origin-bottom-right flex flex-col overflow-hidden max-h-[80vh] ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>

                {/* Header */}
                <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Bot size={20} />
                        <h3 className="font-bold">HealWaitless AI</h3>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={clearHistory} className="p-1.5 hover:bg-white/20 rounded-lg transition-colors" title="Clear History">
                            <Trash2 size={16} />
                        </button>
                        <button onClick={() => setShowSettings(!showSettings)} className="p-1.5 hover:bg-white/20 rounded-lg transition-colors" title="Settings">
                            <Settings size={18} />
                        </button>
                    </div>
                </div>

                {/* Settings Overlay */}
                {showSettings && (
                    <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col justify-center p-6 space-y-4 animate-fade-in-up">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Sparkles size={24} />
                            </div>
                            <h4 className="font-bold text-slate-900">Configure AI</h4>
                            <p className="text-sm text-slate-500">Enter your Gemini API Key to enable chat.</p>
                        </div>
                        <form onSubmit={handleSaveKey} className="space-y-4">
                            <input
                                type="password"
                                value={apiKey}
                                onChange={(e) => setApiKey(e.target.value)}
                                placeholder="Paste API Key here..."
                                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />
                            {error && <p className="text-xs text-red-500 text-center">{error}</p>}
                            <button type="submit" className="w-full py-2.5 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors">
                                Save & Connect
                            </button>
                            <button type="button" onClick={() => setShowSettings(false)} className="w-full py-2 text-slate-500 hover:text-slate-700 text-sm">
                                Cancel
                            </button>
                        </form>
                        <p className="text-xs text-slate-400 text-center">Your key is stored locally in your browser.</p>
                    </div>
                )}

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 min-h-[300px]">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                            <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-slate-200 text-slate-600' : 'bg-blue-100 text-blue-600'}`}>
                                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                            </div>
                            <div className={`max-w-[80%] rounded-2xl p-3 text-sm ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm'}`}>
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {msg.text}
                                </ReactMarkdown>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                                <Bot size={16} />
                            </div>
                            <div className="bg-white border border-slate-200 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm">
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-100">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={apiKey ? "Type a message..." : "Please configure API key first"}
                            disabled={!apiKey || isLoading}
                            className="flex-1 px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-slate-50 disabled:text-slate-400"
                        />
                        <button
                            type="submit"
                            disabled={!input.trim() || !apiKey || isLoading}
                            className="p-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
                        >
                            <Send size={20} />
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
