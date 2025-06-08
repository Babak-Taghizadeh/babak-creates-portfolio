"use client";

import { ArrowDown, Code2 } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import GithubIcon from "../../../public/icons/github-mark.svg";
import LinkedinIcon from "../../../public/icons/linkedin-mark.svg";
import Link from "next/link";
import HeroImage from "../../../public/images/babi.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [showText, setShowText] = useState(false);

  return (
    <main className="flex flex-col-reverse items-center justify-center gap-12 px-8 pt-0 pb-16 md:flex-row md:px-24 md:py-28">
      <motion.div
        className="flex max-w-lg flex-col gap-7"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.span
          className="text-primary text-xs font-semibold tracking-wider uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Full Stack Developer
        </motion.span>
        <motion.h1
          className="mb-2 text-4xl leading-tight font-bold tracking-tight md:text-5xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Hi I&apos;m Babak
          <motion.span
            className="text-primary block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            I craft clean & delightful UIs.
          </motion.span>
        </motion.h1>
        <motion.p
          className="text-secondary-foreground text-base leading-relaxed md:text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Passionate about building interactive and accessible web experiences
          with modern technologies. I focus on writing clean code and designing
          pixel-perfect interfaces that users love.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button className="w-fit">
            <ArrowDown className="animate-bounce" />
            Download CV
          </Button>
        </motion.div>
        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="https://github.com/babaktaghizadeh"
            target="_blank"
            className="transition duration-150 hover:scale-110"
            rel="noopener noreferrer"
          >
            <Image src={GithubIcon} alt="GitHub" width={20} height={20} />
          </Link>
          <Link
            href="https://github.com/babaktaghizadeh"
            target="_blank"
            className="transition duration-150 hover:scale-110"
            rel="noopener noreferrer"
          >
            <Image src={LinkedinIcon} alt="LinkedIn" width={20} height={20} />
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        className="relative flex-shrink-0"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
      >
        <div
          className="relative flex h-64 w-64 cursor-pointer items-center justify-center rounded-full bg-gradient-to-tr from-blue-100 to-blue-300 shadow-lg"
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
            className="text-primary-foreground bg-foreground absolute right-[26px] bottom-[26px] rounded-full p-[2px]"
            size={22}
          />
          <AnimatePresence>
            {showText && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.5, y: 100 }}
                animate={{ opacity: 1, scale: 2.5, y: 0 }}
                exit={{ opacity: 0, scale: 2.5, y: 100 }}
                transition={{
                  duration: 2,
                }}
                onAnimationComplete={() => setShowText(false)}
              >
                <span className="bg-primary rounded-2xl p-2 text-xl font-bold drop-shadow-lg">
                  Life Is Good!
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </main>
  );
};

export default Hero;
