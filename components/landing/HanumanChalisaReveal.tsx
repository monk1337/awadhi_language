"use client";

import { motion } from "framer-motion";
import { ANIMATION_DEFAULTS } from "@/lib/constants";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: ANIMATION_DEFAULTS.ease,
    },
  },
};

export default function HanumanChalisaReveal() {
  return (
    <section className="bg-cream-dark px-6 py-24 md:py-32">
      <motion.div
        className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Line 1: The hook */}
        <motion.p
          className="font-playfair text-3xl font-bold leading-tight text-charcoal md:text-4xl lg:text-5xl"
          variants={item}
        >
          Hundreds of millions recite this language daily.
        </motion.p>

        {/* Line 2: The turn */}
        <motion.p
          className="font-playfair text-3xl font-bold leading-tight text-saffron md:text-4xl lg:text-5xl"
          variants={item}
        >
          Most have no idea.
        </motion.p>

        {/* Line 3: The reveal */}
        <motion.p
          className="font-quote max-w-2xl text-xl leading-relaxed text-charcoal-light md:text-2xl"
          variants={item}
        >
          The Hanuman Chalisa &mdash; the most widely recited Hindu prayer on
          Earth &mdash; is composed in Awadhi.
        </motion.p>
      </motion.div>
    </section>
  );
}
