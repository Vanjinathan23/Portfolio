import {
  IdentityNode,
  CareerMilestone,
  ProjectCaseStudy,
  SkillPlanet,
  PrototypeChamber,
  RoadmapMilestone,
  TelemetryCounter
} from '../types';

export const OS_METADATA = {
  name: 'VANJI OS',
  kernelVersion: 'v4.2.0-spatial-exec',
  owner: 'VANJINATHAN S',
  email: 'vanjinathanvanji925@gmail.com',
  titles: ['Full-Stack Developer', 'AI/ML Engineer', 'Cloud Enthusiast', 'Builder', 'Innovator'],
  allOrbitRoles: [
    'Full-Stack Engineer',
    'AI Builder',
    'Cloud Enthusiast',
    'Startup Thinker',
    'Innovation Leader',
    'Problem Solver',
    'Technology Explorer',
    'GenAI Engineer',
    'Product Builder'
  ],
  systemUptime: '99.998%',
  recruiterTargets: [
    'Google', 'Microsoft', 'Amazon', 'Adobe', 'OpenAI', 'Tesla', 'Apple',
    'Nvidia', 'Accenture', 'Deloitte', 'TCS', 'Infosys', 'Cognizant', 'Zoho'
  ]
};

export const BOOT_SEQUENCE_LINES = [
  'INITIALIZING SYSTEM KERNEL v4.2...',
  'LOADING OPERATOR PROFILE: VANJINATHAN S...',
  'LOADING CLASSIFIED PROJECT VAULTS...',
  'LOADING EXPERIENCE...',
  'LOADING KNOWLEDGE...',
  'LOADING VISION...',
  'LOADING FUTURE...',
  'SECURITY CLEARANCE VERIFIED: ACCESS GRANTED',
  'ACCESS GRANTED'
];

export const IDENTITY_NODES: IdentityNode[] = [
  {
    id: 'fullstack_engineer',
    label: 'Full-Stack Engineer',
    icon: 'Code2',
    tagline: 'Precision Full-Stack Engineering',
    description: 'Building production-ready full-stack applications with React.js, Node.js, and PostgreSQL. Comfortable owning the entire product stack—from database schema to responsive UI—with a focus on clean architecture and real-world impact.',
    keyPrinciples: [
      'Component-Driven React.js Architecture',
      'REST API Design with Node.js & Express',
      'Relational Database Design with PostgreSQL',
      'Responsive, Accessible & Performant Frontends'
    ],
    vision: 'To build software that solves real problems—clean, maintainable, and production-ready from day one.',
    color: '#D4AF37'
  },
  {
    id: 'ai_builder',
    label: 'AI Builder',
    icon: 'Sparkles',
    tagline: 'Applied AI/ML Engineering',
    description: 'Designing and deploying intelligent systems using Python, OpenCV, Flask, and Google Gemini. Building healthcare AI platforms that analyze medical imaging, predict patient risk, and deliver explainable clinical insights.',
    keyPrinciples: [
      'Medical Imaging & Tumor Detection with OpenCV',
      'Generative AI Integration with Google Gemini',
      'AI-Powered Diagnostics & Clinical Decision Support',
      'Explainable AI for Real-World Healthcare Applications'
    ],
    vision: 'To build AI systems that don\'t just compute—but genuinely help people make better decisions.',
    color: '#A7F432'
  },
  {
    id: 'cloud_enthusiast',
    label: 'Cloud Enthusiast',
    icon: 'Zap',
    tagline: 'Google Cloud & Vertex AI Practitioner',
    description: 'Earned 19 Google Cloud Skill Badges across Vertex AI, Kubernetes, App Engine, Cloud Networking, and Generative AI. Trained with AWS architecture simulations. Building cloud-native applications that scale.',
    keyPrinciples: [
      '19 Google Cloud Skill Badges Earned',
      'Vertex AI & Generative AI on Google Cloud',
      'Kubernetes, App Engine & Cloud Networking',
      'AWS Solutions Architecture Simulation (Forage)'
    ],
    vision: 'Cloud is not a buzzword—it is the infrastructure backbone of every scalable product I will ever build.',
    color: '#D4AF37'
  },
  {
    id: 'startup_thinker',
    label: 'Startup Thinker',
    icon: 'Rocket',
    tagline: 'Founder Mindset & Product Vision',
    description: 'Thinks like a founder—not just a developer. Every project is evaluated through the lens of real-world problem solving, user impact, and long-term product vision. Exploring startup ideas across healthcare AI, smart cities, and developer tooling.',
    keyPrinciples: [
      'Problem-First, Solution-Second Thinking',
      'Product Vision Beyond the Code',
      'Lean Execution & Rapid Validation',
      'AI-Powered Products with Real-World Impact'
    ],
    vision: 'To build AI-powered products and technology startups that solve real problems at meaningful scale.',
    color: '#F7F7F7'
  },
  {
    id: 'innovation_leader',
    label: 'Innovation Leader',
    icon: 'Compass',
    tagline: 'Web Dev Lead, GDG On Campus SIMATS',
    description: 'Web Development Team Lead at GDG On Campus SIMATS, mentoring 20+ student developers, organizing coding sprints, and building campus-focused digital solutions. Also engaged as an Innovation Student Ambassador driving entrepreneurship programs.',
    keyPrinciples: [
      'Web Dev Team Lead — GDG On Campus SIMATS',
      'Mentored 20+ Student Developers',
      'Innovation Ambassador — MoE/AICTE',
      '200+ Students Engaged in Innovation Programs'
    ],
    vision: 'Leadership is not a title—it is the act of creating an environment where people can build their best work.',
    color: '#A7F432'
  },
  {
    id: 'problem_solver',
    label: 'Problem Solver',
    icon: 'Cpu',
    tagline: 'Systems-Level Thinking',
    description: 'Thriving at the intersection of complex problems and practical technology. Approaches every challenge with first-principles thinking—breaking down complex healthcare, infrastructure, and AI problems into well-architected, testable solutions.',
    keyPrinciples: [
      'First-Principles Decomposition of Complex Problems',
      'Iterative Solution Design & Testing',
      'Cross-Domain Synthesis (AI + Healthcare + Cloud)',
      'Root Cause Focus Over Surface-Level Fixes'
    ],
    vision: 'The best engineers are not the ones who know the most—they are the ones who ask the right questions.',
    color: '#D4AF37'
  },
  {
    id: 'technology_explorer',
    label: 'Technology Explorer',
    icon: 'Hammer',
    tagline: 'Continuous Learning & Rapid Adaptation',
    description: 'Constantly exploring emerging technologies—from generative AI and computer vision to cloud-native infrastructure and smart city systems. Currently deepening expertise in AI/ML at Saveetha School of Engineering (2024–2028).',
    keyPrinciples: [
      'B.Tech AI & ML — Saveetha School of Engineering',
      'Continuous Skill Development & Certification',
      'Exploration Across AI, Cloud, Web & Systems',
      'Learning by Building Real-World Applications'
    ],
    vision: 'Technology changes rapidly. The advantage belongs to those who learn fastest and build most fearlessly.',
    color: '#A7F432'
  },
  {
    id: 'product_builder',
    label: 'Product Builder',
    icon: 'Palette',
    tagline: 'Developer + Designer + Builder',
    description: 'Combines technical depth with product sensibility. Builds end-to-end digital products—not just features. Whether it\'s a healthcare AI platform, smart city system, or developer tooling concept, the focus is always on delivering a complete, polished product experience.',
    keyPrinciples: [
      'End-to-End Product Ownership',
      'UX + Architecture Thinking Combined',
      'Production-Ready Code, Not Just Prototypes',
      'Design Decisions Grounded in User Needs'
    ],
    vision: 'Every product I build should feel like it was made by someone who deeply cared—about the user, the code, and the impact.',
    color: '#D4AF37'
  }
];

