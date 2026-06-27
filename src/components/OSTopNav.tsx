import React, { useState, useEffect } from 'react';
import { useAudioEngine } from './AudioEngine';
import { ModuleId } from '../types';
import {
  Terminal,
  Orbit,
  ShieldAlert,
  GitBranch,
  BarChart3,
  Search,
  Volume2,
  VolumeX,
  Clock,
  BatteryCharging,
  Award
} from 'lucide-react';

interface NavProps {
  activeModule: string;
  onSelectModule: (id: string) => void;
  onOpenCommand: () => void;
  onOpenRecruiterVIP: () => void;
}

const MODULE_TABS = [
  { id: 'identity_core', label: 'Identity & Vision', icon: Orbit },
  { id: 'career_and_roadmap', label: 'Journey & Roadmaps', icon: Terminal },
  { id: 'projects_and_innovation', label: 'Vault & Labs', icon: ShieldAlert },
  { id: 'skill_galaxy', label: 'Skill Galaxy', icon: GitBranch },
  { id: 'impact_dashboard', label: 'Impact Dashboard', icon: BarChart3 }
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

  const handleTabClick = (id: string) => {
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

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? "Mute Spatial Audio" : "Enable Spatial Audio"}
            className="p-1.5 rounded bg-[#121212] hover:bg-[#171717] border border-white/10 hover:border-[#D4AF37]/40 text-[#CFCFCF] hover:text-[#D4AF37] transition-all cursor-pointer"
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-[#D4AF37]" /> : <VolumeX className="w-3.5 h-3.5" />}
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
        <nav className="flex items-center gap-3 py-3 min-w-max">
          {MODULE_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeModule === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer relative ${isActive
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
