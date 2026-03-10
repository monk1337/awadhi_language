"use client";

import { cn } from "@/lib/utils";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import SectionHeading from "@/components/shared/SectionHeading";

interface GoldenAgeWork {
  date: string;
  work: string;
  author: string;
  description: string;
  stream: "sufi" | "bhakti";
}

const works: GoldenAgeWork[] = [
  // Sufi premakhyan tradition
  {
    date: "1379",
    work: "Chandayan",
    author: "Maulana Da'ud",
    description:
      "The first major Awadhi literary work. Inaugurates the Sufi premakhyan tradition: Eastern Sufis choosing Awadhi to reach common people with Hindu love stories infused with Sufi mysticism.",
    stream: "sufi",
  },
  {
    date: "c. 1503",
    work: "Mirigavati",
    author: "Qutban",
    description:
      "Continues the premakhyan tradition of writing Hindu love stories in Awadhi with Sufi philosophical underpinnings. A testament to the cross-cultural synthesis of the golden age.",
    stream: "sufi",
  },
  {
    date: "1540",
    work: "Padmavat",
    author: "Malik Muhammad Jayasi",
    description:
      "A blind Muslim Sufi mystic writes a Hindu Rajput romance in Awadhi that travels from Myanmar to the Deccan. Inspired 12+ adaptations across centuries.",
    stream: "sufi",
  },
  {
    date: "1545",
    work: "Madhumalati",
    author: "Manjhan",
    description:
      "Another major premakhyan continuing the remarkable literary synthesis where Muslim poets chose a Hindu vernacular to express Sufi truths through Hindu narrative traditions.",
    stream: "sufi",
  },
  // Bhakti devotional movement
  {
    date: "15th c.",
    work: "Bijak",
    author: "Kabir",
    description:
      "The weaver-poet's collected verses challenge caste, dogma, and religious orthodoxy in Awadhi-inflected verse. His words are still sung by millions across traditions.",
    stream: "bhakti",
  },
  {
    date: "1574-75",
    work: "Ramcharitmanas",
    author: "Goswami Tulsidas",
    description:
      "12,800 lines that changed Indian civilization. 108.7 million copies from one press alone. UNESCO Memory of the World. Present in virtually every Hindu household across North India.",
    stream: "bhakti",
  },
];

function GoldenAgeCard({ work, index }: { work: GoldenAgeWork; index: number }) {
  const isSufi = work.stream === "sufi";

  return (
    <RevealOnScroll direction="up" delay={index * 0.08}>
      <div
        className={cn(
          "group relative flex h-full flex-col rounded-lg border p-6 transition-all duration-300",
          "bg-gradient-to-br hover:-translate-y-1 hover:shadow-lg",
          isSufi
            ? "border-amber/30 from-parchment/80 to-parchment/40 hover:border-amber/60"
            : "border-saffron/30 from-saffron/5 to-parchment/40 hover:border-saffron/60",
        )}
      >
        {/* Stream badge */}
        <span
          className={cn(
            "mb-3 inline-block self-start rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider",
            isSufi
              ? "bg-amber/15 text-amber-dark"
              : "bg-saffron/15 text-saffron-dark",
          )}
        >
          {isSufi ? "Sufi Premakhyan" : "Bhakti Devotional"}
        </span>

        {/* Date */}
        <span className="font-data text-sm font-semibold tracking-wider text-saffron">
          {work.date}
        </span>

        {/* Title */}
        <h3 className="mt-1 font-playfair text-xl font-bold text-charcoal">
          {work.work}
        </h3>

        {/* Author */}
        <p className="mt-0.5 font-inter text-sm font-medium text-slate">
          {work.author}
        </p>

        {/* Description */}
        <p className="mt-3 flex-1 font-inter text-sm leading-relaxed text-slate">
          {work.description}
        </p>
      </div>
    </RevealOnScroll>
  );
}

export default function GoldenAgeCards() {
  const sufiWorks = works.filter((w) => w.stream === "sufi");
  const bhaktiWorks = works.filter((w) => w.stream === "bhakti");

  return (
    <section className="py-16 md:py-24">
      <SectionHeading
        title="The Golden Age"
        subtitle="From 1379 to 1625, two great literary streams flowed through Awadhi: Sufi mystics writing Hindu love stories, and Bhakti poets retelling sacred epics. Muslim and Hindu traditions chose the same language."
        align="center"
      />

      {/* Sufi stream */}
      <div className="mt-14">
        <RevealOnScroll direction="up">
          <h3 className="mb-6 text-center font-playfair text-xl font-semibold text-amber-dark">
            The Sufi Premakhyan Tradition
          </h3>
        </RevealOnScroll>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {sufiWorks.map((work, index) => (
            <GoldenAgeCard key={work.work} work={work} index={index} />
          ))}
        </div>
      </div>

      {/* Bhakti stream */}
      <div className="mt-14">
        <RevealOnScroll direction="up">
          <h3 className="mb-6 text-center font-playfair text-xl font-semibold text-saffron-dark">
            The Bhakti Devotional Movement
          </h3>
        </RevealOnScroll>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {bhaktiWorks.map((work, index) => (
            <GoldenAgeCard key={work.work} work={work} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
