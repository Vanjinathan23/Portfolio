import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChatMessage } from '../../types';
import { SUGGESTED_AI_PROMPTS } from '../../data/osData';
import { useAudioEngine } from '../AudioEngine';
import profileImage from '../../assets/vanjinathan.png';
import {
  Sparkles,
  Send,
  Bot,
  User,
  Terminal,
  Cpu,
  RefreshCw,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

// Detect identity-related queries that should trigger profile image display
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

export const Module04_AIBrain: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai_brain',
      text: "Greetings. I am the neural AI Brain of VANJI OS. I possess complete classified knowledge regarding Vanjinathan S's engineering architectures, flagship projects (Urban Infrastructure, TumorInsight, ClinIQ), Skill Galaxy, and founder roadmap. How may I assist your evaluation today?",
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
    scrollToBottom();
  }, [messages, loading]);

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

      if (data.note) {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 2).toString(),
            sender: 'ai_brain',
            text: data.note,
            timestamp: new Date().toISOString().substring(11, 16) + ' UTC',
            isSystemNotice: true
          }
        ]);
      }
    } catch (err: any) {
      const failMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai_brain',
        text: "Vanjinathan S is an elite AI/ML engineer and digital builder. (Simulated offline neural response; check network status or API secret).",
        timestamp: new Date().toISOString().substring(11, 16) + ' UTC'
      };
      setMessages((prev) => [...prev, failMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] py-8 px-4 font-sans select-none max-w-5xl mx-auto flex flex-col">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212] border border-[#A7F432]/40 text-[#A7F432] text-xs font-mono tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 animate-spin" /> SYSTEM MODULE 04 // AI BRAIN
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F7F7F7] mb-2">
          Executive Neural Assistant
        </h1>
        <p className="text-sm text-[#CFCFCF]/80 max-w-xl mx-auto">
          Query live Gemini neural model server-side. Ask anything about Vanji Nathan’s technical competencies, unit economics philosophies, or recruiter summary.
        </p>
      </div>

      {/* Main AI Chat Interface Container */}
      <div className="flex-1 rounded-2xl bg-[#121212] border border-white/10 shadow-2xl flex flex-col overflow-hidden min-h-[550px] max-h-[720px]">

        {/* Top Chat Status Bar */}
        <div className="px-6 py-3.5 bg-[#171717] border-b border-white/10 flex items-center justify-between text-xs font-mono text-[#CFCFCF]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#A7F432] animate-pulse" />
            <span className="text-[#F7F7F7] font-bold">NEURAL_KERNEL://gemini-server-proxy</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-[#D4AF37]">LATENCY: ~180ms</span>
            <button
              onClick={() => {
                playSwoosh();
                setMessages([messages[0]]);
              }}
              className="p-1 rounded hover:bg-white/10 text-[#CFCFCF] hover:text-white transition-colors cursor-pointer"
              title="Reset Neural Memory"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Messages Stream Area */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          <AnimatePresence>
            {messages.map((msg) => {
              const isAI = msg.sender === 'ai_brain';
              if (msg.isSystemNotice) {
                return (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/30 text-xs font-mono text-yellow-300 flex items-center gap-2 text-center justify-center max-w-xl mx-auto"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{msg.text}</span>
                  </motion.div>
                );
              }
              return (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start gap-4 ${!isAI ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`p-2.5 rounded-xl shrink-0 ${isAI ? 'bg-[#D4AF37] text-[#080808]' : 'bg-[#F7F7F7] text-[#080808]'}`}>
                    {isAI ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
                  </div>

                  <div className={`max-w-[80%] sm:max-w-[70%] p-5 rounded-2xl text-sm leading-relaxed ${isAI
                    ? 'bg-[#171717] border border-white/10 text-[#F7F7F7] rounded-tl-none shadow-lg'
                    : 'bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F7F7F7] rounded-tr-none font-medium'
                    }`}>
                    <div className="flex items-center justify-between gap-4 mb-2 pb-2 border-b border-white/5 font-mono text-[10px] text-[#CFCFCF]/60">
                      <span>{isAI ? 'VANJI AI BRAIN' : 'VIP EVALUATOR'}</span>
                      <span>{msg.timestamp}</span>
                    </div>
                    {/* Profile Image — shown only for identity-related AI responses */}
                    {isAI && msg.showProfileImage && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                        className="flex items-center gap-3 mb-3 pb-3 border-b border-white/5"
                      >
                        <img
                          src={profileImage}
                          alt="Vanjinathan S"
                          width={48}
                          height={48}
                          loading="lazy"
                          className="profile-image-ai w-12 h-12"
                        />
                        <div>
                          <p className="text-xs font-bold text-[#F7F7F7] tracking-tight">VANJINATHAN S</p>
                          <p className="text-[10px] font-mono text-[#D4AF37] tracking-wider">IDENTITY VERIFIED</p>
                        </div>
                      </motion.div>
                    )}
                    <div className="whitespace-pre-wrap">{msg.text}</div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {loading && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 text-xs font-mono text-[#D4AF37]">
              <div className="p-2 rounded-xl bg-[#D4AF37] text-[#080808] animate-pulse">
                <Bot className="w-4 h-4" />
              </div>
              <span>Synthesizing executive response vectors...</span>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Prompt Pills */}
        <div className="px-6 py-3 bg-[#151515] border-t border-white/5 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max">
            <span className="text-[10px] font-mono text-[#CFCFCF]/50 mr-1 flex items-center gap-1">
              <Terminal className="w-3 h-3" /> SUGGESTED:
            </span>
            {SUGGESTED_AI_PROMPTS.map((pText, pIdx) => (
              <button
                key={pIdx}
                onClick={() => handleSendMessage(pText)}
                disabled={loading}
                className="px-3 py-1.5 rounded-lg bg-[#1c1c1c] hover:bg-[#D4AF37] text-xs text-[#CFCFCF] hover:text-[#080808] border border-white/10 transition-all font-mono tracking-tight cursor-pointer font-medium hover:font-bold"
              >
                {pText.length > 38 ? pText.substring(0, 38) + '...' : pText}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Chat Input Bar */}
        <div className="p-4 bg-[#171717] border-t border-white/10 flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleSendMessage(); }}
            placeholder="Ask AI Brain about Vanji Nathan’s technical moat or leadership..."
            disabled={loading}
            className="flex-1 bg-[#080808] border border-white/10 focus:border-[#D4AF37]/60 rounded-xl px-5 py-3.5 text-sm text-[#F7F7F7] placeholder-[#CFCFCF]/40 outline-none transition-all font-medium"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!input.trim() || loading}
            className={`p-3.5 rounded-xl flex items-center justify-center transition-all ${!input.trim() || loading
              ? 'bg-[#222] text-[#CFCFCF]/30 cursor-not-allowed'
              : 'bg-[#A7F432] hover:bg-[#92dc26] text-[#080808] font-bold cursor-pointer shadow-[0_0_20px_rgba(167,244,50,0.3)]'
              }`}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
};
