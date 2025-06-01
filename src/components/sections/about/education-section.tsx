"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { EDUCATION } from "./data";

const EducationSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      <h2 className="from-foreground via-primary to-foreground/70 mb-12 bg-gradient-to-r bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl">
        Education
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
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
    </motion.section>
  );
};

export default EducationSection;