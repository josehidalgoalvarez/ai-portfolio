import { useMemo, useState } from "react";
import { Award, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { useInView } from "react-intersection-observer";
import SectionContainer from "./common/SectionContainer";
import CertificationCard from "./Certifications/CertificationCard";
import { certificationsData, Certification } from "@/data/certificationsData";

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [showClaudeBadges, setShowClaudeBadges] = useState(false);

  const { professional, claudeAcademy, trades } = useMemo(() => {
    const prof: Certification[] = [];
    const claude: Certification[] = [];
    const trd: Certification[] = [];

    for (const cert of certificationsData) {
      if (cert.organization.includes("Claude Academy")) {
        claude.push(cert);
      } else if (
        cert.organization === "Government of Ontario" ||
        cert.organization === "IPEX"
      ) {
        trd.push(cert);
      } else {
        prof.push(cert);
      }
    }

    return {
      professional: prof,
      claudeAcademy: claude,
      trades: trd,
    };
  }, []);

  return (
    <SectionContainer
      id="certifications"
      className="border-b border-border"
      threshold={0.05}
    >
      <div className="mb-8 space-y-4 min-w-0">
        <div className="flex flex-wrap items-baseline justify-between gap-4 min-w-0">
          <h2 className="text-2xl font-bold tracking-tight text-foreground break-words min-w-0">
            Certifications & Credentials
          </h2>
          <span className="p-2 text-xs tracking-normal border border-border bg-muted text-muted-foreground rounded-sm">
            {certificationsData.length} total credentials
          </span>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
          Two programmes changed how I work every day: hands-on gas-technician training for safe mechanical troubleshooting, and the IBM Full Stack Software Developer path (in progress) — which gave me confidence in what code is and how full-stack systems fit together.
        </p>
      </div>

      <div ref={ref} className="space-y-8 min-w-0">
        {/* Group 1: Professional Certificates & Specializations */}
        <div className="space-y-6 min-w-0">
          <div className="px-4 py-2 border-b border-border flex flex-wrap items-center justify-between gap-2">
            <span className="text-base font-bold text-foreground">
              Professional certificates & specializations
            </span>
            <span className="text-xs tracking-normal text-muted-foreground">
              {professional.length} credentials
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-w-0">
            {professional.map((cert, index) => (
              <CertificationCard
                key={cert.id}
                certification={cert}
                delay={index * 0.04}
                inView={inView}
              />
            ))}
          </div>
        </div>

        {/* Group 2: Trades & Regulatory Credentials */}
        <div className="space-y-6 min-w-0">
          <div className="px-4 py-2 border-b border-border flex flex-wrap items-center justify-between gap-2">
            <span className="text-base font-bold text-foreground">
              Trades & regulatory credentials
            </span>
            <span className="text-xs tracking-normal text-muted-foreground">
              {trades.length} credentials
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-w-0">
            {trades.map((cert, index) => (
              <CertificationCard
                key={cert.id}
                certification={cert}
                delay={index * 0.04}
                inView={inView}
              />
            ))}
          </div>
        </div>

        {/* Group 3: Anthropic — Claude Academy Completion Badges (1 summary row, expandable) */}
        <div className="rounded-lg border border-border bg-card text-card-foreground overflow-hidden min-w-0">
          <div className="p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 min-w-0">
            <div className="space-y-2 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <Award size={16} className="text-primary shrink-0" />
                <h3 className="text-base font-bold text-foreground break-words min-w-0">
                  Anthropic — Claude Academy ({claudeAcademy.length} completion badges, Jul–Oct 2026)
                </h3>
              </div>
              <p className="text-xs tracking-normal text-muted-foreground leading-relaxed">
                Deploying Claude Enterprise, Claude Code in Action, Subagents, Human-Agent Teams, and AI Fluency tracks.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <a
                href="https://academy.claude.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 min-h-11 px-4 py-2 text-xs font-semibold tracking-normal border border-border bg-background text-foreground hover:border-primary hover:text-primary rounded-md transition-colors"
              >
                Verify at Claude Academy <ExternalLink size={14} />
              </a>
              <button
                type="button"
                onClick={() => setShowClaudeBadges((prev) => !prev)}
                aria-expanded={showClaudeBadges}
                className="inline-flex items-center gap-2 min-h-11 px-4 py-2 text-xs font-semibold tracking-normal border border-border bg-secondary text-secondary-foreground hover:border-primary rounded-md transition-colors"
              >
                <span>
                  {showClaudeBadges
                    ? "Hide individual badges"
                    : `Show all ${claudeAcademy.length} badges`}
                </span>
                {showClaudeBadges ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>
            </div>
          </div>

          {showClaudeBadges && (
            <div className="border-t border-border divide-y divide-border bg-muted/20">
              {claudeAcademy.map((badge) => (
                <div
                  key={badge.id}
                  className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 min-w-0"
                >
                  <div className="space-y-2 min-w-0">
                    <p className="text-base font-bold text-foreground">
                      {badge.title}
                    </p>
                    <p className="text-xs tracking-normal text-muted-foreground">
                      {badge.organization} — {badge.description}
                    </p>
                  </div>
                  <a
                    href={badge.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 min-h-11 px-4 py-2 text-xs font-semibold tracking-normal border border-border bg-background text-foreground hover:border-primary rounded-md transition-colors shrink-0"
                  >
                    Verify Credential <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </SectionContainer>
  );
}
