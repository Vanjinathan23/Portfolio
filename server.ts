import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Comprehensive Executive Knowledge Base for Vanji Nathan's AI Brain
const VANJI_KNOWLEDGE_BASE = `
You are the executive AI Brain of VANJI OS, representing Vanjinathan S.
Vanjinathan S is an AI/ML Engineering student at Saveetha School of Engineering (SIMATS), a Digital Builder, Developer, and Future Founder.
Email: vanjinathanvanji925@gmail.com

Core Philosophy:
"I don't just write code; I architect systems that solve real-world problems. From brain tumor detection to smart city infrastructure, I build with first-principles thinking and executive precision."

Background:
- B.Tech in Artificial Intelligence & Machine Learning - Saveetha School of Engineering (2024-2028).
- Web Development Team Lead at GDG On Campus SIMATS, mentoring 20+ developers.
- Earned 19 Google Cloud Skill Badges (Vertex AI, Kubernetes, Generative AI).
- Innovation Student Ambassador for MoE's Innovation Cell.
- Full-Stack Intern at SmartED Innovations (Built 3 production apps).

Projects Built (Project Vault):
1. Urban Infrastructure Intelligence: Smart City SaaS platform for anomaly detection and geo-spatial monitoring. Tech: React, Node.js, PostgreSQL, Google Gemini.
2. TumorInsight: Medical Imaging AI for brain tumor detection and segmentation. Tech: Python, Flask, OpenCV, PostgreSQL.
3. ClinIQ: AI-Powered Clinical Intelligence & Triage Automation platform. Tech: Python, FastAPI, Flask, SQLite.
4. OtoGo: AI Urban Mobility Concept exploring neural matching for transit. Tech: Node.js, PostgreSQL, WebSockets.
5. VANJI OS: The spatial web operating system interface and digital dossier (this platform). Tech: React, TypeScript, Tailwind CSS v4, Gemini API.

Skill Galaxy:
- Languages: Python, JavaScript, TypeScript, SQL.
- AI/ML: OpenCV, Google Gemini, Vertex AI, Generative AI, RAG, Prompt Engineering.
- Cloud/Infra: 19 Google Cloud Badges, AWS (Forage Simulation), Kubernetes, App Engine, Docker.
- Full-Stack: React.js, Node.js, Express.js, FastAPI, Flask, PostgreSQL, Bootstrap.
- Leadership: GDG Web Dev Lead, Mentorship, Agile/Scrum.

Future Roadmap:
- 2026: Scale Smart City and Healthcare AI pilots to real-world users.
- 2027: Launch first venture-backed AI startup (ClinIQ/SmartCity).
- 2028: Transition to full-time founder and launch a decentralized AI research lab.
- 2030: Establish a multi-venture holding ecosystem for AI-powered infrastructure.

Recruiter Briefing:
Vanjinathan S is a high-horsepower engineer who thinks like a founder. Whether it's mastering enterprise cloud infrastructure (19 badges) or building explainable healthcare AI, he delivers production-grade results with a premium design sensibility.

Instructions for your responses:
- Speak with executive poise, intelligence, confidence, and minimal futurism.
- Keep answers structured, magazine-quality, concise, and direct.
- Highlight Vanjinathan's founder mindset, technical depth, and cloud expertise.
- Never use robotic AI cliches like "As an AI language model...". You are VANJI AI BRAIN.
`;

// API Route: AI Brain Chat
app.post('/api/ai/chat', async (req, res) => {
  const { message, history } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message prompt is required.' });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    // Intelligent Fallback Responder when API Key is not configured
    const lower = message.toLowerCase();
    let reply = "Vanjinathan S is an AI/ML Engineer and Digital Builder with 19 Google Cloud Skill Badges. He specializes in building full-stack AI platforms with React, Node.js, and Python.";

    if (lower.includes('who') || lower.includes('about')) {
      reply = "Vanjinathan S is an AI/ML engineering student at SIMATS and a future founder. He is the Web Development Lead at GDG On Campus SIMATS and has earned 19 Google Cloud Skill Badges in Vertex AI, Kubernetes, and Generative AI.";
    } else if (lower.includes('project') || lower.includes('built') || lower.includes('urban') || lower.includes('tumor')) {
      reply = "Vanjinathan has architected several high-impact projects: Urban Infrastructure Intelligence (Smart City SaaS), TumorInsight (Healthcare AI for MRI), ClinIQ (Clinical Intelligence), and this spatial VANJI OS interface.";
    } else if (lower.includes('skill') || lower.includes('tech') || lower.includes('stack') || lower.includes('cloud')) {
      reply = "Vanjinathan's stack includes Python (OpenCV, FastAPI), JavaScript/TypeScript (React, Node.js), and Google Cloud (19 skill badges). He is an expert in Vertex AI and Generative AI integration.";
    } else if (lower.includes('hire') || lower.includes('recruit') || lower.includes('why')) {
      reply = "Recruiter Briefing: Vanjinathan S offers a rare combination of deep technical execution (AI/Cloud) and product-founder vision. As a GDG Web Dev Lead with production internship experience, he is ready to scale at world-class organizations.";
    } else if (lower.includes('future') || lower.includes('goal') || lower.includes('vision')) {
      reply = "Vanjinathan's 2030 vision is to establish a multi-venture holding group for AI-powered infrastructure, having launched venture-backed startups in the healthcare and smart city domains by then.";
    }

    return res.json({
      reply,
      isFallback: true,
      note: 'Note: Server running in simulated executive mode. Attach GEMINI_API_KEY in Secrets panel for live neural processing.'
    });
  }

  try {
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build'
        }
      }
    });

    const response = await (ai as any).models.generateContent({
      model: 'gemini-1.5-flash',
      contents: message,
      config: {
        systemInstruction: VANJI_KNOWLEDGE_BASE,
        temperature: 0.7,
        maxOutputTokens: 600
      }
    });

    res.json({
      reply: response.text || "System processed request successfully.",
      isFallback: false
    });
  } catch (err: any) {
    console.error('Gemini API Error:', err.message || err);
    res.json({
      reply: "Vanjinathan S is a full-stack builder and founder specializing in AI ecosystems and cloud infrastructure. (Neural link momentarily offline; showing offline cache data).",
      isFallback: true,
      error: err.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', os: 'VANJI OS v4.2' });
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // Express v4 wildcard fallback
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`VANJI OS Executive Kernel active on http://0.0.0.0:${PORT}`);
  });
}

startServer();
