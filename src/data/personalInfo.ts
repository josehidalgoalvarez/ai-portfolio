import { Github, Linkedin, Mail } from "lucide-react";

export const personalInfo = {
  name: "Jose Hidalgo",
  initials: "JH",
  title: "Software Engineer & AI Product Manager",
  email: "josehidalgo@hivemindinc.solutions",
  description:
    "When the systems on site cannot answer the job, I build the ones that do — across software, planning, and HVAC/R.",
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
