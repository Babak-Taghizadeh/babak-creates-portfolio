"use client";

import { Code2 } from "lucide-react";
import Image from "next/image";
import HeroImage from "../../../../public/images/babi.jpg";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import HeroPopup from "./hero-popup";
import HeroInfo from "./hero-info";

const Hero = () => {
  const [showText, setShowText] = useState(false);

  return (
    <section className="flex flex-col-reverse items-center justify-center gap-12 px-8 pt-4 pb-16 md:flex-row md:items-start md:px-24 md:py-24">
      <HeroInfo />
      <motion.div
        className="relative flex-shrink-0"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
      >
        <div
          className="from-primary/0 via-primary/40 to-primary/90 relative flex h-64 w-64 cursor-pointer items-center justify-center rounded-full bg-gradient-to-tr shadow-lg"
          onClick={() => setShowText(true)}
        >
          <Image
            src={HeroImage}
            className="rounded-full"
            alt="Hero"
            width={210}
            height={210}
          />
          <Code2
            className="text-background bg-foreground absolute right-[26px] bottom-[26px] rounded-full p-[2px]"
            size={22}
          />
          <AnimatePresence>
            {showText && <HeroPopup setShowText={setShowText} />}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
