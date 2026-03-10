"use client";

import { motion } from "framer-motion";
import { workSongs } from "@/data/work-songs";
import { ANIMATION_DEFAULTS } from "@/lib/constants";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

/** Simple SVG icon for the music/work theme. */
function MusicIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-saffron"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

export default function WorkSongsGrid() {
  return (
    <RevealOnScroll>
      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workSongs.map((song, i) => (
            <motion.div
              key={song.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={ANIMATION_DEFAULTS.viewport}
              transition={{
                duration: ANIMATION_DEFAULTS.duration,
                delay: i * ANIMATION_DEFAULTS.stagger,
                ease: ANIMATION_DEFAULTS.ease,
              }}
              className="group rounded-xl border border-parchment bg-cream-dark p-6 transition-colors hover:border-saffron/40 hover:shadow-md"
            >
              {/* Decorative occupation icon */}
              <div className="flex size-10 items-center justify-center rounded-full bg-saffron/10">
                <MusicIcon />
              </div>

              {/* Song name */}
              <h3 className="mt-4 font-playfair text-xl font-bold text-charcoal">
                {song.title}
              </h3>

              {/* Context */}
              <p className="mt-1 text-sm font-medium text-saffron">
                {song.occupation}
              </p>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-charcoal-light">
                {song.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer text */}
        <p className="mx-auto max-w-3xl text-center font-quote text-lg leading-relaxed text-slate md:text-xl">
          &ldquo;The entire rhythm of agricultural life once had its own
          soundtrack, in Awadhi.&rdquo;
        </p>
      </div>
    </RevealOnScroll>
  );
}
