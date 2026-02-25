import type { Metadata } from "next";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import Divider from "@/components/shared/Divider";
import PullQuote from "@/components/shared/PullQuote";
import StatHighlight from "@/components/shared/StatHighlight";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import IndiaMap from "@/components/map/IndiaMap";
import WorldMap from "@/components/map/WorldMap";
import MigrationArrows from "@/components/map/MigrationArrows";
import NepalGrowthChart from "@/components/map/NepalGrowthChart";

export const metadata: Metadata = {
  title: "The Map",
  description:
    "Where Awadhi is spoken: 23 districts across Uttar Pradesh, Nepal's Terai, and a global diaspora stretching from Fiji to South Africa.",
};

export default function MapPage() {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-16 md:gap-24">
        {/* ---- Hero heading ---- */}
        <SectionHeading
          title="The Map"
          subtitle="From Ayodhya to Fiji"
        />

        {/* ---- India / UP Map ---- */}
        <section>
          <RevealOnScroll>
            <h3 className="mb-2 font-playfair text-2xl font-bold text-charcoal md:text-3xl">
              The Heartland: 23 Districts
            </h3>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-slate">
              Awadhi&apos;s core territory stretches across the historic Awadh
              region of central-eastern Uttar Pradesh, from Lucknow in the west
              to Varanasi in the east. Across the border, eight districts of
              Nepal&apos;s Terai belt are home to a growing Awadhi-speaking
              population.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <IndiaMap />
          </RevealOnScroll>
        </section>

        <Divider />

        {/* ---- World / Diaspora Map ---- */}
        <section>
          <RevealOnScroll>
            <h3 className="mb-2 font-playfair text-2xl font-bold text-charcoal md:text-3xl">
              The Girmitiya Journey
            </h3>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-slate">
              Between 1834 and 1920, the British Empire&apos;s indentured labor
              system transported over 1.2 million Indians to colonial
              plantations. The majority came from the Awadh and Bhojpur regions.
              Their descendants now speak distinct creole forms of Awadhi across
              three continents.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <WorldMap />
          </RevealOnScroll>
        </section>

        {/* ---- Pull quote: the indenture system ---- */}
        <PullQuote
          quote="Between 1834 and 1920, the British Empire's Indian indenture system transported over 1.2 million Indians to colonial plantations."
        />

        {/* ---- Detailed Migration Arrows ---- */}
        <section>
          <RevealOnScroll>
            <h3 className="mb-2 font-playfair text-2xl font-bold text-charcoal md:text-3xl">
              Migration Routes
            </h3>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-slate">
              Each line traces a route from the Awadh heartland to a colonial
              plantation destination. The numbers represent documented indentured
              migrants.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <MigrationArrows />
          </RevealOnScroll>
        </section>

        <Divider />

        {/* ---- Nepal Growth Chart ---- */}
        <section>
          <NepalGrowthChart />
        </section>

        {/* ---- Stat: 72% ---- */}
        <div className="flex justify-center">
          <StatHighlight
            value="72%"
            label="Growth in Nepal in one decade"
            size="lg"
            className="items-center text-center"
          />
        </div>

        {/* ---- Closing pull quote ---- */}
        <PullQuote
          quote="A foreign country is moving faster than India to recognize a language born on Indian soil."
        />
      </div>
    </PageWrapper>
  );
}
