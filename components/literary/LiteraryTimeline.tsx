"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { literaryTimeline, majorWorks } from "@/data/literary-timeline";
import { cn } from "@/lib/utils";
import { ANIMATION_DEFAULTS } from "@/lib/constants";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

/** Check whether a work is flagged as major. */
const majorYears = new Set(majorWorks.map((w) => w.year));

export default function LiteraryTimeline() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    startScroll.current = scrollRef.current?.scrollLeft ?? 0;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const dx = e.clientX - startX.current;
    scrollRef.current.scrollLeft = startScroll.current - dx;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  return (
    <RevealOnScroll>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-playfair text-2xl font-bold text-charcoal md:text-3xl">
            Literary Timeline
          </h3>
          <p className="hidden text-sm text-slate sm:block">
            Drag to scroll &rarr;
          </p>
        </div>

        {/* Horizontal scrollable container */}
        <div
          ref={scrollRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="scrollbar-hide -mx-4 cursor-grab overflow-x-auto px-4 active:cursor-grabbing"
          style={{ scrollBehavior: "auto" }}
        >
          <div className="flex gap-5 pb-6 pt-2" style={{ minWidth: "max-content" }}>
            {literaryTimeline.map((work, i) => {
              const isMajor = majorYears.has(work.year);

              return (
                <motion.div
                  key={`${work.title}-${work.year}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px" }}
                  transition={{
                    duration: ANIMATION_DEFAULTS.duration,
                    delay: i * 0.06,
                    ease: ANIMATION_DEFAULTS.ease,
                  }}
                  className={cn(
                    "relative flex shrink-0 flex-col rounded-xl border p-5 transition-colors hover:shadow-md",
                    isMajor
                      ? "w-[280px] border-saffron/50 bg-saffron/5 hover:border-saffron"
                      : "w-[240px] border-parchment bg-cream-dark hover:border-saffron/40",
                  )}
                >
                  {/* Year marker */}
                  <span
                    className={cn(
                      "font-data text-sm font-bold",
                      isMajor ? "text-saffron" : "text-slate",
                    )}
                  >
                    {work.year}
                  </span>

                  {/* Period badge */}
                  {work.period && (
                    <span className="mt-1 inline-block self-start rounded-full bg-saffron/10 px-2 py-0.5 text-[10px] font-medium text-saffron-dark">
                      {work.period}
                    </span>
                  )}

                  {/* Title */}
                  <h4
                    className={cn(
                      "mt-3 font-playfair font-bold text-charcoal",
                      isMajor ? "text-lg" : "text-base",
                    )}
                  >
                    {work.title}
                  </h4>

                  {/* Author */}
                  <p className="mt-1 text-sm text-slate">{work.author}</p>

                  {/* Significance */}
                  <p className="mt-3 flex-1 text-xs leading-relaxed text-charcoal-light">
                    {work.significance}
                  </p>

                  {/* Genre */}
                  {work.genre && (
                    <p className="mt-3 text-[10px] font-medium uppercase tracking-wider text-slate-light">
                      {work.genre}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Year axis line */}
          <div className="relative mx-4 h-px bg-parchment">
            <div className="flex justify-between" style={{ minWidth: "max-content" }}>
              {literaryTimeline.map((work) => (
                <div
                  key={`marker-${work.title}-${work.year}`}
                  className="flex flex-col items-center"
                  style={{ width: majorYears.has(work.year) ? 280 : 240, flexShrink: 0, paddingRight: 20 }}
                >
                  <div
                    className={cn(
                      "h-3 w-px",
                      majorYears.has(work.year) ? "bg-saffron" : "bg-parchment",
                    )}
                  />
                  <span className="mt-1 font-data text-[10px] text-slate-light">
                    {work.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}
