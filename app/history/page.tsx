import type { Metadata } from "next";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import Divider from "@/components/shared/Divider";
import PullQuote from "@/components/shared/PullQuote";
import FamilyTree from "@/components/timeline/FamilyTree";
import GoldenAgeCards from "@/components/timeline/GoldenAgeCards";
import TimelineSection from "@/components/timeline/TimelineSection";
import HindiInflation from "@/components/timeline/HindiInflation";

export const metadata: Metadata = {
  title: "Origin Story",
  description:
    "Trace Awadhi from its Prakrit roots through its golden age to its political sidelining. A story of prestige, power, and erasure.",
};

export default function HistoryPage() {
  return (
    <PageWrapper>
      {/* Page heading */}
      <SectionHeading
        title="Origin Story"
        subtitle="From sacred plains to 'dialect' checkbox"
        align="center"
      />

      {/* Different ancestors section */}
      <FamilyTree />

      <Divider />

      {/* The golden age of Awadhi literature */}
      <GoldenAgeCards />

      <Divider />

      {/* The full historical timeline */}
      <TimelineSection />

      <Divider />

      {/* The 1971 census manipulation */}
      <HindiInflation />

      {/* Closing pull quote */}
      <div className="mx-auto max-w-3xl pt-16 md:pt-24">
        <PullQuote quote="Had Fort William College chosen Awadhi as the basis for standardized Hindi instead of Khari Boli, the linguistic identity of 500+ million people would be fundamentally different today." />
      </div>
    </PageWrapper>
  );
}
