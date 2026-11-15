import { useInView } from "react-intersection-observer";
import SectionContainer from "./common/SectionContainer";
import AnimatedCard from "./common/AnimatedCard";
import { mentorshipPillars, phygitalConvergence } from "@/data/mentorshipData";

export default function MentorshipArchitecture() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <SectionContainer
      id="mentorship"
      className="border-b border-border"
      threshold={0.05}
    >
      <div className="mb-8 space-y-4 min-w-0">
        <div className="flex flex-wrap items-baseline justify-between gap-4 min-w-0">
          <h2 className="text-2xl font-bold tracking-tight text-foreground break-words min-w-0">
            The system behind the work
          </h2>
          <span className="p-2 text-xs tracking-normal border border-border bg-muted text-muted-foreground rounded-sm">
            5 pillars, 16 mentors
          </span>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
          Multidisciplinary builders win because they understand how digital intelligence collides with physical, operational, and commercial reality.
        </p>
      </div>

      <div ref={ref} className="space-y-8 min-w-0">
        {/* 5 Pillars Grid (no card-in-card: each pillar is a single flat card with divide-y rows) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch min-w-0">
          {mentorshipPillars.map((pillar, index) => {
            const colSpan =
              index === 0 ? "lg:col-span-12" : "lg:col-span-6";

            return (
              <AnimatedCard
                key={pillar.id}
                delay={index * 0.05}
                inView={inView}
                className={`${colSpan} rounded-lg border border-border bg-card text-card-foreground overflow-hidden flex flex-col min-w-0`}
              >
                <div className="p-6 border-b border-border bg-muted/20 space-y-2 min-w-0">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground break-words min-w-0">
                    {pillar.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {pillar.summary}
                  </p>
                </div>

                <ul
                  className={
                    index === 0
                      ? "grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border"
                      : "divide-y divide-border"
                  }
                >
                  {index === 0 ? (
                    <>
                      <div className="divide-y divide-border">
                        {pillar.mentors.slice(0, 4).map((mentor) => (
                          <li
                            key={mentor.name}
                            className="p-4 px-6 flex flex-wrap items-baseline justify-between gap-2 min-w-0"
                          >
                            <span className="text-base font-semibold text-foreground">
                              {mentor.name}
                            </span>
                            <span className="text-xs tracking-normal text-muted-foreground">
                              {mentor.frameworks}
                            </span>
                          </li>
                        ))}
                      </div>
                      <div className="divide-y divide-border">
                        {pillar.mentors.slice(4).map((mentor) => (
                          <li
                            key={mentor.name}
                            className="p-4 px-6 flex flex-wrap items-baseline justify-between gap-2 min-w-0"
                          >
                            <span className="text-base font-semibold text-foreground">
                              {mentor.name}
                            </span>
                            <span className="text-xs tracking-normal text-muted-foreground">
                              {mentor.frameworks}
                            </span>
                          </li>
                        ))}
                      </div>
                    </>
                  ) : (
                    pillar.mentors.map((mentor) => (
                      <li
                        key={mentor.name}
                        className="p-4 px-6 flex flex-wrap items-baseline justify-between gap-2 min-w-0"
                      >
                        <span className="text-base font-semibold text-foreground">
                          {mentor.name}
                        </span>
                        <span className="text-xs tracking-normal text-muted-foreground">
                          {mentor.frameworks}
                        </span>
                      </li>
                    ))
                  )}
                </ul>
              </AnimatedCard>
            );
          })}
        </div>

        {/* Phygital Convergence Card (single card boundary with hairline split) */}
        <AnimatedCard
          delay={0.25}
          inView={inView}
          className="rounded-lg border border-border bg-card text-card-foreground overflow-hidden min-w-0"
        >
          <div className="p-6 border-b border-border bg-muted/40 space-y-2 min-w-0">
            <h3 className="text-2xl font-bold tracking-tight text-foreground break-words min-w-0">
              {phygitalConvergence.title}
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              {phygitalConvergence.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border min-w-0">
            <div className="p-6 space-y-4 min-w-0">
              <p className="text-base font-bold text-foreground">
                Analog desk — field discipline
              </p>
              <ul className="space-y-2 text-base text-muted-foreground">
                {phygitalConvergence.analogDesk.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 space-y-4 min-w-0">
              <p className="text-base font-bold text-foreground">
                Digital desk — production AI
              </p>
              <ul className="space-y-2 text-base text-muted-foreground">
                {phygitalConvergence.digitalDesk.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </SectionContainer>
  );
}
