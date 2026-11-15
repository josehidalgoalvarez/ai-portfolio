import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  ExternalLink,
  PackageCheck,
  Server,
  Terminal,
} from "lucide-react";
import { Link } from "react-router";
import { Project } from "@/types/project";

interface HeroShowcaseCardProps {
  project: Project;
}

const modules = [
  {
    icon: ClipboardCheck,
    name: "Tickets & Day Plan",
    detail: "Phone-first field work orders & daily route sequencing",
  },
  {
    icon: PackageCheck,
    name: "Verified Parts Catalog",
    detail: "Inventory indexed across 30 storage areas",
  },
  {
    icon: Building2,
    name: "Gas-Furnace SOPs",
    detail: "CSA B149.1-25 & TSSA field procedures",
  },
  {
    icon: Server,
    name: "14-Tool MCP Server",
    detail: "Model Context Protocol interface for AI agents",
  },
] as const;

export default function HeroShowcaseCard({ project }: HeroShowcaseCardProps) {
  return (
    <div className="rounded-lg border border-border bg-card text-card-foreground overflow-hidden">
      {/* Terminal / Spec Header */}
      <div className="flex items-center justify-between gap-2 px-4 py-4 border-b border-border bg-muted/40">
        <div className="flex items-center gap-2 min-w-0">
          <Terminal size={16} className="text-foreground shrink-0" />
          <span className="text-xs font-mono font-semibold tracking-tight text-foreground truncate">
            hvachome.spec // id:{project.id}
          </span>
        </div>
        <span className="px-2 py-1 text-xs font-mono font-medium bg-primary text-primary-foreground rounded-sm shrink-0">
          Live since Oct 2026
        </span>
      </div>

      {/* Header Info */}
      <div className="p-6 border-b border-border">
        <div className="flex items-baseline justify-between gap-4 mb-2">
          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
            Featured Field System
          </span>
          <span className="text-xs font-mono text-muted-foreground">
            {project.category}
          </span>
        </div>
        <p className="text-base font-bold tracking-tight text-foreground mb-2">
          {project.title}
        </p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Phone-first and offline-tolerant field operations architecture built for real residential and commercial maintenance.
        </p>
      </div>

      {/* Architecture Modules Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border border-b border-border">
        <div className="divide-y divide-border">
          {modules.slice(0, 2).map((mod) => {
            const Icon = mod.icon;
            return (
              <div key={mod.name} className="p-4 bg-background/50">
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={16} className="text-foreground shrink-0" />
                  <span className="text-xs font-semibold text-foreground">
                    {mod.name}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {mod.detail}
                </p>
              </div>
            );
          })}
        </div>
        <div className="divide-y divide-border">
          {modules.slice(2, 4).map((mod) => {
            const Icon = mod.icon;
            return (
              <div key={mod.name} className="p-4 bg-background/50">
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={16} className="text-foreground shrink-0" />
                  <span className="text-xs font-semibold text-foreground">
                    {mod.name}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {mod.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stack & Direct Actions */}
      <div className="p-4 bg-muted/20 flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-mono bg-muted text-foreground border border-border rounded-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-border">
          <Link
            to={`/project/${project.id}`}
            className="inline-flex items-center gap-2 min-h-11 px-4 py-2 text-xs font-medium border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
          >
            Inspect System
            <ArrowRight size={14} />
          </Link>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 min-h-11 px-4 py-2 text-xs font-medium border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
            >
              Live App
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
