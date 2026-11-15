import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import EducationList from "./About/EducationList";
import { educationData } from "@/data/educationData";

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-32">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">About Me</h2>

        <div className="space-y-6 text-lg text-muted-foreground">
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

          <EducationList education={educationData} />
        </div>
      </motion.div>
    </section>
  );
}