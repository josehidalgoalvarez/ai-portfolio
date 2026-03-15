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
      delay={delay}
      inView={inView}
      className="p-6 border rounded-lg bg-background hover:border-primary transition-colors flex flex-col h-full"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
          <Award size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold leading-tight mb-1">
            {certification.title}
          </h3>
          <p className="text-sm text-primary font-medium">
            {certification.organization}
          </p>
        </div>
      </div>
      
      <p className="text-muted-foreground text-sm mb-6 flex-grow">
        {certification.description}
      </p>

      <div className="mt-auto pt-4 border-t">
        <a
          href={certification.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          Verify Credential <ExternalLink size={14} />
        </a>
      </div>
    </AnimatedCard>
  );
}
