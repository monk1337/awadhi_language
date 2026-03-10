import type { Metadata } from "next";
import Link from "next/link";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import Divider from "@/components/shared/Divider";
import PullQuote from "@/components/shared/PullQuote";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

export const metadata: Metadata = {
  title: "Open Source",
  description:
    "This website is open source. Learn how you can contribute to preserving the Awadhi language.",
};

const ways = [
  {
    title: "Fix a Bug or Improve the UI",
    description:
      "Found something broken or have a design improvement? Open a pull request.",
  },
  {
    title: "Correct an Inaccuracy",
    description:
      "If you spot a historical, linguistic, or cultural error, help us fix it.",
  },
  {
    title: "Add Content",
    description:
      "Know an Awadhi proverb, folk song, or cultural tradition we missed? Add it.",
  },
  {
    title: "Improve Translations",
    description:
      "Help us improve Devanagari text, romanized transliterations, or English translations.",
  },
  {
    title: "Spread the Word",
    description:
      "Share this website with anyone who cares about language, culture, or heritage.",
  },
];

export default function OpenSourcePage() {
  return (
    <PageWrapper>
      <SectionHeading
        title="This Project is Open Source"
        subtitle="Built by volunteers who believe knowledge should be free"
        align="center"
      />

      {/* Main message */}
      <RevealOnScroll>
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-charcoal-light md:text-xl">
          <p>
            This website is built and maintained by a small group of open-source
            enthusiasts who believe that cultural and linguistic heritage belongs
            to everyone. No one involved in this project is paid. There is no
            funding, no sponsorship, no corporate backing. Just people who care
            about preserving a language spoken by 38 million people.
          </p>
          <p>
            Every line of code, every data point, and every piece of research on
            this site is freely available. We believe that documenting a
            language&apos;s story should not sit behind paywalls or be locked in
            academic journals that no one reads.
          </p>
        </div>
      </RevealOnScroll>

      <Divider />

      {/* How you can help */}
      <section className="space-y-10">
        <SectionHeading
          title="How You Can Help"
          subtitle="Every contribution, big or small, makes a difference"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ways.map((way, i) => (
            <RevealOnScroll key={way.title} delay={i * 0.05}>
              <div className="h-full rounded-lg border border-parchment bg-cream-dark/70 p-6 transition-colors hover:border-saffron/30">
                <h4 className="font-playfair text-lg font-bold text-charcoal">
                  {way.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {way.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <Divider />

      {/* Voice contribution */}
      <section className="space-y-8">
        <SectionHeading
          title="Contribute Your Voice"
          subtitle="You don't need to write code to help"
        />

        <RevealOnScroll>
          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-charcoal-light md:text-xl">
            <p>
              We are building open-source AI models so that Awadhi speakers can
              use technology in their own mother tongue. Our parents, grandparents,
              and village elders, the people who speak Awadhi most naturally, are
              completely left out of the AI world. No voice assistant understands
              them. No speech-to-text works for them.
            </p>
            <p>
              You can help change that by recording a few sentences in your Awadhi.
              It takes 2 minutes and works right in your browser.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="flex justify-center">
            <Link
              href="/contribute-voice"
              className="inline-flex items-center gap-3 rounded-full bg-saffron px-8 py-4 text-base font-semibold text-cream transition-colors hover:bg-saffron-dark nav-glow"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
              Start Recording Your Voice
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      <Divider />

      {/* GitHub CTA */}
      <RevealOnScroll>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-2xl text-lg text-charcoal-light md:text-xl">
            The entire source code for this website is available on GitHub. Fork
            it, improve it, or just explore how it works.
          </p>
          <a
            href="https://github.com/monk1337/awadhi_language"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-lg bg-charcoal px-8 py-4 text-base font-semibold text-cream transition-colors hover:bg-charcoal/90"
          >
            <svg
              className="h-6 w-6"
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
            Contribute on GitHub
          </a>
        </div>
      </RevealOnScroll>

      <Divider />

      {/* Closing quote */}
      <PullQuote quote="A language lives not in textbooks but in the people who choose to keep it alive. This is our small attempt." />
    </PageWrapper>
  );
}
