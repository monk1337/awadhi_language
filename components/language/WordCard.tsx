"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { WordEntry } from "@/types";

interface WordCardProps {
  word: WordEntry;
  isExpanded: boolean;
  onClick: () => void;
}

export default function WordCard({ word, isExpanded, onClick }: WordCardProps) {
  return (
    <motion.button
      layout
      onClick={onClick}
      className={cn(
        "w-full cursor-pointer rounded-xl border text-left transition-colors",
        isExpanded
          ? "border-saffron bg-saffron/5"
          : "border-parchment bg-cream-dark hover:border-saffron/50",
      )}
      whileHover={{ scale: isExpanded ? 1 : 1.02 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div layout="position" className="p-4 md:p-5">
        {/* Devanagari */}
        <motion.p
          layout="position"
          className={cn(
            "font-devanagari leading-none text-charcoal",
            isExpanded ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl",
          )}
        >
          {word.devanagari}
        </motion.p>

        {/* Transliteration */}
        <motion.p
          layout="position"
          className="mt-2 text-sm tracking-wide text-slate"
        >
          {word.awadhi}
        </motion.p>

        {/* Expanded content */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 border-t border-parchment pt-4"
          >
            {/* Meaning */}
            <p className="text-sm leading-relaxed text-charcoal-light">
              {word.meaning}
            </p>

            {/* Part of speech */}
            {word.partOfSpeech && (
              <span className="mt-3 inline-block rounded-full bg-saffron/10 px-3 py-1 text-xs font-medium text-saffron-dark">
                {word.partOfSpeech}
              </span>
            )}

            {/* Usage / significance */}
            {word.usage && (
              <p className="mt-3 text-xs italic leading-relaxed text-slate">
                {word.usage}
              </p>
            )}

            {/* Etymology */}
            {word.etymology && (
              <p className="mt-2 text-xs leading-relaxed text-slate-light">
                Etymology: {word.etymology}
              </p>
            )}
          </motion.div>
        )}
      </motion.div>
    </motion.button>
  );
}
