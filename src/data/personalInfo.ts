import { Github, Linkedin, Mail } from "lucide-react";

export const personalInfo = {
  name: "Jose Hidalgo",
  initials: "JH",
  title: "Software Engineer & AI Product Manager",
  email: "josehidalgo@hivemindinc.solutions",
  description: "Specializing in Multi-Agent Frameworks and Agentic AI, architecting scalable AI solutions that deliver significant business impact.",
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
