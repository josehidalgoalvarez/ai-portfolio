import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollToSection } from "@/hooks/use-scroll-to-section";
import { personalInfo } from "@/data/personalInfo";
import { projects } from "@/data/projectsData";
import HeroShowcaseCard from "./Hero/HeroShowcaseCard";

const verifiedStats = [
  { value: "1,288", label: "Rental Units" },
  { value: "96", label: "Buildings" },
  { value: "14", label: "MCP Tools" },
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
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

export default function Hero() {
  const scrollToSection = useScrollToSection();
  const hvacHomeProject = projects.find((p) => p.id === "9") ?? projects[0];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 pb-24 border-b border-border"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          {/* Left Column: Primary Identity, CTAs, Verified Stats Strip, Socials */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center px-2 py-1 text-xs font-mono uppercase tracking-wider border border-border bg-muted text-muted-foreground rounded-sm">
                {personalInfo.title}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base text-muted-foreground leading-relaxed max-w-xl mb-8"
            >
              {personalInfo.description}
            </motion.p>

            {/* Primary & Secondary CTAs (touch targets >= 44px, gap >= 8px) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto"
            >
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="min-h-11 px-6 gap-2 shadow-none"
              >
                <Mail size={18} />
                {personalInfo.contactAction.label}
              </Button>
              <Button
                onClick={() => scrollToSection("projects")}
                variant="outline"
                size="lg"
                className="min-h-11 px-6 gap-2 shadow-none"
              >
                View Work
                <ArrowRight size={18} />
              </Button>
            </motion.div>

            {/*Stats Strip: ONLY verified HVACHome numbers (8pt grid padding) */}
            <motion.div
              variants={itemVariants}
              className="w-full grid grid-cols-3 border border-border rounded-lg bg-muted/20 divide-x divide-border mb-8"
            >
              {verifiedStats.map((stat) => (
                <div key={stat.label} className="p-2 sm:p-4 text-left">
                  <p className="text-base font-mono font-bold text-foreground tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs font-mono text-muted-foreground mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Social Links with >= 44px touch targets and visible labels */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-2"
            >
              {personalInfo.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex items-center gap-2 min-h-11 px-4 py-2 text-xs font-mono text-muted-foreground hover:text-foreground border border-border rounded-md bg-background hover:border-primary transition-colors"
                  >
                    <Icon size={16} />
                    <span>{social.label}</span>
                  </a>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Flat Operational Showcase Composition */}
          <motion.div variants={itemVariants} className="lg:col-span-5 w-full">
            <HeroShowcaseCard project={hvacHomeProject} />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Cue (touch target >= 44px) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.45 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection("about")}
          aria-label="Scroll to About section"
          className="inline-flex items-center justify-center min-w-11 min-h-11 rounded-md border border-border bg-background text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
        >
          <ArrowDown size={20} />
        </button>
      </motion.div>
    </section>
  );
}
