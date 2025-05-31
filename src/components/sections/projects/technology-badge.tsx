"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface TechnologyBadgeProps {
  tech: string;
  index: number;
}

const TechnologyBadge = ({ tech, index }: TechnologyBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
    >
      <Badge
        variant="secondary"
        className="bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-105"
      >
        {tech}
      </Badge>
    </motion.div>
  );
};

export default TechnologyBadge;
