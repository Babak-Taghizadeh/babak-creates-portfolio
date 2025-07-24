"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import SectionHeader from "@/components/shared/section-header";
import { EDUCATION } from "@/lib/constants";

const EducationSection = () => {
  return (
    <section className="section-wrapper">
      <SectionHeader title="Education" />
      <div className="grid gap-8 md:grid-cols-2">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="md:min-h-52 xl:min-h-44">
              <CardContent>
                <div className="flex items-center gap-2">
                  <GraduationCap className="text-primary h-5 w-5" />
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                </div>
                <div className="mt-2 space-y-1">
                  <p className="font-medium">{edu.school}</p>
                  <div className="text-muted-foreground flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>{edu.location}</span>
                    <span>•</span>
                    <Calendar className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {edu.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
