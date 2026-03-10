import type { Metadata } from "next";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import Divider from "@/components/shared/Divider";
import PullQuote from "@/components/shared/PullQuote";
import SeasonalSongWheel from "@/components/culture/SeasonalSongWheel";
import WorkSongsGrid from "@/components/culture/WorkSongsGrid";
import CuisineTerms from "@/components/culture/CuisineTerms";
import ProverbWall from "@/components/culture/ProverbWall";

export const metadata: Metadata = {
  title: "Living Culture",
  description:
    "Festivals, folk songs, cuisine, and proverbs that form the living texture of Awadhi identity.",
};

export default function CulturePage() {
  return (
    <PageWrapper>
      {/* Folk Songs */}
      <section className="space-y-12">
        <SectionHeading
          title="Living Culture"
          subtitle="A song for every season"
        />
        <div className="mx-auto max-w-4xl overflow-hidden rounded-xl">
          <img
            src="/images/culture/folk-music.webp"
            alt="Women singing Awadhi folk songs during monsoon season in a village courtyard"
            className="h-auto w-full"
          />
        </div>
        <SeasonalSongWheel />
      </section>

      <Divider />

      {/* Work Songs */}
      <section className="space-y-12">
        <SectionHeading
          title="Songs of Labour"
          subtitle="When every task had its own melody"
        />
        <WorkSongsGrid />
      </section>

      <Divider />

      {/* Cuisine */}
      <section className="space-y-12">
        <SectionHeading
          title="The Dastarkhwan"
          subtitle="The vocabulary of Awadhi cuisine"
        />
        <div className="mx-auto max-w-4xl overflow-hidden rounded-xl">
          <img
            src="/images/culture/cuisine.webp"
            alt="Traditional Awadhi feast with biryani, galouti kebabs, sheermal, and korma on a brass thali"
            className="h-auto w-full"
          />
        </div>
        <CuisineTerms />
      </section>

      <Divider />

      {/* Ramlila + Proverbs */}
      <div className="mx-auto max-w-4xl overflow-hidden rounded-xl">
        <img
          src="/images/culture/ramlila.webp"
          alt="Traditional Ramlila performance at dusk in Varanasi"
          className="h-auto w-full"
        />
      </div>

      <Divider />

      {/* Proverbs */}
      <section className="space-y-12">
        <SectionHeading
          title="Proverbs"
          subtitle="The worldview of Awadhi speakers"
        />
        <ProverbWall />
      </section>

      <Divider />

      {/* Closing quote */}
      <PullQuote
        quote="Pehle aap: in those two words lives an entire civilization's commitment to grace, patience, and putting the other person first. That is tehzeeb. And tehzeeb speaks Awadhi."
      />
    </PageWrapper>
  );
}
