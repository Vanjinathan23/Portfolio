import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ModuleId, CommandItem } from '../types';
import { useAudioEngine } from './AudioEngine';
import { 
  Search, 
  Terminal, 
  ShieldAlert, 
  Sparkles, 
  Orbit, 
  Compass, 
  GitBranch, 
  Rocket, 
  BarChart3, 
  Send, 
  Award, 
  Mail, 
  ExternalLink, 
  X, 
  ArrowRight 
} from 'lucide-react';

interface PaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectModule: (id: ModuleId) => void;
  onOpenRecruiterVIP: () => void;
}

export const CommandPalette: React.FC<PaletteProps> = ({
  isOpen,
  onClose,
  onSelectModule,
  onOpenRecruiterVIP
}) => {
  const [query, setQuery] = useState<string>('');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { playClick, playSwoosh } = useAudioEngine();

  const commandList: { id: string; label: string; sub: string; icon: any; action: () => void; tag?: string }[] = [
    { id: 'vip', label: 'Recruiter 60-Second VIP Briefing', sub: 'Instant high-density pitch for Tier-1 firms', icon: Award, action: () => { onClose(); onOpenRecruiterVIP(); }, tag: 'VIP' },
    { id: 'hire', label: 'Dispatch Hire Inquiry (Email)', sub: 'vanjinathanvanji925@gmail.com', icon: Mail, action: () => { window.open('mailto:vanjinathanvanji925@gmail.com?subject=Executive%20Opportunity%20-%20VANJI%20OS'); onClose(); }, tag: 'Direct' },
    { id: 'm1', label: 'Jump to Identity Core', sub: 'Orbiting founder competency matrix', icon: Orbit, action: () => { onSelectModule('identity_core'); onClose(); } },
    { id: 'm2', label: 'Jump to Career Journey', sub: 'First-principles engineering timeline', icon: Compass, action: () => { onSelectModule('career_journey'); onClose(); } },
    { id: 'm3', label: 'Jump to Project Vault', sub: '6 Classified case study deep dives (OtoGo, MoodScape)', icon: ShieldAlert, action: () => { onSelectModule('project_vault'); onClose(); }, tag: 'Flagship' },
    { id: 'm4', label: 'Jump to AI Brain', sub: 'Query live Gemini neural model', icon: Sparkles, action: () => { onSelectModule('ai_brain'); onClose(); }, tag: 'AI' },
    { id: 'm5', label: 'Jump to Skill Galaxy', sub: 'Spatial physics planetary expertise map', icon: GitBranch, action: () => { onSelectModule('skill_galaxy'); onClose(); } },
    { id: 'm6', label: 'Jump to Innovation Lab', sub: 'Prototype venture incubation chambers', icon: Rocket, action: () => { onSelectModule('innovation_lab'); onClose(); } },
    { id: 'm7', label: 'Jump to Impact Dashboard', sub: 'Executive telemetry counters', icon: BarChart3, action: () => { onSelectModule('impact_dashboard'); onClose(); } },
    { id: 'm8', label: 'Jump to Future Roadmap', sub: 'Strategic milestones 2026-2030', icon: Terminal, action: () => { onSelectModule('future_roadmap'); onClose(); } },
    { id: 'm9', label: 'Jump to Mission Control', sub: 'Command center dispatch & collaboration', icon: Send, action: () => { onSelectModule('mission_control'); onClose(); } }
  ];

  const filtered = commandList.filter(
    (item) => item.label.toLowerCase().includes(query.toLowerCase()) || item.sub.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        playClick();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        playClick();
        setSelectedIndex((prev) => (prev - 1 + (filtered.length || 1)) % (filtered.length || 1));
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          playSwoosh();
          filtered[selectedIndex].action();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 select-none font-sans">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#080808]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl rounded-2xl bg-[#121212] border border-white/15 shadow-[0_25px_80px_-15px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col z-10 max-h-[75vh]"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-[#171717]">
              <Search className="w-5 h-5 text-[#D4AF37] shrink-0 animate-pulse" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0); }}
                placeholder="Type a command or jump to system module..."
                className="w-full bg-transparent text-[#F7F7F7] placeholder-[#CFCFCF]/50 text-sm md:text-base outline-none font-medium"
              />
              <button
                onClick={onClose}
                className="p-1 rounded hover:bg-white/10 text-[#CFCFCF] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="p-2 overflow-y-auto space-y-1 flex-1">
              {filtered.length === 0 ? (
                <div className="py-12 text-center text-sm text-[#CFCFCF]/60 font-mono">
                  No system modules or executive commands match "{query}".
                </div>
              ) : (
                filtered.map((item, idx) => {
                  const Icon = item.icon;
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={() => { playSwoosh(); item.action(); }}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all ${
                        isSelected 
                          ? 'bg-[#171717] border border-[#D4AF37]/50 shadow-lg text-[#F7F7F7]' 
                          : 'text-[#CFCFCF] hover:bg-[#151515] border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`p-2 rounded-lg ${isSelected ? 'bg-[#D4AF37] text-[#080808]' : 'bg-[#1c1c1c] text-[#D4AF37]'}`}>
                          <Icon className="w-4 h-4 shrink-0" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold truncate flex items-center gap-2">
                            <span>{item.label}</span>
                            {item.tag && (
                              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30">
                                {item.tag}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-[#CFCFCF]/60 truncate font-mono mt-0.5">
                            {item.sub}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0 ml-3">
                        {isSelected && <ArrowRight className="w-4 h-4 text-[#D4AF37]" />}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer Shortcut Legend */}
            <div className="px-4 py-2.5 bg-[#080808] border-t border-white/10 flex items-center justify-between text-[11px] text-[#CFCFCF]/70 font-mono">
              <div className="flex items-center gap-4">
                <span><kbd className="px-1 py-0.5 rounded bg-[#171717] border border-white/10 mr-1">↑↓</kbd> Navigate</span>
                <span><kbd className="px-1 py-0.5 rounded bg-[#171717] border border-white/10 mr-1">↵</kbd> Execute</span>
              </div>
              <div>VANJI RAYCAST ENGINE</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
