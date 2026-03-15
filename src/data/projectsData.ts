import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    title: "Multi-Agent Software Development Framework",
    description:
      "Architected a hierarchical multi-agent framework using CrewAI with 5 specialized agent roles, reducing AI operational costs by 85% and improving task completion accuracy to 92%.",
    category: "AI Systems",
    technologies: ["CrewAI", "Python", "OpenAI", "Gemini", "Claude"],
    link: null,
    featured: false,
  },
  {
    id: "2",
    title: "Automated Research Synthesis System",
    description:
      "Orchestrated a multi-agent AI system using CrewAI and Flowise, integrating 3 LLM providers to accelerate project planning cycles by 60%, reducing timeline from 10 days to 4 days.",
    category: "Automation",
    technologies: ["CrewAI", "Flowise", "OpenAI", "Gemini", "Ollama"],
    link: null,
    featured: false,
  },
  {
    id: "3",
    title: "RAG-Based Knowledge System",
    description:
      "Architected a RAG-based knowledge system using NotebookLM and Gemini API with 150+ context-aware prompts, improving AI agent factual accuracy by 40% and reducing hallucinations by 75%.",
    category: "AI Systems",
    technologies: ["RAG", "NotebookLM", "Gemini API", "Prompt Engineering"],
    link: null,
    featured: false,
  },
  {
    id: "4",
    title: "Workflow Automation Integration",
    description:
      "Designed automated workflows using N8N and Make to integrate AI agent outputs with ClickUp and Google Workspace, increasing team productivity by 45% and eliminating 20 hours of manual work weekly.",
    category: "Automation",
    technologies: ["N8N", "Make", "ClickUp", "Google Workspace"],
    link: null,
    featured: false,
  },
  {
    id: "5",
    title: "AI Career Roadmap Infographic",
    description:
      "An interactive HTML/CSS visualization of my study plan to become an AI engineer, featuring a progress dashboard, expandable timeline with Coursera courses and book outlines, and a doughnut chart for skill distribution using Chart.js.",
    category: "Web Development",
    technologies: ["HTML", "CSS (Tailwind)", "JavaScript", "Chart.js"],
    link: "/projects/ai-career-roadmap/",
    featured: true,
  },
  {
    id: "6",
    title: "LLM Resilience Test Report",
    description:
      'An interactive HTML report for Hive Mind Solutions evaluating LLM resilience against prompt injection attacks, featuring a sticky navigation, key findings on model performance (e.g., Gemini 2.5 Pro and Claude Sonnet 4.5 showed high resilience), mitigation strategies, and recommendations for agent security using a custom "HMS Secure Responder Template".',
    category: "Web Development",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "Inter Font"],
    link: "https://antiquewhite-snake-885911.hostingersite.com/",
    featured: false,
  },
  {
    id: "7",
    title: "R&D Funding Infographic for Hive Mind Solutions",
    description:
      "An interactive infographic visualizing R&D funding opportunities for Hive Mind Solutions, featuring doughnut and bar charts with Chart.js, multi-layered funding ecosystem details (federal, provincial, municipal), tax credit breakdowns, talent pipeline guidance, and top program recommendations using Tailwind CSS and JavaScript.",
    category: "Web Development",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "Chart.js"],
    link: "https://lightcoral-trout-302187.hostingersite.com/",
    featured: true,
  },
  {
    id: "8",
    title: "Interactive Funding Dashboard for Hive Mind Solutions",
    description:
      "An interactive dashboard visualizing R&D funding opportunities, featuring a program explorer with filters, dynamic charts (Chart.js), strategic pathways, and a prioritized action plan using Tailwind CSS and JavaScript.",
    category: "Web Development",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "Chart.js",
      "Inter Font",
    ],
    link: "https://lightcoral-trout-302187.hostingersite.com/",
    featured: true,
  },
  {
    id: "9",
    title: "Expense Tracker Application",
    description:
      "A full-stack expense tracking application built with React, featuring PDF and CSV export capabilities, real-time data visualization, and comprehensive expense management. Developed as part of advanced Claude AI collaboration exercises.",
    category: "Web Development",
    technologies: [
      "React",
      "TypeScript",
      "PDF Export",
      "CSV Export",
      "Data Visualization",
    ],
    link: "https://github.com/Josencho1/expense-tracker",
    featured: false,
  },
  {
    id: "10",
    title: "Gas Technician Unit 3 Training Website",
    description:
      "Interactive educational website covering properties, characteristics, and safe handling of fuel gases. Refactored using Claude AI with meta-prompting and context engineering, fact-checked against CSA training units and code B149.1.25 for regulatory compliance.",
    category: "Technical Documentation",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "CSA B149.1.25",
      "Meta-Prompting",
      "Context Engineering",
    ],
    link: "https://gray-badger-918104.hostingersite.com/",
    featured: true,
  },
  {
    id: "11",
    title: "High-Efficiency Furnace Maintenance SOP",
    description:
      "Interactive Standard Operating Procedure for high-efficiency gas furnace inspection, maintenance, and commissioning. Features tabbed navigation, checklists, and detailed procedures adhering to CSA B149.1-25 and Ontario TSSA regulations.",
    category: "Technical Documentation",
    technologies: ["HTML", "CSS", "JavaScript", "CSA B149.1-25", "TSSA Compliance"],
    link: "/projects/furnace-sop/",
    featured: true,
  },
  {
    id: "12",
    title: "Context Engineering Research",
    description:
      "Comprehensive research on Context Engineering methodologies for optimizing LLM performance. Covers retrieval strategies, processing techniques, and management approaches, contrasting with traditional Prompt Engineering. Includes impact statistics and future directions for agentic context systems.",
    category: "Research",
    technologies: [
      "LLM Optimization",
      "Context Engineering",
      "Prompt Engineering",
      "AI Research",
    ],
    link: "https://slateblue-magpie-954127.hostingersite.com/",
    featured: true,
  },
  {
    id: "13",
    title: "Gas Technician Technical Dashboard",
    description:
      "A React-based technical dashboard for gas technicians featuring an interactive heating sequence diagram, troubleshooting flowchart, safety KPIs, and TSSA-compliant record verification. Built with a SOLID architecture approach.",
    category: "Web Development",
    technologies: [
      "HTML/CSS/JS",
      "SOLID Principles",
      "Interactive SVG",
      "TSSA Compliance",
    ],
    link: "/projects/gas-tech-dashboard/",
    featured: true,
  },
  {
    id: "14",
    title: "HVACHome",
    description:
      "Web application to help tradespeople and homeowners keep track of appliance maintenance. Features include log tracking, manual uploads, maintenance scheduling, and a user-friendly interface. Built using SOLID and KISS principles for robust and maintainable code.",
    category: "Web Development",
    technologies: [
      "TypeScript",
      "React",
      "Google AI Studio",
      "Gemini",
      "Claude",
    ],
    link: "https://mediumturquoise-gazelle-912925.hostingersite.com/",
    featured: true,
  },
  {
    id: "15",
    title: "Gas Technician Unit 3 Architecture & Knowledge Base",
    description:
      "Architected and documented a vanilla ES6 JavaScript refactoring of a monolithic Gas Technician study dashboard. Engineered a strict 5-layer dependency hierarchy enforcing SOLID principles—including constructor dependency injection, observer callback patterns, and stateless components (e.g., ChartService, FuelTable). Accompanied by a comprehensive DeepWiki documentation site and an interactive NotebookLM study guide (https://notebooklm.google.com/notebook/64da08f8-a548-4cae-9d53-65be553e0cf2).",
    category: "Technical Documentation",
    technologies: [
      "ES6 Modules",
      "SOLID Principles",
      "DeepWiki",
      "NotebookLM",
      "JavaScript Architecture"
    ],
    link: "https://deepwiki.com/josehidalgoalvarez/Gas-Technician-3-Unit-3/1-overview",
    featured: true,
  },
];
