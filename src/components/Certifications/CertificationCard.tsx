import { ExternalLink, Award } from "lucide-react";
import AnimatedCard from "../common/AnimatedCard";
import { Certification } from "../../data/certificationsData";

interface CertificationCardProps {
  certification: Certification;
  delay: number;
  inView: boolean;
}

export default function CertificationCard({
  certification,
  delay,
  inView,
}: CertificationCardProps) {
  return (
    <AnimatedCard
      delay={Math.min(delay, 0.35)}
      inView={inView}
      className="rounded-lg border border-border bg-card text-card-foreground hover:border-primary transition-colors flex flex-col h-full overflow-hidden min-w-0"
    >
      {/* Top Meta Bar */}
      <div className="px-6 py-4 border-b border-border bg-muted/20 flex items-center justify-between gap-2 min-w-0">
        <span className="inline-flex items-center gap-2 text-xs tracking-normal text-primary font-semibold">
          <Award size={14} />
          {certification.organization}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1 min-w-0">
        <h3 className="text-base font-bold tracking-tight text-foreground mb-4 break-words min-w-0">
          {certification.title}
        </h3>

        <p className="text-base text-muted-foreground leading-relaxed mb-6 flex-grow">
          {certification.description}
        </p>

        <div className="mt-auto pt-4 border-t border-border">
          <a
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 min-h-11 px-4 py-2 text-xs font-semibold tracking-normal border border-border bg-background text-foreground hover:border-primary hover:text-primary rounded-md transition-colors"
          >
            Verify Credential <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </AnimatedCard>
  );
}
