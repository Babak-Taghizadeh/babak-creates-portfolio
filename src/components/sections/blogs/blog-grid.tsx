import { BlogPost } from "@/types/blog";
import { BlogCard } from "./blog-card";

interface BlogGridProps {
  posts: BlogPost[];
  className?: string;
}

export const BlogGrid = ({ posts, className }: BlogGridProps) => {
  return (
    <div
      className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ${className}`}
    >
      {posts.map((post, index) => (
        <BlogCard key={post.id} post={post} index={index} />
      ))}
    </div>
  );
};
