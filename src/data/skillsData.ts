import { Bot, Cloud, Code, Database, GitBranch, Workflow } from "lucide-react";

export const skillCategories = [
  {
    icon: Bot,
    title: "AI & Multi-Agent Frameworks",
    purpose: "For orchestrating multi-step research, tool calling, and source-grounded answers.",
    skills: [
      "CrewAI",
      "LangGraph",
      "Agentic AI Architecture",
      "LLM Integration",
      "RAG Architectures",
      "Prompt Engineering",
      "MCP",
      "Claude Code",
    ],
  },
  {
    icon: Code,
    title: "Python & Development",
    purpose: "For shipping backend services, field web apps, and repeatable automation scripts.",
    skills: [
      "Python for AI/ML",
      "Automation Scripting",
      "Backend Development",
      "Data Structures & Algorithms",
    ],
  },
  {
    icon: Workflow,
    title: "Project Management",
    purpose: "For turning messy operations into clear plans, SOPs, and scoped deliverables.",
    skills: [
      "Agile Methodologies",
      "Waterfall",
      "Project Planning",
      "Risk Assessment",
      "Stakeholder Reporting",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    purpose: "For versioned releases, cloud hosting, and clean repository workflows.",
    skills: ["Google Cloud Platform", "AWS Fundamentals", "Git & GitHub"],
  },
  {
    icon: Database,
    title: "Data Science",
    purpose: "For querying operational tables, tracking parts inventory, and verifying metrics.",
    skills: ["SQL", "Advanced Data Analysis", "Data Visualization"],
  },
  {
    icon: GitBranch,
    title: "LLM Providers",
    purpose: "For matching each task to the right cloud or local model.",
    skills: ["OpenAI", "Google Gemini", "Claude", "Ollama"],
  },
];
