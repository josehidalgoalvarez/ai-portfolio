import { Github, Linkedin, Mail } from "lucide-react";

export const personalInfo = {
  name: "Jose Hidalgo",
  initials: "JH",
  title: "Software Engineer & AI Product Manager",
  email: "josehidalgo@hivemindinc.solutions",
  description:
    "I solve people's problems every day — software, planning, plumbing, electricity, HVAC, refrigeration — or give them a clear solution that gets them back on track.",
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
