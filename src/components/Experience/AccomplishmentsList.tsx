import AnimatedCard from "../common/AnimatedCard";

interface AccomplishmentsListProps {
  accomplishments: string[];
  inView: boolean;
  title?: string;
}

export default function AccomplishmentsList({
  accomplishments,
  inView,
  title = "Key Accomplishments",
}: AccomplishmentsListProps) {
  return (
    <AnimatedCard
      delay={0.2}
      inView={inView}
      className="p-6 sm:p-8 border border-border rounded-lg bg-background"
    >
      <div className="flex items-center justify-between gap-4 pb-4 mb-6 border-b border-border">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">
          {title}
        </h3>
        <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          {accomplishments.length} Verified Items
        </span>
      </div>
      <ul className="space-y-4 text-base text-muted-foreground">
        {accomplishments.map((accomplishment, index) => (
          <li
            key={index}
            className="flex items-start gap-4 p-4 border border-border rounded-md bg-muted/20"
          >
            <span className="text-xs font-mono font-bold text-primary p-2 border border-border bg-background rounded-sm shrink-0">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="leading-relaxed text-foreground">
              {accomplishment}
            </span>
          </li>
        ))}
      </ul>
    </AnimatedCard>
  );
}
