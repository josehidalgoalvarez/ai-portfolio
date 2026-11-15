import { LucideIcon } from "lucide-react";
import AnimatedCard from "../common/AnimatedCard";

interface SkillCategoryCardProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
  delay: number;
  inView: boolean;
}

export default function SkillCategoryCard({
  icon: Icon,
  title,
  skills,
  delay,
  inView,
}: SkillCategoryCardProps) {
  return (
    <AnimatedCard
      delay={Math.min(delay, 0.35)}
      inView={inView}
      className="rounded-lg border border-border bg-card text-card-foreground hover:border-primary transition-colors flex flex-col overflow-hidden"
    >
      <div className="px-6 py-4 border-b border-border bg-muted/20 flex items-center justify-between gap-2">
        <div className="p-2 border border-border rounded-sm bg-background text-primary">
          <Icon size={18} />
        </div>
        <span className="text-xs font-mono text-muted-foreground">
          {skills.length} Skills
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          {title}
        </h3>

        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="p-2 text-xs font-mono bg-muted text-foreground border border-border rounded-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </AnimatedCard>
  );
}
