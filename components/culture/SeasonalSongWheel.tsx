"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { folkSongs } from "@/data/folk-songs";
import { cn } from "@/lib/utils";
import { ANIMATION_DEFAULTS } from "@/lib/constants";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

/** Color palette for each genre segment — warm tones per the design system. */
const segmentColors = [
  { fill: "#E07A2F", fillHover: "#C06820", label: "saffron" },
  { fill: "#D4A843", fillHover: "#B08A30", label: "amber" },
  { fill: "#B85C38", fillHover: "#983C20", label: "terracotta" },
  { fill: "#D07850", fillHover: "#B85C38", label: "terracotta-light" },
  { fill: "#F0A060", fillHover: "#E07A2F", label: "saffron-light" },
  { fill: "#E4C473", fillHover: "#D4A843", label: "amber-light" },
  { fill: "#C75B4A", fillHover: "#983C20", label: "red" },
];

/** Map folk songs to season labels for the wheel. */
const seasonLabels: Record<string, string> = {
  Sohar: "Birth",
  Chaiti: "Spring",
  Kajri: "Monsoon",
  Birha: "Any Season",
  Aalha: "Fairs",
  Nirgun: "Anytime",
  Gaari: "Wedding",
};

function polarToCartesian(
  cx: number,
  cy: number,
  r: number,
  angleDeg: number,
) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number,
) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;

  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y} Z`;
}

export default function SeasonalSongWheel() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const count = folkSongs.length;
  const sliceAngle = 360 / count;

  const cx = 200;
  const cy = 200;
  const outerR = 180;
  const labelR = 130;

  return (
    <RevealOnScroll>
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-16">
        {/* SVG Wheel */}
        <div className="relative w-full max-w-[400px] shrink-0">
          <motion.svg
            viewBox="0 0 400 400"
            className="w-full"
            initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={ANIMATION_DEFAULTS.viewport}
            transition={{
              duration: 0.8,
              ease: ANIMATION_DEFAULTS.ease,
            }}
          >
            {folkSongs.map((song, i) => {
              const startAngle = i * sliceAngle;
              const endAngle = startAngle + sliceAngle;
              const midAngle = startAngle + sliceAngle / 2;
              const labelPos = polarToCartesian(cx, cy, labelR, midAngle);
              const color = segmentColors[i % segmentColors.length];
              const isActive = activeIndex === i;

              return (
                <motion.g
                  key={song.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.4,
                  }}
                >
                  <motion.path
                    d={describeArc(
                      cx,
                      cy,
                      isActive ? outerR + 8 : outerR,
                      startAngle,
                      endAngle,
                    )}
                    fill={isActive ? color.fillHover : color.fill}
                    stroke="#FAF6F0"
                    strokeWidth="2"
                    className="cursor-pointer transition-colors"
                    style={{ opacity: isActive ? 1 : 0.85 }}
                    onClick={() =>
                      setActiveIndex(isActive ? null : i)
                    }
                    onMouseEnter={() => setActiveIndex(i)}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  />

                  {/* Genre label */}
                  <text
                    x={labelPos.x}
                    y={labelPos.y - 6}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="pointer-events-none select-none fill-cream text-[11px] font-semibold"
                  >
                    {song.title}
                  </text>

                  {/* Season sub-label */}
                  <text
                    x={labelPos.x}
                    y={labelPos.y + 10}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="pointer-events-none select-none fill-cream/80 text-[9px]"
                  >
                    {seasonLabels[song.title] ?? song.genre}
                  </text>
                </motion.g>
              );
            })}

            {/* Center circle */}
            <circle cx={cx} cy={cy} r={44} fill="#FAF6F0" />
            <circle
              cx={cx}
              cy={cy}
              r={44}
              fill="none"
              stroke="#E07A2F"
              strokeWidth="2"
            />
            <text
              x={cx}
              y={cy - 8}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-charcoal text-[10px] font-bold"
            >
              A Song for
            </text>
            <text
              x={cx}
              y={cy + 8}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-charcoal text-[10px] font-bold"
            >
              Every Season
            </text>
          </motion.svg>
        </div>

        {/* Detail panel */}
        <div className="min-h-[220px] w-full">
          <AnimatePresence mode="wait">
            {activeIndex !== null ? (
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: ANIMATION_DEFAULTS.ease }}
                className="rounded-xl border border-parchment bg-cream-dark p-6 md:p-8"
              >
                <div className="flex items-baseline gap-3">
                  <h3 className="font-playfair text-2xl font-bold text-charcoal md:text-3xl">
                    {folkSongs[activeIndex].title}
                  </h3>
                  <span className="text-sm text-slate">
                    {folkSongs[activeIndex].genre}
                  </span>
                </div>

                {folkSongs[activeIndex].season && (
                  <p className="mt-1 text-sm font-medium text-saffron">
                    {folkSongs[activeIndex].season}
                  </p>
                )}

                <p className="mt-4 text-base leading-relaxed text-charcoal-light">
                  {folkSongs[activeIndex].description}
                </p>

                {folkSongs[activeIndex].lyrics && (
                  <div className="mt-4 rounded-lg border-l-4 border-saffron bg-parchment/50 p-4">
                    <p className="font-quote text-lg text-charcoal">
                      &ldquo;{folkSongs[activeIndex].lyrics}&rdquo;
                    </p>
                    {folkSongs[activeIndex].translation && (
                      <p className="mt-2 text-sm italic text-slate">
                        {folkSongs[activeIndex].translation}
                      </p>
                    )}
                  </div>
                )}

                {folkSongs[activeIndex].occasion && (
                  <p className="mt-3 text-sm text-slate">
                    <span className="font-medium">Occasion:</span>{" "}
                    {folkSongs[activeIndex].occasion}
                  </p>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="prompt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex min-h-[220px] items-center justify-center rounded-xl border border-dashed border-parchment p-8"
              >
                <p className="text-center text-base text-slate">
                  Hover over or tap a segment to explore each genre of Awadhi
                  folk song.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </RevealOnScroll>
  );
}
