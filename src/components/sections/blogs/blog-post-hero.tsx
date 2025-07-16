"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Clock, Tag } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import urlFor from "@/utils/urlForImage";
import { Badge } from "@/components/ui/badge";
import { IBlogPost } from "@/lib/types";
import { SanityDocument } from "next-sanity";

interface BlogPostHeroProps {
  post: SanityDocument<IBlogPost>;
}

const BlogPostHero = ({ post }: BlogPostHeroProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 space-y-6"
    >
      <div className="relative aspect-[14/9] w-full overflow-hidden rounded-xl md:aspect-[17/9]">
        <Image
          src={urlFor(post.coverImage).url()}
          alt={post.title}
          fill
          quality={85}
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>

      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2"
        >
          {post.categories.map((category) => (
            <Badge
              key={category}
              variant="secondary"
              className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Tag className="mr-1 h-3 w-3" />
              {category}
            </Badge>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl leading-tight font-bold tracking-tight md:text-4xl lg:text-5xl"
        >
          {post.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground text-lg"
        >
          {post.excerpt}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-muted-foreground flex flex-wrap items-center gap-4 text-sm"
        >
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readingTime} min read
          </span>
          <time dateTime={post.publishedAt}>
            {formatDistanceToNow(new Date(post.publishedAt), {
              addSuffix: true,
            })}
          </time>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogPostHero;
