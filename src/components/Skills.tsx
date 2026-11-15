import { useInView } from "react-intersection-observer";
import SectionContainer from "./common/SectionContainer";
import SkillCategoryCard from "./Skills/SkillCategoryCard";
import CertificationsList from "./Skills/CertificationsList";
import { skillCategories, certifications } from "@/data/skillsData";

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <SectionContainer
      id="skills"
      className="bg-muted/20 border-b border-border"
      threshold={0.05}
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="inline-block p-2 text-xs font-mono uppercase tracking-wider border border-border bg-muted text-muted-foreground rounded-sm mb-2">
            Technical Stack & Capabilities
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Skills & Technologies
          </h2>
        </div>
        <span className="p-2 text-xs font-mono border border-border bg-muted text-muted-foreground rounded-sm">
          {skillCategories.length} Core Domains
        </span>
      </div>

      <div ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={index}
              {...category}
              delay={index * 0.06}
              inView={inView}
            />
          ))}
        </div>

        <CertificationsList certifications={certifications} inView={inView} />
      </div>
    </SectionContainer>
  );
}
