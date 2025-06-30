"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import SectionHeader from "@/components/shared/section-header";
import { EXPERIENCES } from "@/lib/constants";

const ExperienceSection = () => {
  return (
    <section className="section-wrapper max-w-7xl">
      <SectionHeader title="Professional Journey" />
      <div className="relative space-y-8">
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Briefcase className="text-primary h-5 w-5" />
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                    </div>
                    <div className="text-muted-foreground flex items-center gap-2">
                      <span>{exp.company}</span>
                      <span>•</span>
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="text-muted-foreground flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4">{exp.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            {index < EXPERIENCES.length - 1 && (
              <div className="bg-primary/20 absolute top-full left-6 h-8 w-0.5" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
