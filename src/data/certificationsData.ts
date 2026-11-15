export interface Certification {
  id: string;
  title: string;
  organization: string;
  description: string;
  link: string;
}

export const certificationsData: Certification[] = [
  {
    id: "cert-1",
    title: "Google Project Management Professional Certificate",
    organization: "Google",
    description: "A comprehensive 6-course curriculum covering traditional project management and Agile methodologies, strategic planning, risk management, and leadership.",
    link: "https://www.coursera.org/professional-certificates/google-project-management",
  },
  {
    id: "cert-2",
    title: "Google IT Automation with Python Professional Certificate",
    organization: "Google",
    description: "A 6-course certificate focusing on core IT skills, Python programming, system administration, and using Git and GitHub for automation and configuration management.",
    link: "https://www.coursera.org/professional-certificates/google-it-automation",
  },
  {
    id: "cert-3",
    title: "Data Science Fundamentals with Python and SQL",
    organization: "IBM",
    description: "A 5-course specialization building foundations in Data Science, including Python programming, statistical analysis, SQL databases, and data visualization.",
    link: "https://www.coursera.org/specializations/data-science-fundamentals-python-sql",
  },
  {
    id: "cert-4",
    title: "IBM AI Developer Professional Certificate",
    organization: "IBM",
    description: "An intensive program covering the creation of AI-powered applications, utilizing APIs, Python, and modern AI engineering practices.",
    link: "https://www.coursera.org/professional-certificates/ibm-ai-developer",
  },
  {
    id: "cert-5",
    title: "Generative AI for Project Managers",
    organization: "Vanderbilt University",
    description: "A specialization focused on leveraging Generative AI tools to optimize project workflows, enhance communication, and accelerate planning phases.",
    link: "https://www.coursera.org/specializations/generative-ai-for-project-managers",
  },
  {
    id: "cert-6",
    title: "Deploying Claude Enterprise with Confidence",
    organization: "Anthropic (Claude Academy)",
    description: "Enterprise rollout: structure, access, governance, spend, and visibility, ending in a rollout plan. Completed Oct 15, 2026 — Claude Academy completion badge.",
    link: "https://academy.claude.com",
  },
  {
    id: "cert-7",
    title: "AI Fluency for Creative Work",
    organization: "Anthropic (Claude Academy)",
    description: "Using Claude fluently in creative work. Completed Oct 7, 2026 — Claude Academy completion badge.",
    link: "https://academy.claude.com",
  },
  {
    id: "cert-8",
    title: "AI Fluency for Builders",
    organization: "Anthropic (Claude Academy)",
    description: "Using Claude fluently to build with AI. Completed Oct 4, 2026 — Claude Academy completion badge.",
    link: "https://academy.claude.com",
  },
  {
    id: "cert-9",
    title: "Claude Code in Action",
    organization: "Anthropic (Claude Academy)",
    description: "Working with Claude Code on real code. Completed Sep 29, 2026 — Claude Academy completion badge.",
    link: "https://academy.claude.com",
  },
  {
    id: "cert-10",
    title: "Building Effective Human-Agent Teams (beta)",
    organization: "Anthropic (Claude Academy)",
    description: "Designing work split between people and AI agents. Completed Sep 26, 2026 — Claude Academy completion badge.",
    link: "https://academy.claude.com",
  },
  {
    id: "cert-11",
    title: "AI Fluency for P-12 Educators",
    organization: "Anthropic (Claude Academy)",
    description: "Using Claude in teaching and learning. Completed Sep 16, 2026 — Claude Academy completion badge.",
    link: "https://academy.claude.com",
  },
  {
    id: "cert-12",
    title: "AI Fluency for Small Businesses",
    organization: "Anthropic (Claude Academy)",
    description: "Using Claude in a small business. Completed Sep 9, 2026 — Claude Academy completion badge.",
    link: "https://academy.claude.com",
  },
  {
    id: "cert-13",
    title: "Introduction to Subagents",
    organization: "Anthropic (Claude Academy)",
    description: "Delegating work to specialised subagents. Completed Jul 11, 2026 — Claude Academy completion badge.",
    link: "https://academy.claude.com",
  },
  {
    id: "cert-14",
    title: "IBM Full Stack Software Developer Professional Certificate",
    organization: "IBM (Coursera)",
    description: "In progress — 8 of 15 courses completed as of Sep 29, 2026. Full-stack web, cloud, React, Node.js, Python and Django, containers and microservices, plus capstone.",
    link: "https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer",
  },
  {
    id: "cert-15",
    title: "Ozone Depletion Prevention (ODP)",
    organization: "Government of Ontario",
    description: "Certificate to purchase and handle refrigerants in Ontario under O. Reg. 463/10. Issued Jun 2025, expires Jun 2030. Credential ID 1183017. Covers handling refrigerants; it is not on its own a refrigeration repair qualification.",
    link: "https://www.ontario.ca/page/certificate-handle-refrigerants",
  },
  {
    id: "cert-16",
    title: "IPEX System 636",
    organization: "IPEX",
    description: "IPEX System 636 credential for thermoplastic piping systems. Issued Jan 2026, expires Jan 2029.",
    link: "https://www.ipexna.com/",
  },
];
