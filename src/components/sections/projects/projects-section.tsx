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
        description="Due to confidentiality agreements, most of my work is not publicly
            accessible. Case studies available on request."
        title="Featured Projects"
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
