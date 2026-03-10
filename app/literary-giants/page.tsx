import type { Metadata } from "next";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import Divider from "@/components/shared/Divider";
import PullQuote from "@/components/shared/PullQuote";
import GiantProfile from "@/components/literary/GiantProfile";
import LiteraryTimeline from "@/components/literary/LiteraryTimeline";

export const metadata: Metadata = {
  title: "Literary Giants",
  description:
    "From Tulsidas to Jayasi, Awadhi produced some of the most important literary works in Indian history.",
};

export default function LiteraryGiantsPage() {
  return (
    <PageWrapper>
      <SectionHeading
        title="Literary Giants"
        subtitle="They nearly killed him for writing in it"
      />

      {/* ── Tulsidas ──────────────────────────────────────────────── */}
      <section className="mt-16">
        <GiantProfile
          name="Goswami Tulsidas"
          dates="1532–1623"
          imageSrc="/images/portraits/tulsidas.webp"
          imageAlt="Portrait of Goswami Tulsidas writing the Ramcharitmanas"
          title="The Man Who Unlocked Sanskrit's Gate"
          achievement="Tulsidas did something the Brahminical establishment considered unforgivable: he took the story of Lord Rama, sacred, revered, guarded in Sanskrit for centuries, and rewrote it in the language of the common people: Awadhi. The result was Ramcharitmanas, a 12,800-line devotional epic that would become one of the most widely read texts in human history. He received death threats from Sanskrit scholars who accused him of desecrating sacred literature. He persisted anyway."
          works={[
            {
              title: "Ramcharitmanas",
              date: "1574-75",
              description:
                "12,800 lines. 108.7 million copies printed by a single press alone. UNESCO Memory of the World inscription (May 2024). Present in virtually every Hindu household in North India. The work that changed everything.",
            },
            {
              title: "Hanuman Chalisa",
              date: "16th century",
              description:
                "40 verses in Awadhi, recited daily by an estimated 100 million people. One of the most widely recited prayers in the world, and most reciters do not know they are chanting in Awadhi.",
            },
            {
              title: "Vinaya Patrika",
              date: "16th century",
              description:
                "A collection of 279 hymns, a petition of humility to Lord Rama. Considered among the finest devotional poetry in any Indian language.",
            },
          ]}
          quote="There was a lock of Sanskrit hanging on the story of Ram. Tulsidas broke that lock by writing in Awadhi."
          significance="Tulsidas single-handedly democratized access to one of Hinduism's foundational narratives. The Ramcharitmanas did not just translate a story; it created a shared cultural identity for hundreds of millions of people across North India. Its influence is so pervasive that many Hindi speakers unknowingly quote Awadhi daily."
        />
      </section>

      <Divider />

      {/* ── Jayasi ─────────────────────────────────────────────── */}
      <section>
        <GiantProfile
          name="Malik Muhammad Jayasi"
          dates="1477–1542"
          imageSrc="/images/portraits/jayasi.webp"
          imageAlt="Portrait of Malik Muhammad Jayasi, Sufi poet of Padmavat"
          title="The Sufi Who Wrote a Hindu Epic"
          achievement="A one-eyed Muslim Sufi mystic from Jayas in Amethi district wrote a Hindu Rajput romance in Awadhi, and it became one of the greatest works in Indian literary history. Padmavat tells the story of Queen Padmavati and Sultan Alauddin Khalji, weaving Sufi allegory through a Hindu love story. It traveled from Arakan (modern Myanmar) to the Deccan, inspired twelve or more adaptations across languages, and in 2018, Sanjay Leela Bhansali turned it into a blockbuster Bollywood film. The fact that a Muslim poet wrote a Hindu epic in a language that both communities shared: that is the essence of Awadhi's cultural synthesis."
          works={[
            {
              title: "Padmavat",
              date: "1540",
              description:
                "Sufi allegory wrapped in Hindu romance. Written in Awadhi using Persian-origin masnavi form. Over 12 adaptations across Indian languages. Inspired Bhansali's 2018 Bollywood film Padmaavat.",
            },
            {
              title: "Akhravat",
              date: "16th century",
              description:
                "A mystical work exploring the Sufi concept of divine love through the symbolism of the alphabet.",
            },
          ]}
          quote="I have made up the story and related it."
          quoteAttribution="Jayasi, in the opening of Padmavat"
          significance="Jayasi represents the extraordinary cross-cultural synthesis that Awadhi enabled. His work proved that the language belonged to no single community; it was the shared literary medium of an entire civilization where Hindu and Muslim traditions interwove seamlessly."
        />
      </section>

      <Divider />

      {/* ── Kabir ──────────────────────────────────────────────── */}
      <section>
        <GiantProfile
          name="Kabir"
          dates="c. 1398–1518"
          imageSrc="/images/portraits/kabir.webp"
          imageAlt="Portrait of Kabir Das at his weaving loom"
          title="The Radical in the People's Tongue"
          achievement="Kabir was a weaver, a mystic, and one of the most radical voices in Indian literary history. He attacked religious hypocrisy from both Hindus and Muslims, rejected caste, mocked rituals, and insisted that truth could only be found within. He described his own language as 'pancmel khichri,' a mixed-grain porridge of Awadhi, Bhojpuri, Braj, Rajasthani, and Khariboli. But Awadhi was his base, the language of his community, the tongue in which his most cutting verses found their edge."
          works={[
            {
              title: "Bijak",
              date: "Compiled posthumously",
              description:
                "The principal scripture of the Kabir Panth, compiled in Awadhi. Contains ramainis, sabdas, and sakhi: poems, songs, and couplets that attack pretension and point toward direct spiritual experience.",
            },
            {
              title: "Hymns in Guru Granth Sahib",
              date: "Compiled 1604",
              description:
                "541 hymns by Kabir are included in the Guru Granth Sahib, the holy scripture of Sikhism, making him the largest non-Sikh contributor to the text.",
            },
          ]}
          quote="I am not Hindu nor Muslim. I am a body made of five elements where the Unknown plays."
          quoteAttribution="Kabir"
          significance="Kabir's 541 hymns in the Guru Granth Sahib make him the largest non-Sikh contributor to Sikhism's holiest text. His influence stretches across Hinduism, Islam, and Sikhism simultaneously, a feat possible only because he wrote in a language that belonged to the people, not to any institution."
        />
      </section>

      <Divider />

      {/* ── Literary Timeline ──────────────────────────────────── */}
      <section className="space-y-12">
        <SectionHeading
          title="The Arc of Awadhi Literature"
          subtitle="Seven centuries of literary achievement"
        />
        <LiteraryTimeline />
      </section>

      <Divider />

      {/* ── Closing Pull Quote ─────────────────────────────────── */}
      <PullQuote quote="There was a time when if you wanted to move hearts in North India, you reached for Awadhi." />
    </PageWrapper>
  );
}
