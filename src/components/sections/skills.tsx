"use client";

import { motion } from "framer-motion";
import SkillCard from "./skill-card";
import { SKILL_CATEGORIES } from "@/lib/constants";

const Skills = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          Technical Skills
        </h2>
        <p className="text-secondary-foreground mx-auto max-w-2xl text-base leading-relaxed md:text-lg">
          A comprehensive overview of my technical expertise and the tools I use
          to build modern web applications.
        </p>
      </motion.div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_CATEGORIES.map((category, index) => (
          <SkillCard key={category.title} {...category} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
