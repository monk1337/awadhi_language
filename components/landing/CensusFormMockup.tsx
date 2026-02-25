"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ANIMATION_DEFAULTS } from "@/lib/constants";

type FormState = "idle" | "selecting" | "classified" | "revealed";

const motherTongueOptions = [
  "Select your mother tongue",
  "Awadhi",
  "Bengali",
  "Bhojpuri",
  "Gujarati",
  "Kannada",
  "Marathi",
  "Tamil",
  "Telugu",
];

export default function CensusFormMockup() {
  const [state, setState] = useState<FormState>("idle");

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    if (value === "Awadhi") {
      setState("selecting");
      // Brief pause before classification appears
      setTimeout(() => setState("classified"), 600);
      // Then reveal the message
      setTimeout(() => setState("revealed"), 1800);
    }
  }

  function handleReset() {
    setState("idle");
  }

  return (
    <div className="mx-auto max-w-lg">
      <motion.div
        className="relative overflow-hidden rounded-lg border border-parchment bg-gradient-to-b from-cream-dark to-parchment/60 p-8 shadow-lg md:p-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={ANIMATION_DEFAULTS.viewport}
        transition={{
          duration: ANIMATION_DEFAULTS.duration,
          ease: ANIMATION_DEFAULTS.ease,
        }}
      >
        {/* Form header */}
        <div className="mb-8 border-b border-amber/30 pb-4">
          <h3 className="font-playfair text-lg font-semibold text-charcoal md:text-xl">
            Census of India &mdash; Language Section
          </h3>
          <p className="mt-1 text-xs text-slate">
            Schedule / Part A / Question 14
          </p>
        </div>

        {/* Form field */}
        <div className="space-y-3">
          <label
            htmlFor="mother-tongue"
            className="block text-sm font-medium text-charcoal"
          >
            Mother Tongue
          </label>

          <AnimatePresence mode="wait">
            {state === "idle" && (
              <motion.div
                key="select"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <select
                  id="mother-tongue"
                  className="w-full cursor-pointer rounded border border-parchment bg-cream px-4 py-3 text-charcoal shadow-sm transition-colors hover:border-saffron focus:border-saffron focus:outline-none focus:ring-2 focus:ring-saffron/20"
                  defaultValue=""
                  onChange={handleSelectChange}
                >
                  <option value="" disabled>
                    Select your mother tongue
                  </option>
                  {motherTongueOptions.slice(1).map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </motion.div>
            )}

            {state === "selecting" && (
              <motion.div
                key="selecting"
                className="flex w-full items-center rounded border border-saffron/40 bg-saffron/5 px-4 py-3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-charcoal">Awadhi</span>
                <motion.div
                  className="ml-auto h-4 w-4 rounded-full border-2 border-saffron border-t-transparent"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            )}

            {(state === "classified" || state === "revealed") && (
              <motion.div
                key="classified"
                className="w-full rounded border border-terracotta/40 bg-terracotta/5 px-4 py-3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: ANIMATION_DEFAULTS.ease }}
              >
                <span className="font-medium text-charcoal">Hindi</span>
                <span className="ml-2 text-sm text-slate">
                  (mother tongue: Awadhi)
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Classification note - appears in classified/revealed state */}
          <AnimatePresence>
            {(state === "classified" || state === "revealed") && (
              <motion.p
                className="text-xs text-slate"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                Automatically classified under Hindi per Census guidelines
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Reveal message */}
        <AnimatePresence>
          {state === "revealed" && (
            <motion.div
              className="mt-8 border-t border-saffron/20 pt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: ANIMATION_DEFAULTS.ease,
              }}
            >
              <p className="font-quote text-center text-xl leading-relaxed text-charcoal md:text-2xl">
                This is how 38 million speakers are erased.
              </p>

              <button
                onClick={handleReset}
                className="mt-6 block w-full cursor-pointer rounded border border-parchment bg-cream px-4 py-2 text-sm text-slate transition-colors hover:border-saffron hover:text-charcoal"
              >
                Try again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
