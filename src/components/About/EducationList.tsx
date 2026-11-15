import { EducationItem } from "@/data/educationData";

interface EducationListProps {
  education: EducationItem[];
}

export default function EducationList({ education }: EducationListProps) {
  return (
    <div className="pt-8 border-t border-border">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">
          Education
        </h3>
        <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          Kingston, ON
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {education.map((item, index) => (
          <div
            key={index}
            className="p-6 border border-border rounded-lg bg-card text-card-foreground flex flex-col justify-between gap-4"
          >
            <div>
              <span className="inline-block p-2 text-xs font-mono border border-border bg-muted text-muted-foreground rounded-sm mb-4">
                {item.year}
              </span>
              <p className="text-base font-bold text-foreground">
                {item.degree}
              </p>
            </div>
            <p className="text-xs font-mono text-muted-foreground pt-4 border-t border-border">
              {item.institution} | {item.year}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
