export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  link: string | null;
  featured: boolean;
}

export type ProjectCategory =
  | "all"
  | "Web Development"
  | "Technical Documentation"
  | "Software Architecture"
  | "Research";
