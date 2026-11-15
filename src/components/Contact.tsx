import { Mail } from "lucide-react";
import SectionContainer from "./common/SectionContainer";
import { personalInfo } from "@/data/personalInfo";

export default function Contact() {
  return (
    <SectionContainer id="contact" threshold={0.05}>
      <div className="mb-8">
        <span className="inline-block p-2 text-xs font-mono uppercase tracking-wider border border-border bg-muted text-muted-foreground rounded-sm mb-2">
          Direct Dispatch
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Get in Touch
        </h2>
      </div>

      <div className="rounded-lg border border-border bg-card text-card-foreground overflow-hidden">
        <div className="px-6 py-4 border-b border-border bg-muted/40 flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold">
            HiveMind Solutions // Kingston, ON
          </span>
          <span className="text-xs font-mono text-muted-foreground">
            Direct Channel
          </span>
        </div>

        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <p className="text-2xl font-bold tracking-tight text-foreground">
              Let's discuss how I can help with your AI projects
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Ready to collaborate? Reach out directly:
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col sm:flex-row lg:justify-end items-start sm:items-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 min-h-11 px-6 py-2 text-base font-mono font-semibold bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
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
