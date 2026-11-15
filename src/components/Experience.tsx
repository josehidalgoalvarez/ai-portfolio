import { useInView } from "react-intersection-observer";
import SectionContainer from "./common/SectionContainer";
import AchievementCard from "./Experience/AchievementCard";
import AccomplishmentsList from "./Experience/AccomplishmentsList";
import { achievements, accomplishments, patryAccomplishments } from "@/data/experienceData";

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <SectionContainer
      id="experience"
      className="bg-muted/20 border-b border-border"
      threshold={0.05}
    >
      <div className="mb-8">
        <span className="inline-block p-2 text-xs font-mono uppercase tracking-wider border border-border bg-muted text-muted-foreground rounded-sm mb-2">
          Operational Track Record
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Experience
        </h2>
      </div>

      <div ref={ref} className="space-y-8">
        {/* Role 01 — Hive Mind Solutions (HMS) */}
        <article className="rounded-lg border border-border bg-card text-card-foreground overflow-hidden">
          <div className="px-6 py-4 border-b border-border bg-muted/40 flex flex-wrap items-center justify-between gap-2">
            <span className="p-2 text-xs font-mono font-semibold bg-primary text-primary-foreground rounded-sm">
              ROLE // 01
            </span>
            <span className="text-xs font-mono text-muted-foreground">
              2024–Present
            </span>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-4">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                AI Project Consultant | Hive Mind Solutions (HMS) | Kingston, ON | 2024–Present
              </h3>
              <div className="p-4 border border-border rounded-md bg-muted/20 space-y-2">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Mandate Scope
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Multi-agent orchestration, RAG knowledge architectures, workflow automation, and field-deployed web & mobile tools.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements && achievements.length > 0 ? (
                  achievements.map((achievement, index) => (
                    <AchievementCard
                      key={index}
                      {...achievement}
                      delay={index * 0.08}
                      inView={inView}
                    />
                  ))
                ) : (
                  <p className="text-base text-muted-foreground col-span-2 text-center">
                    No achievements data available.
                  </p>
                )}
              </div>

              {accomplishments && accomplishments.length > 0 && (
                <AccomplishmentsList
                  accomplishments={accomplishments}
                  inView={inView}
                />
              )}
            </div>
          </div>
        </article>

        {/* Role 02 — Patry Group of Companies (No achievement cards, accomplishments only) */}
        <article className="rounded-lg border border-border bg-card text-card-foreground overflow-hidden">
          <div className="px-6 py-4 border-b border-border bg-muted/40 flex flex-wrap items-center justify-between gap-2">
            <span className="p-2 text-xs font-mono font-semibold border border-border bg-background text-foreground rounded-sm">
              ROLE // 02
            </span>
            <span className="text-xs font-mono text-muted-foreground">
              Jul 2026–Present
            </span>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-4">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                Building Maintenance Technician | Patry Group of Companies | Kingston, ON | Jul 2026–Present
              </h3>
              <div className="p-4 border border-border rounded-md bg-muted/20 space-y-2">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Field Scope
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Multi-residential HVAC/R, plumbing, electrical, and building-systems service across Kingston properties.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              {patryAccomplishments && patryAccomplishments.length > 0 && (
                <AccomplishmentsList
                  accomplishments={patryAccomplishments}
                  inView={inView}
                  title="Patry — Key Accomplishments"
                />
              )}
            </div>
          </div>
        </article>
      </div>
    </SectionContainer>
  );
}
