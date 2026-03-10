import type { Metadata } from "next";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import Divider from "@/components/shared/Divider";
import PullQuote from "@/components/shared/PullQuote";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

export const metadata: Metadata = {
  title: "Contribute Your Voice",
  description:
    "Help build the first open-source Awadhi speech recognition model. Record sentences in Awadhi and contribute to language preservation.",
};

const sampleSentences = [
  { awadhi: "हमार गाँव बहुत सुन्दर अहै।", roman: "Hamaar gaanv bahut sundar ahai." },
  { awadhi: "आजु बड़ी धूप अहै, पानी पियो।", roman: "Aaju badi dhoop ahai, paani piyo." },
  { awadhi: "तुलसीदास जी रामचरितमानस लिखेन।", roman: "Tulsidasji Ramcharitmanas likhen." },
  { awadhi: "हमका अवधी भाषा से बहुत लगाव अहै।", roman: "Hamka Awadhi bhasha se bahut lagaav ahai." },
  { awadhi: "ई गीत हमार दादी गावति रहीं।", roman: "Ee geet hamaar daadi gaavati raheen." },
  { awadhi: "लखनऊ का नवाबी खाना मशहूर अहै।", roman: "Lucknow ka nawabi khana mashhoor ahai." },
];

const steps = [
  {
    step: "1",
    title: "Pick a Sentence",
    description:
      "Choose from the sample sentences below, or speak freely about any topic in Awadhi.",
  },
  {
    step: "2",
    title: "Record on Your Phone",
    description:
      "Use your phone's built-in voice recorder app. A quiet room works best. Each clip should be 5 to 15 seconds.",
  },
  {
    step: "3",
    title: "Submit via the Form",
    description:
      "Upload your recording through our Google Form. We'll ask for your district and age group (optional) to track dialect variation.",
  },
];

const faqs = [
  {
    q: "What format should the audio be in?",
    a: "Any format your phone records in is fine: .m4a, .mp3, .wav, .ogg. We'll handle the conversion.",
  },
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
    a: "To train an open-source Awadhi speech-to-text model. The dataset and the model will both be freely available to everyone.",
  },
  {
    q: "Will my personal information be shared?",
    a: "No. We only collect district and age group for dialect analysis. Your name and contact info are optional and never published.",
  },
];

export default function ContributeVoicePage() {
  return (
    <PageWrapper>
      <SectionHeading
        title="Contribute Your Voice"
        subtitle="Help us build the first open-source Awadhi speech recognition model"
        align="center"
      />

      {/* Why this matters */}
      <RevealOnScroll>
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-charcoal-light md:text-xl">
          <p>
            38 million people speak Awadhi. Yet there is no speech recognition
            model, no voice assistant, and no speech-to-text system that
            understands a single word of it. Siri understands Swedish (10
            million speakers). Alexa understands Finnish (5 million speakers).
            Neither understands Awadhi.
          </p>
          <p>
            We want to change that. But to build a speech recognition model, we
            need something that doesn&apos;t exist yet: a dataset of Awadhi
            speech recordings paired with text. That is where you come in.
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

      {/* Sample sentences */}
      <section className="space-y-10">
        <SectionHeading
          title="Sample Sentences"
          subtitle="Read any of these aloud in your natural Awadhi, or speak freely on any topic"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {sampleSentences.map((s, i) => (
            <RevealOnScroll key={i} delay={i * 0.05}>
              <div className="rounded-lg border border-parchment bg-cream-dark/70 p-5 transition-colors hover:border-saffron/30">
                <p className="font-playfair text-xl text-charcoal">
                  {s.awadhi}
                </p>
                <p className="mt-2 text-sm italic text-slate">{s.roman}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <Divider />

      {/* Recording guidelines */}
      <section className="space-y-8">
        <SectionHeading
          title="Recording Guidelines"
          subtitle="A few tips for the best quality"
        />

        <RevealOnScroll>
          <div className="mx-auto max-w-3xl">
            <ul className="space-y-4 text-base leading-relaxed text-charcoal-light md:text-lg">
              <li className="flex gap-3">
                <span className="mt-1 shrink-0 text-saffron">&#10003;</span>
                <span>Record in a quiet environment with minimal background noise</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 shrink-0 text-saffron">&#10003;</span>
                <span>Speak naturally at your normal pace, as you would with family</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 shrink-0 text-saffron">&#10003;</span>
                <span>Each recording should be between 5 and 15 seconds</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 shrink-0 text-saffron">&#10003;</span>
                <span>Multiple recordings are welcome. The more, the better</span>
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

      {/* Submit CTA */}
      <RevealOnScroll>
        <div className="flex flex-col items-center gap-6 text-center">
          <h3 className="font-playfair text-3xl font-bold text-charcoal md:text-4xl">
            Ready to Contribute?
          </h3>
          <p className="max-w-2xl text-lg text-charcoal-light md:text-xl">
            Upload your Awadhi voice recordings through our submission form.
            Every recording brings us closer to giving Awadhi a voice in the
            digital world.
          </p>
          <a
            href="https://forms.gle/PLACEHOLDER"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-lg bg-saffron px-10 py-4 text-lg font-semibold text-cream transition-colors hover:bg-saffron-dark"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
            Submit Your Recording
          </a>
          <p className="text-sm text-slate">
            The form will ask for your audio file, the sentence you read, your
            district, and age group. Name and contact are optional.
          </p>
        </div>
      </RevealOnScroll>

      <Divider />

      {/* FAQ */}
      <section className="space-y-8">
        <SectionHeading
          title="Frequently Asked Questions"
        />

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
      <PullQuote quote="Every voice recorded is a vote for Awadhi's future in the digital world. Yours could be the one that teaches a machine to listen." />
    </PageWrapper>
  );
}
