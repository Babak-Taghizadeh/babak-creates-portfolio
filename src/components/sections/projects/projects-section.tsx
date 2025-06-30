"use client";

import { useState } from "react";
import { PROJECTS } from "@/lib/constants";
import ProjectCard from "./project-card";
import SectionHeader from "@/components/shared/section-header";

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="from-background via-primary/10 to-background/40 section-wrapper max-w-7xl bg-gradient-to-b">
      <SectionHeader
        title="Featured Projects"
        description="Due to NDAs, detailed case studies are available upon request. Here are a few highlights I can share."
      />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            isHovered={hoveredIndex === index}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
