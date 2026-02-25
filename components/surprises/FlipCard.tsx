"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FlipCardProps {
  front: string;
  back: string;
  category?: string;
}

export default function FlipCard({ front, back, category }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-[200px] cursor-pointer [perspective:1000px]"
      onClick={() => setIsFlipped((prev) => !prev)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsFlipped((prev) => !prev);
        }
      }}
      aria-label={isFlipped ? back : front}
    >
      <motion.div
        className="relative h-full w-full [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Front face */}
        <div
          className={cn(
            "absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-lg p-5",
            "bg-cream-dark border border-parchment",
            "[backface-visibility:hidden]",
          )}
        >
          {/* Question mark */}
          <span className="font-playfair text-3xl text-saffron" aria-hidden="true">
            ?
          </span>

          {/* Teaser text */}
          <p className="text-center text-sm font-medium leading-snug text-charcoal md:text-base">
            {front}
          </p>

          {category && (
            <span className="mt-auto text-[10px] uppercase tracking-wider text-slate-light">
              {category}
            </span>
          )}

          <span className="text-[10px] text-slate-light">tap to reveal</span>
        </div>

        {/* Back face */}
        <div
          className={cn(
            "absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-lg p-5",
            "bg-cream border-2 border-saffron/40",
            "[backface-visibility:hidden] [transform:rotateY(180deg)]",
          )}
        >
          <p className="text-center text-sm leading-relaxed text-charcoal md:text-base">
            {back}
          </p>

          <span className="mt-auto text-[10px] text-slate-light">tap to flip back</span>
        </div>
      </motion.div>
    </div>
  );
}
