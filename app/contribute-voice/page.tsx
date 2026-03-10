import type { Metadata } from "next";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import Divider from "@/components/shared/Divider";
import PullQuote from "@/components/shared/PullQuote";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import VoiceRecorder from "@/components/voice/VoiceRecorder";

export const metadata: Metadata = {
  title: "Contribute Your Voice",
  description:
    "Help build AI that understands Awadhi so our parents and village elders can use technology in their mother tongue. Record sentences and contribute to language preservation.",
};

const steps = [
  {
    step: "1",
    title: "We Show a Sentence",
    description:
      "You'll see a sentence in Hindi and English. Your job is to say it in your natural Awadhi.",
  },
  {
    step: "2",
    title: "Record Your Voice",
    description:
      "Tap the mic button and speak. A quiet room works best. Each recording should be 5 to 15 seconds.",
  },
  {
    step: "3",
    title: "Listen and Submit",
    description:
      "Play back your recording. Happy with it? Hit submit. Want to redo? Tap re-record. That's it.",
  },
];

const faqs = [
  {
    q: "Do I need professional equipment?",
    a: "No. A smartphone in a quiet room is enough. Background silence matters more than microphone quality.",
  },
  {
    q: "Which dialect of Awadhi should I speak?",
    a: "Whichever you speak naturally. We want every dialect represented: Lucknowi, Barabanki, Sultanpuri, Faizabadi, all of them.",
  },
  {
    q: "How will this data be used?",
    a: "To train an open-source Awadhi speech-to-text model so that Awadhi speakers, especially our parents and village elders, can use AI in their mother tongue. The dataset and the model will both be freely available to everyone.",
  },
  {
    q: "Will my personal information be shared?",
    a: "No. We only collect district, age group, and gender for dialect analysis and model training. Nothing personally identifiable is stored or published.",
  },
  {
    q: "What audio quality is recorded?",
    a: "Lossless WAV at 48kHz, 16-bit mono. This is the highest quality your browser can capture, the same standard used by professional speech datasets.",
  },
];

export default function ContributeVoicePage() {
  return (
    <PageWrapper>
      <SectionHeading
        title="Contribute Your Voice"
        subtitle="Help us build AI that understands Awadhi"
        align="center"
      />

      {/* Why this matters */}
      <RevealOnScroll>
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-charcoal-light md:text-xl">
          <p>
            38 million people speak Awadhi. Yet there is no speech recognition
            model, no voice assistant, and no AI system that understands a single
            word of it. Our parents, grandparents, and village elders, the people
            who speak Awadhi most fluently, are completely left out of the AI
            revolution.
          </p>
          <p>
            We want to change that. We are building open-source AI models so that
            Awadhi speakers can use technology in their own mother tongue. Talk to
            a voice assistant, dictate a message, or get information without
            switching to Hindi or English. And we need your voice to make it
            happen.
          </p>
        </div>
      </RevealOnScroll>

      <Divider />

      {/* How it works */}
      <section className="space-y-10">
        <SectionHeading
          title="How It Works"
          subtitle="Three simple steps"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <RevealOnScroll key={s.step} delay={i * 0.1}>
              <div className="h-full rounded-lg border border-parchment bg-cream-dark/70 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-saffron text-lg font-bold text-cream">
                  {s.step}
                </div>
                <h4 className="font-playfair text-lg font-bold text-charcoal">
                  {s.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {s.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <Divider />

      {/* THE RECORDER */}
      <section className="space-y-8">
        <SectionHeading
          title="Start Recording"
          subtitle="Read the sentence below, then say it in your Awadhi"
          align="center"
        />

        <VoiceRecorder />
      </section>

      <Divider />

      {/* Recording tips */}
      <section className="space-y-8">
        <SectionHeading
          title="Tips for Best Quality"
        />

        <RevealOnScroll>
          <div className="mx-auto max-w-3xl">
            <ul className="space-y-4 text-base leading-relaxed text-charcoal-light md:text-lg">
              <li className="flex gap-3">
                <span className="mt-1 shrink-0 text-saffron">&#10003;</span>
                <span><strong>Speak slowly and clearly</strong>, as if explaining something to a child</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 shrink-0 text-saffron">&#10003;</span>
                <span><strong>Don&apos;t repeat the Hindi sentence</strong>, translate it into your Awadhi naturally</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 shrink-0 text-saffron">&#10003;</span>
                <span>Record in a quiet environment with minimal background noise</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 shrink-0 text-saffron">&#10003;</span>
                <span>Hold your phone 6 to 12 inches from your mouth</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 shrink-0 text-saffron">&#10003;</span>
                <span>Any dialect of Awadhi is valuable. Speak your own</span>
              </li>
            </ul>
          </div>
        </RevealOnScroll>
      </section>

      <Divider />

      {/* FAQ */}
      <section className="space-y-8">
        <SectionHeading title="Frequently Asked Questions" />

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, i) => (
            <RevealOnScroll key={i} delay={i * 0.05}>
              <div className="rounded-lg border border-parchment bg-cream-dark/70 p-5">
                <h4 className="font-playfair text-base font-bold text-charcoal">
                  {faq.q}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {faq.a}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <Divider />

      {/* Closing quote */}
      <PullQuote quote="Imagine your mother asking her phone a question in Awadhi and getting an answer. That future starts with your voice today." />
    </PageWrapper>
  );
}
