import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROTOTYPE_CHAMBERS } from '../../data/osData';
import { PrototypeChamber } from '../../types';
import { useAudioEngine } from '../AudioEngine';
import { 
  Rocket, 
  Terminal, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Layers, 
  DollarSign, 
  ChevronRight, 
  CheckCircle2, 
  Play 
} from 'lucide-react';

export const Module06_InnovationLab: React.FC = () => {
  const [activeChamber, setActiveChamber] = useState<PrototypeChamber>(PROTOTYPE_CHAMBERS[0]);
  const [simulating, setSimulating] = useState<boolean>(false);
  const [simLog, setSimLog] = useState<string[]>([]);
  const { playClick, playAccessGranted, playSwoosh } = useAudioEngine();

  const triggerSimulation = (chamber: PrototypeChamber) => {
    playAccessGranted();
    setSimulating(true);
    setSimLog([
      `[+] Connecting to ${chamber.name} prototype kernel... [OK]`,
      `[+] Verifying market TAM: ${chamber.targetMarket.split('(')[1]}... [OK]`,
      `[+] Executing investment simulation vectors...`,
      `[+] Valued at ${chamber.estimatedValuationTarget}. Venture Pitch Ready.`
    ]);
  };

  return (
    <div className="min-h-[80vh] py-8 px-4 font-sans select-none max-w-7xl mx-auto flex flex-col justify-center">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono tracking-widest mb-4">
          <Rocket className="w-3.5 h-3.5 animate-bounce" /> SYSTEM MODULE 06 // INNOVATION LAB
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F7F7F7] mb-3">
          Venture Prototype Chambers
        </h1>
        <p className="text-sm text-[#CFCFCF]/80 max-w-2xl mx-auto">
          Presenting Vanji Nathan’s proprietary venture concepts (OtoGo, MoodScape, Gad13). Each chamber functions as an early-stage institutional investment pitch merged with an architectural product showcase.
        </p>
      </div>

      {/* Chamber Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {PROTOTYPE_CHAMBERS.map((ch, idx) => {
          const isSelected = activeChamber.id === ch.id;
          return (
            <button
              key={ch.id}
              onClick={() => { playSwoosh(); setActiveChamber(ch); setSimulating(false); }}
              className={`p-5 rounded-2xl text-left transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between min-h-[140px] ${
                isSelected
                  ? 'bg-[#171717] border-2 border-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.3)]'
                  : 'bg-[#121212] border border-white/10 hover:border-white/25 hover:bg-[#151515]'
              }`}
            >
              <div className="flex items-center justify-between font-mono text-[10px] mb-2">
                <span className={isSelected ? 'text-[#D4AF37] font-bold' : 'text-[#CFCFCF]/60'}>CHAMBER 0{idx+1}</span>
                <span className="px-2 py-0.5 rounded bg-black/40 text-[#A7F432] uppercase tracking-wider">{ch.ventureStage}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#F7F7F7] truncate">{ch.name.split(' ')[0]}</h3>
                <p className="text-xs text-[#CFCFCF]/70 truncate mt-0.5">{ch.tagline}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Chamber Investment Pitch Stage */}
      <motion.div
        key={activeChamber.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-3xl bg-[#171717] border border-white/10 p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 relative overflow-hidden"
      >
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Left Investment Dossier (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded bg-[#121212] border border-[#D4AF37]/40 text-[#D4AF37] font-mono text-xs font-bold uppercase">
              VENTURE STAGE: {activeChamber.ventureStage}
            </span>
            <span className="px-3 py-1 rounded bg-[#121212] border border-[#A7F432]/30 text-[#A7F432] font-mono text-xs">
              TARGET VALUATION: {activeChamber.estimatedValuationTarget}
            </span>
          </div>

          <div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F7F7F7] mb-2">
              {activeChamber.name}
            </h2>
            <p className="text-sm sm:text-base text-[#D4AF37] font-mono">
              {activeChamber.tagline}
            </p>
          </div>

          {/* Market TAM Box */}
          <div className="p-5 rounded-2xl bg-[#121212] border border-white/5 space-y-1.5">
            <h4 className="text-xs font-mono tracking-widest text-[#CFCFCF] uppercase flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#A7F432]" /> TOTAL ADDRESSABLE MARKET (TAM)
            </h4>
            <p className="text-sm font-semibold text-[#F7F7F7]">
              {activeChamber.targetMarket}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#121212] border border-red-500/20">
              <span className="text-[10px] font-mono text-red-400 block mb-1">▪ MARKET FRICTION</span>
              <p className="text-xs text-[#F7F7F7]">{activeChamber.problem}</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#121212] border border-[#A7F432]/30">
              <span className="text-[10px] font-mono text-[#A7F432] block mb-1">▪ VANJI SYNTHESIS</span>
              <p className="text-xs text-[#F7F7F7]">{activeChamber.solution}</p>
            </div>
          </div>

          {/* Secret Sauce Moat */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#121212] to-[#1c1c1c] border border-[#D4AF37]/40">
            <h4 className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase mb-1">PROPRIETARY DEFENSIBLE MOAT</h4>
            <p className="text-xs text-[#F7F7F7] leading-relaxed">{activeChamber.secretSauce}</p>
          </div>
        </div>

        {/* Right Prototype Simulation Stage (5 cols) */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-[#F7F7F7] uppercase flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#D4AF37]" /> CORE TECH HIGHLIGHTS
            </h4>
            <div className="space-y-2.5">
              {activeChamber.techHighlights.map((t, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-[#121212] border border-white/5 text-xs font-mono text-[#F7F7F7]">
                  <CheckCircle2 className="w-4 h-4 text-[#A7F432] shrink-0" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Prototype Showcase Simulation Box */}
          <div className="p-6 rounded-2xl bg-[#080808] border border-white/10 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#CFCFCF]">
              <span>PROTOTYPE CHAMBER STATUS</span>
              <span className="text-[#A7F432]">● READY</span>
            </div>

            <button
              onClick={() => triggerSimulation(activeChamber)}
              className="w-full py-3.5 rounded-xl bg-[#A7F432] hover:bg-[#90da25] text-[#080808] font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(167,244,50,0.3)] transition-all"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{activeChamber.interactiveFeature}</span>
            </button>

            {simulating && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="p-3.5 rounded-xl bg-[#121212] border border-[#A7F432]/30 font-mono text-[11px] text-[#A7F432] space-y-1 overflow-hidden"
              >
                {simLog.map((line, lIdx) => (
                  <motion.div key={lIdx} initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: lIdx * 0.2 }}>
                    {line}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>

      </motion.div>
    </div>
  );
};
