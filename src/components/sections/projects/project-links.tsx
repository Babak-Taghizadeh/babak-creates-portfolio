"use client";

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import GithubIcon from "../../../../public/icons/github-mark.svg";

interface ProjectLinksProps {
  githubUrl?: string;
  liveUrl?: string;
  isHovered: boolean;
}

const ProjectLinks = ({ githubUrl, liveUrl, isHovered }: ProjectLinksProps) => {
  return (
    <div className="flex gap-4 pt-2">
      {githubUrl && (
        <motion.a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground group/link inline-flex items-center gap-2 text-sm transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{
              rotate: isHovered ? 360 : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <Image src={GithubIcon} alt="GitHub" width={16} height={16} />
          </motion.div>
          View Code
        </motion.a>
      )}
      {liveUrl && (
        <motion.a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground group/link inline-flex items-center text-sm transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{
              x: isHovered ? [0, 4, 0] : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <ExternalLink className="group-hover/link:text-primary mr-2 h-4 w-4" />
          </motion.div>
          Live Demo
        </motion.a>
      )}
    </div>
  );
};

export default ProjectLinks;
