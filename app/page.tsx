import HeroSection from "@/components/landing/HeroSection";
import CensusFormMockup from "@/components/landing/CensusFormMockup";
import EuropeanComparison from "@/components/landing/EuropeanComparison";
import HanumanChalisaReveal from "@/components/landing/HanumanChalisaReveal";
import SectionPreview from "@/components/landing/SectionPreview";
import Divider from "@/components/shared/Divider";
import SectionHeading from "@/components/shared/SectionHeading";
import { sections } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero: 38 million stat with census contrast */}
      <HeroSection />

      <Divider />

      {/* The Bureaucratic Erasure: interactive census form mockup */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            title="The Bureaucratic Erasure"
            subtitle="India's census doesn't count Awadhi as a language. It's classified as a dialect of Hindi. Try it yourself."
            align="center"
          />
          <div className="mt-12">
            <CensusFormMockup />
          </div>
        </div>
      </section>

      <Divider />

      {/* European comparison chart */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            title="Bigger Than You Think"
            subtitle="Awadhi's speaker population dwarfs many of Europe's officially recognized national languages."
            align="center"
          />
          <div className="mt-12">
            <EuropeanComparison />
          </div>
        </div>
      </section>

      <Divider />

      {/* Hanuman Chalisa dramatic reveal */}
      <HanumanChalisaReveal />

      <Divider />

      {/* Section previews grid */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Explore the Story"
            subtitle="Nine chapters tracing the life, erasure, and fight for survival of one of the world's great unrecognized languages."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, index) => (
              <SectionPreview
                key={section.id}
                section={section}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
