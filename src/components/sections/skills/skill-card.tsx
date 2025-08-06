"use client";

import useMediaQuery from "@/hooks/use-media-query";
import {
  createStaggeredViewportAnimation,
  createViewportAnimation,
} from "@/lib/animations";
import { motion } from "motion/react";
import { useState, useRef } from "react";

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  index: number;
}

const SkillCard = ({ title, icon, skills, index }: SkillCardProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const desktopAnimation = createStaggeredViewportAnimation({ index });
  const mobileAnimation = createViewportAnimation();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      {...(isDesktop ? desktopAnimation : mobileAnimation)}
      className="group bg-card hover:border-primary/50 relative overflow-hidden rounded-lg border p-6 hover:shadow-lg"
      onMouseMove={handleMouseMove}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(250px circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.20) 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        <div className="mb-4 flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground rounded-lg p-2 transition-colors"
          >
            {icon}
          </motion.div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, skillIndex) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.4,
                delay: index * 0.1 + skillIndex * 0.1,
                ease: "easeIn",
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="bg-primary/10 text-primary font-medium hover:bg-primary hover:text-primary-foreground rounded-full px-3 py-1 text-sm transition-colors"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
