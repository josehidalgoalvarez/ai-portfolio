import { EducationItem } from "@/data/educationData";

interface EducationListProps {
  education: EducationItem[];
}

export default function EducationList({ education }: EducationListProps) {
  return (
    <div className="pt-8 border-t border-border min-w-0">
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6 min-w-0">
        <h3 className="text-2xl font-bold tracking-tight text-foreground break-words min-w-0">
          The training behind it:
        </h3>
        <span className="text-xs tracking-normal text-muted-foreground">
          Kingston, ON
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-w-0">
        {education.map((item, index) => (
          <div
            key={index}
            className="p-6 border border-border rounded-lg bg-card text-card-foreground flex flex-col justify-between gap-4 min-w-0"
          >
            <div>
              <span className="inline-block p-2 text-xs tracking-normal border border-border bg-muted text-muted-foreground rounded-sm mb-4">
                {item.year}
              </span>
              <p className="text-base font-bold text-foreground">
                {item.degree}
              </p>
            </div>
            <p className="text-xs tracking-normal text-muted-foreground pt-4 border-t border-border">
              {item.institution} | {item.year}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
