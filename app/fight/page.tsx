import type { Metadata } from "next";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import Divider from "@/components/shared/Divider";
import PullQuote from "@/components/shared/PullQuote";
import PoliticalTimeline from "@/components/fight/PoliticalTimeline";
import DigitalLifelineGrid from "@/components/fight/DigitalLifelineGrid";
import AyodhyaParadox from "@/components/fight/AyodhyaParadox";

export const metadata: Metadata = {
  title: "The Fight to Save It",
  description:
    "The Eighth Schedule campaign, digital activism, and grassroots movements fighting for Awadhi survival. The $10 billion paradox.",
};

export default function FightPage() {
  return (
    <PageWrapper>
      {/* Page heading */}
      <SectionHeading
        title="The Fight to Save It"
        subtitle="The $10 billion paradox"
        align="center"
      />

      {/* Political timeline section */}
      <section className="mt-16 md:mt-24">
        <h3 className="mb-10 text-center font-playfair text-2xl font-bold text-charcoal md:mb-14 md:text-3xl">
          Political Recognition: Promises and Paralysis
        </h3>
        <PoliticalTimeline />
      </section>

      <Divider />

      {/* Digital lifelines section */}
      <section>
        <h3 className="mb-10 text-center font-playfair text-2xl font-bold text-charcoal md:mb-14 md:text-3xl">
          Digital Lifelines
        </h3>
        <DigitalLifelineGrid />
      </section>

      <Divider />

      {/* Ayodhya paradox */}
      <AyodhyaParadox />

      {/* Closing pull quote */}
      <div className="mx-auto max-w-3xl pt-16 md:pt-24">
        <PullQuote quote="Unlike Welsh, Maori, or Hebrew, Awadhi has no dedicated institutional anchor responsible for its survival." />
      </div>
    </PageWrapper>
  );
}
