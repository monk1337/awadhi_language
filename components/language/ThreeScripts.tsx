"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ANIMATION_DEFAULTS } from "@/lib/constants";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

type ScriptId = "devanagari" | "kaithi" | "perso-arabic";

interface ScriptTab {
  id: ScriptId;
  label: string;
  description: string;
  text: string;
  transliteration: string;
  note: string;
  fontClass: string;
  available: boolean;
}

const scripts: ScriptTab[] = [
  {
    id: "devanagari",
    label: "Devanagari",
    description:
      "The script most Awadhi speakers use today. Tulsidas wrote the Ramcharitmanas in Devanagari, cementing its association with Awadhi literature.",
    text: "\u0936\u094D\u0930\u0940\u0930\u093E\u092E\u091A\u0930\u093F\u0924\u092E\u093E\u0928\u0938 \u0917\u094D\u0930\u0928\u094D\u0925 \u0938\u092E\u093E\u0928 \u0915\u0935\u093F\u0928\u094D\u0939 \u0928 \u0915\u094B\u0908",
    transliteration:
      "Shriramacharitamanasa grantha samana kavinha na koi",
    note: "Opening invocation of the Ramcharitmanas",
    fontClass: "font-devanagari",
    available: true,
  },
  {
    id: "kaithi",
    label: "Kaithi",
    description:
      "A cursive script once used for commerce, court records, and everyday writing across north India. Efficient and practical -- the people's script.",
    text: "\uD835\uDC26\uD835\uDC21\uD835\uDC2B\uD835\uDC22\uD835\uDC2B\uD835\uDC1A\uD835\uDC26\uD835\uDC1A\uD835\uDC1C\uD835\uDC21\uD835\uDC1A\uD835\uDC2B\uD835\uDC22\uD835\uDC2D\uD835\uDC1A\uD835\uDC26\uD835\uDC1A\uD835\uDC27\uD835\uDC1A\uD835\uDC2C\uD835\uDC1A",
    transliteration:
      "Shriramacharitamanasa grantha samana kavinha na koi",
    note: "Kaithi rendering -- font unavailable in most browsers; shown in stylized placeholder",
    fontClass: "font-mono italic",
    available: false,
  },
  {
    id: "perso-arabic",
    label: "Perso-Arabic",
    description:
      "Used by Awadhi Muslims, especially for Sufi poetry and qissas. Jayasi's Padmavat was originally composed in this script.",
    text: "\u0634\u0631\u06CC \u0631\u0627\u0645 \u0686\u0631\u062A \u0645\u0627\u0646\u0633",
    transliteration:
      "Shriramacharitamanasa grantha samana kavinha na koi",
    note: "Perso-Arabic rendering -- right-to-left; approximate transliteration shown",
    fontClass: "font-sans",
    available: false,
  },
];

export default function ThreeScripts() {
  const [activeScript, setActiveScript] = useState<ScriptId>("devanagari");
  const current = scripts.find((s) => s.id === activeScript)!;

  return (
    <section className="py-16 md:py-24">
      {/* Tabs */}
      <RevealOnScroll>
        <div className="flex flex-wrap gap-2">
          {scripts.map((script) => (
            <button
              key={script.id}
              onClick={() => setActiveScript(script.id)}
              className={cn(
                "rounded-lg px-5 py-2.5 text-sm font-medium transition-colors",
                activeScript === script.id
                  ? "bg-saffron text-white"
                  : "bg-parchment/60 text-charcoal hover:bg-parchment",
              )}
            >
              {script.label}
            </button>
          ))}
        </div>
      </RevealOnScroll>

      {/* Script display */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-parchment bg-cream-dark">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScript}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.4,
              ease: ANIMATION_DEFAULTS.ease,
            }}
            className="p-8 md:p-12"
          >
            {/* Script text */}
            <div
              className={cn(
                "text-center",
                current.id === "perso-arabic" && "direction-rtl",
              )}
              dir={current.id === "perso-arabic" ? "rtl" : "ltr"}
            >
              <p
                className={cn(
                  "text-3xl leading-relaxed text-charcoal md:text-4xl lg:text-5xl",
                  current.fontClass,
                )}
              >
                {current.text}
              </p>

              {!current.available && (
                <p className="mt-3 text-xs text-slate-light">
                  {current.note}
                </p>
              )}
            </div>

            {/* Transliteration */}
            <p className="mt-6 text-center font-mono text-sm tracking-wide text-slate">
              {current.transliteration}
            </p>

            {/* Note */}
            <p className="mt-2 text-center text-xs italic text-slate-light">
              {current.available ? current.note : ""}
            </p>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-xl text-center text-base leading-relaxed text-slate">
              {current.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Kaithi history callout */}
      <RevealOnScroll className="mt-10" delay={0.2}>
        <div className="rounded-xl bg-terracotta/10 p-6 md:p-8">
          <p className="font-playfair text-lg font-bold text-terracotta md:text-xl">
            The death of a script
          </p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-charcoal-light">
            In 1854, Kaithi had <span className="font-bold text-terracotta">3&times; more textbooks</span> than
            Devanagari. It was the script of courts, of commerce, of the people.
            The colonial administration and post-independence Hindi standardization
            campaigns systematically replaced it.
            Today, Kaithi is extinct. No one alive writes it fluently.
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
}
