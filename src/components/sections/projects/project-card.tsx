"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CategoryBadge from "./category-badge";
import TechnologyBadge from "./technology-badge";
import ProjectFeature from "./project-feature";
import ProjectLinks from "./project-links";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const ProjectCard = ({
  project,
  isHovered,
  onHoverStart,
  onHoverEnd,
}: ProjectCardProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      <Card className="group hover:shadow-primary/5 hover:border-primary/50 from-card to-card/50 relative h-full overflow-hidden bg-gradient-to-b backdrop-blur-sm transition-all duration-500 hover:shadow-2xl">
        <div className="from-primary/0 via-primary/10 to-primary/0 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <CategoryBadge category={project.category} />

        <CardHeader className="relative pb-4">
          <motion.div
            initial={false}
            animate={{
              scale: isHovered ? 1.02 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <CardTitle className="group-hover:text-primary text-lg font-bold transition-colors duration-300 md:text-2xl">
              {project.title}
            </CardTitle>
            <CardDescription className="mt-2 text-base">
              {project.description}
            </CardDescription>
          </motion.div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <TechnologyBadge key={techIndex} tech={tech} index={techIndex} />
            ))}
          </div>

          <ul className="space-y-3">
            {project.features.map((feature, featureIndex) => (
              <ProjectFeature
                key={featureIndex}
                feature={feature}
                index={featureIndex}
                isHovered={isHovered}
              />
            ))}
          </ul>

          <ProjectLinks
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            isHovered={isHovered}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
