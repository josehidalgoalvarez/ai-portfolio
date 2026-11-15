import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router";
import { projectService } from "@/services/projectService";
import { ProjectCategory } from "@/types/project";
import SectionContainer from "./common/SectionContainer";
import CategoryFilter from "./Projects/CategoryFilter";
import ProjectCard from "./Projects/ProjectCard";
import ProjectSpotlightCard from "./Projects/ProjectSpotlightCard";
import { projectCategories } from "@/data/projectCategories";

const MAIN_PROJECT_IDS = new Set(["9", "6", "7", "13"]);

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");
  const [showArchive, setShowArchive] = useState(false);

  // Use service layer for data access (Dependency Inversion Principle)
  const projects = useMemo(
    () => projectService.getProjectsByCategory(selectedCategory),
    [selectedCategory]
  );

  const mainProjects = useMemo(
    () => projects.filter((project) => MAIN_PROJECT_IDS.has(project.id)),
    [projects]
  );

  const archiveProjects = useMemo(
    () => projects.filter((project) => !MAIN_PROJECT_IDS.has(project.id)),
    [projects]
  );

  const spotlightProject = mainProjects.length > 0 ? mainProjects[0] : undefined;
  const remainingMainProjects = mainProjects.length > 1 ? mainProjects.slice(1) : [];

  return (
    <SectionContainer id="projects" className="border-b border-border" threshold={0.05}>
      <div className="mb-8 min-w-0">
        <h2 className="text-2xl font-bold tracking-tight text-foreground break-words min-w-0">
          Projects
        </h2>
      </div>

      <CategoryFilter
        categories={[...projectCategories]}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <motion.div
        ref={ref}
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8 min-w-0"
      >
        <AnimatePresence mode="popLayout">
          {spotlightProject ? (
            <ProjectSpotlightCard
              key={`spotlight-${spotlightProject.id}`}
              project={spotlightProject}
            />
          ) : null}

          {remainingMainProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={index * 0.05}
              inView={inView}
            />
          ))}

          {mainProjects.length === 0 && archiveProjects.length === 0 && (
            <motion.p
              key="empty"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-base text-muted-foreground col-span-1 md:col-span-2 text-center py-8"
            >
              No projects found in this category.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Archive Toggle for the remaining 9 projects */}
      {archiveProjects.length > 0 && (
        <div className="mt-8 pt-8 border-t border-border min-w-0">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-foreground break-words min-w-0">
                Project archive ({archiveProjects.length})
              </h3>
              <p className="text-xs tracking-normal text-muted-foreground mt-2">
                Earlier study dashboards, research reports, and field SOPs
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowArchive((prev) => !prev)}
              aria-expanded={showArchive}
              className="inline-flex items-center gap-2 min-h-11 px-4 py-2 text-xs font-semibold tracking-normal border border-border bg-card text-foreground hover:border-primary hover:bg-muted/40 rounded-md transition-colors"
            >
              <span>
                {showArchive
                  ? "Hide archive"
                  : `All projects (${archiveProjects.length} in archive)`}
              </span>
              {showArchive ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>

          {(showArchive || mainProjects.length === 0) && (
            <div className="mt-6 rounded-lg border border-border bg-card text-card-foreground divide-y divide-border overflow-hidden">
              {archiveProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-4 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 min-w-0"
                >
                  <div className="space-y-2 min-w-0 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-base font-bold text-foreground">
                        {project.title}
                      </p>
                      <span className="p-2 text-xs tracking-normal border border-border bg-muted text-muted-foreground rounded-sm">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-xs tracking-normal text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <Link
                      to={`/project/${project.id}`}
                      className="inline-flex items-center gap-2 min-h-11 px-4 py-2 text-xs font-semibold tracking-normal border border-border bg-secondary text-secondary-foreground rounded-md hover:border-primary transition-colors"
                    >
                      View Details
                      <ArrowRight size={14} />
                    </Link>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 min-h-11 px-4 py-2 text-xs font-medium tracking-normal border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        Launch
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </SectionContainer>
  );
}
