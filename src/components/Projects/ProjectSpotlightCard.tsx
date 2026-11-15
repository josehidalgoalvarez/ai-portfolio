import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { Link } from "react-router";
import { Project } from "@/types/project";

interface ProjectSpotlightCardProps {
  project: Project;
}

const hvacSpotlightMetrics = [
  { value: "1,288", label: "Rental Units" },
  { value: "96", label: "Buildings" },
  { value: "30", label: "Storage Areas" },
  { value: "14", label: "MCP Tools" },
  { value: "Oct 2026", label: "Live Since" },
] as const;

export default function ProjectSpotlightCard({
  project,
}: ProjectSpotlightCardProps) {
  const isHvacHome = project.id === "9";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35 }}
      className="col-span-1 md:col-span-2 rounded-lg border border-border bg-card text-card-foreground hover:border-primary transition-colors overflow-hidden"
    >
      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-6 py-4 border-b border-border bg-muted/40">
        <div className="flex flex-wrap items-center gap-2">
          {project.featured && (
            <span className="inline-flex items-center gap-2 px-2 py-1 text-xs font-mono font-semibold bg-primary text-primary-foreground rounded-sm">
              <Sparkles size={12} />
              Spotlight Project
            </span>
          )}
          <span className="px-2 py-1 text-xs font-mono border border-border bg-background text-muted-foreground rounded-sm">
            {project.category}
          </span>
        </div>
        <span className="text-xs font-mono text-muted-foreground">
          ID // {project.id}
        </span>
      </div>

      {/* Main Content */}
      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className={isHvacHome ? "lg:col-span-7" : "lg:col-span-12"}>
          <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">
            {project.title}
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-mono bg-muted text-foreground border border-border rounded-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
            <Link
              to={`/project/${project.id}`}
              className="inline-flex items-center gap-2 min-h-11 px-6 py-2 text-xs font-semibold bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              View project
              <ArrowRight size={14} />
            </Link>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 min-h-11 px-6 py-2 text-xs font-medium border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
              >
                Launch
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Real Verified Metrics Grid for HVACHome */}
        {isHvacHome && (
          <div className="lg:col-span-5 w-full rounded-lg border border-border bg-muted/20 overflow-hidden">
            <div className="px-4 py-2 border-b border-border bg-muted/40">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Verified Production Scope
              </span>
            </div>
            <div className="grid grid-cols-2 divide-x divide-y divide-border">
              {hvacSpotlightMetrics.slice(0, 4).map((metric) => (
                <div key={metric.label} className="p-4 bg-background/50">
                  <p className="text-2xl font-mono font-bold tracking-tight text-foreground">
                    {metric.value}
                  </p>
                  <p className="text-xs font-mono text-muted-foreground mt-2">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-border bg-background/50 flex items-center justify-between gap-4">
              <span className="text-xs font-mono text-muted-foreground">
                {hvacSpotlightMetrics[4].label}
              </span>
              <span className="text-base font-mono font-bold text-foreground">
                {hvacSpotlightMetrics[4].value}
              </span>
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
}
