import EducationSection from "@/components/sections/about/education-section";
import ExperienceSection from "@/components/sections/about/experience-section";
import InterestsSection from "@/components/sections/about/interests-section";
import SkillsSection from "@/components/sections/about/skills-section";
import SectionHeader from "@/components/sections/about/section-header";

const AboutPage = () => {
  return (
    <>
      <SectionHeader
        title="Hello, World!"
        description="A passionate full-stack developer with a keen eye for creating elegant solutions in the least amount of time. I specialize in building responsive web applications using modern technologies."
      />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <InterestsSection />
    </>
  );
};

export default AboutPage;
