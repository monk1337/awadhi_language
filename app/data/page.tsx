import type { Metadata } from "next";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import Divider from "@/components/shared/Divider";
import PullQuote from "@/components/shared/PullQuote";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import StatHighlight from "@/components/shared/StatHighlight";
import DataGrid from "@/components/data-wall/DataGrid";
import EighthScheduleChart from "@/components/data-wall/EighthScheduleChart";

export const metadata: Metadata = {
  title: "The Data Wall",
  description:
    "Census gaps, missing metrics, and the statistical invisibility of a language spoken by 38 million people.",
};

export default function DataPage() {
  return (
    <PageWrapper>
      {/* Page heading */}
      <SectionHeading
        title="The Data Wall"
        subtitle="What we know. What no one bothered to find out."
        align="center"
      />

      {/* Main data grid */}
      <DataGrid />

      {/* Pull quote about data neglect */}
      <div className="mx-auto max-w-3xl pt-16 md:pt-24">
        <PullQuote quote="The very absence of data is a form of neglect." />
      </div>

      <Divider />

      {/* Eighth Schedule comparison chart */}
      <EighthScheduleChart />

      <Divider />

      {/* Welsh comparison section */}
      <RevealOnScroll direction="up">
        <section className="mx-auto max-w-3xl py-4">
          <h3 className="font-playfair text-2xl font-bold text-charcoal md:text-3xl">
            The Welsh Comparison
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-slate md:text-xl">
            Welsh (880,000 speakers) has been the subject of hundreds of
            sociolinguistic studies. Awadhi (38 million speakers) has zero.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-parchment bg-cream-dark/50 p-6">
              <StatHighlight value="880K" label="Welsh speakers" size="sm" />
              <p className="mt-3 text-sm text-slate">
                Hundreds of sociolinguistic studies, full government support,
                bilingual education, dedicated TV channel (S4C), and a
                Commissioner for the Welsh Language.
              </p>
            </div>

            <div className="rounded-lg border border-saffron/20 bg-[#1A1816] p-6">
              <StatHighlight value="38M" label="Awadhi speakers" size="sm" />
              <p className="mt-3 text-sm text-slate-light/60">
                Zero comprehensive sociolinguistic studies. Zero medium-of-instruction
                schools. No government recognition as a distinct language.
                Classified as a dialect of Hindi.
              </p>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Closing pull quote */}
      <div className="mx-auto max-w-3xl pt-12 md:pt-16">
        <PullQuote quote="A language with 38 million speakers should not have blank cells where data belongs." />
      </div>
    </PageWrapper>
  );
}
