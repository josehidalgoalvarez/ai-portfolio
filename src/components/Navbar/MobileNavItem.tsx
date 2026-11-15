import { ArrowRight } from "lucide-react";

interface MobileNavItemProps {
  label: string;
  onClick: () => void;
}

export default function MobileNavItem({ label, onClick }: MobileNavItemProps) {
  return (
    <button
      onClick={onClick}
      className="w-full min-h-11 px-4 py-2 flex items-center justify-between gap-4 text-left text-base font-medium text-foreground border border-border bg-card hover:border-primary hover:bg-muted/40 focus-visible:border-primary rounded-md transition-colors"
    >
      <span>{label}</span>
      <ArrowRight size={16} className="text-muted-foreground shrink-0" />
    </button>
  );
}
