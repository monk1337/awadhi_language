import type { Metadata } from "next";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import Divider from "@/components/shared/Divider";
import PullQuote from "@/components/shared/PullQuote";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

export const metadata: Metadata = {
  title: "About Lucknow AI",
  description:
    "Lucknow AI is a volunteer-driven community of developers, researchers, and open-source enthusiasts based in Lucknow, Uttar Pradesh.",
};

const activities = [
  {
    title: "Workshops & Meetups",
    description:
      "Regular sessions on AI, machine learning, and open-source development. Hands-on learning, not just slides.",
  },
  {
    title: "Mentorship",
    description:
      "Senior engineers and researchers mentor students and early-career developers at no cost. Because someone did it for us once.",
  },
  {
    title: "Open Source",
    description:
      "We build and maintain open-source projects, including this Awadhi heritage website. Code that belongs to everyone.",
  },
  {
    title: "Research",
    description:
      "Paper discussions, collaborative research, and knowledge sharing. Pushing the boundaries of what AI can achieve, together.",
  },
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <SectionHeading
        title="About Lucknow AI"
        subtitle="Open source AI research and community from the heart of Uttar Pradesh"
        align="center"
      />

      {/* Main intro */}
      <RevealOnScroll>
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-charcoal-light md:text-xl">
          <p>
            Lucknow AI is a volunteer-driven community of developers,
            researchers, and open-source enthusiasts based in Lucknow, Uttar
            Pradesh. Founded with a simple belief: that knowledge should be
            accessible to everyone, regardless of where they come from.
          </p>
          <p>
            Lucknow, despite being the capital of India&apos;s most populous
            state, lacked a space where developers and AI enthusiasts could
            connect, learn, and build together. Lucknow AI was created to fill
            that gap.
          </p>
        </div>
      </RevealOnScroll>

      <Divider />

      {/* What we do */}
      <section className="space-y-10">
        <SectionHeading
          title="What We Do"
          subtitle="Building a community that learns, builds, and gives back"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {activities.map((activity, i) => (
            <RevealOnScroll
              key={activity.title}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 0.05}
            >
              <div className="h-full rounded-lg border border-parchment bg-cream-dark/70 p-6 transition-colors hover:border-saffron/30">
                <div className="mb-3 inline-block rounded-full bg-saffron/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-saffron-dark">
                  {activity.title}
                </div>
                <p className="text-base leading-relaxed text-charcoal-light">
                  {activity.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <Divider />

      {/* Why this website */}
      <section className="space-y-8">
        <SectionHeading
          title="Why This Website?"
          subtitle="A community project rooted in the land of Awadh"
        />

        <RevealOnScroll>
          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-charcoal-light md:text-xl">
            <p>
              As a community rooted in Lucknow, the historic capital of the
              Awadh region, documenting the Awadhi language felt personal.
              Awadhi is the language of this land. It shaped the culture, the
              literature, and the identity of this region. Building this website
              is our way of giving back to the place that gives us home.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      <Divider />

      {/* Volunteer spirit */}
      <section className="space-y-8">
        <SectionHeading
          title="The Volunteer Spirit"
          subtitle="No one here is paid. Everyone here cares."
        />

        <RevealOnScroll>
          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-charcoal-light md:text-xl">
            <p>
              No one in Lucknow AI is paid or sponsored. We are volunteers:
              working professionals and students who contribute their time
              because they believe in the mission. Seniors mentor newcomers not
              out of obligation but out of genuine care. We contribute code,
              curate data, discuss research papers, and push each other to do
              better work. Together.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      <Divider />

      {/* Contribute */}
      <section className="space-y-8">
        <SectionHeading
          title="Contribute to This Project"
          subtitle="This entire website is open source"
        />

        <RevealOnScroll>
          <div className="mx-auto max-w-3xl text-lg leading-relaxed text-charcoal-light md:text-xl">
            <p>
              Whether you want to fix a typo, add a new Awadhi folk song,
              improve the design, or correct a historical fact, you can
              contribute directly on GitHub.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://github.com/monk1337/awadhi_website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-lg bg-charcoal px-8 py-4 text-base font-semibold text-cream transition-colors hover:bg-charcoal/90"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub Repository
            </a>
            <a
              href="https://lucknowai.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-saffron px-8 py-4 text-base font-semibold text-saffron-dark transition-colors hover:bg-saffron/10"
            >
              Lucknow AI Website
            </a>
          </div>
        </RevealOnScroll>
      </section>

      <Divider />

      {/* Closing quote */}
      <PullQuote quote="We nurture Lucknow AI like our own child, volunteering time outside work or college to support the community. Let's put Lucknow on the map in AI and have fun along the way." />
    </PageWrapper>
  );
}
