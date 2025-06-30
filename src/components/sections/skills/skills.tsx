import SkillCard from "./skill-card";
import { SKILL_CATEGORIES } from "@/lib/constants";
import SectionHeader from "@/components/shared/section-header";

const Skills = () => {
  return (
    <section className="section-wrapper">
      <SectionHeader
        title="Technical Skills"
        description="Due to NDAs, detailed case studies are available upon request. Here are a few highlights I can share."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_CATEGORIES.map((category, index) => (
          <SkillCard key={category.title} {...category} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
