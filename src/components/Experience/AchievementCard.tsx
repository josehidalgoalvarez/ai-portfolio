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
      className="p-6 border border-border rounded-lg bg-card text-card-foreground hover:border-primary transition-colors flex flex-col justify-between gap-4 min-w-0"
    >
      <div className="flex items-center justify-between gap-2 pb-4 border-b border-border min-w-0">
        <div className="p-2 border border-border rounded-sm bg-muted text-primary">
          <Icon size={20} />
        </div>
        <span className="text-xs tracking-normal text-muted-foreground">
          HiveMind capability
        </span>
      </div>
      <div className="min-w-0">
        <h3 className="text-2xl font-bold tracking-tight text-foreground mb-2 break-words min-w-0">
          {title}
        </h3>
        <p className="text-base text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </AnimatedCard>
  );
}