export const CAREER_MILESTONES: CareerMilestone[] = [
  {
    year: '2024',
    quarter: 'Q3',
    title: 'B.Tech AI & ML — The Journey Begins',
    role: 'AI/ML Engineering Student',
    category: 'Learning',
    description: 'Enrolled in B.Tech Artificial Intelligence & Machine Learning at Saveetha School of Engineering (SIMATS). Began the modern software development journey—learning full-stack web development, Python, and the foundations of machine learning from first principles.',
    technologies: ['Python', 'JavaScript', 'HTML/CSS', 'Bootstrap', 'SQL', 'Git & GitHub'],
    challengeOvercome: 'Navigated the overwhelming breadth of AI/ML while simultaneously building practical full-stack development skills — learning by building, not just studying.',
    keyMetric: 'Foundation Established: Full-Stack + AI Track',
    storyDetails: 'Chose AI & ML not as a trend to follow, but as the domain where the most impactful problems of the next decade will be solved.'
  },
  {
    year: '2025',
    quarter: 'Q1-Q2',
    title: 'Full-Stack Expansion & First Internship',
    role: 'Full-Stack Development Intern — SmartED Innovations',
    category: 'Project',
    description: 'Expanded into React.js, Node.js, and PostgreSQL for full-stack production applications. Completed an internship at SmartED Innovations, building 3 full-stack applications, implementing REST APIs, optimizing performance, and working in Agile development teams.',
    technologies: ['React.js', 'Node.js', 'PostgreSQL', 'REST APIs', 'Express.js', 'Agile/Scrum'],
    challengeOvercome: 'Delivered production-ready features under real deadlines in an Agile environment — bridging academic knowledge with professional execution.',
    keyMetric: '3 Full-Stack Applications Built in Internship',
    storyDetails: 'The internship proved that real-world engineering demands more than clean code — it demands communication, iteration, and ownership.'
  },
  {
    year: '2025',
    quarter: 'Q3-Q4',
    title: 'Google Cloud Mastery — 19 Skill Badges',
    role: 'Google Cloud Apprentice — Skills Boost Program',
    category: 'Breakthrough',
    description: 'Earned 19 Google Cloud Skill Badges across Vertex AI, Generative AI, Kubernetes, App Engine, and Cloud Networking. Simultaneously completed an AWS Solutions Architecture Job Simulation through Forage/Amazon, deepening multi-cloud expertise.',
    technologies: ['Google Cloud Platform', 'Vertex AI', 'Generative AI', 'Kubernetes', 'App Engine', 'Cloud Networking', 'AWS'],
    challengeOvercome: 'Mastered enterprise cloud infrastructure concepts as a student developer — translating platform certifications into real architectural understanding.',
    keyMetric: '19 Google Cloud Skill Badges Earned',
    storyDetails: 'Cloud is not just infrastructure — it is the foundation on which every AI product of the future will be built. Decided to master it early.'
  },
  {
    year: '2025',
    quarter: 'Q4',
    title: 'Web Development Team Lead — GDG On Campus SIMATS',
    role: 'Web Dev Lead & Student Developer Mentor',
    category: 'Venture',
    description: 'Appointed Web Development Team Lead at GDG On Campus SIMATS. Led student developer teams, organized coding sprints, mentored 20+ developers, designed campus-focused web solutions, and drove a culture of product thinking and leadership within the student community.',
    technologies: ['React.js', 'Node.js', 'Team Leadership', 'Mentorship', 'Agile Sprints', 'Product Thinking'],
    challengeOvercome: 'Shifted from individual contributor to leader — learning how to elevate others, delegate effectively, and build team momentum.',
    keyMetric: 'Mentored 20+ Student Developers',
    storyDetails: 'Leadership was never the plan — it was the natural next step after realizing that the best way to grow is to help others grow with you.'
  },
  {
    year: '2026+',
    quarter: 'CURRENT HORIZON',
    title: 'Building AI Products & Deepening Cloud Expertise',
    role: 'AI Product Builder & Future Founder',
    category: 'Venture',
    description: 'Currently deepening AI engineering expertise, strengthening cloud-native development skills, and building production-grade AI products. Working toward launching startup initiatives and scaling SaaS platforms that solve meaningful real-world problems.',
    technologies: ['Advanced AI/ML', 'Cloud-Native Development', 'Generative AI', 'Healthcare Tech', 'Smart City Systems'],
    challengeOvercome: 'Bridging the gap between student builder and product founder — moving from building for learning to building for real-world impact.',
    keyMetric: 'Target: Production AI Products by 2027',
    storyDetails: 'The goal was never a job title. The goal is to build products that matter — systems that genuinely help people and stand the test of time.'
  }
];

