import { useInView } from "react-intersection-observer";
import SectionContainer from "./common/SectionContainer";
import SectionTitle from "./common/SectionTitle";
import CertificationCard from "./Certifications/CertificationCard";
import { certificationsData } from "@/data/certificationsData";

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionContainer id="certifications" threshold={0.05}>
      <SectionTitle>Certifications & Credentials</SectionTitle>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationsData.map((cert, index) => (
          <CertificationCard
            key={cert.id}
            certification={cert}
            delay={index * 0.1}
            inView={inView}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
