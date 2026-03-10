"use client";

import RevealOnScroll from "@/components/shared/RevealOnScroll";
import SectionHeading from "@/components/shared/SectionHeading";
import TimelineEvent from "@/components/timeline/TimelineEvent";

interface TimelineEventData {
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
}

const events: TimelineEventData[] = [
  {
    year: "6th-13th c.",
    title: "Emergence from Ardhamagadhi Prakrit",
    description:
      "Awadhi crystallizes as a distinct language from its Ardhamagadhi Prakrit and Eastern Apabhramsha ancestors, spoken across the Gangetic plains of the Awadh region.",
  },
  {
    year: "1379",
    title: "Chandayan by Maulana Da'ud",
    description:
      "The first major literary work in Awadhi inaugurates the Sufi premakhyan tradition: Eastern Sufis choosing Awadhi to reach common people with Hindu love stories infused with Sufi philosophy.",
    highlight: true,
  },
  {
    year: "1540",
    title: "Padmavat by Malik Muhammad Jayasi",
    description:
      "A Muslim Sufi mystic writes a Hindu Rajput romance in Awadhi. The epic traveled from Arakan to the Deccan, inspiring 12+ adaptations across centuries.",
    highlight: true,
  },
  {
    year: "1574-75",
    title: "Ramcharitmanas by Tulsidas",
    description:
      "The work that changed everything. 12,800 lines retelling the Ramayana in Awadhi, now with 108.7 million copies from one press alone. UNESCO Memory of the World.",
    highlight: true,
  },
  {
    year: "1625",
    title: "First Ramlila by Megha Bhagat",
    description:
      "Tulsidas's student institutionalizes Awadhi theater, dramatizing the Ramcharitmanas. Ramlila is now UNESCO Intangible Cultural Heritage, performed across India annually.",
  },
  {
    year: "1800",
    title: "Fort William College chooses Khari Boli",
    description:
      "The British East India Company's Fort William College selects Khari Boli, not Awadhi, as the basis for a standardized \"Hindustani.\" A decision that would reshape the linguistic destiny of half a billion people.",
    highlight: true,
  },
];

export default function TimelineSection() {
  return (
    <section className="py-16 md:py-24">
      <SectionHeading
        title="The Full Timeline"
        subtitle="From Prakrit roots to literary golden age"
        align="center"
      />

      <div className="relative mx-auto mt-16 max-w-4xl">
        {/* Central vertical line */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-saffron via-saffron/60 to-saffron/20 md:left-1/2 md:-translate-x-px" />

        <div className="flex flex-col gap-12">
          {events.map((event, index) => {
            const side: "left" | "right" = index % 2 === 0 ? "left" : "right";

            return (
              <div
                key={event.year}
                className="relative flex items-start md:items-center"
              >
                {/* Dot on the timeline */}
                <div
                  className={
                    "absolute left-4 top-5 z-10 size-3 -translate-x-1/2 rounded-full border-2 border-saffron md:left-1/2 md:top-1/2 md:-translate-y-1/2 " +
                    (event.highlight ? "bg-saffron" : "bg-cream")
                  }
                />

                {/* Desktop: alternating layout */}
                <div className="hidden w-full grid-cols-2 gap-8 md:grid">
                  {/* Left column */}
                  <div className={side === "left" ? "" : ""}>
                    {side === "left" && (
                      <RevealOnScroll direction="right" delay={index * 0.05}>
                        <TimelineEvent
                          year={event.year}
                          title={event.title}
                          description={event.description}
                          highlight={event.highlight}
                          side="left"
                        />
                      </RevealOnScroll>
                    )}
                  </div>

                  {/* Right column */}
                  <div>
                    {side === "right" && (
                      <RevealOnScroll direction="left" delay={index * 0.05}>
                        <TimelineEvent
                          year={event.year}
                          title={event.title}
                          description={event.description}
                          highlight={event.highlight}
                          side="right"
                        />
                      </RevealOnScroll>
                    )}
                  </div>
                </div>

                {/* Mobile: all left-aligned */}
                <div className="ml-10 w-full md:hidden">
                  <RevealOnScroll direction="left" delay={index * 0.05}>
                    <TimelineEvent
                      year={event.year}
                      title={event.title}
                      description={event.description}
                      highlight={event.highlight}
                      side="right"
                    />
                  </RevealOnScroll>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