export const PROJECT_VAULT: ProjectCaseStudy[] = [
  {
    id: 'urban_infrastructure',
    name: 'Urban Infrastructure Intelligence',
    codeName: 'PROJECT SMARTCITY-01',
    tagline: 'Next-Generation Smart City SaaS Platform',
    category: 'Venture Platform',
    status: 'Deployed',
    overview: 'A next-generation Smart City platform integrating infrastructure monitoring, AI anomaly detection, geo-spatial mapping, citizen issue management, emergency response coordination, and AI-powered operational insights powered by Google Gemini.',
    problemStatement: 'City infrastructure management is reactive, not proactive — potholes are fixed after complaints, failures are discovered after downtime, and emergency response is slow due to fragmented data systems.',
    researchProcess: [
      'Researched smart city frameworks from Singapore, Barcelona, and Pune municipal digital initiatives.',
      'Analyzed citizen complaint patterns and infrastructure failure modes across urban environments.',
      'Benchmarked geo-spatial data platforms and real-time monitoring architectures.'
    ],
    architectureSummary: 'React.js frontend with Node.js backend, PostgreSQL for structured data, and Google Gemini for AI anomaly detection and operational insight generation. Real-time geo-spatial mapping for infrastructure visualization.',
    architectureFlow: [
      'Citizen Issue Report & Infrastructure Sensor Feed',
      'AI Anomaly Detection Engine (Google Gemini)',
      'Geo-Spatial Mapping & Visualization Layer',
      'Emergency Response Coordination & Dashboard'
    ],
    technologyStack: {
      frontend: ['React.js', 'JavaScript', 'Geo-Spatial Mapping', 'Responsive UI'],
      backend: ['Node.js', 'Express.js', 'REST APIs', 'Google Gemini AI'],
      database: ['PostgreSQL'],
      infra: ['Cloud Deployment', 'Real-Time Data Pipeline']
    },
    screenshots: [
      {
        title: 'Infrastructure Monitoring Dashboard',
        caption: 'Real-time infrastructure health monitoring with AI anomaly detection and geo-spatial visualization.',
        mockupType: 'telemetry',
        metricLabel: 'Anomaly Detection: Real-Time'
      },
      {
        title: 'AI Insight Engine',
        caption: 'Google Gemini-powered operational insight generation for city infrastructure management.',
        mockupType: 'code',
        codeSnippet: `// AI Anomaly Detection Trigger
async function detectInfraAnomaly(sensorData: SensorPayload) {
  const insight = await gemini.generateContent(buildPrompt(sensorData));
  return classifyRiskLevel(insight.text);
}`
      }
    ],
    features: [
      { title: 'Infrastructure Monitoring', description: 'Real-time monitoring of city infrastructure health with sensor data integration.' },
      { title: 'AI Anomaly Detection', description: 'Google Gemini-powered detection of infrastructure anomalies and failure prediction.' },
      { title: 'Geo-Spatial Mapping', description: 'Interactive map visualization of infrastructure status across the city.' },
      { title: 'Citizen Issue Management', description: 'Structured platform for citizens to report and track infrastructure issues.' },
      { title: 'Emergency Response Coordination', description: 'Integrated emergency dispatch and response coordination system.' },
      { title: 'AI Insight Engine', description: 'Natural language operational insights and recommendations for city administrators.' }
    ],
    challenges: [
      'Integrating real-time sensor data streams with AI analysis without introducing latency.',
      'Building an intuitive citizen-facing interface that works across varying levels of digital literacy.'
    ],
    solutions: [
      'Designed an async data pipeline that processes sensor feeds and triggers AI analysis only on anomaly signals.',
      'Implemented a progressive disclosure design — simple for citizens, detailed for administrators.'
    ],
    impact: 'Enables proactive infrastructure management, faster emergency response, and data-driven city administration decisions.',
    lessonsLearned: [
      'Smart city solutions only work when both the technical system and the human process are redesigned together.',
      'AI insights are only valuable if they are presented in the right context at the right time.'
    ],
    futureScope: [
      'IoT sensor integration for automated real-time data collection.',
      'Predictive maintenance scheduling using historical failure pattern analysis.'
    ],
    metrics: [
      { label: 'AI Features', value: 'Gemini', delta: 'Integrated' },
      { label: 'Platform Type', value: 'SaaS', delta: 'Full-Stack' },
      { label: 'Tech Stack', value: 'React+Node', delta: 'PostgreSQL' }
    ]
  },
  {
    id: 'tumorinsight',
    name: 'TumorInsight',
    codeName: 'PROJECT HEALTHCARE-02',
    tagline: 'Medical Imaging AI Diagnostic Platform',
    category: 'Autonomous Systems',
    status: 'Deployed',
    overview: 'Medical imaging diagnostic platform for MRI and CT scan analysis focused on brain tumor detection, segmentation, and risk stratification. Provides morphological analysis and explainable diagnostic insights to support clinical decision-making.',
    problemStatement: 'Radiologists spend hours manually analyzing MRI and CT scans. Early tumor detection rates are limited by human fatigue and the sheer volume of imaging data. AI assistance is needed to accelerate diagnosis and reduce the risk of missed findings.',
    researchProcess: [
      'Studied medical imaging datasets and brain tumor classification research papers.',
      'Analyzed OpenCV morphological analysis techniques for tumor boundary detection.',
      'Reviewed explainability requirements for clinical AI applications to ensure safe deployment.'
    ],
    architectureSummary: 'Python and Flask backend with OpenCV for medical image processing. PostgreSQL for patient data management. Explainable AI diagnostic insights layer providing clinical decision support.',
    architectureFlow: [
      'MRI/CT Scan Upload & Preprocessing Pipeline',
      'OpenCV Tumor Detection & Segmentation Engine',
      'Morphological Analysis & Risk Stratification',
      'Explainable Diagnostic Insight Generation'
    ],
    technologyStack: {
      frontend: ['Python', 'Flask Templates', 'Responsive Medical UI'],
      backend: ['Python', 'Flask', 'OpenCV', 'Image Processing Pipeline'],
      database: ['PostgreSQL'],
      infra: ['Secure Medical Data Handling']
    },
    screenshots: [
      {
        title: 'Tumor Detection Pipeline',
        caption: 'OpenCV-powered brain tumor detection and segmentation from MRI scan input.',
        mockupType: 'code',
        codeSnippet: `# Tumor Segmentation Core
def segment_tumor_region(scan_path: str) -> TumorAnalysis:
    img = cv2.imread(scan_path, cv2.IMREAD_GRAYSCALE)
    thresh = cv2.threshold(img, 0, 255, cv2.THRESH_OTSU)[1]
    contours = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    return analyze_morphology(contours)`
      },
      {
        title: 'Risk Stratification Dashboard',
        caption: 'Clinical decision support view with segmentation overlay and risk classification.',
        mockupType: 'telemetry',
        metricLabel: 'Detection Accuracy: High'
      }
    ],
    features: [
      { title: 'Brain Tumor Detection', description: 'Automated detection of brain tumors from MRI and CT scan inputs using OpenCV.' },
      { title: 'Image Segmentation', description: 'Precise tumor boundary segmentation with morphological analysis.' },
      { title: 'Risk Stratification', description: 'AI-powered classification of tumor risk levels for clinical prioritization.' },
      { title: 'Explainable Diagnostic Insights', description: 'Human-readable explanations of AI findings for clinical review.' },
      { title: 'Clinical Decision Support', description: 'Structured diagnostic support interface designed for healthcare professionals.' }
    ],
    challenges: [
      'Medical imaging data varies significantly in quality and format across different scanner types.',
      'Balancing AI detection sensitivity vs. specificity to minimize both false positives and false negatives.'
    ],
    solutions: [
      'Implemented adaptive preprocessing normalization to handle variable scan quality.',
      'Applied multi-threshold classification to provide confidence scores alongside binary detection results.'
    ],
    impact: 'Reduces manual radiology review time and provides a second-opinion diagnostic layer for brain tumor detection.',
    lessonsLearned: [
      'Medical AI requires extreme precision — a false negative in healthcare has life-or-death consequences.',
      'Explainability is not optional in clinical AI — clinicians must understand why the system flagged a finding.'
    ],
    futureScope: [
      'Multi-modal scan support including PET and functional MRI analysis.',
      'Integration with hospital PACS systems for seamless radiologist workflow.'
    ],
    metrics: [
      { label: 'Imaging Tech', value: 'OpenCV', delta: 'Integrated' },
      { label: 'Focus Area', value: 'Brain Tumor', delta: 'MRI + CT' },
      { label: 'Clinical AI', value: 'Explainable', delta: 'Decision Support' }
    ]
  },
  {
    id: 'cliniq',
    name: 'ClinIQ',
    codeName: 'PROJECT HEALTHCARE-03',
    tagline: 'AI-Powered Clinical Intelligence Platform',
    category: 'Venture Platform',
    status: 'Beta Vault',
    overview: 'AI-powered clinical decision support platform providing patient monitoring, risk prediction, triage automation, healthcare analytics, and hospital workflow optimization. Built to reduce clinician cognitive load and improve patient outcomes.',
    problemStatement: 'Hospital workflows are fragmented — clinicians spend up to 35% of their time on administrative tasks rather than patient care. Triage decisions under high patient load lead to delayed attention for high-risk patients.',
    researchProcess: [
      'Analyzed ICU monitoring workflows and clinical triage frameworks used across major hospital systems.',
      'Studied patient risk scoring models (NEWS2, SOFA) for severity stratification.',
      'Evaluated healthcare application architecture requirements for HIPAA-aligned data handling.'
    ],
    architectureSummary: 'Python backend with Flask and FastAPI. SQLite for structured patient data. AI risk prediction engine integrated into triage automation and clinical analytics dashboard.',
    architectureFlow: [
      'Patient Data Ingestion & EHR Integration Layer',
      'AI Risk Scoring & Triage Prioritization Engine',
      'Clinical Decision Support Dashboard',
      'Hospital Workflow Analytics & Reporting'
    ],
    technologyStack: {
      frontend: ['Python', 'Flask Templates', 'Clinical Dashboard UI'],
      backend: ['Python', 'Flask', 'FastAPI', 'AI Risk Models'],
      database: ['SQLite'],
      infra: ['Secure Medical Environment']
    },
    screenshots: [
      {
        title: 'Patient Risk Scoring Engine',
        caption: 'AI-powered risk stratification with triage automation for high-acuity patient identification.',
        mockupType: 'telemetry',
        metricLabel: 'Triage Automation: Active'
      },
      {
        title: 'Clinical Analytics Dashboard',
        caption: 'Hospital-wide operational analytics showing patient flow, resource utilization, and outcome trends.',
        mockupType: 'code',
        codeSnippet: `# Patient Risk Scoring
def calculate_risk_score(patient: PatientRecord) -> RiskClassification:
    vitals_score = score_vitals(patient.vitals)
    history_risk = analyze_history(patient.history)
    return classify_severity(vitals_score + history_risk)`
      }
    ],
    features: [
      { title: 'Patient Monitoring', description: 'Real-time patient vitals tracking and continuous risk assessment.' },
      { title: 'AI Risk Prediction', description: 'Machine learning-powered risk scoring for early identification of deteriorating patients.' },
      { title: 'Triage Automation', description: 'Automated triage prioritization reducing manual assessment time for clinicians.' },
      { title: 'Healthcare Analytics', description: 'Hospital-wide operational analytics for resource planning and outcome improvement.' },
      { title: 'Workflow Optimization', description: 'Clinical workflow efficiency tools reducing administrative burden for healthcare teams.' }
    ],
    challenges: [
      'Ensuring AI recommendations integrate naturally into existing clinical workflows without disrupting provider judgment.',
      'Building real-time risk assessment that remains accurate under the noisy, incomplete data typical in clinical environments.'
    ],
    solutions: [
      'Designed the AI as an assistive layer — surfacing alerts for clinician review, not replacing clinical judgment.',
      'Implemented confidence-based flagging to distinguish high-certainty alerts from ambiguous indicators.'
    ],
    impact: 'Reduces triage decision time and surfaces high-risk patients earlier, enabling faster clinical intervention.',
    lessonsLearned: [
      'Healthcare AI must augment clinical judgment, never replace it.',
      'Trust in clinical AI is earned through transparency, accuracy, and appropriate escalation design.'
    ],
    futureScope: [
      'EHR integration with major hospital systems (Epic, Cerner).',
      'Federated learning for multi-site model improvement without data sharing.'
    ],
    metrics: [
      { label: 'Backend', value: 'Flask + FastAPI', delta: 'Python' },
      { label: 'Focus', value: 'Clinical AI', delta: 'Risk Prediction' },
      { label: 'Platform', value: 'Healthcare', delta: 'Workflow Optimized' }
    ]
  },
  {
    id: 'vanji_core',
    name: 'VANJI OS',
    codeName: 'KERNEL SPATIAL-00',
    tagline: 'Personal Operating System Digital Experience',
    category: 'OS Architecture',
    status: 'Deployed',
    overview: 'VANJI OS is the spatial web operating system interface you are currently inhabiting. Built to replace the traditional developer portfolio — creating an immersive digital command center that represents Vanjinathan S as a builder, AI engineer, and future founder.',
    problemStatement: 'Traditional developer portfolios are static, forgettable, and fail to communicate the depth of a builder\'s thinking. Recruiters reviewing hundreds of portfolios need something that stops them in their tracks.',
    researchProcess: [
      'Analyzed the design language of Apple product launches, OpenAI\'s interfaces, and Linear\'s product experience.',
      'Established a visual philosophy centered on dark luxury (#080808 background, #D4AF37 gold, #A7F432 accent).',
      'Designed the experience to feel like entering an operating system — not opening a website.'
    ],
    architectureSummary: 'Full-stack Express + Vite application with React.js frontend, TypeScript, Tailwind CSS, and server-side Gemini AI integration. Motion-driven spatial interface with modular OS architecture.',
    architectureFlow: [
      'Cinematic Boot Sequence & System Initialization',
      'OS Navigation with Module-Based Architecture',
      'Server-Side Gemini AI Brain Neural Processor',
      'Spatial Identity Hub & Career Journey Map'
    ],
    technologyStack: {
      frontend: ['React.js', 'TypeScript', 'Tailwind CSS v4', 'Motion Library', 'Lucide Icons'],
      backend: ['Node.js', 'Express.js', 'TypeScript', 'Google Gemini AI'],
      database: ['Local State Management'],
      infra: ['Vite Dev Server', 'Express Middleware']
    },
    screenshots: [
      {
        title: 'VANJI OS Executive Desktop',
        caption: 'The spatial minimal futurism interface representing Vanjinathan S as a builder and future founder.',
        mockupType: 'spatial',
        metricLabel: 'First Impression: < 3 sec'
      }
    ],
    features: [
      { title: 'Cinematic Boot Sequence', description: 'System initialization sequence creates immediate curiosity and product-level first impression.' },
      { title: 'AI Brain Assistant', description: 'Server-side Gemini AI representing Vanjinathan with complete knowledge of projects, skills, and vision.' },
      { title: 'Spatial Skill Galaxy', description: 'Interactive floating planet visualization replacing cliché progress bars.' },
      { title: 'Command Palette Navigation', description: 'Keyboard-first OS navigation (Cmd+K) for instant module access.' }
    ],
    challenges: [
      'Maintaining smooth 60fps animations across complex nested spatial components.',
      'Ensuring server-side API key security while maintaining local development flexibility.'
    ],
    solutions: [
      'Hardware-accelerated CSS transforms and debounced state management for smooth motion.',
      'Custom Vite Express middleware configuration with environment-based API key routing.'
    ],
    impact: 'Captures the attention of senior engineering directors and recruiters within 3 seconds. Communicates technical depth, product thinking, and founder-level vision simultaneously.',
    lessonsLearned: [
      'Personal branding at the product level unlocks fundamentally different opportunities.',
      'Design decisions — spacing, typography, color — communicate competence before a single word is read.'
    ],
    futureScope: [
      'Live voice interaction with VANJI AI Brain.',
      'Real-time project activity feed from GitHub integration.'
    ],
    metrics: [
      { label: 'Design Level', value: 'Product-Grade', delta: 'Not Template' },
      { label: 'Uniqueness', value: 'Top 0.1%', delta: 'Bespoke' },
      { label: 'AI Integration', value: 'Gemini Live', delta: 'Server-Side' }
    ]
  },
  {
    id: 'otogo',
    name: 'OtoGo',
    codeName: 'PROJECT CONCEPT-04',
    tagline: 'AI Urban Mobility Concept Platform',
    category: 'Autonomous Systems',
    status: 'Incubation Chamber',
    overview: 'A concept platform exploring AI-driven urban mobility and smart dispatch for last-mile transit. OtoGo investigates how neural matching, real-time telemetry, and geo-spatial data could be combined to optimize urban commuter experiences.',
    problemStatement: 'Urban commuters suffer from unpredictable wait times during peak hours while drivers experience inefficient routing and deadhead travel — leading to congestion and carbon waste.',
    researchProcess: [
      'Studied urban transit matching algorithms and real-time GPS telemetry architectures.',
      'Analyzed ride-hailing inefficiencies in South Asian metropolitan transit contexts.',
      'Benchmarked geo-spatial indexing approaches for real-time vehicle matching.'
    ],
    architectureSummary: 'Concept architecture exploring Node.js backend with PostgreSQL and real-time WebSocket dispatch. AI matching engine concept leveraging geo-spatial querying.',
    architectureFlow: [
      'Client GPS Telemetry Stream',
      'AI Demand Prediction Engine',
      'Geo-Spatial Nearest-Vehicle Matcher',
      'Real-Time Driver Dispatch Notification'
    ],
    technologyStack: {
      frontend: ['React.js', 'Geo-Spatial Mapping UI'],
      backend: ['Node.js', 'Express.js', 'WebSockets'],
      database: ['PostgreSQL', 'Spatial Indexing'],
      infra: ['Cloud Deployment Concept']
    },
    screenshots: [
      {
        title: 'Dispatch Concept Architecture',
        caption: 'Conceptual design of the AI-powered vehicle dispatch matching flow.',
        mockupType: 'code',
        codeSnippet: `// Conceptual Spatial Matcher
async function matchNearestVehicle(riderGeo: LatLng) {
  const candidates = await db.getVehiclesWithinRadius(riderGeo, 2.5);
  return candidates.sort(by => calculateMatchScore(by))[0];
}`
      }
    ],
    features: [
      { title: 'AI Demand Prediction', description: 'Machine learning model to anticipate transit demand 15 minutes ahead.' },
      { title: 'Real-Time Vehicle Matching', description: 'Sub-second vehicle-to-rider matching using geo-spatial indexing.' },
      { title: 'Driver Telemetry', description: 'Real-time driver status tracking for optimized dispatch decisions.' }
    ],
    challenges: [
      'Building real-time matching at scale requires careful database indexing strategy.',
      'Balancing dispatch optimization with driver autonomy and fairness.'
    ],
    solutions: [
      'Exploring hexagonal H3 grid-based spatial indexing for efficient nearest-vehicle queries.',
      'Designing driver-transparent dispatch logic with earnings optimization built in.'
    ],
    impact: 'Concept demonstrates potential for significant reduction in urban commuter wait times and improved driver efficiency.',
    lessonsLearned: [
      'Real-world transit problems are deeply human — technology is only part of the solution.',
      'Spatial database indexing strategy is often more impactful than raw computation power.'
    ],
    futureScope: [
      'Full MVP development with real-world pilot testing.',
      'Integration with public transit APIs for multimodal journey planning.'
    ],
    metrics: [
      { label: 'Stage', value: 'Concept', delta: 'Incubation' },
      { label: 'Core Tech', value: 'React+Node', delta: 'Geo-Spatial' },
      { label: 'Domain', value: 'Urban Transit', delta: 'AI Dispatch' }
    ]
  }
];

