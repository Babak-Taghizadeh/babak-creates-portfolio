import { ExperienceSection } from "@/components/about/experience-section";
import { SkillsSection } from "@/components/about/skills-section";
import { EducationSection } from "@/components/about/education-section";
import { InterestsSection } from "@/components/about/interests-section";
import AboutHeader from "@/components/about/about-header";

const AboutPage = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <AboutHeader />

      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <InterestsSection />
    </div>
  );
};

export default AboutPage;
