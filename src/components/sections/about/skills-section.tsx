"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Settings } from "lucide-react";
import SectionHeader from "@/components/shared/section-header";
import { SKILLS_DATA } from "@/lib/constants";

const SkillsSection = () => {
  return (
    <section className="section-wrapper">
      <SectionHeader title="Technical Expertise" />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS_DATA.map((categoryData, categoryIndex) => {
          const [[category, skills]] = Object.entries(categoryData);
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-2">
                    {category === "Tools & Others" ? (
                      <Settings className="text-primary h-5 w-5" />
                    ) : (
                      <Code2 className="text-primary h-5 w-5" />
                    )}
                    <h3 className="text-xl font-semibold">{category}</h3>
                  </div>
                  <div className="space-y-4">
                    {skills.map(
                      (
                        skill: { name: string; level: number },
                        skillIndex: number,
                      ) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">
                              {skill.name}
                            </span>
                            <span className="text-muted-foreground text-xs">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="bg-primary/10 h-2 w-full overflow-hidden rounded-full">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{
                                duration: 1,
                                delay: categoryIndex * 0.2 + skillIndex * 0.1,
                                ease: "easeOut",
                              }}
                              viewport={{ once: true }}
                              className="bg-primary h-full rounded-full"
                            />
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
