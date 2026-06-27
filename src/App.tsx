import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AudioProvider } from './components/AudioEngine';
import { BootSequence } from './components/BootSequence';
import { OSTopNav } from './components/OSTopNav';
import { CommandPalette } from './components/CommandPalette';
import { RecruiterDossierModal } from './components/RecruiterDossierModal';
import { FloatingAIBrain } from './components/FloatingAIBrain';
import { DossierPill } from './components/DossierPill';

// Modules
import { Module01_IdentityCore } from './components/modules/Module01_IdentityCore';
import { Module02_CareerJourney } from './components/modules/Module02_CareerJourney';
import { Module03_ProjectVault } from './components/modules/Module03_ProjectVault';
import { Module05_SkillGalaxy } from './components/modules/Module05_SkillGalaxy';
import { Module06_InnovationLab } from './components/modules/Module06_InnovationLab';
import { Module07_ImpactDashboard } from './components/modules/Module07_ImpactDashboard';
import { Module08_FutureRoadmap } from './components/modules/Module08_FutureRoadmap';
import { Module09_MissionControl } from './components/modules/Module09_MissionControl';

export default function App() {
  const [booting, setBooting] = useState<boolean>(true);
  const [activeModule, setActiveModule] = useState<string>('identity_core');
  const [isCommandOpen, setIsCommandOpen] = useState<boolean>(false);
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (booting) return;
    const handleScroll = () => {
      const sections = [
        'identity_core',
        'career_and_roadmap',
        'projects_and_innovation',
        'skill_galaxy',
        'impact_dashboard'
      ];

      let currentSection = sections[0];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust threshold to change tab when section is near top
          if (rect.top <= 200) {
            currentSection = section;
          }
        }
      }
      if (activeModule !== currentSection) {
        setActiveModule(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [booting, activeModule]);

  const handleSelectModule = (id: string) => {
    setActiveModule(id);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for fixed header height
        behavior: 'smooth'
      });
    }
  };

  return (
    <AudioProvider>
      <div className="min-h-screen bg-[#080808] text-[#F7F7F7] flex flex-col font-sans relative selection:bg-[#D4AF37] selection:text-[#080808]">

        {/* Persistent Spatial Background Matrix Canvas */}
        <div className="fixed inset-0 opacity-[0.025] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Boot Sequence Modal */}
        {booting && (
          <BootSequence onBootComplete={() => setBooting(false)} />
        )}

        {/* Main Operating Kernel Desktop */}
        {!booting && (
          <>
            <OSTopNav
              activeModule={activeModule}
              onSelectModule={handleSelectModule}
              onOpenCommand={() => setIsCommandOpen(true)}
              onOpenRecruiterVIP={() => setIsRecruiterModalOpen(true)}
            />

            <FloatingAIBrain />
            <DossierPill onOpen={() => setIsRecruiterModalOpen(true)} />

            <main className="flex-1 w-full relative z-10 py-4 pb-20 overflow-x-hidden">
              <motion.div
                initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                {/* Scrolling Sections */}

                <section id="identity_core">
                  <Module01_IdentityCore />
                </section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

                <section id="career_and_roadmap" className="space-y-16">
                  <Module02_CareerJourney />
                  <Module08_FutureRoadmap />
                </section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

                <section id="projects_and_innovation" className="space-y-16">
                  <Module03_ProjectVault />
                  <Module06_InnovationLab />
                </section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

                <section id="skill_galaxy">
                  <Module05_SkillGalaxy />
                </section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

                <section id="impact_dashboard">
                  <Module07_ImpactDashboard />
                </section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

                <section id="mission_control">
                  <Module09_MissionControl />
                </section>
              </motion.div>
            </main>

            {/* Global Modals */}
            <CommandPalette
              isOpen={isCommandOpen}
              onClose={() => setIsCommandOpen(false)}
              onSelectModule={handleSelectModule}
              onOpenRecruiterVIP={() => setIsRecruiterModalOpen(true)}
            />

            <RecruiterDossierModal
              isOpen={isRecruiterModalOpen}
              onClose={() => setIsRecruiterModalOpen(false)}
              onTriggerHire={() => handleSelectModule('mission_control')}
            />

            {/* OS Kernel Footer Bar */}
            <footer className="w-full py-4 px-6 bg-[#080808] border-t border-white/10 text-center font-mono text-[11px] text-[#CFCFCF]/50 select-none flex flex-col sm:flex-row items-center justify-between gap-2 z-20">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#A7F432]" />
                <span>VANJI OS KERNEL v4.2 // SPATIAL EXECUTIVE ENVIRONMENT</span>
              </div>
              <div className="flex items-center gap-4 text-[#D4AF37]">
                <span>OWNER: VANJINATHAN S</span>
                <span>vanjinathanvanji925@gmail.com</span>
              </div>
            </footer>
          </>
        )}

      </div>
    </AudioProvider>
  );
}