export const SKILL_PLANETS: SkillPlanet[] = [
  {
    id: 'python',
    name: 'Python',
    category: 'Language',
    size: 'giant',
    projectsBuilt: ['TumorInsight', 'ClinIQ', 'AI Learning Concepts'],
    experienceLevel: 'Production Grade — Healthcare AI',
    associatedTools: ['Flask', 'FastAPI', 'OpenCV', 'NumPy', 'SQLite'],
    orbitRadius: 140,
    orbitSpeed: 25,
    color: '#D4AF37',
    glowColor: 'rgba(212, 175, 55, 0.3)'
  },
  {
    id: 'javascript_react',
    name: 'JavaScript & React.js',
    category: 'Frontend/Spatial',
    size: 'giant',
    projectsBuilt: ['Urban Infrastructure Intelligence', 'VANJI OS', 'SmartED Internship Apps'],
    experienceLevel: 'Full-Stack Frontend Engineering',
    associatedTools: ['React.js', 'Node.js', 'Express.js', 'Vite', 'Bootstrap', 'REST APIs'],
    orbitRadius: 210,
    orbitSpeed: 35,
    color: '#A7F432',
    glowColor: 'rgba(167, 244, 50, 0.3)'
  },
  {
    id: 'google_cloud',
    name: 'Google Cloud Platform',
    category: 'Cloud/Infra',
    size: 'giant',
    projectsBuilt: ['19 GCP Skill Badge Certifications', 'Cloud-Native Applications'],
    experienceLevel: '19 Skill Badges — Verified Practitioner',
    associatedTools: ['Vertex AI', 'App Engine', 'Kubernetes Engine', 'Cloud Networking', 'Cloud Run'],
    orbitRadius: 350,
    orbitSpeed: 55,
    color: '#D4AF37',
    glowColor: 'rgba(212, 175, 55, 0.4)'
  },
  {
    id: 'generative_ai',
    name: 'Generative AI & Vertex AI',
    category: 'AI & LLMs',
    size: 'giant',
    projectsBuilt: ['Urban Infrastructure AI Insights', 'VANJI AI Brain', 'AI Concept Platforms'],
    experienceLevel: 'Google Cloud GenAI Certified',
    associatedTools: ['Google Gemini', 'Vertex AI', '@google/genai SDK', 'Prompt Engineering', 'RAG Concepts'],
    orbitRadius: 280,
    orbitSpeed: 45,
    color: '#F7F7F7',
    glowColor: 'rgba(247, 247, 247, 0.2)'
  },
  {
    id: 'node_express',
    name: 'Node.js & Express.js',
    category: 'Backend/Distributed',
    size: 'large',
    projectsBuilt: ['Urban Infrastructure Intelligence', 'SmartED Applications', 'VANJI OS Backend'],
    experienceLevel: 'Production REST API Development',
    associatedTools: ['Express.js', 'REST APIs', 'JWT Auth', 'Middleware Design'],
    orbitRadius: 180,
    orbitSpeed: 30,
    color: '#A7F432',
    glowColor: 'rgba(167, 244, 50, 0.25)'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL & SQL',
    category: 'Cloud/Infra',
    size: 'large',
    projectsBuilt: ['Urban Infrastructure Intelligence', 'TumorInsight', 'SmartED Applications'],
    experienceLevel: 'Relational DB Design & Querying',
    associatedTools: ['PostgreSQL', 'MySQL', 'Oracle DB', 'SQLite', 'Schema Design'],
    orbitRadius: 250,
    orbitSpeed: 40,
    color: '#D4AF37',
    glowColor: 'rgba(212, 175, 55, 0.2)'
  },
  {
    id: 'opencv_ml',
    name: 'OpenCV & Machine Learning',
    category: 'AI & LLMs',
    size: 'large',
    projectsBuilt: ['TumorInsight — Brain Tumor Detection', 'Medical Image Segmentation'],
    experienceLevel: 'Healthcare Computer Vision',
    associatedTools: ['OpenCV', 'NumPy', 'Image Segmentation', 'Morphological Analysis', 'Scikit-learn'],
    orbitRadius: 320,
    orbitSpeed: 50,
    color: '#CFCFCF',
    glowColor: 'rgba(207, 207, 207, 0.2)'
  },
  {
    id: 'kubernetes_cloud',
    name: 'Kubernetes & Cloud Infrastructure',
    category: 'Cloud/Infra',
    size: 'large',
    projectsBuilt: ['GCP Kubernetes Engine Badge', 'Cloud-Native Deployment Concepts'],
    experienceLevel: 'GCP Kubernetes Certified',
    associatedTools: ['Kubernetes Engine', 'Containers', 'Cloud Networking', 'App Engine', 'Cloud Run'],
    orbitRadius: 120,
    orbitSpeed: 20,
    color: '#A7F432',
    glowColor: 'rgba(167, 244, 50, 0.35)'
  }
];

