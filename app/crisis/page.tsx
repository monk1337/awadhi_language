import type { Metadata } from "next";
import { fiveForces } from "@/data/five-forces";
import SectionHeading from "@/components/shared/SectionHeading";
import StatHighlight from "@/components/shared/StatHighlight";
import PullQuote from "@/components/shared/PullQuote";
import ForceCard from "@/components/crisis/ForceCard";
import SpeakerQuote from "@/components/crisis/SpeakerQuote";
import DarkPageWrapper from "@/components/crisis/DarkPageWrapper";

export const metadata: Metadata = {
  title: "The Disappearing Act",
  description:
    "Five forces of erasure are systematically dismantling Awadhi. Education policy, media dominance, urbanization, political apathy, and social stigma.",
};

export default function CrisisPage() {
  return (
    <DarkPageWrapper>
      {/* Dark hero heading */}
      <SectionHeading
        title="The Disappearing Act"
        subtitle="Five forces of erasure"
        align="center"
        className="[&_h2]:text-parchment [&_p]:text-parchment/70"
      />

      {/* Five force cards */}
      <div className="mt-16 space-y-8 md:mt-24 md:space-y-12">
        {fiveForces.map((force, i) => (
          <ForceCard key={force.id} force={force} index={i} />
        ))}
      </div>

      {/* Speaker quotes */}
      <SpeakerQuote
        quote="I spoke Awadhi until I entered the school gates, at which point I'd switch to Khari Boli."
        speaker="Anonymous"
        context="Awadhi speaker recalling childhood"
      />

      <SpeakerQuote
        quote="Growing up, I was shy -- almost embarrassed -- about speaking Awadhi. It didn't feel 'cool.' It felt rural. Crude. Backward."
        speaker="Priyanka Shukla"
        context="Awadhi writer, 2025"
      />

      {/* Zero stats */}
      <div className="grid grid-cols-1 gap-8 py-12 text-center sm:grid-cols-3 md:py-16">
        <StatHighlight
          value="0"
          label="Awadhi-medium schools in India"
          size="lg"
          className="items-center [&_span:first-child]:text-terracotta"
        />
        <StatHighlight
          value="0"
          label="Intergenerational transmission studies"
          size="lg"
          className="items-center [&_span:first-child]:text-terracotta"
        />
        <StatHighlight
          value="0"
          label="Language attitude surveys"
          size="lg"
          className="items-center [&_span:first-child]:text-terracotta"
        />
      </div>

      {/* Pull quote */}
      <div className="mx-auto max-w-3xl py-8 md:py-12">
        <PullQuote
          quote="Awadhi is endangered enough to worry elders, but invisible enough that even UNESCO doesn't name it."
          className="border-terracotta bg-dark-surface/50 [&_p]:text-parchment"
        />
      </div>

      {/* UNESCO note */}
      <div className="mx-auto max-w-2xl pb-8 text-center">
        <p className="text-sm leading-relaxed text-parchment/50 md:text-base">
          UNESCO classifies the broader &ldquo;Awadhi&rdquo; cluster as{" "}
          <span className="font-semibold text-parchment/70">
            &ldquo;Potentially Vulnerable&rdquo;
          </span>{" "}
          -- the lowest tier of endangerment on their scale. However, this
          designation appears only in aggregate data. Awadhi is not individually
          named in UNESCO&apos;s Atlas of the World&apos;s Languages in Danger,
          rendering it invisible even within the framework designed to protect
          languages like it.
        </p>
      </div>
    </DarkPageWrapper>
  );
}
