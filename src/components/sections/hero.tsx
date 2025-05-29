import { ArrowDown, Code2 } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import GithubIcon from "../../../public/icons/github-mark.svg";
import LinkedinIcon from "../../../public/icons/linkedin-mark.svg";
import Link from "next/link";
import HeroImage from "../../../public/images/babi.jpg";

const Hero = () => {
  return (
    <main className="flex flex-col-reverse items-center justify-center gap-12 px-8 py-16 md:flex-row md:px-24 md:py-28">
      <div className="flex max-w-lg flex-col gap-7">
        <span className="text-primary text-xs font-semibold tracking-wider uppercase">
          Frontend Developer
        </span>
        <h1 className="mb-2 text-4xl leading-tight font-bold tracking-tight md:text-5xl">
          Hi I&apos;m Babak
          <span className="text-primary block">
            I craft clean & delightful UIs.
          </span>
        </h1>
        <p className="text-secondary-foreground text-base leading-relaxed md:text-lg">
          Passionate about building interactive and accessible web experiences
          with modern technologies. I focus on writing clean code and designing
          pixel-perfect interfaces that users love.
        </p>
        <Button className="w-fit">
          <ArrowDown className="animate-bounce" />
          Download CV
        </Button>
        <div className="mt-8 flex gap-4">
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
        </div>
      </div>
      <div className="flex-shrink-0">
        <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-tr from-blue-100 to-blue-300 shadow-lg">
          <Image
            src={HeroImage}
            className="rounded-full"
            alt="Hero"
            width={210}
            height={210}
          />
          <Code2
            className="text-primary-foreground absolute right-[26px] bottom-[26px] rounded-full bg-black p-[2px]"
            size={22}
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
