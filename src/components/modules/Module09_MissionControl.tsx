import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAudioEngine } from '../AudioEngine';
import { 
  Send, 
  Terminal, 
  Briefcase, 
  Users, 
  Rocket, 
  Sparkles, 
  MessageSquare, 
  Mail, 
  CheckCircle2, 
  Copy, 
  ArrowRight, 
  ShieldCheck, 
  Radio 
} from 'lucide-react';

export const Module09_MissionControl: React.FC = () => {
  const [selectedAction, setSelectedAction] = useState<{ id: string; label: string; subject: string; desc: string; icon: any } | null>(null);
  const [userNote, setUserNote] = useState<string>('');
  const [transmitted, setTransmitted] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const { playClick, playAccessGranted, playSwoosh } = useAudioEngine();

  const pods: { id: string; label: string; subject: string; desc: string; icon: any; color: string }[] = [
    { id: 'hire', label: 'Hire Me', subject: 'Executive Hire Inquiry - Vanji Nathan', desc: 'Step into engineering leadership, UI/UX architecture, or VIP systems director roles at Tier-1 tech organizations.', icon: Briefcase, color: '#D4AF37' },
    { id: 'collab', label: 'Collaborate', subject: 'High-Impact Engineering Collaboration', desc: 'Partner on open-source spatial design systems, high-concurrency microservices, or institutional research.', icon: Users, color: '#A7F432' },
    { id: 'startup', label: 'Build a Startup', subject: 'Venture Incubation & Co-Founder Proposal', desc: 'Discuss capital deployment, venture studio spin-outs (OtoGo, MoodScape), or hardware-AI syntheses.', icon: Rocket, color: '#D4AF37' },
    { id: 'ai', label: 'Discuss AI', subject: 'Agentic Workflows & Gemini Neural Systems', desc: 'Deconstruct retrieval-augmented generation (RAG), sub-200ms voice pipelines, and function calling graphs.', icon: Sparkles, color: '#A7F432' },
    { id: 'connect', label: "Let's Connect", subject: 'Executive Introduction - VANJI OS', desc: 'Direct communications channel for tech directors, institutional recruiters, and fellow future founders.', icon: MessageSquare, color: '#F7F7F7' }
  ];

  const handleTransmit = () => {
    if (!selectedAction) return;
    playAccessGranted();
    setTransmitted(true);

    const bodyText = encodeURIComponent(userNote || `Hello Vanji, I am reaching out regarding ${selectedAction.label} from your VANJI OS command center.`);
    const mailtoUrl = `mailto:vanjinathanvanji925@gmail.com?subject=${encodeURIComponent(selectedAction.subject)}&body=${bodyText}`;
    
    setTimeout(() => {
      window.open(mailtoUrl, '_blank');
      setTimeout(() => setTransmitted(false), 4000);
    }, 800);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('vanjinathanvanji925@gmail.com');
    setCopied(true);
    playAccessGranted();
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-[80vh] py-8 px-4 font-sans select-none max-w-7xl mx-auto flex flex-col justify-center">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212] border border-[#A7F432]/40 text-[#A7F432] text-xs font-mono tracking-widest mb-4">
          <Radio className="w-3.5 h-3.5 animate-pulse" /> SYSTEM MODULE 09 // MISSION CONTROL
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F7F7F7] mb-3">
          Command Center Dispatch
        </h1>
        <p className="text-sm text-[#CFCFCF]/80 max-w-2xl mx-auto">
          Replacing sterile web contact forms. Select a classified dispatch pod to trigger immediate institutional communications directly to Vanji Nathan’s executive kernel.
        </p>
      </div>

      {/* Dispatch Pods Grid (5 Pods) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
        {pods.map((pod) => {
          const Icon = pod.icon;
          const isSelected = selectedAction?.id === pod.id;
          return (
            <button
              key={pod.id}
              onClick={() => { playSwoosh(); setSelectedAction(pod); setUserNote(''); setTransmitted(false); }}
              onMouseEnter={() => playClick()}
              className={`group p-6 rounded-3xl text-left transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[220px] relative overflow-hidden ${
                isSelected
                  ? 'bg-[#171717] border-2 border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.4)] scale-105 z-20 font-bold'
                  : 'bg-[#121212] border border-white/10 hover:border-white/30 hover:bg-[#151515]'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-4">
                <div className="p-3 rounded-2xl bg-[#1c1c1c] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#080808] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-[#CFCFCF]/50">POD://0{pods.indexOf(pod)+1}</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#F7F7F7] mb-2">{pod.label}</h3>
                <p className="text-xs text-[#CFCFCF]/75 font-normal leading-relaxed">{pod.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#D4AF37] opacity-80 group-hover:opacity-100">
                <span>SELECT POD</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Transmission Console */}
      <AnimatePresence mode="wait">
        {selectedAction ? (
          <motion.div
            key={selectedAction.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full max-w-4xl mx-auto rounded-3xl bg-[#171717] border border-[#D4AF37]/50 p-8 sm:p-10 shadow-2xl relative overflow-hidden space-y-6"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs">
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <Terminal className="w-4 h-4 animate-pulse" />
                <span>ACTIVE TRANSMISSION CHANNEL // {selectedAction.label.toUpperCase()}</span>
              </div>
              <span className="text-[#A7F432]">ENCRYPTION: 256-BIT SSL</span>
            </div>

            <div>
              <label className="block text-xs font-mono tracking-wider text-[#CFCFCF] uppercase mb-2">
                DISPATCH NOTE OR CUSTOM MESSAGE (OPTIONAL):
              </label>
              <textarea
                value={userNote}
                onChange={(e) => setUserNote(e.target.value)}
                placeholder={`Provide any context or timeline regarding "${selectedAction.label}"...`}
                rows={4}
                className="w-full bg-[#080808] border border-white/10 focus:border-[#D4AF37]/60 rounded-xl p-4 text-sm text-[#F7F7F7] placeholder-[#CFCFCF]/40 outline-none transition-all font-medium resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
              <div className="text-xs font-mono text-[#CFCFCF]/70 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span>DESTINATION: vanjinathanvanji925@gmail.com</span>
              </div>

              <button
                onClick={handleTransmit}
                disabled={transmitted}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#A7F432] hover:bg-[#90dc26] text-[#080808] font-extrabold text-xs tracking-widest uppercase shadow-[0_0_30px_rgba(167,244,50,0.4)] flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {transmitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>OPENING EMAIL DISPATCH...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>TRANSMIT DISPATCH PACKET</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="p-10 rounded-3xl bg-[#121212]/50 border border-dashed border-white/10 text-center text-sm font-mono text-[#CFCFCF]/50 max-w-2xl mx-auto">
            [ SELECT A DISPATCH POD ABOVE TO INITIATE INSTITUTIONAL COMMUNICATIONS ]
          </div>
        )}
      </AnimatePresence>

      {/* Direct Email Clipboard Fallback Rail */}
      <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#CFCFCF]">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#A7F432]" />
          <span>INSTITUTIONAL DIRECT CHANNEL:</span>
          <strong className="text-[#F7F7F7]">vanjinathanvanji925@gmail.com</strong>
        </div>

        <button
          onClick={handleCopy}
          className="px-4 py-2 rounded-lg bg-[#171717] hover:bg-[#202020] border border-white/10 text-[#D4AF37] flex items-center gap-2 cursor-pointer transition-colors"
        >
          <Copy className="w-3.5 h-3.5" />
          <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY EMAIL'}</span>
        </button>
      </div>
    </div>
  );
};
