import { Suspense } from "react";
import { Metadata } from "next";
import { BlogFilters } from "@/components/sections/blogs/blog-filters";
import { BlogGrid } from "@/components/sections/blogs/blog-grid";
import { BlogPagination } from "@/components/sections/blogs/blog-pagination";
import { getBlogPosts } from "@/lib/blog/api";
import { BlogCategory, SortOption } from "@/types/blog";
import SectionHeader from "@/components/sections/about/section-header";

export const metadata: Metadata = {
  title: "Blog | Babak Portfolio",
  description:
    "Explore articles about web development, career insights, and technical tutorials.",
};

interface BlogPageProps {
  searchParams: {
    page?: string;
    category?: BlogCategory;
    sort?: SortOption;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const category = params.category || undefined;
  const sortBy = params.sort || "newest";

  const { posts, pagination } = await getBlogPosts({
    page: Number(currentPage),
    category,
    sortBy,
  });

  return (
    <>
      <SectionHeader
        title="Console.Log (Thoughts)"
        description="Explore articles about web development, career insights, and technical tutorials."
      />

      <Suspense fallback={<div>Loading filters...</div>}>
        <BlogFilters className="mb-8" />
      </Suspense>
      {/* Implement no blogs state */}
      <BlogGrid posts={posts} />

      {pagination.totalPages > 1 && (
        <div className="mt-8">
          <BlogPagination pagination={pagination} />
        </div>
      )}
    </>
  );
}
