import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IDENTITY_NODES } from '../../data/osData';
import { IdentityNode } from '../../types';
import { useAudioEngine } from '../AudioEngine';
import profileImage from '../../assets/vanjinathan.png';
import {
  Code2,
  Palette,
  Hammer,
  Compass,
  Zap,
  Cpu,
  Sparkles,
  Rocket,
  ShieldCheck,
  ChevronRight,
  Orbit
} from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  Code2, Palette, Hammer, Compass, Zap, Cpu, Sparkles, Rocket
};

export const Module01_IdentityCore: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<IdentityNode>(IDENTITY_NODES[0]);
  const { playClick, playSwoosh } = useAudioEngine();

  return (
    <div className="min-h-[85vh] py-16 px-4 sm:px-6 lg:px-8 font-sans select-none relative overflow-hidden flex flex-col justify-center">
      {/* Background glow */}
      <div className="absolute inset-0 top-[-20%] right-[-10%] bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.08)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bottom-[-20%] left-[-10%] bg-[radial-gradient(circle_at_bottom_left,rgba(167,244,50,0.05)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 relative z-10">

        {/* Left: Hero Presentation (Aligned top, sticky for smooth vertical flow) */}
        <div className="xl:col-span-5 flex flex-col justify-start pt-2 xl:sticky top-32 h-fit">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] border border-[#D4AF37]/30 text-[#D4AF37] text-[11px] font-mono tracking-widest self-start shadow-[0_0_15px_rgba(212,175,55,0.15)]">
              <Orbit className="w-3.5 h-3.5" /> IDENTITY & VISION
            </div>

            <div className="space-y-3">
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-[#F7F7F7] leading-tight">
                Vanjinathan S
              </h1>
              <p className="text-[#A7F432] font-mono tracking-wider text-sm border-l-2 border-[#A7F432] pl-3 py-0.5">
                SYSTEM ARCHITECT & AI ENGINEER
              </p>
            </div>

            <p className="text-[#CFCFCF]/80 text-sm sm:text-base leading-relaxed max-w-lg mt-2">
              Builder of intelligent digital architecture. I specialize in spatial computing, AI integrations, and scalable full-stack venture ecosystems. Welcome to my creative portfolio blueprint.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative self-start group"
          >
            {/* Elegant Image Frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#A7F432] rounded-[2rem] blur opacity-30 group-hover:opacity-60 transition duration-700"></div>
            <div className="relative bg-[#0a0a0a] border border-white/10 p-2.5 rounded-[1.85rem] shrink-0">
              <img
                src={profileImage}
                alt="Vanjinathan S"
                loading="eager"
                className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] bg-gradient-to-br from-[#E1CCB6] via-[#C9B39B] to-[#A08871] object-cover rounded-3xl transition-all duration-700 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Right: Expertise Nodes Grid & Dossier */}
        <div className="xl:col-span-7 flex flex-col gap-8 w-full">
          {/* Grid Selection */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 bg-[#121212] p-4 rounded-3xl border border-white/5 shadow-2xl"
          >
            {IDENTITY_NODES.map((node) => {
              const Icon = ICON_MAP[node.icon] || Code2;
              const isSelected = selectedNode.id === node.id;

              return (
                <button
                  key={node.id}
                  onClick={() => { playSwoosh(); setSelectedNode(node); }}
                  onMouseEnter={() => { playClick(); setSelectedNode(node); }}
                  className={`relative flex flex-col items-center justify-center gap-3 p-4 rounded-2xl text-center transition-all cursor-pointer h-28 ${isSelected
                    ? 'bg-[#1a1a1a] border border-[#D4AF37]/40 shadow-[0_8px_30px_rgba(212,175,55,0.15)] scale-[1.03] z-10 ring-1 ring-[#D4AF37]/30'
                    : 'bg-transparent hover:bg-white/[0.03] hover:border-white/10 border border-transparent'
                    }`}
                >
                  <Icon className={`w-6 h-6 ${isSelected ? 'text-[#D4AF37]' : 'text-[#CFCFCF]/40 group-hover:text-[#CFCFCF]/70'} transition-colors`} />
                  <span className={`text-[11px] font-mono tracking-wide px-1 ${isSelected ? 'text-[#F7F7F7] font-bold' : 'text-[#CFCFCF]/60'}`}>
                    {node.label}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Dossier Expanded Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedNode.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex-1 p-8 sm:p-10 rounded-3xl bg-[#171717] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[500px]"
            >
              <div
                className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
                style={{ backgroundColor: selectedNode.color }}
              />

              <div className="relative z-10 h-full flex flex-col">
                <div>
                  {/* Header */}
                  <div className="flex items-center gap-5 border-b border-white/10 pb-6 mb-8">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-[#121212] to-[#0a0a0a] border border-[#D4AF37]/30 text-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.2)]">
                      {React.createElement(ICON_MAP[selectedNode.icon] || Code2, { className: 'w-7 h-7' })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-[#F7F7F7] mb-1.5">
                        {selectedNode.label}
                      </h3>
                      <p className="text-xs font-mono tracking-wide text-[#A7F432]">
                        {selectedNode.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[15px] text-[#CFCFCF]/90 leading-relaxed mb-10 max-w-3xl">
                    {selectedNode.description}
                  </p>

                  {/* Key Principles */}
                  <div className="space-y-5">
                    <h4 className="text-[10px] font-mono tracking-widest text-[#D4AF37]/80 uppercase flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> CORE TENETS & EXECUTION MANDATES
                    </h4>
                    <div className="grid grid-cols-1 gap-3.5">
                      {selectedNode.keyPrinciples.map((principle, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-4 px-5 py-4 rounded-2xl bg-gradient-to-r from-[#121212] to-transparent border border-white/5 text-[13px] text-[#F7F7F7] shadow-sm">
                          <ChevronRight className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{principle}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Vision Footer Quote */}
                <div className="mt-12 p-5 rounded-2xl bg-gradient-to-r from-[#0a0a0a] to-[#121212] border-l-2 border-[#A7F432]">
                  <p className="text-sm text-[#CFCFCF]/80 italic font-light tracking-wide">
                    "{selectedNode.vision}"
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
