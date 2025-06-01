"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2 } from "lucide-react";
import { SKILLS_DATA } from "./data";

const SkillsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      <h2 className="from-foreground via-primary to-foreground/70 mb-12 bg-gradient-to-r bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl">
        Technical Expertise
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(SKILLS_DATA).map(
          ([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <Code2 className="text-primary h-5 w-5" />
                    <h3 className="text-xl font-semibold">{category}</h3>
                  </div>
                  <div className="space-y-4">
                    {skills.map((skill, skillIndex) => (
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
                            className="bg-primary h-full rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ),
        )}
      </div>
    </motion.section>
  );
};

export default SkillsSection;