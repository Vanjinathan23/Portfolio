import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILL_PLANETS } from '../../data/osData';
import { SkillPlanet } from '../../types';
import { useAudioEngine } from '../AudioEngine';
import { 
  GitBranch, 
  Orbit, 
  ShieldAlert, 
  Terminal, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  Compass, 
  Zap 
} from 'lucide-react';

export const Module05_SkillGalaxy: React.FC = () => {
  const [activePlanet, setActivePlanet] = useState<SkillPlanet>(SKILL_PLANETS[0]);
  const [hoverPlanet, setHoverPlanet] = useState<SkillPlanet | null>(null);
  const { playClick, playSwoosh } = useAudioEngine();

  const current = hoverPlanet || activePlanet;

  const getSizePx = (size: SkillPlanet['size']) => {
    if (size === 'giant') return 'w-28 h-28 sm:w-36 sm:h-36 text-sm sm:text-base';
    if (size === 'large') return 'w-24 h-24 sm:w-28 sm:h-28 text-xs sm:text-sm';
    return 'w-20 h-20 sm:w-24 sm:h-24 text-[10px] sm:text-xs';
  };

  return (
    <div className="min-h-[80vh] py-8 px-4 font-sans select-none max-w-7xl mx-auto flex flex-col justify-center relative overflow-hidden">
      {/* Background Deep Space Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(167,244,50,0.05)_0%,transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212] border border-[#A7F432]/40 text-[#A7F432] text-xs font-mono tracking-widest mb-4">
          <GitBranch className="w-3.5 h-3.5" /> SYSTEM MODULE 05 // SKILL GALAXY
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F7F7F7] mb-3">
          Spatial Planetary Expertise
        </h1>
        <p className="text-sm text-[#CFCFCF]/80 max-w-2xl mx-auto">
          Rejecting juvenile progress bars and meaningless percentage scores. In VANJI OS, skills exist as orbital planetary spheres—where physical mass reflects architectural production depth.
        </p>
      </div>

      {/* Main Galaxy Arena Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left/Center Galaxy Arena (7 cols) */}
        <div className="lg:col-span-7 min-h-[460px] sm:min-h-[560px] relative rounded-3xl bg-[#121212]/60 border border-white/10 overflow-hidden flex items-center justify-center p-4 shadow-inner">
          
          {/* Simulated Orbital Grid Rings */}
          {[160, 240, 320, 420].map((diam, rIdx) => (
            <motion.div
              key={diam}
              animate={{ rotate: rIdx % 2 === 0 ? 360 : -360 }}
              transition={{ repeat: Infinity, duration: 80 + rIdx * 30, ease: 'linear' }}
              style={{ width: `${diam}px`, height: `${diam}px` }}
              className="absolute rounded-full border border-white/[0.04] pointer-events-none flex items-center justify-center"
            />
          ))}

          {/* Center Gravity Kernel */}
          <div className="absolute z-10 w-12 h-12 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#A7F432] blur-md opacity-40 animate-pulse pointer-events-none" />
          <div className="absolute z-10 w-4 h-4 rounded-full bg-white shadow-[0_0_20px_white] pointer-events-none" />

          {/* Floating Skill Planets */}
          <div className="absolute inset-0 flex items-center justify-center">
            {SKILL_PLANETS.map((planet, idx) => {
              const isSelected = activePlanet.id === planet.id;
              const isHovered = hoverPlanet?.id === planet.id;
              
              // Custom spatial distribution coordinates
              const angle = (idx / SKILL_PLANETS.length) * Math.PI * 2 + 0.4;
              const dist = 110 + (idx % 3) * 65; // staggered radius
              const posX = Math.cos(angle) * dist;
              const posY = Math.sin(angle) * dist * 0.85; // elliptical flattening

              return (
                <motion.div
                  key={planet.id}
                  style={{ x: posX, y: posY }}
                  animate={{
                    y: [posY - 10, posY + 10, posY - 10],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5 + (idx % 4),
                    ease: 'easeInOut'
                  }}
                  className="absolute z-20 flex items-center justify-center"
                >
                  <button
                    onClick={() => { playSwoosh(); setActivePlanet(planet); }}
                    onMouseEnter={() => { playClick(); setHoverPlanet(planet); }}
                    onMouseLeave={() => setHoverPlanet(null)}
                    style={{
                      background: `radial-gradient(circle at 30% 30%, ${planet.color}, #121212 85%)`,
                      boxShadow: isSelected || isHovered
                        ? `0 0 45px ${planet.glowColor}, inset 0 0 20px rgba(255,255,255,0.4)`
                        : `0 8px 25px -5px rgba(0,0,0,0.8), inset 0 0 10px rgba(255,255,255,0.15)`
                    }}
                    className={`rounded-full transition-all duration-300 cursor-pointer flex flex-col items-center justify-center p-3 text-center select-none relative ${getSizePx(planet.size)} ${
                      isSelected || isHovered ? 'scale-115 border-2 border-white z-40 font-bold' : 'border border-white/20 opacity-90 hover:opacity-100'
                    }`}
                  >
                    <span className="font-sans font-extrabold text-[#080808] drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] leading-tight px-1">
                      {planet.name.split('&')[0]}
                    </span>
                    {planet.size === 'giant' && (
                      <span className="text-[9px] font-mono font-bold tracking-widest text-[#080808]/80 uppercase mt-0.5">
                        GIANT MASS
                      </span>
                    )}
                  </button>
                </motion.div>
              );
            })}
          </div>

          <div className="absolute bottom-4 right-6 text-[10px] font-mono text-[#CFCFCF]/40 pointer-events-none">
            ORBITAL MATRIX SPATIAL PHYSICS
          </div>
        </div>

        {/* Right Active Planet Dossier (5 cols) */}
        <div className="lg:col-span-5 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.25 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#171717] border border-[#D4AF37]/40 shadow-2xl space-y-6 relative overflow-hidden"
            >
              <div 
                className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ backgroundColor: current.color }}
              />

              {/* Planet Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-[#121212] border border-white/10 text-[10px] font-mono text-[#A7F432] tracking-widest uppercase mb-1.5 inline-block">
                    PLANET CLASSIFICATION: {current.category} ({current.size.toUpperCase()} MASS)
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-[#F7F7F7]">
                    {current.name}
                  </h3>
                </div>
                <div 
                  className="w-10 h-10 rounded-full border border-white/30 shadow-md shrink-0 ml-3"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${current.color}, #080808)` }}
                />
              </div>

              {/* Experience Level Note (Replaces %) */}
              <div className="p-4 rounded-xl bg-[#121212] border border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#CFCFCF]/60 block">ARCHITECTURAL PRODUCTION DEPTH</span>
                  <span className="text-sm font-bold text-[#D4AF37] font-mono">{current.experienceLevel}</span>
                </div>
                <CheckCircle2 className="w-5 h-5 text-[#A7F432]" />
              </div>

              {/* Projects Built with this Planet */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono tracking-widest text-[#F7F7F7] uppercase flex items-center gap-2">
                  <ShieldAlert className="w-3.5 h-3.5 text-[#D4AF37]" /> FLAGSHIP SYSTEMS ARCHITECTED
                </h4>
                <div className="flex flex-wrap gap-2">
                  {current.projectsBuilt.map((proj) => (
                    <span key={proj} className="px-3 py-1.5 rounded-lg bg-[#121212] border border-[#D4AF37]/30 text-xs font-sans font-semibold text-[#F7F7F7]">
                      {proj}
                    </span>
                  ))}
                </div>
              </div>

              {/* Associated Tools & Ecosystem */}
              <div className="space-y-3 pt-2 border-t border-white/10">
                <h4 className="text-xs font-mono tracking-widest text-[#CFCFCF] uppercase flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-[#A7F432]" /> ASSOCIATED TOOLS & ECOSYSTEM
                </h4>
                <div className="flex flex-wrap gap-2">
                  {current.associatedTools.map((tool) => (
                    <span key={tool} className="px-2.5 py-1 rounded bg-[#202020] border border-white/10 text-xs font-mono text-[#A7F432]">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-[11px] font-mono text-[#CFCFCF]/50 flex items-center justify-between">
                <span>ZERO PROGRESS BARS DETECTED</span>
                <span>SPATIAL COMPLIANCE: 100%</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};
