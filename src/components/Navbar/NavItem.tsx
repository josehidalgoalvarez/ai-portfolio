interface NavItemProps {
  label: string;
  onClick: () => void;
}

export default function NavItem({ label, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center min-h-11 px-4 py-2 text-xs tracking-normal text-muted-foreground hover:text-foreground border border-transparent hover:border-primary hover:bg-muted/40 rounded-md transition-colors"
    >
      {label}
    </button>
  );
}
