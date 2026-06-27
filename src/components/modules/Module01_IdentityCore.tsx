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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { playClick, playSwoosh } = useAudioEngine();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;
    setMousePos({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="min-h-[80vh] py-8 px-4 flex flex-col items-center justify-center font-sans select-none relative overflow-hidden"
    >
      {/* Background Spatial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Header Title */}
      <div className="text-center mb-10 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono tracking-widest mb-4">
          <Orbit className="w-3.5 h-3.5" /> SYSTEM MODULE 01 // IDENTITY CORE
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F7F7F7] mb-3">
          Multidisciplinary Competency Hub
        </h1>
        <p className="text-sm text-[#CFCFCF]/80">
          Replaces the traditional static "About Me". Hover or click orbiting competency nodes to inspect Vanji Nathan's executive engineering philosophy.
        </p>
      </div>

      {/* Main Spatial Grid Container */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        {/* Left/Center: Spatial Orbit Map (7 cols) */}
        <div className="lg:col-span-7 flex items-center justify-center relative min-h-[440px] sm:min-h-[520px]">

          {/* Simulated Outer Orbit Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 120, ease: 'linear' }}
            className="absolute w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] rounded-full border border-dashed border-white/10 pointer-events-none"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 90, ease: 'linear' }}
            className="absolute w-[260px] sm:w-[340px] h-[260px] sm:h-[340px] rounded-full border border-white/5 pointer-events-none"
          />

          {/* Center Identity Hub: Profile Image */}
          <motion.div
            style={{ x: mousePos.x * -0.5, y: mousePos.y * -0.5 }}
            className="relative z-20 flex flex-col items-center text-center cursor-default profile-float"
          >
            {/* Glassmorphism outer ring */}
            <div className="profile-glass-ring">
              <img
                src={profileImage}
                alt="Vanjinathan S — Founder & Engineer"
                width={160}
                height={160}
                loading="eager"
                className="profile-image-core w-[120px] h-[120px] sm:w-[160px] sm:h-[160px]"
              />
            </div>
            <h2 className="text-lg sm:text-xl font-bold tracking-tight text-[#F7F7F7] mt-4">
              VANJINATHAN S
            </h2>
            <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#D4AF37] uppercase mt-1">
              SYSTEM ARCHITECT
            </span>
          </motion.div>

          {/* Orbiting Identity Nodes (8 nodes placed around radius) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {IDENTITY_NODES.map((node, idx) => {
              const Icon = ICON_MAP[node.icon] || Code2;
              const angle = (idx / IDENTITY_NODES.length) * Math.PI * 2;
              const radius = idx % 2 === 0 ? 190 : 140; // staggered spatial radius
              const nodeX = Math.cos(angle) * radius;
              const nodeY = Math.sin(angle) * radius;
              const isSelected = selectedNode.id === node.id;

              return (
                <motion.div
                  key={node.id}
                  style={{
                    x: nodeX + mousePos.x * (idx % 2 === 0 ? 0.8 : 0.4),
                    y: nodeY + mousePos.y * (idx % 2 === 0 ? 0.8 : 0.4)
                  }}
                  animate={{
                    y: [nodeY - 6, nodeY + 6, nodeY - 6]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4 + (idx % 3),
                    ease: 'easeInOut'
                  }}
                  className="absolute pointer-events-auto z-30"
                >
                  <button
                    onClick={() => { playSwoosh(); setSelectedNode(node); }}
                    onMouseEnter={() => { playClick(); setSelectedNode(node); }}
                    className={`group relative p-3 sm:p-4 rounded-2xl transition-all cursor-pointer flex flex-col items-center gap-1.5 ${isSelected
                      ? 'bg-[#171717] border-2 border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.4)] scale-110'
                      : 'bg-[#121212]/90 hover:bg-[#171717] border border-white/10 hover:border-[#A7F432]/40'
                      }`}
                  >
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${isSelected ? 'text-[#D4AF37]' : 'text-[#CFCFCF] group-hover:text-white'}`} />
                    <span className={`text-[10px] sm:text-xs font-mono tracking-wider ${isSelected ? 'text-[#F7F7F7] font-bold' : 'text-[#CFCFCF]'}`}>
                      {node.label}
                    </span>
                    {isSelected && (
                      <span className="absolute -bottom-1 w-3 h-1 bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]" />
                    )}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right: Expanded Dossier Glass Card (5 cols) */}
        <div className="lg:col-span-5 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedNode.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#171717] border border-white/10 shadow-2xl space-y-6 relative overflow-hidden"
            >
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-15 pointer-events-none"
                style={{ backgroundColor: selectedNode.color }}
              />

              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#121212] border border-white/10 text-[#D4AF37]">
                    {React.createElement(ICON_MAP[selectedNode.icon] || Code2, { className: 'w-6 h-6' })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-[#F7F7F7]">
                      {selectedNode.label}
                    </h3>
                    <p className="text-xs font-mono tracking-wide text-[#A7F432]">
                      {selectedNode.tagline}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#CFCFCF]/50">NODE://0{IDENTITY_NODES.indexOf(selectedNode) + 1}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#CFCFCF] leading-relaxed">
                {selectedNode.description}
              </p>

              {/* Key Principles */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5" /> CORE TENETS & EXECUTION MANDATES
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {selectedNode.keyPrinciples.map((principle, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-3 p-2.5 rounded-lg bg-[#121212] border border-white/5 text-xs text-[#F7F7F7]">
                      <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{principle}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vision Footer Quote */}
              <div className="p-4 rounded-xl bg-[#080808] border-l-2 border-[#A7F432]">
                <p className="text-xs text-[#CFCFCF] italic">
                  "{selectedNode.vision}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};
