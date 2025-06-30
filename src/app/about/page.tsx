import EducationSection from "@/components/sections/about/education-section";
import ExperienceSection from "@/components/sections/about/experience-section";
import InterestsSection from "@/components/sections/about/interests-section";
import LanguagesSection from "@/components/sections/about/languages-section";
import SkillsSection from "@/components/sections/about/skills-section";
import SectionHeader from "@/components/shared/section-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Full-stack developer specializing in building responsive web applications using modern technologies. Learn about my experience, skills, education, and interests.",
  openGraph: {
    title: "About Me",
    description:
      "Full-stack developer specializing in building responsive web applications using modern technologies. Learn about my experience, skills, education, and interests.",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Me",
    description:
      "Full-stack developer specializing in building responsive web applications using modern technologies. Learn about my experience, skills, education, and interests.",
  },
};

const AboutPage = () => {
  return (
    <>
      <SectionHeader
        title="Get to Know Me"
        description="A developer who loves clean code, great design, and building things that feel just right. Whether it's crafting UIs or solving problems, I bring curiosity, care, and creativity to every line of code."
      />
      <ExperienceSection />
      <SkillsSection />
      <LanguagesSection />
      <EducationSection />
      <InterestsSection />
    </>
  );
};

export default AboutPage;
