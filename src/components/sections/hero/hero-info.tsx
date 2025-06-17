"use client";

import GithubIcon from "../../../../public/icons/github-mark.svg";
import LinkedinIcon from "../../../../public/icons/linkedin-mark.svg";
import Link from "next/link";
import { Button } from "../../ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const HeroInfo = () => {
  return (
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
        <Button asChild className="w-fit">
          <Link
            href="/Babak-Taghizadeh-CV.pdf"
            download="Babak_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ArrowDown className="animate-bounce" />
            Download CV
          </Link>
        </Button>
      </motion.div>
      <motion.div
        className="mt-8 flex gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link
          href="https://github.com/Babak-Taghizadeh"
          target="_blank"
          className="transition duration-150 hover:scale-110"
          rel="noopener noreferrer"
        >
          <Image src={GithubIcon} alt="GitHub" width={20} height={20} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/babak-taghizadeh/"
          target="_blank"
          className="transition duration-150 hover:scale-110"
          rel="noopener noreferrer"
        >
          <Image src={LinkedinIcon} alt="LinkedIn" width={20} height={20} />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default HeroInfo;
