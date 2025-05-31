"use client";

import { motion } from "motion/react";
import React from "react";

const AboutHeader = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-10 pb-10 text-center"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="from-foreground via-primary to-foreground/70 bg-gradient-to-r bg-clip-text pb-6 text-5xl font-bold text-transparent md:text-6xl"
      >
        About Me
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-muted-foreground mx-auto max-w-2xl text-lg md:text-xl"
      >
        A passionate full-stack developer with a keen eye for creating elegant
        solutions in the least amount of time. I specialize in building
        responsive web applications using modern technologies.
      </motion.p>
    </motion.section>
  );
};

export default AboutHeader;
