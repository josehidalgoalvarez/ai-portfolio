import { Project, ProjectCategory } from "@/types/project";
import { projects } from "@/data/projectsData";

/**
 * Interface for project data access (Dependency Inversion Principle)
 * Components depend on this abstraction, not concrete implementation
 */
export interface IProjectService {
  getAllProjects(): Project[];
  getProjectsByCategory(category: ProjectCategory): Project[];
  getProjectById(id: string): Project | undefined;
}

/**
 * Service for accessing project data (Single Responsibility Principle)
 * Implements Repository Pattern for data access abstraction
 */
class ProjectService implements IProjectService {
  getAllProjects(): Project[] {
    return this.sortProjects(projects);
  }

  getProjectsByCategory(category: ProjectCategory): Project[] {
    if (category === "all") {
      return this.sortProjects(projects);
    }
    return this.sortProjects(projects.filter((project) => project.category === category));
  }

  getProjectById(id: string): Project | undefined {
    return projects.find((project) => project.id === id);
  }

  private sortProjects(projects: Project[]): Project[] {
    return [...projects].sort((a, b) => {
      // 1. Featured projects first
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;

      // 2. Projects with links second
      if (a.link && !b.link) return -1;
      if (!a.link && b.link) return 1;

      return 0;
    });
  }
}

// Export singleton instance
export const projectService = new ProjectService();
