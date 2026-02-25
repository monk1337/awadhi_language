"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Proverb } from "@/types";

interface ProverbCardProps {
  proverb: Proverb;
}

export default function ProverbCard({ proverb }: ProverbCardProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <motion.div
      className={cn(
        "group cursor-pointer rounded-xl border-l-4 border-l-saffron border border-parchment bg-cream-dark p-5 transition-colors",
        isRevealed && "border-saffron/50 bg-saffron/5",
      )}
      onClick={() => setIsRevealed(!isRevealed)}
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      layout
    >
      {/* Awadhi text */}
      <p className="font-playfair text-lg font-bold leading-snug text-charcoal">
        {proverb.awadhi}
      </p>

      {/* Literal translation */}
      <p className="mt-2 text-sm italic text-slate">{proverb.literal}</p>

      {/* Context tag */}
      {proverb.context && (
        <span className="mt-3 inline-block rounded-full bg-saffron/10 px-3 py-1 text-xs font-medium capitalize text-saffron-dark">
          {proverb.context}
        </span>
      )}

      {/* Deeper meaning — revealed on hover/click */}
      <AnimatePresence>
        {isRevealed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-4 border-t border-parchment pt-4">
              <p className="text-sm leading-relaxed text-charcoal-light">
                {proverb.meaning}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tap hint */}
      {!isRevealed && (
        <p className="mt-3 text-xs text-slate-light transition-opacity group-hover:opacity-100 opacity-60">
          Tap to reveal meaning
        </p>
      )}
    </motion.div>
  );
}
