import { ArrowRight, ExternalLink, Terminal } from "lucide-react";
import { Link } from "react-router";
import { Project } from "@/types/project";

interface HeroShowcaseCardProps {
  project: Project;
}

export default function HeroShowcaseCard({ project }: HeroShowcaseCardProps) {
  return (
    <div className="rounded-lg border border-border bg-card text-card-foreground overflow-hidden">
      {/* Header Bar */}
      <div className="flex items-center justify-between gap-2 px-6 py-4 border-b border-border bg-muted/40 min-w-0">
        <div className="flex items-center gap-2 min-w-0">
          <Terminal size={16} className="text-foreground shrink-0" />
          <span className="text-xs font-semibold tracking-normal text-foreground truncate">
            {project.title}
          </span>
        </div>
        <span className="p-2 text-xs font-medium tracking-normal bg-primary text-primary-foreground rounded-sm shrink-0">
          Live since Oct 2026
        </span>
      </div>

      {/* Single Field Outcome — ends on a pause (white space) */}
      <div className="p-6 pb-8 border-b border-border space-y-4 min-w-0">
        <p className="text-xs tracking-normal text-muted-foreground">
          Field outcome
        </p>
        <p className="text-base text-foreground leading-relaxed">
          The plan is reviewed before I leave. I know where to stop for parts, and on a few calls I have been on site in under 20 minutes.
        </p>
        <p className="text-base font-bold text-foreground">
          Then the work starts.
        </p>
      </div>

      {/* Direct Actions */}
      <div className="p-6 bg-muted/20 flex flex-wrap items-center justify-between gap-2">
        <Link
          to={`/project/${project.id}`}
          className="inline-flex items-center gap-2 min-h-11 px-4 py-2 text-xs font-medium tracking-normal border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
        >
          Inspect System
          <ArrowRight size={14} />
        </Link>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 min-h-11 px-4 py-2 text-xs font-medium tracking-normal border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
          >
            Live App
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </div>
  );
}
