"use client";

import Image from "next/image";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { Clock, Eye, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BlogPost } from "@/types/blog";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
  index?: number;
}

export const BlogCard = ({ post, className, index = 0 }: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.1,
        ease: [0.8, 0.8, 1, 0.8],
      }}
      className={cn("group block transition-all hover:shadow-md", className)}
    >
      <Link href={`/blogs/${post.slug}`}>
        <Card className="h-full overflow-hidden pt-0">
          <motion.div
            className="relative aspect-[16/9] w-full overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </motion.div>

          <CardHeader className="space-y-2">
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {post.categories.map((category) => (
                <motion.span
                  key={category}
                  className="bg-primary/10 text-primary inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Tag className="mr-1 h-3 w-3" />
                  {category}
                </motion.span>
              ))}
            </motion.div>
            <motion.h3
              className="group-hover:text-primary text-lg leading-tight font-semibold transition-colors"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {post.title}
            </motion.h3>
          </CardHeader>

          <CardContent>
            <motion.p
              className="text-muted-foreground line-clamp-2 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {post.excerpt}
            </motion.p>
          </CardContent>

          <CardFooter className="text-muted-foreground flex items-center justify-between text-sm">
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.span
                className="flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
              >
                <Clock className="h-4 w-4" />
                {post.readingTime} min read
              </motion.span>
              <motion.span
                className="flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
              >
                <Eye className="h-4 w-4" />
                {post.viewCount.toLocaleString()} views
              </motion.span>
            </motion.div>
            <motion.time
              dateTime={post.publishedAt}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {formatDistanceToNow(new Date(post.publishedAt), {
                addSuffix: true,
              })}
            </motion.time>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};
