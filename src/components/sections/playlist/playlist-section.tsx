"use client";

import { type PlaylistSection as PlaylistSectionType } from "@/lib/types";
import { motion } from "framer-motion";
import SongCard from "./song-card";

interface PlaylistSectionProps {
  section: PlaylistSectionType;
}

const PlaylistSection = ({ section }: PlaylistSectionProps) => {
  const { songs } = section;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.1 }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {songs.map((song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </motion.section>
  );
};

export default PlaylistSection;
