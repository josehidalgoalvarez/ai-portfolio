export const projectCategories = [
  "all",
  "AI Systems",
  "Automation",
  "Web Development",
  "Technical Documentation",
  "Software Architecture",
  "Research",
] as const;

export type ProjectCategory = typeof projectCategories[number];
