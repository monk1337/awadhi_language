import type { Metadata } from "next";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import Divider from "@/components/shared/Divider";
import PullQuote from "@/components/shared/PullQuote";
import SoundShifts from "@/components/language/SoundShifts";
import AhaiFingerprint from "@/components/language/AhaiFingerprint";
import GrammarComparison from "@/components/language/GrammarComparison";
import WordWall from "@/components/language/WordWall";
import PhrasesDisplay from "@/components/language/PhrasesDisplay";
import ThreeScripts from "@/components/language/ThreeScripts";

export const metadata: Metadata = {
  title: "Sound & Language",
  description:
    "Awadhi has its own grammar, verb conjugations, and a sound system that distinguishes it from every other Indo-Aryan language. This is not Hindi.",
};

export default function LanguagePage() {
  return (
    <PageWrapper>
      {/* Page header */}
      <SectionHeading
        title="Sound & Language"
        subtitle="This is not Hindi"
      />

      {/* Sound shifts: phonological differences */}
      <SoundShifts />

      {/* Ahai: the acoustic fingerprint */}
      <AhaiFingerprint />

      <Divider />

      {/* Grammar comparison */}
      <GrammarComparison />

      <Divider />

      {/* Word Wall */}
      <SectionHeading
        title="The Words That Define Awadhi"
        subtitle="Click any word to explore its meaning and significance."
      />
      <WordWall />

      {/* Phrases */}
      <SectionHeading
        title="Everyday Phrases"
        subtitle="The warmth, domesticity, and devotional character of daily Awadhi speech."
      />
      <PhrasesDisplay />

      <Divider />

      {/* Three Scripts */}
      <SectionHeading
        title="The Three Scripts"
        subtitle="Awadhi has been written in three scripts across its history. Two are now lost."
      />
      <ThreeScripts />

      {/* Pull quote about Kaithi */}
      <PullQuote
        quote="They didn't just kill a script. They killed the evidence that millions of people had been literate in something other than Hindi."
        className="mt-12"
      />
    </PageWrapper>
  );
}
