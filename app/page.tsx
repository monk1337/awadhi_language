import HeroSection from "@/components/landing/HeroSection";
import EuropeanComparison from "@/components/landing/EuropeanComparison";
import HanumanChalisaReveal from "@/components/landing/HanumanChalisaReveal";
import SectionPreview from "@/components/landing/SectionPreview";
import Divider from "@/components/shared/Divider";
import SectionHeading from "@/components/shared/SectionHeading";
import { sections } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

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
            subtitle="Exploring the history, culture, and linguistic heritage of one of the world's great languages."
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
