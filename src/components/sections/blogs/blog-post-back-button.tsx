"use client";

import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function BlogPostBackButton() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-2"
    >
      <Link href="/blogs">
        <Button
          variant="ghost"
          className="group flex items-center gap-1 underline font-bold p-0!"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Blogs
        </Button>
      </Link>
    </motion.div>
  );
}
