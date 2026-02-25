"use client";

import { bollywoodSongs } from "@/data/bollywood-songs";
import { cn } from "@/lib/utils";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import SectionHeading from "@/components/shared/SectionHeading";

export default function BollywoodSecret() {
  return (
    <section className="mt-12 md:mt-16">
      <SectionHeading
        title="Bollywood's Awadhi Secret"
        subtitle="India's biggest films have been speaking Awadhi for decades."
      />

      {/* Two highlight stories */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Nadiya Ke Paar */}
        <RevealOnScroll direction="left" delay={0}>
          <div className="rounded-lg border border-saffron/20 bg-gradient-to-br from-cream-dark to-parchment/50 p-6">
            <div className="mb-3 inline-block rounded-full bg-saffron/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-saffron-dark">
              The Remake
            </div>
            <h4 className="font-playfair text-xl font-bold text-charcoal">
              Nadiya Ke Paar (1982)
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              A modest Awadhi-language film set in rural Awadh became a sleeper hit.
              Twelve years later, it was remade scene-for-scene as{" "}
              <strong className="text-charcoal">Hum Aapke Hain Koun (1994)</strong>{" "}
              -- which became Hindi cinema&apos;s highest-grossing film at the time. The
              Awadhi original provided the entire blueprint. The Hindi remake got
              the credit.
            </p>
          </div>
        </RevealOnScroll>

        {/* Gabbar Singh */}
        <RevealOnScroll direction="right" delay={0.1}>
          <div className="rounded-lg border border-saffron/20 bg-gradient-to-br from-cream-dark to-parchment/50 p-6">
            <div className="mb-3 inline-block rounded-full bg-saffron/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-saffron-dark">
              The Villain
            </div>
            <h4 className="font-playfair text-xl font-bold text-charcoal">
              Gabbar Singh from Sholay (1975)
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              India&apos;s most iconic villain speaks Awadhi dialect. His speech
              patterns -- modeled on the eastern UP countryside -- come directly
              from Dilip Kumar&apos;s{" "}
              <strong className="text-charcoal">Gunga Jumna (1961)</strong>, a
              landmark film in authentic Awadhi/Bhojpuri. Every Indian quoting
              Gabbar is channeling Awadhi without knowing it.
            </p>
          </div>
        </RevealOnScroll>
      </div>

      {/* Song grid */}
      <div className="mt-12">
        <h4 className="mb-6 font-playfair text-xl font-bold text-charcoal md:text-2xl">
          Awadhi in Bollywood Songs
        </h4>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bollywoodSongs.map((song, index) => (
            <RevealOnScroll key={song.title} direction="up" delay={index * 0.05}>
              <div
                className={cn(
                  "group relative overflow-hidden rounded-lg p-4",
                  "border border-parchment bg-cream-dark/70",
                  "transition-all duration-300 hover:border-saffron/30 hover:shadow-md",
                )}
              >
                {/* Film strip accent */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-saffron/60 via-amber/40 to-saffron/60" />

                <div className="pl-3">
                  <h5 className="font-playfair text-base font-bold leading-tight text-charcoal">
                    {song.title}
                  </h5>
                  <p className="mt-1 text-sm text-saffron-dark">
                    {song.film}{" "}
                    <span className="text-slate">({song.year})</span>
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate">
                    {song.awadhiElements}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
