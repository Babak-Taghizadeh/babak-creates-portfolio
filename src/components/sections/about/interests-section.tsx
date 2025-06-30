"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/shared/section-header";
import { INTERESTS } from "@/lib/constants";

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
            viewport={{ once: true }}
          >
            <Card className="h-full transition-transform hover:scale-105">
              <CardContent className="flex h-full items-center justify-center p-4">
                <div className="flex items-center gap-2 text-center">
                  {interest.icon}
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
