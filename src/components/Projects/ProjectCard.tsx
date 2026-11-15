import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  delay: number;
  inView: boolean;
}

export default function ProjectCard({
  project,
  delay,
}: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, delay: Math.min(delay, 0.3) }}
      className="flex flex-col rounded-lg border border-border bg-card text-card-foreground hover:border-primary transition-colors overflow-hidden"
    >
      {/* Top Meta Bar */}
      <div className="flex items-center justify-between gap-2 px-6 py-4 border-b border-border bg-muted/20">
        <span className="text-xs font-mono text-muted-foreground">
          {project.category}
        </span>
        {project.featured && (
          <span className="px-2 py-1 text-xs font-mono font-semibold bg-primary text-primary-foreground rounded-sm">
            Featured
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-bold tracking-tight text-foreground mb-2">
          {project.title}
        </h3>
        <p className="text-base text-muted-foreground leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-mono bg-muted text-foreground border border-border rounded-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-border">
          <Link
            to={`/project/${project.id}`}
            className="inline-flex items-center gap-2 min-h-11 px-4 py-2 text-xs font-semibold border border-border bg-secondary text-secondary-foreground rounded-md hover:border-primary transition-colors"
          >
            View Details
            <ArrowRight size={14} />
          </Link>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 min-h-11 px-4 py-2 text-xs font-medium border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
            >
              Launch
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
