"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BlogCategory, SortOption } from "@/types/blog";

const CATEGORIES: BlogCategory[] = [
  "Technical",
  "Career",
  "Tutorials",
  "Personal",
  "Industry",
];
const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "popular", label: "Most Popular" },
];

interface BlogFiltersProps {
  className?: string;
}

export const BlogFilters = ({ className }: BlogFiltersProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category") as BlogCategory | null;
  const currentSort = (searchParams.get("sort") as SortOption) || "newest";

  const updateFilters = (updates: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    params.set("page", "1");
    router.push(`/blogs?${params.toString()}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "flex flex-wrap items-center justify-between gap-4",
        className,
      )}
    >
      <div className="flex flex-wrap gap-2">
        {["All", ...CATEGORIES].map((category, index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.2 }}
          >
            <Button
              variant={
                category === "All"
                  ? !currentCategory
                    ? "default"
                    : "outline"
                  : currentCategory === category
                    ? "default"
                    : "outline"
              }
              onClick={() =>
                updateFilters({ category: category === "All" ? "" : category })
              }
              size="sm"
              className="text-xs sm:text-sm"
            >
              {category}
            </Button>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <Select
          value={currentSort}
          onValueChange={(value) => updateFilters({ sort: value })}
        >
          <SelectTrigger className="w-full text-xs sm:w-[160px] sm:text-sm">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {SORT_OPTIONS.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="text-xs sm:text-sm"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </motion.div>
    </motion.div>
  );
};
