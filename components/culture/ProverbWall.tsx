"use client";

import { motion } from "framer-motion";
import { proverbs } from "@/data/proverbs";
import { ANIMATION_DEFAULTS } from "@/lib/constants";
import ProverbCard from "@/components/culture/ProverbCard";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

export default function ProverbWall() {
  return (
    <RevealOnScroll>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {proverbs.map((proverb, i) => (
          <motion.div
            key={proverb.awadhi}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={ANIMATION_DEFAULTS.viewport}
            transition={{
              duration: ANIMATION_DEFAULTS.duration,
              delay: i * 0.05,
              ease: ANIMATION_DEFAULTS.ease,
            }}
          >
            <ProverbCard proverb={proverb} />
          </motion.div>
        ))}
      </div>
    </RevealOnScroll>
  );
}
