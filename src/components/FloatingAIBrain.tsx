import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChatMessage } from '../types';
import { SUGGESTED_AI_PROMPTS } from '../data/osData';
import { useAudioEngine } from './AudioEngine';
import profileImage from '../assets/vanjinathan.png';
import {
    Sparkles,
    Send,
    Bot,
    User,
    RefreshCw,
    X,
    AlertCircle
} from 'lucide-react';

const IDENTITY_KEYWORDS = [
    'who is vanjinathan', 'who is vanji', 'who are you', 'tell me about vanjinathan',
    'tell me about vanji', 'about yourself', 'introduce yourself', 'your profile',
    'your background', 'founder', 'creator', 'who built', 'who made', 'who created',
    'about the developer', 'about the engineer', 'your name', 'vanjinathan s',
    'show profile', 'your identity', 'who designed'
];

const isIdentityQuery = (text: string): boolean => {
    const lower = text.toLowerCase().trim();
    return IDENTITY_KEYWORDS.some(keyword => lower.includes(keyword));
};

export const FloatingAIBrain: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: 'welcome',
            sender: 'ai_brain',
            text: "Greetings. I am the neural AI Brain of VANJI OS. Ask anything about Vanjinathan S.",
            timestamp: new Date().toISOString().substring(11, 16) + ' UTC'
        }
    ]);
    const [input, setInput] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const { playClick, playAccessGranted, playSwoosh } = useAudioEngine();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, loading, isOpen]);

    const handleSendMessage = async (promptText?: string) => {
        const textToSend = promptText || input;
        if (!textToSend.trim() || loading) return;

        playClick();
        const userMsg: ChatMessage = {
            id: Date.now().toString(),
            sender: 'user',
            text: textToSend,
            timestamp: new Date().toISOString().substring(11, 16) + ' UTC'
        };

        setMessages((prev) => [...prev, userMsg]);
        if (!promptText) setInput('');
        setLoading(true);

        try {
            const response = await fetch('/api/ai/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: textToSend,
                    history: messages.slice(-6)
                })
            });

            const data = await response.json();
            playAccessGranted();

            const shouldShowProfile = isIdentityQuery(textToSend);
            const aiMsg: ChatMessage = {
                id: (Date.now() + 1).toString(),
                sender: 'ai_brain',
                text: data.reply || "Processed inquiry successfully.",
                timestamp: new Date().toISOString().substring(11, 16) + ' UTC',
                showProfileImage: shouldShowProfile
            };

            setMessages((prev) => [...prev, aiMsg]);
        } catch (err: any) {
            const failMsg: ChatMessage = {
                id: (Date.now() + 1).toString(),
                sender: 'ai_brain',
                text: "Vanjinathan S is an elite AI/ML engineer. (Simulated neural response).",
                timestamp: new Date().toISOString().substring(11, 16) + ' UTC'
            };
            setMessages((prev) => [...prev, failMsg]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-sans select-none flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="mb-4 w-96 rounded-2xl bg-[#121212] border border-[#A7F432]/30 shadow-[0_10px_40px_rgba(167,244,50,0.15)] flex flex-col overflow-hidden max-h-[600px]"
                    >
                        {/* Header */}
                        <div className="px-4 py-3 bg-[#171717] border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-[#A7F432] animate-pulse" />
                                <span className="text-[#F7F7F7] font-bold text-sm tracking-wide">VANJI NEURAL CORE</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setMessages([messages[0]])}
                                    className="p-1 rounded hover:bg-white/10 text-[#CFCFCF] transition-colors"
                                >
                                    <RefreshCw className="w-3.5 h-3.5" />
                                </button>
                                <button
                                    onClick={() => { playSwoosh(); setIsOpen(false); }}
                                    className="p-1 rounded hover:bg-white/10 text-[#CFCFCF] hover:text-white transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 p-4 overflow-y-auto space-y-4 max-h-[400px] h-[350px] bg-gradient-to-b from-[#121212] to-[#0a0a0a]">
                            {messages.map((msg) => {
                                const isAI = msg.sender === 'ai_brain';
                                return (
                                    <div key={msg.id} className={`flex items-start gap-2 ${!isAI ? 'flex-row-reverse' : ''}`}>
                                        <div className={`p-1.5 rounded-lg shrink-0 ${isAI ? 'bg-[#D4AF37] text-black' : 'bg-white text-black'}`}>
                                            {isAI ? <Bot className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                                        </div>
                                        <div className={`max-w-[85%] p-3 rounded-xl text-xs leading-relaxed ${isAI
                                            ? 'bg-[#1a1a1a] border border-white/10 text-gray-200 rounded-tl-none shadow-sm'
                                            : 'bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-white rounded-tr-none'
                                            }`}>
                                            {isAI && msg.showProfileImage && (
                                                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/5">
                                                    <img src={profileImage} alt="Vanji" className="w-8 h-8 rounded-full border border-[#D4AF37]/40 bg-gradient-to-br from-[#E1CCB6] via-[#C9B39B] to-[#A08871] object-cover" />
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] font-bold">VANJINATHAN S</span>
                                                    </div>
                                                </div>
                                            )}
                                            <div className="whitespace-pre-wrap">{msg.text}</div>
                                        </div>
                                    </div>
                                );
                            })}
                            {loading && (
                                <div className="flex items-center gap-2 text-[10px] text-[#A7F432]">
                                    <Bot className="w-3 h-3 animate-pulse" /> Synthesizing...
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Suggestions */}
                        <div className="px-3 py-2 bg-[#171717] border-t border-white/5 overflow-x-auto no-scrollbar flex items-center gap-2">
                            {SUGGESTED_AI_PROMPTS.slice(0, 3).map((pText, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleSendMessage(pText)}
                                    disabled={loading}
                                    className="px-2.5 py-1 whitespace-nowrap rounded font-mono text-[10px] bg-[#222] border border-white/10 text-gray-300 hover:text-white hover:bg-[#D4AF37]/20 transition-colors"
                                >
                                    {pText.length > 25 ? pText.substring(0, 25) + '...' : pText}
                                </button>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="p-3 bg-[#111] border-t border-white/10 flex items-center gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => { if (e.key === 'Enter') handleSendMessage(); }}
                                placeholder="Query AI Brain..."
                                disabled={loading}
                                className="flex-1 bg-black border border-white/10 focus:border-[#A7F432]/50 rounded-lg px-3 py-2 text-xs text-white outline-none font-medium"
                            />
                            <button
                                onClick={() => handleSendMessage()}
                                disabled={!input.trim() || loading}
                                className={`p-2 rounded-lg flex items-center justify-center transition-colors ${!input.trim() || loading
                                    ? 'bg-[#222] text-gray-500'
                                    : 'bg-[#A7F432] text-black hover:bg-[#88c527]'
                                    }`}
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { playClick(); setIsOpen(!isOpen); }}
                className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#080808] to-[#1a1a1a] border border-[#A7F432]/50 shadow-[0_0_20px_rgba(167,244,50,0.3)] flex items-center justify-center relative overflow-hidden group cursor-pointer"
            >
                {/* Glow behind */}
                <div className="absolute inset-0 bg-[#A7F432]/10 blur group-hover:bg-[#A7F432]/20 transition-all duration-500" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(167,244,50,0.2)_0%,transparent_70%)] animate-pulse" />
                <Sparkles className={`w-6 h-6 text-[#A7F432] relative z-10 transition-transform duration-300 ${isOpen ? 'rotate-180 scale-0' : 'rotate-0 scale-100'}`} />
                <X className={`w-6 h-6 text-[#A7F432] absolute z-10 transition-transform duration-300 ${isOpen ? 'rotate-0 scale-100' : '-rotate-180 scale-0'}`} />
            </motion.button>
        </div>
    );
};
