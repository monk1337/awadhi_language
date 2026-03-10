import type { Metadata } from "next";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import Divider from "@/components/shared/Divider";
import PullQuote from "@/components/shared/PullQuote";
import FamilyTree from "@/components/timeline/FamilyTree";
import GoldenAgeCards from "@/components/timeline/GoldenAgeCards";
import TimelineSection from "@/components/timeline/TimelineSection";

export const metadata: Metadata = {
  title: "Origin Story",
  description:
    "Trace Awadhi from its Prakrit roots through its golden age of literature and beyond.",
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

      {/* Golden age manuscript image */}
      <div className="mx-auto max-w-3xl overflow-hidden rounded-xl">
        <img
          src="/images/history/manuscript.webp"
          alt="Ancient Awadhi manuscript page with Devanagari script and Mughal decorative borders"
          className="h-auto w-full"
        />
      </div>

      <Divider />

      {/* The golden age of Awadhi literature */}
      <GoldenAgeCards />

      <Divider />

      {/* The full historical timeline */}
      <TimelineSection />

      {/* Fort William College illustration */}
      <div className="mx-auto max-w-3xl overflow-hidden rounded-xl">
        <img
          src="/images/history/fort-william.webp"
          alt="Fort William College in colonial Calcutta, circa 1800"
          className="h-auto w-full"
        />
      </div>

      {/* Closing pull quote */}
      <div className="mx-auto max-w-3xl pt-16 md:pt-24">
        <PullQuote quote="Had Fort William College chosen Awadhi as the basis for standardized Hindi instead of Khari Boli, the linguistic identity of 500+ million people would be fundamentally different today." />
      </div>
    </PageWrapper>
  );
}
