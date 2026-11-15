import { Github, Linkedin, Mail } from "lucide-react";

export const personalInfo = {
  name: "Jose Hidalgo",
  initials: "JH",
  title: "Software Engineer & AI Product Manager",
  email: "josehidalgo@hivemindinc.solutions",
  description: "I build AI systems, and I maintain the buildings they run in. Multi-agent frameworks, RAG, and automation — grounded in field work and safety standards.",
  socials: [
    {
      label: "GitHub Profile",
      href: "https://github.com/josehidalgoalvarez",
      icon: Github,
    },
    {
      label: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/jose-hidalgo-alvarez/",
      icon: Linkedin,
    },
  ],
  contactAction: {
    label: "Get in Touch",
    icon: Mail,
  },
} as const;
