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
];
