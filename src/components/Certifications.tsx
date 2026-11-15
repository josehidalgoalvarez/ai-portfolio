import { useMemo } from "react";
import { useInView } from "react-intersection-observer";
import SectionContainer from "./common/SectionContainer";
import CertificationCard from "./Certifications/CertificationCard";
import { certificationsData, Certification } from "@/data/certificationsData";

interface CertificationGroup {
  id: string;
  label: string;
  items: Certification[];
}

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const groupedCertifications = useMemo<CertificationGroup[]>(() => {
    const professional: Certification[] = [];
    const claudeAcademy: Certification[] = [];
    const trades: Certification[] = [];

    for (const cert of certificationsData) {
      if (cert.organization.includes("Claude Academy")) {
        claudeAcademy.push(cert);
      } else if (
        cert.organization === "Government of Ontario" ||
        cert.organization === "IPEX"
      ) {
        trades.push(cert);
      } else {
        professional.push(cert);
      }
    }

    return [
      {
        id: "group-professional",
        label: "Professional Certificates & Specializations",
        items: professional,
      },
      {
        id: "group-claude",
        label: "Anthropic — Claude Academy Completion Badges",
        items: claudeAcademy,
      },
      {
        id: "group-trades",
        label: "Trades & Regulatory Credentials",
        items: trades,
      },
    ];
  }, []);

  return (
    <SectionContainer
      id="certifications"
      className="border-b border-border"
      threshold={0.05}
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="inline-block p-2 text-xs font-mono uppercase tracking-wider border border-border bg-muted text-muted-foreground rounded-sm mb-2">
            Verified Credentials Ledger
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Certifications & Credentials
          </h2>
        </div>
        <span className="p-2 text-xs font-mono border border-border bg-muted text-muted-foreground rounded-sm">
          {certificationsData.length} Total Credentials
        </span>
      </div>

      <div ref={ref} className="space-y-8">
        {groupedCertifications.map((group) => (
          <div key={group.id} className="space-y-6">
            <div className="px-4 py-2 border border-border rounded-md bg-muted/40 flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground">
                {group.label}
              </span>
              <span className="text-xs font-mono text-muted-foreground">
                {group.items.length} Credentials
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.items.map((cert, index) => (
                <CertificationCard
                  key={cert.id}
                  certification={cert}
                  delay={index * 0.04}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
