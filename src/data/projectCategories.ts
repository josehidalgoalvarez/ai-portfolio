export const projectCategories = [
  "all",
  "Web Development",
  "Technical Documentation",
  "Software Architecture",
  "Research",
] as const;

export type ProjectCategory = typeof projectCategories[number];
