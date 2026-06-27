import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ROADMAP_MILESTONES } from '../../data/osData';
import { RoadmapMilestone } from '../../types';
import { useAudioEngine } from '../AudioEngine';
import { 
  Terminal, 
  Target, 
  Flag, 
  Rocket, 
  ShieldAlert, 
  CheckCircle2, 
  Clock, 
  ChevronRight, 
  Compass, 
  Layers 
} from 'lucide-react';

export const Module08_FutureRoadmap: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('2026');
  const { playClick, playSwoosh } = useAudioEngine();

  const activeMilestone = ROADMAP_MILESTONES.find((r) => r.year === selectedYear) || ROADMAP_MILESTONES[0];

  return (
    <div className="min-h-[80vh] py-8 px-4 font-sans select-none max-w-7xl mx-auto flex flex-col justify-center">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono tracking-widest mb-4">
          <Target className="w-3.5 h-3.5" /> SYSTEM MODULE 08 // FUTURE ROADMAP
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F7F7F7] mb-3">
          Strategic Executive Milestones
        </h1>
        <p className="text-sm text-[#CFCFCF]/80 max-w-2xl mx-auto">
          Not a whimsical dream board. A rigorous institutional roadmap communicating long-term founder vision, capital allocation milestones, and venture laboratory expansion through 2030.
        </p>
      </div>

      {/* Year Selector Stepping Rail */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {ROADMAP_MILESTONES.map((item) => {
          const isSelected = item.year === selectedYear;
          return (
            <button
              key={item.year}
              onClick={() => { playSwoosh(); setSelectedYear(item.year); }}
              onMouseEnter={() => playClick()}
              className={`p-6 rounded-3xl text-center transition-all cursor-pointer relative overflow-hidden flex flex-col items-center justify-center min-h-[120px] ${
                isSelected
                  ? 'bg-[#D4AF37] text-[#080808] font-bold shadow-[0_0_40px_rgba(212,175,55,0.5)] scale-105 z-10'
                  : 'bg-[#171717] text-[#CFCFCF] border border-white/10 hover:border-white/30'
              }`}
            >
              <span className="text-3xl sm:text-4xl font-extrabold font-mono mb-1">{item.year}</span>
              <span className={`text-[10px] font-mono tracking-wider uppercase ${isSelected ? 'text-[#080808]/80' : 'text-[#A7F432]'}`}>
                {item.status}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Roadmap Dossier Card */}
      <motion.div
        key={activeMilestone.year}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-3xl bg-[#171717] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Left Column Vision (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded bg-[#121212] border border-[#D4AF37]/40 text-[#D4AF37] font-mono text-xs font-bold">
              HORIZON YEAR: {activeMilestone.year}
            </span>
            <span className="px-3 py-1 rounded bg-[#121212] border border-[#A7F432]/30 text-[#A7F432] font-mono text-xs">
              THEME: {activeMilestone.theme}
            </span>
          </div>

          <div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F7F7F7] mb-3">
              {activeMilestone.title}
            </h2>
          </div>

          {/* Strategic Execution Goals */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase flex items-center gap-2">
              <Flag className="w-4 h-4" /> INSTITUTIONAL EXECUTION TARGETS
            </h4>
            <div className="space-y-3">
              {activeMilestone.strategicGoals.map((goal, gIdx) => (
                <div key={gIdx} className="flex items-start gap-3 p-4 rounded-2xl bg-[#121212] border border-white/5 text-sm text-[#F7F7F7]">
                  <ChevronRight className="w-4 h-4 text-[#A7F432] shrink-0 mt-0.5" />
                  <span>{goal}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Output & Verification Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="p-6 rounded-2xl bg-[#121212] border border-[#A7F432]/30 space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-[#A7F432] uppercase flex items-center gap-2">
              <Layers className="w-4 h-4" /> EXPECTED ENTERPRISE OUTPUT
            </h4>
            <p className="text-sm text-[#F7F7F7] leading-relaxed font-medium">
              {activeMilestone.expectedOutput}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#080808] border border-white/10 space-y-3 font-mono text-xs text-[#CFCFCF]">
            <div className="text-[#D4AF37]">// STRATEGIC EXECUTION KERNEL</div>
            <p className="leading-relaxed">
              This roadmap reflects founder-level thinking. While traditional developers plan their next framework tutorial, Vanji Nathan plans venture ecosystem spin-outs and generational technological moats.
            </p>
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-[#A7F432]">
              <span>CAPITAL EFFICIENCY: HIGH</span>
              <span>MOAT: DEFENSIBLE</span>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
};
