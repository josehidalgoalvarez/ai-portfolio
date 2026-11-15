import { useInView } from "react-intersection-observer";
import SectionContainer from "./common/SectionContainer";
import SkillCategoryCard from "./Skills/SkillCategoryCard";
import { skillCategories } from "@/data/skillsData";

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <SectionContainer
      id="skills"
      className="bg-muted/20 border-b border-border"
      threshold={0.05}
    >
      <div className="mb-8 space-y-4 min-w-0">
        <div className="flex flex-wrap items-baseline justify-between gap-4 min-w-0">
          <h2 className="text-2xl font-bold tracking-tight text-foreground break-words min-w-0">
            Skills & Technologies
          </h2>
          <span className="p-2 text-xs tracking-normal border border-border bg-muted text-muted-foreground rounded-sm">
            {skillCategories.length} core domains
          </span>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
          I reach for these when the plan has to survive contact with a real building.
        </p>
      </div>

      <div ref={ref} className="min-w-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-w-0">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={index}
              {...category}
              delay={index * 0.06}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
