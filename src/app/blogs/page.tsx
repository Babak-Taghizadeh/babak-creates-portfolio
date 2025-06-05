import { Metadata } from "next";
import { Suspense } from "react";
import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";
import { BlogGrid } from "@/components/sections/blogs/blog-grid";
import { getPostsQuery } from "@/lib/blog-utils";
import BlogGridSkeleton from "@/components/sections/blogs/blog-grid-skeleton";
import SectionHeader from "@/components/sections/about/section-header";
import { BlogFilters } from "@/components/sections/blogs/blog-filters";
import { NoPosts } from "@/components/sections/blogs/no-posts";
import { IBlogPost, TBlogCategory, TBlogSortOption } from "@/lib/types";

export const metadata: Metadata = {
  title: "Blogs | Babak Portfolio",
  description:
    "Explore articles about web development, career insights, and technical tutorials.",
};

interface BlogsPageProps {
  searchParams: {
    category?: TBlogCategory | "All";
    sort?: TBlogSortOption;
  };
}

const BlogsPage = async ({ searchParams }: BlogsPageProps) => {
  const { category = "All", sort = "newest" } = await searchParams;
  const posts = await client.fetch<SanityDocument<IBlogPost>[]>(
    getPostsQuery(category, sort),
  );

  return (
    <>
      <SectionHeader
        title="Console.Log (Thoughts)"
        description="Explore articles about web development, career insights, and technical tutorials."
      />
      <div className="mt-8 space-y-8">
        <BlogFilters />
        <Suspense fallback={<BlogGridSkeleton />}>
          {posts.length > 0 ? <BlogGrid posts={posts} /> : <NoPosts />}
        </Suspense>
      </div>
    </>
  );
};

export default BlogsPage;
