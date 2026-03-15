import { useParams, Link } from "react-router";
import { projectService } from "@/services/projectService";
import { Button } from "@/components/ui/button";
import SectionContainer from "@/components/common/SectionContainer";
import { ArrowLeft, ExternalLink, Calendar, Code2, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProjectDetails() {
    const { id } = useParams<{ id: string }>();
    // Use service to fetch data (DIP)
    const project = id ? projectService.getProjectById(id) : undefined;

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
                <p className="text-muted-foreground mb-6">
                    The project you are looking for does not exist or has been removed.
                </p>
                <Link to="/">
                    <Button>Back to Portfolio</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <SectionContainer id="project-details">
                <div className="mb-8">
                    <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Projects
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <Badge variant="outline" className="text-sm px-3 py-1">
                                    {project.category}
                                </Badge>
                                {project.featured && (
                                    <Badge className="text-sm px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20 border-0">
                                        Featured
                                    </Badge>
                                )}
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                                {project.title}
                            </h1>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    {project.description}
                                </p>
                                {/* 
                  Future: Add more rich content fields to Project type
                  e.g., project.longDescription, project.challenges, project.outcomes 
                */}
                            </div>
                        </div>

                        {/* Live Preview or Placeholder */}
                        <div className="w-full rounded-xl border bg-muted/30 overflow-hidden shadow-sm">
                            {project.link && project.link.startsWith("/projects/") ? (
                                <iframe
                                    src={project.link}
                                    title={`Preview of ${project.title}`}
                                    className="w-full h-[600px] border-0"
                                    loading="lazy"
                                />
                            ) : (
                                <div className="aspect-video flex items-center justify-center text-muted-foreground">
                                    <span className="flex items-center gap-2">
                                        <ExternalLink className="h-5 w-5" />
                                        External Project (No Preview Available)
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm">
                            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                <Code2 className="h-5 w-5 text-primary" />
                                Technologies
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <Badge key={tech} variant="secondary">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm">
                            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                <Tag className="h-5 w-5 text-primary" />
                                Project Details
                            </h3>
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between py-2 border-b">
                                    <span className="text-muted-foreground">Category</span>
                                    <span className="font-medium">{project.category}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b">
                                    <span className="text-muted-foreground">ID</span>
                                    <span className="font-medium font-mono text-xs">{project.id}</span>
                                </div>
                                {/* Add Date if available in data */}
                            </div>
                        </div>

                        {project.link && (
                            <Button size="lg" className="w-full" asChild>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    Launch Project
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                        )}
                    </div>
                </div>
            </SectionContainer>
        </div>
    );
}
