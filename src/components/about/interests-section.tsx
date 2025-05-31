"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { INTERESTS } from "./data";

export const InterestsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="from-foreground via-primary to-foreground/70 mb-12 bg-gradient-to-r bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl">
        Personal Interests
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {INTERESTS.map((interest, index) => (
          <motion.div
            key={interest}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="group hover:bg-primary/5 h-full cursor-pointer transition-all duration-300">
              <CardContent className="flex h-full items-center justify-center p-4">
                <div className="flex items-center gap-2 text-center">
                  <Heart className="text-primary h-4 w-4 transition-transform group-hover:scale-110" />
                  <span className="text-sm font-medium">{interest}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
