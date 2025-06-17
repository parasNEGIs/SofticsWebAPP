"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiments, tools } from "@/app/labs/data";
import { LabsSlideshow } from "./slideshow";
import { SriSection } from "@/components/sections/sri/labs";

export function ExperimentsSection() {
  const items = [...experiments, ...tools];
  return (
    <section id="experiments" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#FF9933] drop-shadow-[0_0_4px_rgba(255,153,51,0.9)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experiments & Tools
        </motion.h2>

        {/* Main slideshow */}
        <LabsSlideshow items={items} />

        {/* Sri subsection */}
        <div className="mt-24">
          <SriSection />
        </div>
      </div>
    </section>
  );
}
