"use client";

import { motion } from "motion/react";
import { Music4 } from "lucide-react";

const PlaylistHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12 flex items-start gap-3"
    >
      <span className="border-primary/50 rounded-full border-2 p-2">
        <Music4 className="text-primary h-7 w-7" />
      </span>
      <div>
        <h1 className="from-foreground via-primary to-foreground/70 bg-gradient-to-r bg-clip-text pb-2 text-4xl font-bold tracking-tight text-transparent md:text-5xl">
          My Playlist
        </h1>
        <p className="text-muted-foreground">
          A curated collection of my favorite songs and musical discoveries.
        </p>
      </div>
    </motion.div>
  );
};

export default PlaylistHeader;
