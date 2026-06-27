import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECT_VAULT } from '../../data/osData';
import { ProjectCaseStudy } from '../../types';
import { useAudioEngine } from '../AudioEngine';
import { 
  ShieldAlert, 
  Lock, 
  Unlock, 
  Terminal, 
  Cpu, 
  ExternalLink, 
  Github, 
  X, 
  CheckCircle2, 
  AlertTriangle, 
  Zap, 
  Database, 
  Layers, 
  TrendingUp, 
  BookOpen, 
  ArrowRight, 
  Eye 
} from 'lucide-react';

export const Module03_ProjectVault: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectCaseStudy | null>(null);
  const [activeTab, setActiveTab] = useState<'summary' | 'research' | 'architecture' | 'challenges' | 'roadmap'>('summary');
  const { playClick, playAccessGranted, playSwoosh } = useAudioEngine();

  const handleOpenVault = (project: ProjectCaseStudy) => {
    playAccessGranted();
    setActiveTab('summary');
    setActiveProject(project);
  };

  return (
    <div className="min-h-[80vh] py-8 px-4 font-sans select-none max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono tracking-widest mb-4 animate-pulse">
          <ShieldAlert className="w-3.5 h-3.5" /> SYSTEM MODULE 03 // PROJECT VAULT
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F7F7F7] mb-3">
          Classified Engineering Vaults
        </h1>
        <p className="text-sm text-[#CFCFCF]/80 max-w-2xl mx-auto">
          Not generic project cards or Dribbble screenshots. Select a secure futuristic container to unlock Vanji Nathan's comprehensive professional case study dossiers.
        </p>
      </div>

      {/* Secure Containers Grid (6 Projects) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECT_VAULT.map((project, idx) => {
          const isFlagship = project.id === 'otogo' || project.id === 'moodscape';
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div
                onClick={() => handleOpenVault(project)}
                className={`group relative rounded-2xl bg-[#171717] border border-white/10 hover:border-[#D4AF37]/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer shadow-xl hover:shadow-[0_15px_50px_-10px_rgba(0,0,0,0.8)] overflow-hidden min-h-[300px] ${
                  isFlagship ? 'border-[#D4AF37]/30 bg-gradient-to-b from-[#1c1c1c] to-[#171717]' : ''
                }`}
              >
                {/* Background Cyber Container Lines */}
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-25 transition-opacity pointer-events-none font-mono text-[60px] font-bold text-[#D4AF37] select-none">
                  0{idx+1}
                </div>

                {/* Top Rail */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded bg-[#121212] border border-white/10 font-mono text-[10px] text-[#A7F432] tracking-wider uppercase">
                      {project.codeName}
                    </span>
                    <span className={`px-2.5 py-1 rounded font-mono text-[10px] tracking-wider uppercase ${
                      project.status === 'Deployed' ? 'bg-[#A7F432]/20 text-[#A7F432] border border-[#A7F432]/30' : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-[#F7F7F7] group-hover:text-[#D4AF37] transition-colors flex items-center gap-2 mb-2">
                    <span>{project.name}</span>
                    <Lock className="w-4 h-4 text-[#CFCFCF]/40 group-hover:hidden" />
                    <Unlock className="w-4 h-4 text-[#D4AF37] hidden group-hover:inline" />
                  </h3>

                  <p className="text-xs text-[#CFCFCF]/80 leading-relaxed line-clamp-3">
                    {project.tagline}
                  </p>
                </div>

                {/* Bottom Rail & Tech Count */}
                <div className="pt-6 border-t border-white/10 mt-6">
                  <div className="flex items-center justify-between text-xs font-mono text-[#CFCFCF]/70 mb-4">
                    <span>CATEGORY</span>
                    <span className="text-[#F7F7F7]">{project.category}</span>
                  </div>

                  <button className="w-full py-3 rounded-xl bg-[#121212] group-hover:bg-[#D4AF37] text-[#CFCFCF] group-hover:text-[#080808] font-mono text-xs tracking-wider transition-all flex items-center justify-center gap-2 font-bold">
                    <Eye className="w-4 h-4" />
                    <span>UNLOCK CLASSIFIED VAULT</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Full Case Study Classified Modal / Drawer */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 select-none font-sans overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-[#080808]/90 backdrop-blur-xl"
            />

            {/* Case Study Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-6xl rounded-2xl bg-[#121212] border border-[#D4AF37]/50 shadow-[0_0_100px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col z-10 h-[92vh]"
            >
              {/* Drawer Top Header */}
              <div className="px-6 py-4 bg-[#171717] border-b border-white/10 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-[#A7F432]" />
                  <span className="text-xs font-mono text-[#D4AF37] tracking-widest ml-3 uppercase font-bold">
                    CLASSIFIED CASE STUDY // {activeProject.codeName}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  {activeProject.demoUrl && (
                    <a
                      href={activeProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-[#A7F432] hover:underline"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live Matrix
                    </a>
                  )}
                  <button
                    onClick={() => setActiveProject(null)}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Case Study Title Banner */}
              <div className="px-6 sm:px-10 py-6 bg-gradient-to-r from-[#171717] via-[#1f1f1f] to-[#171717] border-b border-white/10 shrink-0">
                <div className="max-w-5xl">
                  <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F7F7F7] mb-2">
                    {activeProject.name}
                  </h2>
                  <p className="text-sm sm:text-base text-[#D4AF37] font-mono tracking-wide">
                    {activeProject.tagline}
                  </p>
                </div>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-white/10 font-mono text-xs">
                  {[
                    { id: 'summary', label: '01 Overview & Metrics' },
                    { id: 'research', label: '02 Problem & Research' },
                    { id: 'architecture', label: '03 Architecture & Tech Stack' },
                    { id: 'challenges', label: '04 Challenges & Solutions' },
                    { id: 'roadmap', label: '05 Lessons & Future Scope' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => { playClick(); setActiveTab(tab.id as any); }}
                      className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                        activeTab === tab.id
                          ? 'bg-[#D4AF37] text-[#080808] font-bold shadow-md'
                          : 'bg-[#121212] text-[#CFCFCF] hover:bg-[#1a1a1a]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Case Study Content Body */}
              <div className="p-6 sm:p-10 overflow-y-auto flex-1 text-[#CFCFCF] space-y-8 max-w-5xl mx-auto w-full text-sm leading-relaxed">
                
                {activeTab === 'summary' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                    {/* Overview Paragraph */}
                    <div className="p-6 rounded-2xl bg-[#171717] border border-white/10">
                      <h4 className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase mb-3 flex items-center gap-2">
                        <Terminal className="w-4 h-4" /> EXECUTIVE OVERVIEW
                      </h4>
                      <p className="text-[#F7F7F7] text-base leading-relaxed">
                        {activeProject.overview}
                      </p>
                    </div>

                    {/* Key Project Metrics */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-mono tracking-widest text-[#A7F432] uppercase flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" /> VERIFIED BUSINESS & ENGINEERING METRICS
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {activeProject.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="p-5 rounded-xl bg-[#171717] border border-white/10 relative">
                            <span className="text-xs font-mono text-[#CFCFCF]/70">{m.label}</span>
                            <div className="text-2xl sm:text-3xl font-bold font-mono text-[#F7F7F7] my-1">{m.value}</div>
                            <span className="text-xs font-mono text-[#A7F432] font-semibold">{m.delta}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features Matrix */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">FLAGSHIP CORE FEATURES</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {activeProject.features.map((feat, fIdx) => (
                          <div key={fIdx} className="p-5 rounded-xl bg-[#171717] border border-white/5">
                            <h5 className="text-[#F7F7F7] font-bold mb-1.5">{feat.title}</h5>
                            <p className="text-xs text-[#CFCFCF]/80">{feat.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'research' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                    {/* Problem Statement */}
                    <div className="p-6 rounded-2xl bg-[#171717] border border-red-500/30">
                      <h4 className="text-xs font-mono tracking-widest text-red-400 uppercase mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" /> THE PROBLEM STATEMENT
                      </h4>
                      <p className="text-[#F7F7F7] text-base leading-relaxed">
                        {activeProject.problemStatement}
                      </p>
                    </div>

                    {/* Research Process List */}
                    <div className="p-6 rounded-2xl bg-[#171717] border border-white/10 space-y-4">
                      <h4 className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase flex items-center gap-2">
                        <BookOpen className="w-4 h-4" /> RIGOROUS RESEARCH PROCESS
                      </h4>
                      <div className="space-y-3">
                        {activeProject.researchProcess.map((res, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-3 text-sm text-[#F7F7F7]">
                            <span className="w-6 h-6 rounded-lg bg-[#121212] border border-[#D4AF37]/30 text-[#D4AF37] font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                              0{rIdx+1}
                            </span>
                            <span>{res}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'architecture' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                    {/* Architecture Summary */}
                    <div className="p-6 rounded-2xl bg-[#171717] border border-white/10">
                      <h4 className="text-xs font-mono tracking-widest text-[#A7F432] uppercase mb-2 flex items-center gap-2">
                        <Layers className="w-4 h-4" /> SYSTEM ARCHITECTURE & TOPOLOGY
                      </h4>
                      <p className="text-[#F7F7F7] mb-6">{activeProject.architectureSummary}</p>

                      {/* Architecture Data Flow Pipeline */}
                      <div className="p-5 rounded-xl bg-[#121212] border border-white/5 space-y-3 font-mono text-xs">
                        <div className="text-[#D4AF37] mb-2">// DATA INGRESS & THROUGHPUT PIPELINE</div>
                        <div className="flex flex-col md:flex-row items-center gap-3">
                          {activeProject.architectureFlow.map((flowStep, flIdx) => (
                            <React.Fragment key={flIdx}>
                              <div className="flex-1 p-3 rounded bg-[#1c1c1c] border border-white/10 text-center text-[#F7F7F7] w-full">
                                {flowStep}
                              </div>
                              {flIdx < activeProject.architectureFlow.length - 1 && (
                                <ArrowRight className="w-4 h-4 text-[#D4AF37] rotate-90 md:rotate-0 shrink-0" />
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Screenshots / Simulation Mockups */}
                    {activeProject.screenshots && activeProject.screenshots.length > 0 && (
                      <div className="space-y-4">
                        <h4 className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">SIMULATED TELEMETRY & KERNEL CODE</h4>
                        {activeProject.screenshots.map((screen, scIdx) => (
                          <div key={scIdx} className="p-6 rounded-2xl bg-[#171717] border border-white/10 space-y-3 font-mono">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-[#F7F7F7] font-bold font-sans text-base">{screen.title}</span>
                              {screen.metricLabel && <span className="text-[#A7F432]">{screen.metricLabel}</span>}
                            </div>
                            <p className="text-xs font-sans text-[#CFCFCF]/80">{screen.caption}</p>
                            {screen.codeSnippet && (
                              <pre className="p-4 rounded-xl bg-[#080808] border border-white/10 overflow-x-auto text-xs text-[#A7F432] font-mono leading-relaxed">
                                <code>{screen.codeSnippet}</code>
                              </pre>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Technology Stack Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {Object.entries(activeProject.technologyStack).map(([layerName, tools]) => (
                        <div key={layerName} className="p-5 rounded-xl bg-[#171717] border border-white/10">
                          <h5 className="text-xs font-mono text-[#D4AF37] tracking-wider uppercase mb-3">// {layerName}</h5>
                          <div className="flex flex-wrap gap-2">
                            {(tools as string[]).map((t) => (
                              <span key={t} className="px-2.5 py-1 rounded bg-[#121212] border border-white/10 text-xs font-mono text-[#F7F7F7]">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'challenges' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Challenges */}
                      <div className="p-6 rounded-2xl bg-[#171717] border border-red-500/30 space-y-4">
                        <h4 className="text-xs font-mono tracking-widest text-red-400 uppercase flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4" /> ENGINEERING CHALLENGES
                        </h4>
                        <ul className="space-y-3 text-sm text-[#F7F7F7]">
                          {activeProject.challenges.map((ch, cIdx) => (
                            <li key={cIdx} className="flex items-start gap-2.5 bg-[#121212] p-3 rounded-xl border border-red-500/10">
                              <span className="text-red-400 mt-0.5">▪</span>
                              <span>{ch}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Solutions */}
                      <div className="p-6 rounded-2xl bg-[#171717] border border-[#A7F432]/40 space-y-4">
                        <h4 className="text-xs font-mono tracking-widest text-[#A7F432] uppercase flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4" /> ARCHITECTURAL SOLUTIONS
                        </h4>
                        <ul className="space-y-3 text-sm text-[#F7F7F7]">
                          {activeProject.solutions.map((sol, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-2.5 bg-[#121212] p-3 rounded-xl border border-[#A7F432]/10">
                              <span className="text-[#A7F432] mt-0.5">▪</span>
                              <span>{sol}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Impact Statement */}
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-[#171717] via-[#222] to-[#171717] border border-[#D4AF37]/50">
                      <h4 className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase mb-2">VALIDATED SYSTEM IMPACT</h4>
                      <p className="text-[#F7F7F7] text-base font-medium">{activeProject.impact}</p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'roadmap' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                    {/* Lessons Learned */}
                    <div className="p-6 rounded-2xl bg-[#171717] border border-white/10 space-y-4">
                      <h4 className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">KEY LESSONS LEARNED</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {activeProject.lessonsLearned.map((less, lIdx) => (
                          <div key={lIdx} className="p-4 rounded-xl bg-[#121212] border border-white/5 text-sm text-[#F7F7F7] italic">
                            "{less}"
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Future Scope */}
                    <div className="p-6 rounded-2xl bg-[#171717] border border-[#A7F432]/30 space-y-4">
                      <h4 className="text-xs font-mono tracking-widest text-[#A7F432] uppercase">FUTURE EXPANSION HORIZONS</h4>
                      <div className="space-y-2">
                        {activeProject.futureScope.map((scopeItem, scIdx) => (
                          <div key={scIdx} className="flex items-center gap-3 p-3 rounded-xl bg-[#121212] text-sm text-[#F7F7F7]">
                            <Zap className="w-4 h-4 text-[#A7F432]" />
                            <span>{scopeItem}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

              </div>

              {/* Drawer Bottom Footer */}
              <div className="p-4 bg-[#080808] border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#CFCFCF]">
                <span>VAULT CONTAINER: UNLOCKED</span>
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-6 py-2 rounded-xl bg-[#D4AF37] text-[#080808] font-bold cursor-pointer hover:bg-[#e6c148] transition-colors"
                >
                  CLOSE CASE STUDY
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
