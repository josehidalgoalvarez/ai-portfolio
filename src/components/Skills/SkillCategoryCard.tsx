import { LucideIcon } from "lucide-react";
import AnimatedCard from "../common/AnimatedCard";

interface SkillCategoryCardProps {
  icon: LucideIcon;
  title: string;
  purpose: string;
  skills: string[];
  delay: number;
  inView: boolean;
}

export default function SkillCategoryCard({
  icon: Icon,
  title,
  purpose,
  skills,
  delay,
  inView,
}: SkillCategoryCardProps) {
  return (
    <AnimatedCard
      delay={Math.min(delay, 0.35)}
      inView={inView}
      className="rounded-lg border border-border bg-card text-card-foreground hover:border-primary transition-colors flex flex-col overflow-hidden min-w-0"
    >
      <div className="px-6 py-4 border-b border-border bg-muted/20 flex items-center justify-between gap-2 min-w-0">
        <div className="p-2 border border-border rounded-sm bg-background text-primary">
          <Icon size={18} />
        </div>
        <span className="text-xs tracking-normal text-muted-foreground">
          {skills.length} skills
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1 min-w-0">
        <h3 className="text-2xl font-bold tracking-tight text-foreground mb-2 break-words min-w-0">
          {title}
        </h3>

        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          {purpose}
        </p>

        <ul className="flex flex-wrap gap-2 mt-auto">
          {skills.map((skill) => (
            <li
              key={skill}
              className="p-2 text-xs tracking-normal bg-muted text-foreground border border-border rounded-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </AnimatedCard>
  );
}
