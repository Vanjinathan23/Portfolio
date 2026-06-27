import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CAREER_MILESTONES } from '../../data/osData';
import { CareerMilestone } from '../../types';
import { useAudioEngine } from '../AudioEngine';
import { 
  Compass, 
  MapPin, 
  Terminal, 
  Zap, 
  Award, 
  CheckCircle2, 
  Cpu, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Rocket 
} from 'lucide-react';

export const Module02_CareerJourney: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const currentMilestone = CAREER_MILESTONES[activeIndex];
  const { playClick, playSwoosh } = useAudioEngine();

  const nextNode = () => {
    if (activeIndex < CAREER_MILESTONES.length - 1) {
      playSwoosh();
      setActiveIndex(activeIndex + 1);
    }
  };

  const prevNode = () => {
    if (activeIndex > 0) {
      playSwoosh();
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className="min-h-[80vh] py-8 px-4 flex flex-col justify-center font-sans select-none max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono tracking-widest mb-4">
          <Compass className="w-3.5 h-3.5" /> SYSTEM MODULE 02 // CAREER JOURNEY
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F7F7F7] mb-3">
          First-Principles Storytelling Map
        </h1>
        <p className="text-sm text-[#CFCFCF]/80 max-w-2xl mx-auto">
          Not a static resume bullet list. Navigate horizontally across Vanji Nathan's digital evolution map—tracing technical milestones, hard bottlenecks solved, and venture horizons.
        </p>
      </div>

      {/* Digital Map Horizontal Rail */}
      <div className="relative mb-12 px-2 sm:px-8 overflow-x-auto no-scrollbar py-6">
        <div className="flex items-center justify-between min-w-[640px] relative">
          
          {/* Background Map Glowing Path Line */}
          <div className="absolute top-1/2 left-4 right-4 h-1 -translate-y-1/2 bg-[#121212] border-y border-white/10 z-0 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#D4AF37] via-[#A7F432] to-[#D4AF37]"
              initial={{ width: '0%' }}
              animate={{ width: `${(activeIndex / (CAREER_MILESTONES.length - 1)) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* Map Nodes */}
          {CAREER_MILESTONES.map((m, idx) => {
            const isSelected = idx === activeIndex;
            const isPassed = idx <= activeIndex;
            return (
              <div key={m.year} className="relative z-10 flex flex-col items-center">
                <button
                  onClick={() => { playClick(); setActiveIndex(idx); }}
                  className={`group w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex flex-col items-center justify-center transition-all cursor-pointer relative ${
                    isSelected
                      ? 'bg-[#D4AF37] text-[#080808] shadow-[0_0_35px_rgba(212,175,55,0.6)] scale-110 font-bold border-2 border-white'
                      : isPassed
                      ? 'bg-[#171717] text-[#F7F7F7] border border-[#A7F432]/60 shadow-lg'
                      : 'bg-[#121212] text-[#CFCFCF]/60 border border-white/10 hover:border-white/30'
                  }`}
                >
                  <MapPin className={`w-5 h-5 mb-0.5 ${isSelected ? 'text-[#080808]' : isPassed ? 'text-[#A7F432]' : 'opacity-40'}`} />
                  <span className="text-[11px] sm:text-xs font-mono">{m.year}</span>
                </button>
                <span className={`absolute top-18 text-[11px] font-mono tracking-wider whitespace-nowrap mt-2 ${isSelected ? 'text-[#D4AF37] font-bold' : 'text-[#CFCFCF]/60'}`}>
                  {m.category}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Milestone Case Brief Card */}
      <motion.div
        key={currentMilestone.year}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="w-full rounded-2xl bg-[#171717] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Left Story Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded bg-[#121212] border border-[#D4AF37]/40 text-[#D4AF37] font-mono text-xs font-bold">
              MAP WAYPOINT: {currentMilestone.year} ({currentMilestone.quarter})
            </span>
            <span className="px-3 py-1 rounded bg-[#121212] border border-[#A7F432]/30 text-[#A7F432] font-mono text-xs">
              {currentMilestone.role}
            </span>
          </div>

          <div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F7F7F7] mb-3">
              {currentMilestone.title}
            </h2>
            <p className="text-sm sm:text-base text-[#CFCFCF] leading-relaxed">
              {currentMilestone.description}
            </p>
          </div>

          {/* Story Narrative Box */}
          <div className="p-5 rounded-xl bg-[#121212] border border-white/5 space-y-2">
            <h4 className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" /> BEHIND THE SCENES STORY
            </h4>
            <p className="text-xs sm:text-sm text-[#CFCFCF]/90 italic leading-relaxed">
              "{currentMilestone.storyDetails}"
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/10">
            <button
              onClick={prevNode}
              disabled={activeIndex === 0}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono tracking-wider flex items-center gap-2 transition-all ${
                activeIndex === 0 ? 'opacity-30 cursor-not-allowed bg-[#121212]' : 'bg-[#121212] hover:bg-[#202020] text-[#F7F7F7] border border-white/10 cursor-pointer'
              }`}
            >
              <ChevronLeft className="w-4 h-4" /> PREV WAYPOINT
            </button>
            <button
              onClick={nextNode}
              disabled={activeIndex === CAREER_MILESTONES.length - 1}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono tracking-wider flex items-center gap-2 transition-all ml-auto ${
                activeIndex === CAREER_MILESTONES.length - 1 ? 'opacity-30 cursor-not-allowed bg-[#121212]' : 'bg-[#D4AF37] hover:bg-[#e6c248] text-[#080808] font-bold cursor-pointer shadow-md'
              }`}
            >
              NEXT WAYPOINT <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Engineering Column (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Challenge Solved Box */}
          <div className="p-5 rounded-xl bg-[#121212] border border-red-500/20 relative">
            <h4 className="text-xs font-mono tracking-widest text-red-400 uppercase mb-2 flex items-center gap-2">
              <Zap className="w-3.5 h-3.5" /> CRITICAL BOTTLENECK SOLVED
            </h4>
            <p className="text-xs text-[#F7F7F7] leading-relaxed font-medium">
              {currentMilestone.challengeOvercome}
            </p>
          </div>

          {/* Key Achievement Metric */}
          <div className="p-5 rounded-xl bg-gradient-to-br from-[#121212] to-[#1a1a1a] border border-[#A7F432]/40">
            <h4 className="text-xs font-mono tracking-widest text-[#A7F432] uppercase mb-1 flex items-center gap-2">
              <Award className="w-3.5 h-3.5" /> VERIFIED ACHIEVEMENT
            </h4>
            <div className="text-xl sm:text-2xl font-bold font-mono text-[#F7F7F7]">
              {currentMilestone.keyMetric}
            </div>
          </div>

          {/* Technologies Mastered Tags */}
          <div className="p-5 rounded-xl bg-[#121212] border border-white/10 space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-[#CFCFCF] uppercase flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#D4AF37]" /> TECH MATRIX & WEAPONS
            </h4>
            <div className="flex flex-wrap gap-2">
              {currentMilestone.technologies.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded bg-[#171717] border border-white/10 text-xs font-mono text-[#F7F7F7]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
};
