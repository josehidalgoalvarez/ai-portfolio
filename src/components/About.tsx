import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionContainer from "./common/SectionContainer";
import EducationList from "./About/EducationList";
import { educationData } from "@/data/educationData";

const verifiedFacts = [
  {
    label: "AI Consulting",
    value: "Co-founder & AI Project Consultant — HiveMind Solutions",
    meta: "Kingston, ON | 2024–Present",
  },
  {
    label: "Field Operations",
    value: "Building Maintenance Technician — Patry Group of Companies",
    meta: "Kingston, ON | Jul 2026–Present",
  },
  {
    label: "Speaking",
    value: "Queen's University AI in Teaching & Learning Forum, Ideas Fair",
    meta: "'GenAI Tools for Learning Patterns' | 2026",
  },
  {
    label: "Engineering Diploma",
    value: "Energy Systems Engineering Technician Diploma",
    meta: "St. Lawrence College, Kingston, ON | 2022–2024",
  },
  {
    label: "Trades Training",
    value: "Residential A/C Systems Technician Pre-Apprenticeship (Level 1)",
    meta: "St. Lawrence College, Kingston, ON | Completed August 2025",
  },
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionContainer id="about" className="border-b border-border" threshold={0.05}>
      <div className="mb-8">
        <span className="inline-block p-2 text-xs font-mono uppercase tracking-wider border border-border bg-muted text-muted-foreground rounded-sm mb-2">
          Field & Systems Profile
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          About Me
        </h2>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="space-y-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative (all 5 paragraphs word-for-word, in order) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 p-6 sm:p-8 border border-border rounded-lg bg-card text-card-foreground space-y-6 text-base text-muted-foreground leading-relaxed"
          >
            <p>
              I build AI systems and I maintain buildings. By day I am a Building Maintenance Technician in Kingston, Ontario; I build the tools I need on site, because the systems I was given could not answer the three questions that matter before touching a unit: what is in it, what is the job, and where is the part.
            </p>

            <p>
              With HiveMind Solutions, the company I co-founded, I scope, build, and document AI systems for real operations — multi-agent frameworks with CrewAI and LangChain, RAG knowledge systems, and N8N automation — and I write the SOPs that make them repeatable.
            </p>

            <p>
              That combination is the point: my software is grounded in field work, safety standards, and tenant-facing reality — CSA B149.1-25 and TSSA gas-furnace procedures, not demos.
            </p>

            <p>
              I learn by building, and I verify before I claim. Every result on this site is checkable in the repo or on the live app.
            </p>

            <p>
              In 2026 I presented 'GenAI Tools for Learning Patterns' at Queen's University's AI in Teaching & Learning Forum, Ideas Fair.
            </p>
          </motion.div>

          {/* Right Column: Flat Verified Fact Panel */}
          <motion.aside
            variants={itemVariants}
            className="lg:col-span-5 rounded-lg border border-border bg-card text-card-foreground overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-border bg-muted/40 flex items-center justify-between gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold">
                Verified Profile Ledger
              </span>
              <span className="text-xs font-mono text-muted-foreground">
                Kingston, ON
              </span>
            </div>

            <div className="divide-y divide-border">
              {verifiedFacts.map((fact) => (
                <div key={fact.label} className="p-4 sm:p-6">
                  <p className="text-xs font-mono uppercase tracking-wider text-primary mb-2">
                    {fact.label}
                  </p>
                  <p className="text-base font-semibold text-foreground mb-2">
                    {fact.value}
                  </p>
                  <p className="text-xs font-mono text-muted-foreground">
                    {fact.meta}
                  </p>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>

        <motion.div variants={itemVariants}>
          <EducationList education={educationData} />
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
