import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAudioEngine } from './AudioEngine';
import profileImage from '../assets/vanjinathan.png';
import {
  Award,
  X,
  CheckCircle2,
  Zap,
  Briefcase,
  Cpu,
  ShieldCheck,
  Mail,
  Copy,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface RecruiterProps {
  isOpen: boolean;
  onClose: () => void;
  onTriggerHire: () => void;
}

export const RecruiterDossierModal: React.FC<RecruiterProps> = ({
  isOpen,
  onClose,
  onTriggerHire
}) => {
  const [copied, setCopied] = useState(false);
  const { playClick, playAccessGranted } = useAudioEngine();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('vanjinathanvanji925@gmail.com');
    setCopied(true);
    playAccessGranted();
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none font-sans">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#080808]/85 backdrop-blur-lg"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl rounded-2xl bg-[#121212] border border-[#D4AF37]/50 shadow-[0_0_80px_rgba(212,175,55,0.2)] overflow-hidden flex flex-col z-10 max-h-[90vh]"
          >
            {/* Header Rail */}
            <div className="px-6 py-5 bg-gradient-to-r from-[#171717] via-[#1c1c1c] to-[#171717] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#D4AF37] text-[#080808]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold tracking-tight text-[#F7F7F7]">
                    VIP Recruiter 60-Second Dossier
                  </h2>
                  <p className="text-xs text-[#D4AF37] font-mono tracking-widest">
                    TARGET CLEARANCE: TIER-1 ORGANIZATIONS
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-[#CFCFCF] hover:text-white transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#CFCFCF] text-sm leading-relaxed">
              {/* Profile Identity Header */}
              <div className="flex flex-col items-center text-center pb-2">
                <div className="relative mb-4">
                  <img
                    src={profileImage}
                    alt="Vanjinathan S"
                    width={140}
                    height={140}
                    loading="eager"
                    className="profile-image-recruiter w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] bg-gradient-to-br from-[#E1CCB6] via-[#C9B39B] to-[#A08871] rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F7F7F7]">
                  VANJINATHAN S
                </h3>
                <div className="mt-2 space-y-0.5">
                  <p className="text-xs font-mono tracking-wider text-[#D4AF37]">Full-Stack Developer</p>
                  <p className="text-xs font-mono tracking-wider text-[#A7F432]">AI/ML Engineer</p>
                  <p className="text-xs font-mono tracking-wider text-[#CFCFCF]/70">Cloud & GenAI Enthusiast</p>
                </div>
              </div>

              {/* Pillar 1: Who I Am */}
              <div className="p-5 rounded-xl bg-[#171717] border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-2xl pointer-events-none" />
                <h3 className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" /> 01 // WHO I AM
                </h3>
                <p className="text-[#F7F7F7] font-semibold text-base mb-1">
                  Vanjinathan S — AI/ML Engineer, Digital Builder, & Founder
                </p>
                <p className="text-xs text-[#CFCFCF]">
                  Not just a standard developer writing tickets, but an early-stage product architect who deconstructs ambiguous human friction into spatial web operating kernels and venture-scale software infrastructure.
                </p>
              </div>

              {/* Grid: What I Build & How I Think */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Pillar 2: What I Build */}
                <div className="p-5 rounded-xl bg-[#171717] border border-white/10">
                  <h3 className="text-xs font-mono tracking-widest text-[#A7F432] uppercase mb-2 flex items-center gap-2">
                    <Cpu className="w-4 h-4" /> 02 // WHAT I BUILD
                  </h3>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-start gap-2">
                      <span className="text-[#A7F432] mt-0.5">▪</span>
                      <span><strong>Urban Infrastructure Intelligence:</strong> Smart City SaaS with AI anomaly detection and geo-spatial monitoring.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#A7F432] mt-0.5">▪</span>
                      <span><strong>TumorInsight:</strong> Medical Imaging AI diagnosis for brain tumor detection and segmentation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#A7F432] mt-0.5">▪</span>
                      <span><strong>ClinIQ:</strong> AI-Powered Clinical Intelligence and Triage Automation platform.</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 3: How I Think & Solve */}
                <div className="p-5 rounded-xl bg-[#171717] border border-white/10">
                  <h3 className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4" /> 03 // HOW I SOLVE PROBLEMS
                  </h3>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-start gap-2">
                      <span className="text-[#D4AF37] mt-0.5">▪</span>
                      <span><strong>First-Principles Deconstruction:</strong> Rejecting framework cliches; inspecting raw TCP handshakes and memory buffers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D4AF37] mt-0.5">▪</span>
                      <span><strong>Deterministic Graph Mapping:</strong> Isolating root bottlenecks before writing a single line of application code.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D4AF37] mt-0.5">▪</span>
                      <span><strong>Unit Economics Discipline:</strong> Every UI feature evaluated for retention lift and cloud compute ROI.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pillar 4: Value Proposition */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-[#1c1c1c] to-[#171717] border border-[#A7F432]/30">
                <h3 className="text-xs font-mono tracking-widest text-[#A7F432] uppercase mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> 04 // IMMEDIATE ENTERPRISE VALUE
                </h3>
                <p className="text-xs leading-relaxed text-[#F7F7F7]">
                  Capable of stepping into high-impact engineering or product leadership teams at <strong>Google, Microsoft, OpenAI, Tesla, or Apple</strong>. You get a frontend architect with Apple-level visual standards, a backend engineer capable of scaling async Python/Node microservices, and an early-stage founder who executes with extreme velocity.
                </p>
              </div>
            </div>

            {/* Footer Action Bar */}
            <div className="p-6 bg-[#080808] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[#171717] hover:bg-[#222] border border-white/10 text-xs font-mono tracking-wide text-[#F7F7F7] flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{copied ? 'COPIED TO CLIPBOARD' : 'vanjinathanvanji925@gmail.com'}</span>
                </button>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => { onClose(); onTriggerHire(); }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#e5c148] text-[#080808] font-bold text-xs tracking-wider uppercase shadow-[0_0_25px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>INITIATE INTERVIEW DISPATCH</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
