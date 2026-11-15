import { Mail } from "lucide-react";
import SectionContainer from "./common/SectionContainer";
import { personalInfo } from "@/data/personalInfo";

export default function Contact() {
  return (
    <SectionContainer id="contact" threshold={0.05}>
      <div className="mb-8 min-w-0">
        <h2 className="text-2xl font-bold tracking-tight text-foreground break-words min-w-0">
          Get in Touch
        </h2>
      </div>

      <div className="rounded-lg border border-border bg-card text-card-foreground overflow-hidden min-w-0">
        <div className="px-6 py-4 border-b border-border bg-muted/40 flex flex-wrap items-center justify-between gap-2 min-w-0">
          <span className="text-xs tracking-normal text-foreground font-semibold">
            HiveMind Solutions — Kingston, ON
          </span>
          <span className="text-xs tracking-normal text-muted-foreground">
            Growth & operations partner
          </span>
        </div>

        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-w-0">
          <div className="lg:col-span-7 space-y-4 min-w-0">
            <h3 className="text-2xl font-bold tracking-tight text-foreground break-words min-w-0">
              Working on a project, workflow, or operational bottleneck and wondering if I can help?
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Send a quick note saying, "I'm looking to do this or that — would you be able to help me?" and we will scope the next step together.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end items-start sm:items-center gap-4 min-w-0">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 min-h-11 px-6 py-2 text-base font-semibold tracking-normal bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              <Mail size={18} />
              {personalInfo.email}
            </a>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