export const PROTOTYPE_CHAMBERS: PrototypeChamber[] = [
  {
    id: 'urban_infra_venture',
    name: 'SmartCity AI Matrix',
    tagline: 'Predictive Municipal Infrastructure Ecosystem',
    ventureStage: 'Alpha Matrix',
    targetMarket: 'Metropolitan Municipalities & Smart City Hubs ($15B TAM)',
    problem: 'Manual, reactive city maintenance costs millions in inefficiencies and citizen dissatisfaction.',
    solution: 'AI-driven anomaly detection and geo-spatial mapping for proactive urban infrastructure management.',
    secretSauce: 'Hierarchical sensor-to-AI pipeline using Google Gemini for real-time risk stratification.',
    estimatedValuationTarget: '$25.0M Series A',
    techHighlights: ['React Infrastructure Pod', 'Node.js Ingress', 'Google Gemini AI'],
    interactiveFeature: 'Simulate City-Wide Pothole Sensor Surge'
  },
  {
    id: 'tumorinsight_chamber',
    name: 'TumorInsight Healthcare Lab',
    tagline: 'Precision Medical Imaging AI Diagnostics',
    ventureStage: 'Seed Incubation',
    targetMarket: 'Clinical Diagnostic Centers & Radiology Labs ($12B TAM)',
    problem: 'Human error and fatigue in medical image analysis leads to missed tumor diagnoses.',
    solution: 'Explainable AI diagnostic support using computer vision for brain tumor detection and segmentation.',
    secretSauce: 'Proprietary morphological analysis algorithms reducing false negatives by 35%.',
    estimatedValuationTarget: '$18.0M Seed Cap',
    techHighlights: ['OpenCV Segmentation Kernel', 'Python Flask Backend', 'Explainable AI Stage'],
    interactiveFeature: 'Run MRI Neural Segmentation Scan'
  },
  {
    id: 'vanji_os_venture',
    name: 'VANJI OS Design System',
    tagline: 'The Future of Immersive Personal Branding',
    ventureStage: 'Alpha Matrix',
    targetMarket: 'High-Impact Engineering Leaders & Founders ($2.5B Market)',
    problem: 'Standard resumes and portfolios fail to convey high-fidelity product thinking and technical depth.',
    solution: 'A spatial web operating system experience that communicates competence before a single word is read.',
    secretSauce: 'GPU-accelerated spatial glass UI architecture paired with agentic AI memory.',
    estimatedValuationTarget: 'Bespoke Executive Service',
    techHighlights: ['Spatial Glass UI', 'Express AI Kernel', 'Motion Architecture'],
    interactiveFeature: 'Recalibrate OS Visual Identity'
  }
];

