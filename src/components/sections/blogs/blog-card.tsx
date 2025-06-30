"use client";

import Image from "next/image";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { Clock, Tag } from "lucide-react";
import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import urlFor from "@/utils/urlForImage";
import { SanityDocument } from "next-sanity";
import { IBlogPost } from "@/lib/types";
import useMediaQuery from "@/hooks/use-media-query";
import {
  createStaggeredAnimation,
  createViewportAnimation,
} from "@/lib/animations";

interface BlogCardProps {
  post: SanityDocument<IBlogPost>;
  index?: number;
}

export const BlogCard = ({ post, index = 0 }: BlogCardProps) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const desktopAnimation = createStaggeredAnimation({ index });
  const mobileAnimation = createViewportAnimation();

  return (
    <motion.div
      {...(isDesktop ? desktopAnimation : mobileAnimation)}
      className={"group block hover:shadow-md"}
    >
      <Link href={`/blogs/${post.slug.current}`}>
        <Card className="h-full overflow-hidden pt-0">
          <motion.div
            className="relative aspect-[16/9] w-full overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={urlFor(post.coverImage).url()}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300"
              sizes="(min-width: 1024px) 33vw, 100vw"
              priority={index < 3}
              loading={index < 3 ? "eager" : "lazy"}
              quality={85}
              placeholder="blur"
              blurDataURL={urlFor(post.coverImage)
                .width(20)
                .quality(30)
                .blur(50)
                .url()}
            />
          </motion.div>

          <CardHeader className="space-y-2">
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {post.categories.map((category: string) => (
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
              className="text-muted-foreground line-clamp-3 text-sm"
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
