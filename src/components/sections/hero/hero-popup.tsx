"use client";

import { motion } from "motion/react";

interface HeroPopupProps {
  setShowText: (e: boolean) => void;
}

const HeroPopup = ({ setShowText }: HeroPopupProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
      initial={{ opacity: 0, scale: 0.6, y: 100 }}
      animate={{ opacity: 1, scale: 1.6, y: 0 }}
      exit={{ opacity: 0, scale: 1.6, y: 100 }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      onAnimationComplete={() => setShowText(false)}
    >
      <span className="from-primary text-background ring-primary/60 to-foreground rounded-xl bg-gradient-to-br px-6 py-3 text-2xl font-extrabold tracking-wide shadow-xl ring-2 drop-shadow-lg sm:text-3xl md:text-4xl">
        GOD☝🏽
      </span>
    </motion.div>
  );
};

export default HeroPopup;
