import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, Terminal, Zap } from 'lucide-react';
import { useAudioEngine } from './AudioEngine';

interface BootProps {
  onBootComplete: () => void;
}

const SEQUENCE_STEPS = [
  'INITIALIZING SYSTEM',
  'LOADING PROJECTS',
  'LOADING EXPERIENCE',
  'LOADING KNOWLEDGE',
  'LOADING FUTURE',
  'ACCESS GRANTED'
];

export const BootSequence: React.FC<BootProps> = ({ onBootComplete }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [showIdentity, setShowIdentity] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(12);
  const { playClick, playAccessGranted } = useAudioEngine();

  useEffect(() => {
    // Step typewriter timer
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < SEQUENCE_STEPS.length - 1) {
          playClick();
          setProgress((p) => Math.min(100, p + 18));
          return prev + 1;
        } else {
          clearInterval(interval);
          setProgress(100);
          playAccessGranted();
          setTimeout(() => {
            setShowIdentity(true);
          }, 600);
          return prev;
        }
      });
    }, 450);

    return () => clearInterval(interval);
  }, []);

  const handleEnterOS = () => {
    playAccessGranted();
    onBootComplete();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#080808] text-[#F7F7F7] flex flex-col items-center justify-center select-none overflow-hidden font-mono">
      {/* Background Subtle Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#F7F7F7_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Top right Skip button */}
      <div className="absolute top-8 right-8 z-20">
        <button
          onClick={handleEnterOS}
          className="px-4 py-2 text-xs font-mono tracking-widest text-[#CFCFCF] hover:text-[#D4AF37] border border-white/10 hover:border-[#D4AF37]/40 rounded bg-[#121212]/50 backdrop-blur transition-all flex items-center gap-2 cursor-pointer"
        >
          <span>SKIP KERNEL BOOT</span>
          <Zap className="w-3.5 h-3.5 text-[#D4AF37]" />
        </button>
      </div>

      <AnimatePresence mode="wait">
        {!showIdentity ? (
          <motion.div
            key="terminal-boot"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md p-8 rounded-xl bg-[#121212] border border-white/10 shadow-2xl relative"
          >
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-[#A7F432]/80" />
              <span className="text-xs text-[#CFCFCF] ml-2 tracking-wider">KERNEL_EXEC://boot_loader.asm</span>
            </div>

            <div className="space-y-3 min-h-[220px]">
              {SEQUENCE_STEPS.slice(0, currentStep + 1).map((step, idx) => {
                const isCurrent = idx === currentStep;
                const isGranted = step === 'ACCESS GRANTED';
                return (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`flex items-center gap-3 text-sm ${
                      isGranted 
                        ? 'text-[#A7F432] font-bold tracking-widest pt-3 text-base' 
                        : isCurrent 
                        ? 'text-[#D4AF37]' 
                        : 'text-[#CFCFCF]/70'
                    }`}
                  >
                    <Terminal className="w-4 h-4 shrink-0 opacity-80" />
                    <span>{step}</span>
                    {isCurrent && !isGranted && (
                      <span className="inline-block w-2 h-4 bg-[#D4AF37] animate-pulse" />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Simulated Memory Bar */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
              <span className="text-[10px] text-[#CFCFCF]">MEM_ALLOC</span>
              <div className="flex-1 h-1.5 bg-[#171717] rounded overflow-hidden border border-white/5">
                <motion.div
                  className="h-full bg-[#D4AF37]"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <span className="text-[10px] text-[#D4AF37]">{progress}%</span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="identity-reveal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center px-6 max-w-2xl font-sans"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block px-3 py-1 rounded-full bg-[#121212] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono tracking-widest mb-6"
            >
              SPATIAL EXECUTIVE ENVIRONMENT v4.2
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-[#F7F7F7] mb-8 font-sans"
            >
              VANJI OS
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 max-w-xl mx-auto font-sans"
            >
              {['Digital Builder', 'Developer', 'Founder', 'Problem Solver'].map((role, rIdx) => (
                <motion.div
                  key={role}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + rIdx * 0.1 }}
                  className="p-3 rounded-lg bg-[#121212] border border-white/10 text-xs text-[#CFCFCF] hover:text-[#F7F7F7] hover:border-[#A7F432]/40 transition-colors"
                >
                  {role}
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              onClick={handleEnterOS}
              className="group relative px-8 py-4 rounded-xl bg-[#F7F7F7] text-[#080808] font-semibold text-sm tracking-wide shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(212,175,55,0.4)] hover:bg-[#D4AF37] transition-all cursor-pointer flex items-center gap-3 mx-auto"
            >
              <span>ENTER SPATIAL KERNEL</span>
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                →
              </motion.span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
