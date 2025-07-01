import { Metadata } from "next";
import { Suspense } from "react";
import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";
import { BlogGrid } from "@/components/sections/blogs/blog-grid";
import { getPostsQuery } from "@/lib/blog-utils";
import BlogGridSkeleton from "@/components/sections/blogs/blog-grid-skeleton";
import SectionHeader from "@/components/shared/section-header";
import BlogFilters from "@/components/sections/blogs/blog-filters";
import { NoPosts } from "@/components/sections/blogs/no-posts";
import { IBlogPost, TBlogCategory, TBlogSortOption } from "@/lib/types";
import PaginationControls from "@/components/ui/pagination-controls";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Explore articles about web development, career insights, and technical tutorials.",
};

const POSTS_PER_PAGE = 12;

interface BlogsPageProps {
  searchParams: Promise<{
    category?: TBlogCategory | "All";
    sort?: TBlogSortOption;
    page?: string;
  }>;
}

const BlogsPage = async ({ searchParams }: BlogsPageProps) => {
  const { category = "All", sort = "newest", page = "1" } = await searchParams;
  const currentPage = Number(page);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const { posts, total } = await client.fetch<{
    posts: SanityDocument<IBlogPost>[];
    total: number;
  }>(getPostsQuery(category, sort, start, end));

  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  return (
    <>
      <SectionHeader
        title="Console.Log (Thoughts)"
        description="My corner of the internet for ideas, lessons, and everything I’m figuring out."
      />
      <div className="mt-8 space-y-8">
        <BlogFilters />
        <Suspense fallback={<BlogGridSkeleton />}>
          {posts.length > 0 ? (
            <>
              <BlogGrid posts={posts} />
              {totalPages > 1 && (
                <PaginationControls
                  currentPage={currentPage}
                  totalPages={totalPages}
                  className="mt-8"
                />
              )}
            </>
          ) : (
            <NoPosts />
          )}
        </Suspense>
      </div>
    </>
  );
};

export default BlogsPage;
