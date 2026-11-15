import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionContainer from "./common/SectionContainer";
import EducationList from "./About/EducationList";
import { educationData } from "@/data/educationData";

const verifiedFacts = [
  {
    label: "AI consulting",
    value: "Co-founder & AI Product Manager — HiveMind Solutions",
    meta: "Kingston, ON | Jan 2025–Present",
  },
  {
    label: "Field operations",
    value: "Building Maintenance Technician — Patry Group of Companies",
    meta: "Kingston, ON | Jul 2026–Present",
  },
  {
    label: "Prior campus role",
    value: "Caretaker — Queen's University (~18 residences)",
    meta: "Kingston, ON | Oct 2024–Jul 2026",
  },
  {
    label: "Trades training",
    value: "Residential A/C Systems Technician Pre-Apprenticeship (Level 1)",
    meta: "St. Lawrence College, Kingston, ON | Completed August 2025",
  },
] as const;

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 1, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35 },
  },
};

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionContainer id="about" className="border-b border-border" threshold={0.05}>
      <div className="mb-8 min-w-0">
        <h2 className="text-2xl font-bold tracking-tight text-foreground break-words min-w-0">
          About Me
        </h2>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="space-y-8 min-w-0"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start min-w-0">
          {/* Left Column: Scannable Thesis + Origin Story */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 p-6 sm:p-8 border border-border rounded-lg bg-card text-card-foreground space-y-6 text-base text-muted-foreground leading-relaxed min-w-0"
          >
            <h3 className="text-2xl font-bold tracking-tight text-foreground break-words min-w-0">
              Headphones on. Clear plan. Execute.
            </h3>

            <p>
              At Queen's University across ~18 residences, an auto scrubber belonged in one building. After someone's two-week vacation, everything was scattered — every cart, chemical, and storage room different, and deep-clean handovers on a ~20-item checklist.
            </p>

            <p className="text-foreground font-semibold">
              That disorder became the specification.
            </p>

            <p>
              I became the person who builds the memory outside his head. I do not leave daily work to impulse or decision fatigue — I write systems that answer what I need to know, what I need to do, and why I need to do it.
            </p>

            <p>
              Today that discipline runs at Patry Group of Companies and HiveMind Solutions, grounded in CSA B149.1-25 and TSSA procedures, checkable in the repo or live app.
            </p>

            <p>
              In 2026 I presented 'GenAI Tools for Learning Patterns' at Queen's University's AI in Teaching & Learning Forum, Ideas Fair.
            </p>
          </motion.div>

          {/* Right Column: Flat Verified Profile Ledger (4 rows untouched) */}
          <motion.aside
            variants={itemVariants}
            className="lg:col-span-5 rounded-lg border border-border bg-card text-card-foreground overflow-hidden min-w-0"
          >
            <div className="px-6 py-4 border-b border-border bg-muted/40 flex items-center justify-between gap-2 min-w-0">
              <span className="text-xs tracking-normal text-foreground font-semibold">
                Verified profile ledger
              </span>
              <span className="text-xs tracking-normal text-muted-foreground">
                Kingston, ON
              </span>
            </div>

            <div className="divide-y divide-border">
              {verifiedFacts.map((fact) => (
                <div key={fact.label} className="p-4 sm:p-6 min-w-0">
                  <p className="text-xs tracking-normal text-primary mb-2">
                    {fact.label}
                  </p>
                  <p className="text-base font-semibold text-foreground mb-2">
                    {fact.value}
                  </p>
                  <p className="text-xs tracking-normal text-muted-foreground">
                    {fact.meta}
                  </p>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>

        <motion.div variants={itemVariants} className="min-w-0">
          <EducationList education={educationData} />
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
