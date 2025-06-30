import SkillCard from "./skill-card";
import { SKILL_CATEGORIES } from "@/lib/constants";
import SectionHeader from "@/components/shared/section-header";

const Skills = () => {
  return (
    <section className="section-wrapper">
      <SectionHeader
        title="Technical Skills"
        description="A snapshot of the technologies and skills I use daily to build smooth, modern web experiences."
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
