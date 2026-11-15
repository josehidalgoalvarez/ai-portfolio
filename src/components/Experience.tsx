import { useInView } from "react-intersection-observer";
import SectionContainer from "./common/SectionContainer";
import AchievementCard from "./Experience/AchievementCard";
import AccomplishmentsList from "./Experience/AccomplishmentsList";
import { achievements, patryAccomplishments } from "@/data/experienceData";

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <SectionContainer
      id="experience"
      className="bg-muted/20 border-b border-border"
      threshold={0.05}
    >
      <div className="mb-8 min-w-0">
        <h2 className="text-2xl font-bold tracking-tight text-foreground break-words min-w-0">
          Experience
        </h2>
      </div>

      <div ref={ref} className="space-y-8 min-w-0">
        {/* Role 1 — Hive Mind Solutions (HMS) */}
        <article className="pt-6 border-t border-border grid grid-cols-1 lg:grid-cols-12 gap-8 items-start min-w-0">
          <div className="lg:col-span-4 space-y-4 min-w-0">
            <span className="inline-block p-2 text-xs tracking-normal border border-border bg-muted text-muted-foreground rounded-sm">
              Jan 2025–Present
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-foreground break-words min-w-0">
              AI Product Manager | Hive Mind Solutions (HMS) | Kingston, ON | Jan 2025–Present
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Co-founded with my friend Elvis because I would deeply regret not trying — starting with ourselves as the first client.
            </p>
            <p className="text-base font-medium text-foreground leading-relaxed pt-4 border-t border-border">
              Outcome: Replicable content, personal-brand, and automation systems that give small businesses — often friends — traction, cash flow, and the freedom to focus on what they are good at.
            </p>
          </div>

          <div className="lg:col-span-8 min-w-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-w-0">
              {achievements.map((achievement, index) => (
                <AchievementCard
                  key={index}
                  {...achievement}
                  delay={index * 0.08}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        </article>

        {/* Connective sentence between the two roles (Q5) */}
        <p className="py-6 border-t border-border text-base font-medium text-foreground leading-relaxed">
          When full-time tech roles did not land right away, I kept building with HiveMind Solutions while doing the hands-on maintenance work I am good at — and the field is what makes the software real.
        </p>

        {/* Role 2 — Patry Group of Companies */}
        <article className="pt-6 border-t border-border grid grid-cols-1 lg:grid-cols-12 gap-8 items-start min-w-0">
          <div className="lg:col-span-4 space-y-4 min-w-0">
            <span className="inline-block p-2 text-xs tracking-normal border border-border bg-muted text-muted-foreground rounded-sm">
              Jul 2026–Present
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-foreground break-words min-w-0">
              Building Maintenance Technician | Patry Group of Companies | Kingston, ON | Jul 2026–Present
            </h3>
            <p className="text-base font-medium text-foreground leading-relaxed pt-4 border-t border-border">
              Outcome: Turned daily multi-building maintenance routes and parts room lookups into a single phone-first workflow used on site.
            </p>
          </div>

          <div className="lg:col-span-8 min-w-0">
            <AccomplishmentsList
              accomplishments={patryAccomplishments}
              inView={inView}
              title="Patry — Key Accomplishments"
            />
          </div>
        </article>
      </div>
    </SectionContainer>
  );
}
