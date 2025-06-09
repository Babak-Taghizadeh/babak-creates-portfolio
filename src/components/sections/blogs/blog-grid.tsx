import { SanityDocument } from "next-sanity";
import { BlogCard } from "./blog-card";
import { IBlogPost } from "@/lib/types";

interface BlogGridProps {
  posts: SanityDocument<IBlogPost>[];
  className?: string;
}

export const BlogGrid = ({ posts, className }: BlogGridProps) => {
  return (
    <div
      className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ${className}`}
    >
      {posts.map((post, index) => (
        <BlogCard key={post._id} post={post} index={index} />
      ))}
    </div>
  );
};
