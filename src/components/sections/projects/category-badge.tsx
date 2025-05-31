"use client";

import { PROJECT_CATEGORY_ICONS } from "@/lib/constants";
import { PROJECT_CATEGORY_COLORS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface CategoryBadgeProps {
  category: "Front-End" | "Fullstack" | "Backend" | "Other";
}

const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  return (
    <div
      className={cn(
        "absolute top-[22px] right-4 flex items-center gap-2 rounded-full px-2 py-1 text-sm font-medium backdrop-blur-sm md:px-4 md:py-1.5",
        PROJECT_CATEGORY_COLORS[category],
      )}
    >
      {PROJECT_CATEGORY_ICONS[category]}
      {category}
    </div>
  );
};

export default CategoryBadge;
