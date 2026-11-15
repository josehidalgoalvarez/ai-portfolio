import { LucideIcon } from "lucide-react";
import AnimatedCard from "../common/AnimatedCard";

interface AchievementCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
  inView: boolean;
}

export default function AchievementCard({
  icon: Icon,
  title,
  description,
  delay,
  inView,
}: AchievementCardProps) {
  return (
    <AnimatedCard
      delay={Math.min(delay, 0.3)}
      inView={inView}
      className="p-6 border border-border rounded-lg bg-background hover:border-primary transition-colors flex flex-col justify-between gap-4"
    >
      <div className="flex items-center justify-between gap-2 pb-4 border-b border-border">
        <div className="p-2 border border-border rounded-sm bg-muted text-primary">
          <Icon size={20} />
        </div>
        <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          HMS Capability
        </span>
      </div>
      <div>
        <h3 className="text-2xl font-bold tracking-tight text-foreground mb-2">
          {title}
        </h3>
        <p className="text-base text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </AnimatedCard>
  );
}
