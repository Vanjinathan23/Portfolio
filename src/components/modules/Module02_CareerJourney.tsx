import React from 'react';
import { motion } from 'motion/react';
import { CAREER_MILESTONES } from '../../data/osData';
import { useAudioEngine } from '../AudioEngine';
import {
  Compass,
  Terminal,
  Zap,
  Award,
  Cpu
} from 'lucide-react';

export const Module02_CareerJourney: React.FC = () => {
  const { playSwoosh } = useAudioEngine();

  return (
    <div className="py-20 px-4 font-sans select-none max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono tracking-widest mb-4">
          <Compass className="w-3.5 h-3.5" /> SYSTEM MODULE 02 // CAREER JOURNEY
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#F7F7F7] mb-6">
          First-Principles Storytelling Map
        </h1>
        <p className="text-sm sm:text-base text-[#CFCFCF]/80 max-w-2xl border-l-2 border-[#A7F432] pl-4">
          A continuous timeline tracking the evolution of my engineering and founder journey. Read down the timeline to explore bottlenecks solved and venture horizons conquered.
        </p>
      </div>

      {/* Sleek Vertical Track Layout */}
      <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 pb-10">
        {CAREER_MILESTONES.map((m, idx) => (
          <motion.div
            key={m.year + idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onHoverStart={() => playSwoosh()}
            className="relative pl-8 sm:pl-16 mb-16 last:mb-0 group"
          >
            {/* glowing timeline node */}
            <div className="absolute top-6 left-[-9px] w-4 h-4 rounded-full bg-[#080808] border-2 border-white/30 group-hover:border-[#A7F432] group-hover:scale-150 transition-all duration-300 shadow-[0_0_10px_transparent] group-hover:shadow-[#A7F432]/50 z-10" />

            {/* connecting branch line */}
            <div className="absolute top-8 left-[1px] w-8 sm:w-16 h-px bg-white/10 group-hover:bg-[#A7F432]/50 transition-colors duration-300" />

            {/* The Main Dossier Card */}
            <div className="rounded-2xl bg-gradient-to-br from-[#121212] to-[#080808] border border-white/5 group-hover:border-[#A7F432]/30 shadow-xl group-hover:shadow-[0_10px_40px_rgba(167,244,50,0.05)] transition-all duration-500 overflow-hidden">

              {/* Header section of card */}
              <div className="px-6 py-5 border-b border-white/5 bg-white/[0.02] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded bg-[#1a1a1a] border border-[#D4AF37]/30 text-[#D4AF37] font-mono text-xs font-bold shadow-sm">
                    {m.year} {m.quarter}
                  </span>
                  <span className="px-3 py-1 rounded bg-[#1a1a1a] border border-[#A7F432]/20 text-[#A7F432] font-mono text-[10px]">
                    {m.category}
                  </span>
                </div>
                <div className="text-xs font-mono text-[#CFCFCF]/50 uppercase tracking-widest hidden sm:block">
                  NODE // 0{idx + 1}
                </div>
              </div>

              {/* Body of card */}
              <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Left col: Title, description, story */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-[#F7F7F7] mb-1 group-hover:text-[#A7F432] transition-colors">
                      {m.title}
                    </h2>
                    <p className="text-sm font-mono text-[#CFCFCF] mb-4 uppercase tracking-wider">{m.role}</p>
                    <p className="text-[#CFCFCF]/80 text-sm leading-relaxed mb-6">
                      {m.description}
                    </p>
                  </div>

                  {/* Behind the scenes story */}
                  <div className="p-4 rounded-xl bg-black/40 border-l-2 border-[#D4AF37]">
                    <h4 className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase mb-2 flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5" /> BEHIND THE SCENES
                    </h4>
                    <p className="text-xs text-[#CFCFCF]/90 italic leading-relaxed">
                      "{m.storyDetails}"
                    </p>
                  </div>
                </div>

                {/* Right col: Metric, Bottleneck, Stack */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  {/* Metric Box */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#121212] border border-[#A7F432]/20">
                    <h4 className="text-[10px] font-mono tracking-widest text-[#A7F432] uppercase mb-1.5 flex items-center gap-2">
                      <Award className="w-3.5 h-3.5" /> VERIFIED ACHIEVEMENT
                    </h4>
                    <div className="text-xl font-bold font-mono text-[#F7F7F7]">
                      {m.keyMetric}
                    </div>
                  </div>

                  {/* Challenge Box */}
                  <div className="p-4 rounded-xl bg-red-950/10 border border-red-500/20">
                    <h4 className="text-[10px] font-mono tracking-widest text-red-500 uppercase mb-1.5 flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5" /> CRITICAL BOTTLENECK SOLVED
                    </h4>
                    <p className="text-xs text-[#F7F7F7] leading-relaxed">
                      {m.challengeOvercome}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-auto space-y-2 pt-2">
                    <h4 className="text-[10px] font-mono tracking-widest text-[#CFCFCF]/60 uppercase flex items-center gap-2">
                      <Cpu className="w-3 h-3 text-[#D4AF37]" /> TECH MATRIX & WEAPONS
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {m.technologies.map((t) => (
                        <span key={t} className="px-2 py-1 rounded bg-[#080808] border border-white/5 text-[10px] font-mono text-[#F7F7F7]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
};
