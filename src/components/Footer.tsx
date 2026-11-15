import { ArrowUp } from "lucide-react";
import { personalInfo } from "@/data/personalInfo";
import { navigationItems } from "@/data/navigationItems";
import { useScrollToSection } from "@/hooks/use-scroll-to-section";

export default function Footer() {
  const scrollToSection = useScrollToSection();

  return (
    <footer className="border-t border-border bg-muted/20 px-4 sm:px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-lg border border-border bg-card text-card-foreground overflow-hidden">
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Group 1: Identity + Copyright */}
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-flex items-center justify-center px-4 py-2 text-base font-mono font-bold tracking-tight text-foreground border border-border bg-muted/40 rounded-md">
                {personalInfo.initials}
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
              </p>
            </div>

            {/* Group 2: Navigation Items */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="inline-flex items-center justify-start min-h-11 px-4 py-2 text-xs font-mono text-muted-foreground hover:text-foreground border border-border bg-background hover:border-primary hover:bg-muted/40 focus-visible:border-primary rounded-md transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Group 3: Socials + Back to Top */}
            <div className="lg:col-span-3 flex flex-col gap-4 lg:items-end">
              <div className="flex flex-wrap items-center gap-2 w-full lg:justify-end">
                {personalInfo.socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="inline-flex items-center gap-2 min-h-11 px-4 py-2 text-xs font-mono text-muted-foreground hover:text-foreground border border-border bg-background hover:border-primary hover:bg-muted/40 focus-visible:border-primary rounded-md transition-colors"
                    >
                      <Icon size={16} />
                      <span>{social.label}</span>
                    </a>
                  );
                })}
              </div>

              <button
                onClick={() => scrollToSection("hero")}
                className="inline-flex items-center justify-center gap-2 min-h-11 px-4 py-2 text-xs font-mono font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded-md transition-colors w-full sm:w-auto"
              >
                <span>Back to top</span>
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
