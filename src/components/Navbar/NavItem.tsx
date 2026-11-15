interface NavItemProps {
  label: string;
  onClick: () => void;
}

export default function NavItem({ label, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center min-h-11 px-4 py-2 text-xs font-mono text-muted-foreground hover:text-foreground border border-transparent hover:border-primary hover:bg-muted/40 focus-visible:border-primary rounded-md transition-colors"
    >
      {label}
    </button>
  );
}
