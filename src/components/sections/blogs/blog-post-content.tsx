"use client";

import { motion } from "motion/react";
import { SanityDocument } from "next-sanity";
import { PortableTextBlock, renderBlock } from "@/utils/portable-text";

interface BlogPostContentProps {
  post: SanityDocument;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      {(post.content as PortableTextBlock[]).map((block) => renderBlock(block))}
    </motion.div>
  );
}
