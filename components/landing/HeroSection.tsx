"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/landing/AnimatedCounter";
import { ANIMATION_DEFAULTS } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/heroes/hero-background.webp"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-cream/80" />
      </div>
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Primary stat: 38,000,000 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: ANIMATION_DEFAULTS.ease }}
        >
          <AnimatedCounter
            target={38000000}
            duration={2500}
            className="text-7xl font-bold leading-none tracking-tight text-saffron md:text-8xl lg:text-9xl"
          />
        </motion.div>

        {/* Subtitle line */}
        <motion.p
          className="mt-6 max-w-2xl text-xl leading-relaxed text-charcoal md:text-2xl lg:text-3xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: ANIMATION_DEFAULTS.ease,
          }}
        >
          people speak Awadhi, one of the oldest literary languages of North India.
        </motion.p>

        {/* Tagline in Cormorant Garamond italic */}
        <motion.p
          className="font-quote mt-8 max-w-xl text-xl leading-relaxed text-charcoal-light md:text-2xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: ANIMATION_DEFAULTS.ease,
          }}
        >
          The language of Tulsidas, the Ramcharitmanas, and the Hanuman Chalisa.
        </motion.p>
      </div>

      {/* Scroll-down indicator */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest text-slate">
          Scroll
        </span>
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-saffron"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