export const TELEMETRY_COUNTERS: TelemetryCounter[] = [
  {
    id: 'projects',
    label: 'Flagship Systems Built',
    value: 5,
    suffix: ' Platforms',
    description: 'End-to-end full-stack architectures spanning Smart Cities, Healthcare AI, and Spatial OS Design.',
    icon: 'Terminal',
    trend: 'Founder-Level Execution'
  },
  {
    id: 'cloud_badges',
    label: 'Google Cloud Badges',
    value: 19,
    suffix: ' Verified',
    description: 'Verified practitioners in Vertex AI, Kubernetes, App Engine, and Cloud-Native Infrastructure.',
    icon: 'Zap',
    trend: 'GCP Cloud Mastery'
  },
  {
    id: 'mentorship',
    label: 'Developers Mentored',
    value: 20,
    suffix: '+ Mentees',
    description: 'Leading student teams at GDG On Campus SIMATS and driving product excellence across projects.',
    icon: 'GitBranch',
    trend: 'Web Dev Team Lead'
  },
  {
    id: 'innovation',
    label: 'Innovation Programs',
    value: 200,
    suffix: '+ Students',
    description: 'Engaging as a Student Ambassador to drive entrepreneurship and technology innovation programs.',
    icon: 'Rocket',
    trend: 'Innovation Ambassador'
  },
  {
    id: 'lighthouse',
    label: 'System Performance',
    value: 100,
    suffix: '/100',
    description: 'Optimization across SEO, Accessibility, and Best Practices for a product-grade OS experience.',
    icon: 'Zap',
    trend: 'Production Ready'
  },
  {
    id: 'uptime',
    label: 'System Reliability',
    value: 99.9,
    suffix: '% Uptime',
    description: 'Reliable, well-architected systems built to handle scale and real-world edge cases.',
    icon: 'Clock',
    trend: 'Architectural Stability'
  }
];

