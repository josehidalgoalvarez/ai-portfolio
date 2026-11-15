import AnimatedCard from "../common/AnimatedCard";

interface AccomplishmentsListProps {
  accomplishments: string[];
  inView: boolean;
  title?: string;
}

export default function AccomplishmentsList({
  accomplishments,
  inView,
  title = "Key accomplishments",
}: AccomplishmentsListProps) {
  return (
    <AnimatedCard
      delay={0.2}
      inView={inView}
      className="rounded-lg border border-border bg-card text-card-foreground overflow-hidden min-w-0"
    >
      <div className="px-6 py-4 border-b border-border bg-muted/40 flex flex-wrap items-center justify-between gap-4 min-w-0">
        <h3 className="text-2xl font-bold tracking-tight text-foreground break-words min-w-0">
          {title}
        </h3>
        <span className="text-xs tracking-normal text-muted-foreground">
          {accomplishments.length} field responsibilities
        </span>
      </div>
      <ul className="divide-y divide-border text-base text-muted-foreground">
        {accomplishments.map((accomplishment, index) => (
          <li
            key={index}
            className="flex items-start gap-4 p-4 sm:p-6 min-w-0"
          >
            <span className="text-xs font-bold tracking-normal text-primary p-2 border border-border bg-muted rounded-sm shrink-0">
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
