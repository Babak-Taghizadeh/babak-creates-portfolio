"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { LANGUAGES } from "@/lib/constants";

const LanguagesCarousel = () => {
  return (
    <section className="section-wrapper">
      <SectionHeader title="Languages" />
      <div className="flex flex-wrap justify-center gap-8">
        {LANGUAGES.map((lang, index) => (
          <motion.div
            key={lang.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: index * 0.2, duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-card text-foreground flex w-full max-w-[220px] flex-col items-center space-y-4 rounded-xl px-12 py-8 text-center select-none"
          >
            <span className="text-2xl">{lang.flag}</span>
            <h3 className="text-2xl font-semibold text-nowrap">{lang.name}</h3>
            <Badge variant="default" className="tracking-wider">
              {lang.level}
            </Badge>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LanguagesCarousel;
