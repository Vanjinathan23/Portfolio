import React, { useState, useEffect } from 'react';
import { ModuleId } from '../types';
import { useAudioEngine } from './AudioEngine';
import { 
  Terminal, 
  Compass, 
  GitBranch, 
  ShieldAlert, 
  Sparkles, 
  Orbit, 
  Rocket, 
  BarChart3, 
  Send, 
  Search, 
  Volume2, 
  VolumeX, 
  Clock, 
  BatteryCharging, 
  Award 
} from 'lucide-react';

interface NavProps {
  activeModule: ModuleId;
  onSelectModule: (id: ModuleId) => void;
  onOpenCommand: () => void;
  onOpenRecruiterVIP: () => void;
}

const MODULE_TABS: { id: ModuleId; label: string; icon: any }[] = [
  { id: 'identity_core', label: 'Identity Core', icon: Orbit },
  { id: 'career_journey', label: 'Career Journey', icon: Compass },
  { id: 'project_vault', label: 'Project Vault', icon: ShieldAlert },
  { id: 'ai_brain', label: 'AI Brain', icon: Sparkles },
  { id: 'skill_galaxy', label: 'Skill Galaxy', icon: GitBranch },
  { id: 'innovation_lab', label: 'Innovation Lab', icon: Rocket },
  { id: 'impact_dashboard', label: 'Impact Dashboard', icon: BarChart3 },
  { id: 'future_roadmap', label: 'Future Roadmap', icon: Terminal },
  { id: 'mission_control', label: 'Mission Control', icon: Send }
];

export const OSTopNav: React.FC<NavProps> = ({
  activeModule,
  onSelectModule,
  onOpenCommand,
  onOpenRecruiterVIP
}) => {
  const [utcTime, setUtcTime] = useState<string>('');
  const { soundEnabled, toggleSound, playSwoosh } = useAudioEngine();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toISOString().substring(11, 19) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleTabClick = (id: ModuleId) => {
    playSwoosh();
    onSelectModule(id);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#080808]/90 backdrop-blur-xl border-b border-white/10 font-sans select-none">
      {/* Top Telemetry Rail */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4 text-xs border-b border-white/5">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-[#121212] border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#A7F432] animate-pulse" />
            <span className="font-bold tracking-widest text-[#F7F7F7] font-mono text-[11px]">VANJI OS</span>
          </div>
          <span className="hidden sm:inline text-[#CFCFCF]/60 font-mono text-[11px]">EXEC_KERNEL://v4.2</span>
        </div>

        {/* Center/Right: Telemetry & Actions */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0 font-mono text-[11px] text-[#CFCFCF]">
          {/* Live UTC Clock */}
          <div className="hidden md:flex items-center gap-1.5 px-2 py-1 rounded bg-[#121212]">
            <Clock className="w-3 h-3 text-[#D4AF37]" />
            <span>{utcTime || '22:04:00 UTC'}</span>
          </div>

          {/* RAM simulation */}
          <div className="hidden lg:flex items-center gap-1.5 px-2 py-1 rounded bg-[#121212]">
            <span className="text-[#A7F432]">MEM</span>
            <span>4.2GB / 16GB</span>
          </div>

          {/* Battery */}
          <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded bg-[#121212]">
            <BatteryCharging className="w-3.5 h-3.5 text-[#A7F432]" />
            <span>99% PWR</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? "Mute Spatial Audio" : "Enable Spatial Audio"}
            className="p-1.5 rounded bg-[#121212] hover:bg-[#171717] border border-white/10 hover:border-[#D4AF37]/40 text-[#CFCFCF] hover:text-[#D4AF37] transition-all cursor-pointer"
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-[#D4AF37]" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          {/* VIP Recruiter Briefing */}
          <button
            onClick={onOpenRecruiterVIP}
            className="px-3 py-1 rounded bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/5 hover:from-[#D4AF37]/40 hover:to-[#D4AF37]/10 border border-[#D4AF37]/40 text-[#D4AF37] font-sans font-semibold text-[11px] tracking-wide flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all"
          >
            <Award className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden xs:inline">RECRUITER 60s</span>
          </button>

          {/* Raycast Cmd+K Bar Trigger */}
          <button
            onClick={onOpenCommand}
            className="px-3 py-1 rounded bg-[#171717] hover:bg-[#202020] border border-white/10 hover:border-[#A7F432]/40 text-[#F7F7F7] flex items-center gap-2 cursor-pointer transition-all"
          >
            <Search className="w-3.5 h-3.5 text-[#A7F432]" />
            <span className="hidden sm:inline text-xs font-sans">Search</span>
            <kbd className="hidden md:inline px-1.5 py-0.5 rounded bg-[#080808] border border-white/10 text-[10px] text-[#CFCFCF]">⌘K</kbd>
          </button>
        </div>
      </div>

      {/* Bottom Horizontal Module Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
        <nav className="flex items-center gap-1 py-2 min-w-max">
          {MODULE_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeModule === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer relative ${
                  isActive 
                    ? 'bg-[#171717] text-[#F7F7F7] border border-[#D4AF37]/50 shadow-[0_4px_20px_-4px_rgba(212,175,55,0.25)] font-semibold' 
                    : 'text-[#CFCFCF]/70 hover:text-[#F7F7F7] hover:bg-[#121212]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#D4AF37]' : 'opacity-70'}`} />
                <span>{tab.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#D4AF37] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