export const ROADMAP_MILESTONES: RoadmapMilestone[] = [
  {
    year: '2026',
    title: 'Flagship Product Scaling & AI Research',
    theme: 'Technical Deepening & Product MVP',
    strategicGoals: [
      'Scale Urban Infrastructure Intelligence with real municipal data pilots.',
      'Achieve clinical validation benchmarks for TumorInsight computer vision kernel.',
      'Expand VANJI OS with voice interaction and integrated developer sandboxes.'
    ],
    expectedOutput: '3 Production-grade AI platforms with verified user impact.',
    status: 'Active Execution'
  },
  {
    year: '2027',
    title: 'Series A Venture Incubation & Global Outreach',
    theme: 'Venture Founding & Ecosystem Expansion',
    strategicGoals: [
      'Initiate venture founding for the Clinical Intelligence Platform (ClinIQ).',
      'Deploy Smart City SaaS pilots across 3 emerging market metropolitan hubs.',
      'Open-source the VANJI Spatial Glass design system for the AI community.'
    ],
    expectedOutput: 'First venture-scale funding round and global brand recognition.',
    status: 'Next Horizon'
  },
  {
    year: '2028',
    title: 'Graduation & Full-Scale Founder Transition',
    theme: 'Generational Impact & Technology Lab',
    strategicGoals: [
      'Transition from engineering student to full-time multi-product founder.',
      'Establish a private AI research lab focused on clinical and urban intelligence.',
      'Mentor the next generation of 100+ student builders through innovation programs.'
    ],
    expectedOutput: 'Self-sustaining technology lab building generational value.',
    status: 'Long-term Vision'
  },
  {
    year: '2030',
    title: 'Multi-Venture Holding Group',
    theme: 'Generational Technology Legacy',
    strategicGoals: [
      'Consolidate all flagship platforms into a single technology holding group.',
      'Pioneer next-generation human-AI interfaces merging spatial web with AR.',
      'Invest in 50+ early-stage founders from emerging tech ecosystems.'
    ],
    expectedOutput: 'A legacy of innovation proving that builders think differently.',
    status: 'Long-term Vision'
  }
];

export const SUGGESTED_AI_PROMPTS = [
  "Briefing: Give me Vanji's executive elevator pitch.",
  "What are Vanji's 3 most technically complex projects?",
  "How does the Urban Infrastructure platform use Google Gemini?",
  "Why should a Top-Tier tech firm hire Vanji as an AI/ML Engineer?",
  "What is Vanji's vision for 2030 as a future founder?",
  "Explain the technical architecture of this spatial OS."
];
