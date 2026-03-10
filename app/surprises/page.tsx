import type { Metadata } from "next";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import Divider from "@/components/shared/Divider";
import PullQuote from "@/components/shared/PullQuote";
import FlipCardGrid from "@/components/surprises/FlipCardGrid";
import BollywoodSecret from "@/components/surprises/BollywoodSecret";

export const metadata: Metadata = {
  title: "Curiosities",
  description:
    "Unexpected connections between Awadhi and Bollywood, global religion, culinary history, and pop culture.",
};

export default function SurprisesPage() {
  return (
    <PageWrapper>
      {/* Page heading */}
      <SectionHeading
        title="Curiosities"
        subtitle="Things that will surprise you"
        align="center"
      />

      {/* Bollywood image */}
      <figure className="mx-auto max-w-4xl overflow-hidden rounded-xl">
        <img
          src="/images/surprises/bollywood.webp"
          alt="Watercolor painting of Gabbar Singh from Sholay, iconic Bollywood villain who speaks Awadhi"
          className="h-auto w-full"
        />
        <figcaption className="mt-3 text-center text-sm italic text-slate">
          Nadiya Ke Paar (1982), a modest Awadhi-language film, was remade scene-for-scene as Hum Aapke Hain Koun (1994), Hindi cinema&apos;s highest-grossing film at the time.
        </figcaption>
      </figure>

      {/* Flip cards */}
      <FlipCardGrid />

      <Divider />

      {/* Bollywood section */}
      <BollywoodSecret />

      {/* Closing pull quote */}
      <div className="mx-auto max-w-3xl pt-16 md:pt-24">
        <PullQuote quote="Every Indian quoting Gabbar is channeling Awadhi without knowing it." />
      </div>
    </PageWrapper>
  );
}
