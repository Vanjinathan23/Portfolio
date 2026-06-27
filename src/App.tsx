import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ModuleId } from './types';
import { AudioProvider } from './components/AudioEngine';
import { BootSequence } from './components/BootSequence';
import { OSTopNav } from './components/OSTopNav';
import { CommandPalette } from './components/CommandPalette';
import { RecruiterDossierModal } from './components/RecruiterDossierModal';

// Modules
import { Module01_IdentityCore } from './components/modules/Module01_IdentityCore';
import { Module02_CareerJourney } from './components/modules/Module02_CareerJourney';
import { Module03_ProjectVault } from './components/modules/Module03_ProjectVault';
import { Module04_AIBrain } from './components/modules/Module04_AIBrain';
import { Module05_SkillGalaxy } from './components/modules/Module05_SkillGalaxy';
import { Module06_InnovationLab } from './components/modules/Module06_InnovationLab';
import { Module07_ImpactDashboard } from './components/modules/Module07_ImpactDashboard';
import { Module08_FutureRoadmap } from './components/modules/Module08_FutureRoadmap';
import { Module09_MissionControl } from './components/modules/Module09_MissionControl';

export default function App() {
  const [booting, setBooting] = useState<boolean>(true);
  const [activeModule, setActiveModule] = useState<ModuleId>('identity_core');
  const [isCommandOpen, setIsCommandOpen] = useState<boolean>(false);
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState<boolean>(false);

  const renderActiveModule = () => {
    switch (activeModule) {
      case 'identity_core':
        return <Module01_IdentityCore />;
      case 'career_journey':
        return <Module02_CareerJourney />;
      case 'project_vault':
        return <Module03_ProjectVault />;
      case 'ai_brain':
        return <Module04_AIBrain />;
      case 'skill_galaxy':
        return <Module05_SkillGalaxy />;
      case 'innovation_lab':
        return <Module06_InnovationLab />;
      case 'impact_dashboard':
        return <Module07_ImpactDashboard />;
      case 'future_roadmap':
        return <Module08_FutureRoadmap />;
      case 'mission_control':
        return <Module09_MissionControl />;
      default:
        return <Module01_IdentityCore />;
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
              onSelectModule={setActiveModule}
              onOpenCommand={() => setIsCommandOpen(true)}
              onOpenRecruiterVIP={() => setIsRecruiterModalOpen(true)}
            />

            <main className="flex-1 w-full relative z-10 py-4 pb-20 overflow-x-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeModule}
                  initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full"
                >
                  {renderActiveModule()}
                </motion.div>
              </AnimatePresence>
            </main>

            {/* Global Modals */}
            <CommandPalette
              isOpen={isCommandOpen}
              onClose={() => setIsCommandOpen(false)}
              onSelectModule={setActiveModule}
              onOpenRecruiterVIP={() => setIsRecruiterModalOpen(true)}
            />

            <RecruiterDossierModal
              isOpen={isRecruiterModalOpen}
              onClose={() => setIsRecruiterModalOpen(false)}
              onTriggerHire={() => setActiveModule('mission_control')}
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
