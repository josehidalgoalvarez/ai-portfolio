import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { Link } from "react-router";
import { Project } from "@/types/project";

interface ProjectSpotlightCardProps {
  project: Project;
}

const hvacSpotlightMetrics = [
  { value: "1,288", label: "Rental units" },
  { value: "96", label: "Buildings" },
  { value: "30", label: "Storage areas" },
  { value: "14", label: "MCP tools" },
  { value: "Oct 2026", label: "Live since" },
] as const;

export default function ProjectSpotlightCard({
  project,
}: ProjectSpotlightCardProps) {
  const isHvacHome = project.id === "9";

  return (
    <motion.article
      layout
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35 }}
      className="col-span-1 md:col-span-2 rounded-lg border border-border bg-card text-card-foreground hover:border-primary transition-colors overflow-hidden min-w-0"
    >
      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-6 py-4 border-b border-border bg-muted/40 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          {project.featured && (
            <span className="inline-flex items-center gap-2 p-2 text-xs font-semibold tracking-normal bg-primary text-primary-foreground rounded-sm">
              <Sparkles size={12} />
              Spotlight project
            </span>
          )}
          <span className="p-2 text-xs tracking-normal border border-border bg-background text-muted-foreground rounded-sm">
            {project.category}
          </span>
        </div>
        <span className="text-xs tracking-normal text-muted-foreground">
          Field case study
        </span>
      </div>

      {/* Main Content (hairline divider instead of card-in-card) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border items-stretch min-w-0">
        <div
          className={`p-6 sm:p-8 min-w-0 ${
            isHvacHome ? "lg:col-span-7" : "lg:col-span-12"
          }`}
        >
          <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4 break-words min-w-0">
            {project.title}
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="p-2 text-xs tracking-normal bg-muted text-foreground border border-border rounded-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
            <Link
              to={`/project/${project.id}`}
              className="inline-flex items-center gap-2 min-h-11 px-6 py-2 text-xs font-semibold tracking-normal bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              View project
              <ArrowRight size={14} />
            </Link>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 min-h-11 px-6 py-2 text-xs font-medium tracking-normal border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
              >
                Launch
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Real Verified Metrics Grid for HVACHome (hairline cells, no nested card border) */}
        {isHvacHome && (
          <div className="lg:col-span-5 w-full bg-muted/20 flex flex-col justify-between min-w-0">
            <div className="px-6 py-4 border-b border-border bg-muted/40">
              <span className="text-xs tracking-normal text-muted-foreground">
                Verified production scope
              </span>
            </div>
            <div className="grid grid-cols-2 divide-x divide-y divide-border flex-1">
              {hvacSpotlightMetrics.slice(0, 4).map((metric) => (
                <div key={metric.label} className="p-6 bg-background/50 min-w-0">
                  <p className="text-2xl font-bold tracking-tight text-foreground">
                    {metric.value}
                  </p>
                  <p className="text-xs tracking-normal text-muted-foreground mt-2">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="px-6 py-4 border-t border-border bg-background/50 flex items-center justify-between gap-4">
              <span className="text-xs tracking-normal text-muted-foreground">
                {hvacSpotlightMetrics[4].label}
              </span>
              <span className="text-base font-bold tracking-normal text-foreground">
                {hvacSpotlightMetrics[4].value}
              </span>
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
}
