"use client";

import { motion } from "motion/react";
import SongCard from "./song-card";
import { SanityDocument } from "next-sanity";
import { SongFields } from "@/lib/types";

interface PlaylistSectionProps {
  songs: SanityDocument<SongFields>[];
}

const PlaylistSection = ({ songs }: PlaylistSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.1 }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {songs.map((song) => (
        <SongCard key={song._id} song={song} />
      ))}
    </motion.section>
  );
};

export default PlaylistSection;
