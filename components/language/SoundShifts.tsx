"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ANIMATION_DEFAULTS } from "@/lib/constants";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

interface SoundShift {
  ipa: string;
  hindi: string;
  awadhi: string;
  meaning: string;
  label: string;
}

const soundShifts: SoundShift[] = [
  {
    ipa: "/\u0283/ \u2192 /s/",
    hindi: "shaadi",
    awadhi: "saadi",
    meaning: "wedding",
    label: "Sibilant shift",
  },
  {
    ipa: "/\u028B/ \u2192 /b/",
    hindi: "videsh",
    awadhi: "bidesh",
    meaning: "foreign land",
    label: "Labial shift",
  },
  {
    ipa: "Cluster softening",
    hindi: "karma",
    awadhi: "karam",
    meaning: "deed / fate",
    label: "Consonant clusters softened",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DEFAULTS.duration,
      delay: i * ANIMATION_DEFAULTS.stagger,
      ease: ANIMATION_DEFAULTS.ease,
    },
  }),
};

const letterVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: ANIMATION_DEFAULTS.ease,
    },
  },
};

export default function SoundShifts() {
  return (
    <section className="py-16 md:py-24">
      <RevealOnScroll>
        <h3 className="font-playfair text-3xl font-bold text-charcoal md:text-4xl">
          How Awadhi sounds different
        </h3>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate">
          Awadhi reshapes Hindi&rsquo;s consonants into something softer, rounder, and unmistakable.
        </p>
      </RevealOnScroll>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {soundShifts.map((shift, i) => (
          <motion.div
            key={shift.hindi}
            className="rounded-xl border border-parchment bg-cream-dark p-6"
            variants={cardVariants}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={ANIMATION_DEFAULTS.viewport}
          >
            {/* IPA label */}
            <span className="inline-block rounded-full bg-parchment px-3 py-1 font-mono text-xs text-slate">
              {shift.ipa}
            </span>

            {/* Label */}
            <p className="mt-3 text-sm font-medium uppercase tracking-wide text-slate-light">
              {shift.label}
            </p>

            {/* Morphing display */}
            <div className="mt-6 flex items-center justify-center gap-4">
              {/* Hindi side */}
              <motion.div
                className="flex flex-col items-center"
                variants={letterVariants}
                initial="hidden"
                whileInView="visible"
                viewport={ANIMATION_DEFAULTS.viewport}
              >
                <span className="text-2xl font-bold text-slate md:text-3xl">
                  {shift.hindi}
                </span>
                <span className="mt-1 text-xs uppercase tracking-wide text-slate-light">
                  Hindi
                </span>
              </motion.div>

              {/* Arrow */}
              <motion.div
                className="flex items-center text-saffron"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={ANIMATION_DEFAULTS.viewport}
                transition={{
                  duration: 0.4,
                  delay: i * ANIMATION_DEFAULTS.stagger + 0.3,
                  ease: ANIMATION_DEFAULTS.ease,
                }}
              >
                <svg
                  width="32"
                  height="16"
                  viewBox="0 0 32 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="0" y1="8" x2="28" y2="8" />
                  <polyline points="22 2 28 8 22 14" />
                </svg>
              </motion.div>

              {/* Awadhi side */}
              <motion.div
                className="flex flex-col items-center"
                variants={letterVariants}
                initial="hidden"
                whileInView="visible"
                viewport={ANIMATION_DEFAULTS.viewport}
              >
                <span className="text-2xl font-bold text-saffron md:text-3xl">
                  {shift.awadhi}
                </span>
                <span className="mt-1 text-xs uppercase tracking-wide text-saffron-dark">
                  Awadhi
                </span>
              </motion.div>
            </div>

            {/* Meaning */}
            <p className={cn("mt-4 text-center text-sm italic text-slate")}>
              &ldquo;{shift.meaning}&rdquo;
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
