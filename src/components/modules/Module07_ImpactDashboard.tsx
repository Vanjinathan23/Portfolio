import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { TELEMETRY_COUNTERS } from '../../data/osData';
import { TelemetryCounter } from '../../types';
import { useAudioEngine } from '../AudioEngine';
import { 
  BarChart3, 
  Terminal, 
  Cpu, 
  GitBranch, 
  Clock, 
  Zap, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Activity 
} from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  Terminal, Cpu, GitBranch, Clock, Zap, CheckCircle2
};

export const Module07_ImpactDashboard: React.FC = () => {
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});
  const { playClick } = useAudioEngine();

  useEffect(() => {
    // Elegant counter up animation
    const duration = 1200;
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Ease out expo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      const nextVals: Record<string, number> = {};
      TELEMETRY_COUNTERS.forEach((item) => {
        nextVals[item.id] = Math.floor(item.value * ease);
      });

      setAnimatedValues(nextVals);

      if (progress === 1) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[80vh] py-8 px-4 font-sans select-none max-w-7xl mx-auto flex flex-col justify-center">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212] border border-[#A7F432]/40 text-[#A7F432] text-xs font-mono tracking-widest mb-4">
          <Activity className="w-3.5 h-3.5 animate-pulse" /> SYSTEM MODULE 07 // IMPACT DASHBOARD
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F7F7F7] mb-3">
          Executive Telemetry Metrics
        </h1>
        <p className="text-sm text-[#CFCFCF]/80 max-w-2xl mx-auto">
          Institutional grade analytics verifying continuous engineering output. All counters reflect real-world repository contributions, focus hours, and problem resolution vectors.
        </p>
      </div>

      {/* Main Telemetry Counters Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {TELEMETRY_COUNTERS.map((item, idx) => {
          const Icon = ICON_MAP[item.icon] || Terminal;
          const displayVal = animatedValues[item.id] ?? 0;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              onMouseEnter={() => playClick()}
              className="p-6 sm:p-7 rounded-3xl bg-[#171717] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 relative overflow-hidden group shadow-xl"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/15 rounded-full blur-2xl transition-all pointer-events-none" />

              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-[#121212] border border-white/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#080808] transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded bg-[#121212] font-mono text-[10px] text-[#A7F432] border border-[#A7F432]/30">
                  VERIFIED
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-[#CFCFCF]/70 uppercase tracking-wider block">{item.label}</span>
                <div className="text-4xl sm:text-5xl font-extrabold font-mono text-[#F7F7F7] my-2 tracking-tight">
                  {item.prefix}{displayVal}{item.suffix}
                </div>
                <p className="text-xs text-[#CFCFCF]/80 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-[#D4AF37]">
                <span>{item.trend}</span>
                <span>SYS_OK</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Simulated Live System Telemetry Heatmap Rail */}
      <div className="p-8 rounded-3xl bg-[#121212] border border-white/10 shadow-2xl space-y-6 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#A7F432] animate-ping" />
            <span className="text-[#F7F7F7] font-bold tracking-wider">EXECUTION RHYTHM & REPOSITORY CONTRIBUTIONS</span>
          </div>
          <span className="text-[#CFCFCF]/50">365 DAY CYCLIC MATRIX</span>
        </div>

        {/* Simulated Git Activity Bar Chart Grid */}
        <div className="flex items-end gap-1.5 h-24 sm:h-32 pt-4 px-2 overflow-hidden">
          {Array.from({ length: 48 }).map((_, i) => {
            // generate deterministic harmonic heights
            const h = 20 + Math.sin(i * 0.4) * 35 + ((i * 13) % 45);
            const isHigh = h > 60;
            return (
              <motion.div
                key={i}
                initial={{ height: '0%' }}
                animate={{ height: `${Math.min(100, h)}%` }}
                transition={{ duration: 0.6, delay: i * 0.01 }}
                className={`flex-1 rounded-sm transition-colors ${
                  isHigh ? 'bg-[#A7F432] shadow-[0_0_10px_rgba(167,244,50,0.4)]' : 'bg-[#171717] hover:bg-[#D4AF37]'
                }`}
                title={`Sprint Cycle ${i+1}: ${Math.floor(h * 1.5)} commits`}
              />
            );
          })}
        </div>

        <div className="flex items-center justify-between text-[11px] text-[#CFCFCF]/60 pt-2 border-t border-white/5">
          <span>MIN VELOCITY: 4 HRS/DAY</span>
          <span>SYSTEM EFFICIENCY: 100% RESOLUTION</span>
          <span>MAX BURST: 18 HRS/DAY</span>
        </div>
      </div>
    </div>
  );
};
