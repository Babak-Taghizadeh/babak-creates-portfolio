"use client";

import { motion } from "motion/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { TBlogCategory, TBlogSortOption } from "@/types/blog";
import { BLOG_CATEGORIES, BLOG_SORT_OPTIONS } from "@/lib/constants";

interface BlogFiltersProps {
  className?: string;
}

export const BlogFilters = ({ className }: BlogFiltersProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory =
    (searchParams.get("category") as TBlogCategory) || "All";
  const currentSort = (searchParams.get("sort") as TBlogSortOption) || "newest";

  const updateFilters = (
    category?: TBlogCategory | "All",
    sort?: TBlogSortOption,
  ) => {
    const params = new URLSearchParams(searchParams.toString());

    if (category) {
      if (category === "All") {
        params.delete("category");
      } else {
        params.set("category", category);
      }
    }

    if (sort) {
      params.set("sort", sort);
    }

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
        {["All", ...BLOG_CATEGORIES].map((category, index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.2 }}
          >
            <Button
              size="sm"
              variant={currentCategory === category ? "default" : "outline"}
              onClick={() => updateFilters(category as TBlogCategory | "All")}
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
          onValueChange={(value: TBlogSortOption) =>
            updateFilters(undefined, value)
          }
        >
          <SelectTrigger className="w-full text-xs sm:w-[160px] sm:text-sm">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {BLOG_SORT_OPTIONS.map((option) => (
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
