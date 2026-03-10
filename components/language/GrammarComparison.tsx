"use client";

import { motion } from "framer-motion";
import { ANIMATION_DEFAULTS } from "@/lib/constants";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

interface GrammarDiff {
  title: string;
  description: string;
  hindi: { label: string; example: string };
  awadhi: { label: string; example: string };
}

const grammarDiffs: GrammarDiff[] = [
  {
    title: "No ergative construction",
    description:
      "Hindi marks the agent of past-tense transitive verbs with \"-ne\". Awadhi simply doesn't.",
    hindi: {
      label: "Uses \"-ne\" marker",
      example: "us-ne kaam kiyaa",
    },
    awadhi: {
      label: "No agent marker",
      example: "u kaam karis",
    },
  },
  {
    title: "Different verb system",
    description:
      "Verb conjugations diverge entirely. Awadhi uses \"ham\" (we) as the first-person singular, a mark of communal identity.",
    hindi: {
      label: "First person singular",
      example: "main kar\u016B\u1E45",
    },
    awadhi: {
      label: "First person singular",
      example: "ham karo\u1E45",
    },
  },
  {
    title: "Different pronouns",
    description:
      "Third-person and possessive pronouns are unrecognizable across the two languages.",
    hindi: {
      label: "Pronouns",
      example: "vah / ve \u00B7 mera / tera",
    },
    awadhi: {
      label: "Pronouns",
      example: "so / te \u00B7 mor / tor",
    },
  },
  {
    title: "Different particles",
    description:
      "The postpositions that glue sentences together are distinct in each language.",
    hindi: {
      label: "Postpositions",
      example: "ko \u00B7 mein \u00B7 se",
    },
    awadhi: {
      label: "Postpositions",
      example: "ka \u00B7 ma \u00B7 se",
    },
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DEFAULTS.duration,
      delay: i * 0.15,
      ease: ANIMATION_DEFAULTS.ease,
    },
  }),
};

export default function GrammarComparison() {
  return (
    <section className="py-16 md:py-24">
      <RevealOnScroll>
        <h3 className="font-playfair text-3xl font-bold text-charcoal md:text-4xl">
          This is not Hindi
        </h3>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate">
          These are not accent variations. They are fundamental structural differences.
        </p>
      </RevealOnScroll>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {grammarDiffs.map((diff, i) => (
          <motion.div
            key={diff.title}
            className="overflow-hidden rounded-xl border border-parchment"
            variants={cardVariants}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={ANIMATION_DEFAULTS.viewport}
          >
            {/* Header */}
            <div className="bg-cream-dark px-6 py-4">
              <h4 className="font-playfair text-lg font-bold text-charcoal">
                {diff.title}
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-slate">
                {diff.description}
              </p>
            </div>

            {/* Comparison row */}
            <div className="grid grid-cols-2">
              {/* Hindi side */}
              <div className="border-r border-parchment bg-cream/50 px-5 py-4">
                <span className="text-xs font-medium uppercase tracking-wide text-slate-light">
                  {diff.hindi.label}
                </span>
                <p className="mt-2 text-base font-semibold text-slate md:text-lg">
                  {diff.hindi.example}
                </p>
                <span className="mt-1 inline-block text-[10px] font-medium uppercase tracking-widest text-slate-light">
                  Hindi
                </span>
              </div>

              {/* Awadhi side */}
              <div className="bg-saffron/5 px-5 py-4">
                <span className="text-xs font-medium uppercase tracking-wide text-saffron-dark">
                  {diff.awadhi.label}
                </span>
                <p className="mt-2 text-base font-semibold text-charcoal md:text-lg">
                  {diff.awadhi.example}
                </p>
                <span className="mt-1 inline-block text-[10px] font-medium uppercase tracking-widest text-saffron">
                  Awadhi
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
