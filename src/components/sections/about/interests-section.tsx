"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { INTERESTS } from "./data";
import SectionHeader from "@/components/shared/section-header";

const InterestsSection = () => {
  return (
    <section className="section-wrapper">
      <SectionHeader title="Personal Interests" />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {INTERESTS.map((interest, index) => (
          <motion.div
            key={interest.title}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
          >
            <Card className="group hover:bg-primary/5 h-full cursor-pointer transition-all duration-300">
              <CardContent className="flex h-full items-center justify-center p-4">
                <div className="flex items-center gap-2 text-center">
                  {(() => {
                    const IconComponent = interest.icon;
                    return (
                      <IconComponent className="text-primary h-4 w-4 transition-transform group-hover:scale-110" />
                    );
                  })()}
                  <span className="text-sm font-medium">{interest.title}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InterestsSection;
