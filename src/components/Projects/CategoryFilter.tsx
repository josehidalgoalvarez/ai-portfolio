import { Button } from "../ui/button";
import { ProjectCategory } from "@/types/project";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: ProjectCategory) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter projects by category"
      className="flex flex-wrap gap-2 mb-8"
    >
      {categories.map((category) => {
        const isActive = selectedCategory === category;
        const displayLabel = category === "all" ? "All" : category;
        return (
          <Button
            key={category}
            role="tab"
            aria-selected={isActive}
            onClick={() => onCategoryChange(category as ProjectCategory)}
            variant={isActive ? "default" : "outline"}
            className="min-h-11 px-4 py-2 text-xs tracking-normal shadow-none"
          >
            {displayLabel}
          </Button>
        );
      })}
    </div>
  );
}
