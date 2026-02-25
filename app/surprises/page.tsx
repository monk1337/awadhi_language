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
