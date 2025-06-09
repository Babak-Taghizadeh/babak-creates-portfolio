"use client";

import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProjectFeature from "./project-feature";
import ProjectLinks from "./project-links";
import { IProject } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  PROJECT_CATEGORY_COLORS,
  PROJECT_CATEGORY_ICONS,
} from "@/lib/constants";

interface ProjectCardProps {
  project: IProject;
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
        <Badge
          variant="outline"
          className={cn(
            "absolute top-[22px] right-4 backdrop-blur-sm",
            PROJECT_CATEGORY_COLORS[project.category],
          )}
        >
          {PROJECT_CATEGORY_ICONS[project.category]}
          {project.category}
        </Badge>

        <CardHeader className="relative pb-4">
          <motion.div
            initial={false}
            animate={{
              scale: isHovered ? 1.02 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <CardTitle className="group-hover:text-primary max-w-3/4 text-lg font-bold break-words transition-colors duration-300 md:text-2xl">
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
              <motion.div
                key={techIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: techIndex * 0.1 }}
              >
                <Badge
                  variant="secondary"
                  className="bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </Badge>
              </motion.div>
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
