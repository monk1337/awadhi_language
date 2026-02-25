"use client";

import { motion } from "framer-motion";
import { ANIMATION_DEFAULTS } from "@/lib/constants";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

export default function AhaiFingerprint() {
  return (
    <section className="rounded-2xl bg-parchment/50 px-6 py-20 md:py-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Big Devanagari moment */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={ANIMATION_DEFAULTS.viewport}
          transition={{
            duration: 0.8,
            ease: ANIMATION_DEFAULTS.ease,
          }}
        >
          <span className="font-devanagari text-8xl font-bold leading-none text-saffron md:text-9xl">
            {"\u0905\u0939\u0948"}
          </span>
          <span className="mt-4 font-mono text-2xl tracking-widest text-charcoal md:text-3xl">
            ahai
          </span>
        </motion.div>

        {/* Subtitle */}
        <RevealOnScroll className="mt-10" delay={0.2}>
          <p className="font-quote text-xl leading-relaxed text-charcoal-light md:text-2xl">
            This single sound is Awadhi&rsquo;s acoustic fingerprint.
          </p>
        </RevealOnScroll>

        {/* Comparison */}
        <RevealOnScroll className="mt-12 w-full" delay={0.4}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Hindi version */}
            <div className="rounded-xl bg-cream p-6">
              <span className="text-xs font-medium uppercase tracking-wide text-slate-light">
                Hindi
              </span>
              <p className="mt-3 text-xl font-medium text-slate md:text-2xl">
                yah sundar <span className="font-bold underline decoration-slate-light decoration-2 underline-offset-4">hai</span>
              </p>
              <p className="mt-2 text-sm italic text-slate-light">
                &ldquo;This is beautiful&rdquo;
              </p>
            </div>

            {/* Awadhi version */}
            <div className="rounded-xl bg-saffron/10 p-6">
              <span className="text-xs font-medium uppercase tracking-wide text-saffron-dark">
                Awadhi
              </span>
              <p className="mt-3 text-xl font-medium text-charcoal md:text-2xl">
                ee sundar <span className="font-bold text-saffron underline decoration-saffron decoration-2 underline-offset-4">ahai</span>
              </p>
              <p className="mt-2 text-sm italic text-saffron-dark">
                &ldquo;This is beautiful&rdquo;
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Explanatory note */}
        <RevealOnScroll className="mt-8" delay={0.6}>
          <p className="max-w-lg text-base leading-relaxed text-slate">
            Nothing marks Awadhi faster than this auxiliary verb.
            Where Hindi says <em>hai</em>, Awadhi says <em>ahai</em>.
            It is the first thing you hear and the last thing you forget.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
