import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projectService } from "@/services/projectService";
import { ProjectCategory } from "@/types/project";
import SectionContainer from "./common/SectionContainer";
import CategoryFilter from "./Projects/CategoryFilter";
import ProjectCard from "./Projects/ProjectCard";
import ProjectSpotlightCard from "./Projects/ProjectSpotlightCard";
import { projectCategories } from "@/data/projectCategories";

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");

  // Use service layer for data access (Dependency Inversion Principle)
  const projects = useMemo(
    () => projectService.getProjectsByCategory(selectedCategory),
    [selectedCategory]
  );

  const spotlightProject = projects.length > 0 ? projects[0] : undefined;
  const remainingProjects = projects.length > 1 ? projects.slice(1) : [];

  return (
    <SectionContainer id="projects" threshold={0.05}>
      <div className="mb-8">
        <span className="inline-block px-2 py-1 text-xs font-mono uppercase tracking-wider border border-border bg-muted text-muted-foreground rounded-sm mb-2">
          Selected Work
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
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
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {spotlightProject ? (
            <ProjectSpotlightCard
              key={`spotlight-${spotlightProject.id}`}
              project={spotlightProject}
            />
          ) : null}

          {remainingProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={index * 0.05}
              inView={inView}
            />
          ))}

          {projects.length === 0 && (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-base text-muted-foreground col-span-1 md:col-span-2 text-center py-8"
            >
              No projects found in this category.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </SectionContainer>
  );
}
