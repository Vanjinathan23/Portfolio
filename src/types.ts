export type ModuleId =
  | 'identity_core'
  | 'career_journey'
  | 'project_vault'
  | 'ai_brain'
  | 'skill_galaxy'
  | 'innovation_lab'
  | 'impact_dashboard'
  | 'future_roadmap'
  | 'mission_control';

export interface IdentityNode {
  id: string;
  label: string;
  icon: string;
  tagline: string;
  description: string;
  keyPrinciples: string[];
  vision: string;
  color: string;
}

export interface CareerMilestone {
  year: string;
  quarter: string;
  title: string;
  role: string;
  category: 'Learning' | 'Project' | 'Venture' | 'Breakthrough';
  description: string;
  technologies: string[];
  challengeOvercome: string;
  keyMetric: string;
  storyDetails: string;
}

export interface ProjectCaseStudy {
  id: string;
  name: string;
  codeName: string;
  tagline: string;
  category: 'Autonomous Systems' | 'Spatial Audio' | 'Cloud Infrastructure' | 'Adaptive EdTech' | 'Venture Platform' | 'OS Architecture';
  status: 'Deployed' | 'Beta Vault' | 'Incubation Chamber';
  overview: string;
  problemStatement: string;
  researchProcess: string[];
  architectureSummary: string;
  architectureFlow: string[];
  technologyStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    infra: string[];
  };
  screenshots: {
    title: string;
    caption: string;
    mockupType: 'telemetry' | 'code' | 'spatial' | 'graph';
    codeSnippet?: string;
    metricLabel?: string;
  }[];
  features: { title: string; description: string }[];
  challenges: string[];
  solutions: string[];
  impact: string;
  lessonsLearned: string[];
  futureScope: string[];
  metrics: { label: string; value: string; delta: string }[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface SkillPlanet {
  id: string;
  name: string;
  category: 'Language' | 'Frontend/Spatial' | 'Backend/Distributed' | 'AI & LLMs' | 'Cloud/Infra' | 'Architecture/UX';
  size: 'giant' | 'large' | 'medium'; // represents expertise level (no % or progress bar!)
  projectsBuilt: string[];
  experienceLevel: string; // e.g. "Production Grade Core", "Architectural Mastery"
  associatedTools: string[];
  orbitRadius: number; // visual placement
  orbitSpeed: number;
  color: string;
  glowColor: string;
}

export interface PrototypeChamber {
  id: string;
  name: string;
  tagline: string;
  ventureStage: 'Concept Chamber' | 'Seed Incubation' | 'Alpha Matrix';
  targetMarket: string;
  problem: string;
  solution: string;
  secretSauce: string;
  estimatedValuationTarget: string;
  techHighlights: string[];
  interactiveFeature: string;
}

export interface RoadmapMilestone {
  year: string;
  title: string;
  theme: string;
  strategicGoals: string[];
  expectedOutput: string;
  status: 'Active Execution' | 'Next Horizon' | 'Long-term Vision';
}

export interface TelemetryCounter {
  id: string;
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  description: string;
  icon: string;
  trend: string;
}

export interface CommandItem {
  id: string;
  label: string;
  shortcut?: string;
  category: 'Navigation' | 'Executive Actions' | 'Classified Vault' | 'Recruiter VIP';
  icon: string;
  action: () => void;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai_brain';
  text: string;
  timestamp: string;
  isSystemNotice?: boolean;
  showProfileImage?: boolean;
}
