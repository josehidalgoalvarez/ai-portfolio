import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "9",
    title: "HVACHome",
    description:
      "Field work-order app I built for my own maintenance job at Patry — because the systems I was given could not answer the three questions that matter before touching a unit: what is in it, what is the job, and where is the part. 1,288 units, 96 buildings. Tickets, Day Plan, verified parts across 30 storage areas, and gas-furnace SOPs, all phone-first and offline-tolerant. Live since October 2026, with a 14-tool MCP server for AI agents.",
    category: "Web Development",
    technologies: ["React 19", "TypeScript", "Slim 4 PHP", "MySQL", "MCP", "Vite"],
    link: "https://mediumturquoise-gazelle-912925.hostingersite.com/",
    featured: true,
  },
  {
    id: "6",
    title: "Gas Technician Unit 3 Training Website",
    description:
      "Dense fuel-gas safety tables and gas laws were hard to review on site. I refactored the Unit 3 curriculum with context engineering and fact-checked every formula against CSA B149.1-25, producing a searchable field study app.",
    category: "Technical Documentation",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "CSA B149.1.25",
      "Meta-Prompting",
      "Context Engineering",
    ],
    link: "/projects/gas-tech-unit3/",
    featured: true,
  },
  {
    id: "7",
    title: "High-Efficiency Furnace Maintenance SOP",
    description:
      "Furnace inspections fail when steps live in memory instead of a checklist. I turned CSA B149.1-25 and Ontario TSSA commissioning rules into a step-by-step field SOP used before closing a call.",
    category: "Technical Documentation",
    technologies: ["HTML", "CSS", "JavaScript", "CSA B149.1-25", "TSSA Compliance"],
    link: "/projects/furnace-sop/",
    featured: true,
  },
  {
    id: "13",
    title: "Gas Furnace Technical Dashboard",
    description:
      "Field furnace assessments needed a single view for readings and safety checks. I structured the G51MP inspection report, safe-work practices, and diagnostic breakdown into one browser dashboard.",
    category: "Web Development",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "/projects/gas-tech-dashboard/",
    featured: true,
  },
  {
    id: "1",
    title: "AI Career Roadmap Infographic",
    description:
      "Mapped an 87-book O'Reilly reading list and Coursera curriculum into a single study tracker to sequence my transition into AI engineering.",
    category: "Web Development",
    technologies: ["HTML", "CSS (Tailwind)", "JavaScript", "Chart.js"],
    link: "/projects/ai-career-roadmap/",
    featured: false,
  },
  {
    id: "2",
    title: "LLM Resilience Test Report",
    description:
      'Tested prompt-injection attacks across Gemini 2.5 Pro and Claude Sonnet 4.5 for HiveMind Solutions and documented the "HMS Secure Responder Template" for agent guardrails.',
    category: "Web Development",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "Inter Font"],
    link: "https://antiquewhite-snake-885911.hostingersite.com/",
    featured: false,
  },
  {
    id: "3",
    title: "R&D Funding Infographic for Hive Mind Solutions",
    description:
      "Consolidated federal, provincial, and municipal R&D grants and tax credits so HiveMind Solutions could compare non-dilutive funding requirements in one view.",
    category: "Web Development",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "Chart.js"],
    link: "https://lightcoral-trout-302187.hostingersite.com/",
    featured: false,
  },
  {
    id: "4",
    title: "Interactive Funding Dashboard for Hive Mind Solutions",
    description:
      "Built a filterable companion view to sort Canadian R&D funding programs by eligibility, stage, and application order for HiveMind Solutions.",
    category: "Web Development",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "Chart.js",
      "Inter Font",
    ],
    link: "https://lightcoral-trout-302187.hostingersite.com/",
    featured: false,
  },
  {
    id: "5",
    title: "Expense Tracker Application",
    description:
      "Built a React and TypeScript expense ledger with PDF and CSV exports to practice full-stack state management and AI-assisted code review.",
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
    id: "8",
    title: "Context Engineering Research",
    description:
      "Compared retrieval, context-window structuring, and prompt-only workflows to guide how HiveMind Solutions designs multi-agent memory.",
    category: "Research",
    technologies: [
      "LLM Optimization",
      "Context Engineering",
      "Prompt Engineering",
      "AI Research",
    ],
    link: "https://slateblue-magpie-954127.hostingersite.com/",
    featured: false,
  },
  {
    id: "10",
    title: "Gas Technician Unit 3 Architecture & Knowledge Base",
    description:
      "Refactored a monolithic Gas Technician study app into a 5-layer ES6 module hierarchy with constructor dependency injection, paired with a DeepWiki architecture site and an interactive NotebookLM study guide.",
    category: "Software Architecture",
    technologies: [
      "ES6 Modules",
      "SOLID Principles",
      "DeepWiki",
      "NotebookLM",
      "JavaScript Architecture",
    ],
    link: "https://deepwiki.com/josehidalgoalvarez/Gas-Technician-3-Unit-3/1-overview",
    featured: false,
  },
  {
    id: "11",
    title: "Interactive SOP: Ductless Mini-Split Service",
    description:
      "Standardized ductless mini-split cleaning, inspection, and tenant handoff steps into a field-ready checklist.",
    category: "Technical Documentation",
    technologies: ["HTML", "CSS", "JavaScript", "SOP"],
    link: "/projects/ductless-sop/",
    featured: false,
  },
  {
    id: "12",
    title: "Interactive SOP: Wall Patch & Spot Paint",
    description:
      "Documented wall-patching, drying stages, and spot-painting steps so unit turnovers follow a predictable timeline.",
    category: "Technical Documentation",
    technologies: ["HTML", "CSS", "JavaScript", "SOP"],
    link: "/projects/wall-prep-sop/",
    featured: false,
  },
];
