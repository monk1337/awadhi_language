"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { vocabulary } from "@/data/vocabulary";
import WordCard from "@/components/language/WordCard";

export default function WordWall() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-16 md:py-24">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5">
        <AnimatePresence mode="popLayout">
          {vocabulary.map((word, i) => (
            <WordCard
              key={word.awadhi}
              word={word}
              isExpanded={expandedIndex === i}
              onClick={() => handleClick(i)}
            />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
