"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { BlogPagination as PaginationType } from "@/types/blog";

interface BlogPaginationProps {
  pagination: PaginationType;
  className?: string;
}

export const BlogPagination = ({
  pagination,
  className,
}: BlogPaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { currentPage, totalPages } = pagination;

  const updatePage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`/blogs?${params.toString()}`);
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      pages.push(
        <PaginationItem key="start-ellipsis">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <PaginationEllipsis />
          </motion.div>
        </PaginationItem>,
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PaginationItem key={i}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: (i - startPage) * 0.1,
            }}
          >
            <PaginationLink
              isActive={currentPage === i}
              onClick={() => updatePage(i)}
              size="default"
              className="relative"
            >
              {i}
              {currentPage === i && (
                <motion.div
                  layoutId="activePage"
                  className="bg-primary/10 absolute inset-0 rounded-md"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </PaginationLink>
          </motion.div>
        </PaginationItem>,
      );
    }

    if (endPage < totalPages) {
      pages.push(
        <PaginationItem key="end-ellipsis">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <PaginationEllipsis />
          </motion.div>
        </PaginationItem>,
      );
    }

    return pages;
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentPage}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <Pagination className={className}>
          <PaginationContent>
            <PaginationItem>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PaginationPrevious
                  onClick={() => updatePage(currentPage - 1)}
                  aria-disabled={currentPage === 1}
                  className={cn(
                    currentPage === 1 && "pointer-events-none opacity-50",
                  )}
                  size="default"
                />
              </motion.div>
            </PaginationItem>

            {renderPageNumbers()}

            <PaginationItem>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PaginationNext
                  onClick={() => updatePage(currentPage + 1)}
                  aria-disabled={currentPage === totalPages}
                  className={cn(
                    currentPage === totalPages &&
                      "pointer-events-none opacity-50",
                  )}
                  size="default"
                />
              </motion.div>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </motion.div>
    </AnimatePresence>
  );
};
