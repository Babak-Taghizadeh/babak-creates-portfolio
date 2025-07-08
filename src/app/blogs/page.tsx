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
    "Explore articles on web development, front-end best practices, career tips, and personal insights from Babak Taghizadeh.",
  keywords: [
    "web development",
    "self-improvement",
    "personal growth",
    "productivity",
    "career development",
    "frontend engineering",
    "learning to code",
    "growth mindset",
    "programming tutorials",
    "developer lifestyle",
    "continuous learning",
    "developer habits",
    "technical writing",
    "professional growth",
  ],
  authors: [{ name: "Babak Taghizadeh" }],
  openGraph: {
    title: "Blogs",
    description:
      "Read articles on front-end development, coding practices, productivity tips, and personal reflections from Babak.",
    type: "website",
    url: "/blogs",
    images: [
      {
        url: "/open-graph/blogs.png",
        width: 1200,
        height: 630,
        alt: "Blogs & Articles by Babak Taghizadeh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs by Babak Taghizadeh",
    description:
      "Tutorials, coding insights, and career advice from Babak's journey in modern web development.",
    images: ["/open-graph/blogs.png"],
  },
  alternates: {
    canonical: "/blogs",
  },
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
