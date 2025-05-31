"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectFeatureProps {
  feature: string;
  index: number;
  isHovered: boolean;
}

const ProjectFeature = ({ feature, index, isHovered }: ProjectFeatureProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
      }}
      className="text-muted-foreground group/feature flex items-start text-sm"
    >
      <motion.div
        animate={{
          rotate: isHovered ? 45 : 0,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <ArrowUpRight className="text-primary/70 group-hover/feature:text-primary mt-0.5 mr-2 h-4 w-4 transition-colors" />
      </motion.div>
      <span className="group-hover/feature:text-foreground transition-colors">
        {feature}
      </span>
    </motion.li>
  );
};

export default ProjectFeature;
