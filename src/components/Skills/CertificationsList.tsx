import AnimatedCard from "../common/AnimatedCard";

interface CertificationsListProps {
  certifications: string[];
  inView: boolean;
}

export default function CertificationsList({
  certifications,
  inView,
}: CertificationsListProps) {
  return (
    <AnimatedCard
      delay={0.35}
      inView={inView}
      className="mt-8 rounded-lg border border-border bg-card text-card-foreground overflow-hidden"
    >
      <div className="px-6 py-4 border-b border-border bg-muted/40 flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">
          Certifications & Specializations
        </h3>
        <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          {certifications.length} Specializations
        </span>
      </div>

      <ul className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-base text-muted-foreground">
        {certifications.map((cert, index) => (
          <li
            key={index}
            className="flex items-start gap-4 p-4 border border-border rounded-md bg-background"
          >
            <span className="text-xs font-mono font-bold text-primary p-2 border border-border bg-muted rounded-sm shrink-0">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-foreground leading-relaxed">{cert}</span>
          </li>
        ))}
      </ul>
    </AnimatedCard>
  );
}
