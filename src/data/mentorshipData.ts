export interface MentorItem {
  name: string;
  frameworks: string;
}

export interface MentorshipPillar {
  id: string;
  title: string;
  summary: string;
  mentors: MentorItem[];
}

export const mentorshipPillars: MentorshipPillar[] = [
  {
    id: "pillar-1",
    title: "Pillar I — Agentic AI, LLMOps & Architecture",
    summary: "Directing multi-agent systems, evaluations, and software boundaries.",
    mentors: [
      { name: "Andrew Ng", frameworks: "4 agentic patterns" },
      { name: "João Moura", frameworks: "CrewAI Flows + Crews" },
      { name: "Dr. Jules White", frameworks: "Prompt patterns" },
      { name: "Chip Huyen", frameworks: "6-layer LLMOps, evals" },
      { name: "Will Larson & Tanya Reilly", frameworks: "Technical leadership" },
      { name: "Marty Cagan & Dr. Marily Nika", frameworks: "Product discovery, 4 risks" },
      { name: "Mark Richards & Neal Ford", frameworks: "Architecture Quanta, Fitness Functions" },
      { name: "Martin Kleppmann", frameworks: "Reliable derived data" },
    ],
  },
  {
    id: "pillar-2",
    title: "Pillar II — B2B Scaling & Time Leverage",
    summary: "Structuring offers, client systems, and time buyback.",
    mentors: [
      { name: "Alex Hormozi", frameworks: "Value Equation, 4 Cs of Leverage" },
      { name: "Jaime Higuera", frameworks: "Growth Partner model" },
      { name: "Dan Martell", frameworks: "Buyback Loop, DRIP Matrix, 10-80-10" },
    ],
  },
  {
    id: "pillar-3",
    title: "Pillar III — Cognitive Mastery",
    summary: "Directing AI from clear goals, deliberate practice, and externalized memory.",
    mentors: [
      { name: "Adrià Solà Pastor", frameworks: "Skill Stacking, AI Director vs Executor" },
      { name: "Brian Tracy", frameworks: "Goal discipline, Key Result Areas" },
      { name: "Joshua Foer", frameworks: "Deliberate Practice, Memory Palace" },
    ],
  },
  {
    id: "pillar-4",
    title: "Pillar IV — Presence & Frame Control",
    summary: "Speaking to the point, holding the frame, and keeping alignment.",
    mentors: [
      { name: "Vinh Giang", frameworks: "P.A.R.A., vocal foundations" },
      { name: "Oren Klaff", frameworks: "Prize Frame, STRONG" },
      { name: "Crucial Conversations", frameworks: "STATE, Pool of Shared Meaning" },
      { name: "Digital Film School & Andrea Estratega", frameworks: "Editing, visual hooks" },
    ],
  },
  {
    id: "pillar-5",
    title: "Pillar V — Brand Systems",
    summary: "Building reputation through subtraction and combinatory craft.",
    mentors: [
      { name: "BTTR School", frameworks: "Branding 360°" },
      { name: "Raúl Díaz Miranda", frameworks: "Creator + Sage archetypes" },
      { name: "Austin Kleon", frameworks: "Combinatory Creativity, subtraction" },
    ],
  },
];

export const phygitalConvergence = {
  title: "Phygital Convergence",
  summary:
    "Energy Systems Engineering diploma + gas-technician training + ODP/IPEX + Anthropic MCP & n8n — field discipline meeting production AI.",
  analogDesk: [
    "Energy Systems Engineering Technician Diploma",
    "Hands-on gas-technician training (CSA B149.1-25 & TSSA)",
    "Ozone Depletion Prevention (ODP) & IPEX System 636",
  ],
  digitalDesk: [
    "Anthropic Model Context Protocol (14-tool MCP server)",
    "n8n workflow automation & CrewAI / LangChain agents",
    "Live across 1,288 rental units and 96 buildings",
  ],
} as const;
