"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { encodeWAV } from "@/lib/wav-encoder";

type RecordingState =
  | "loading"
  | "idle"
  | "recording"
  | "recorded"
  | "submitting"
  | "submitted";

interface Sentence {
  id: number;
  hindi: string;
  english: string;
}

const DISTRICTS = [
  "Lucknow",
  "Ayodhya (Faizabad)",
  "Sultanpur",
  "Barabanki",
  "Rae Bareli",
  "Unnao",
  "Pratapgarh",
  "Amethi",
  "Ambedkar Nagar",
  "Gonda",
  "Balrampur",
  "Bahraich",
  "Shravasti",
  "Lakhimpur Kheri",
  "Sitapur",
  "Hardoi",
  "Other UP District",
  "Nepal Terai",
  "Diaspora",
  "Other",
];

const AGE_GROUPS = ["18–25", "26–35", "36–50", "50+"];
const GENDERS = ["Male", "Female", "Prefer not to say"];

const fadeVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export default function VoiceRecorder() {
  const [state, setState] = useState<RecordingState>("loading");
  const [sentences, setSentences] = useState<Sentence[]>([]);
  const [current, setCurrent] = useState<Sentence | null>(null);
  const [duration, setDuration] = useState(0);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [district, setDistrict] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [gender, setGender] = useState("");
  const [sessionCount, setSessionCount] = useState(0);
  const [levels, setLevels] = useState<number[]>(new Array(40).fill(0));
  const [error, setError] = useState<string | null>(null);
  const [showOnboarding, setShowOnboarding] = useState(false);

  // Audio refs
  const audioCtxRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Float32Array[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const animRef = useRef<number | null>(null);
  const playbackRef = useRef<HTMLAudioElement | null>(null);

  // Check if metadata is complete
  const hasMetadata = district && ageGroup && gender;

  // Load sentences
  useEffect(() => {
    fetch("/sentences.json")
      .then((r) => r.json())
      .then((data: Sentence[]) => {
        setSentences(data);
        pickRandom(data);
        setState("idle");
      });
  }, []);

  // Restore metadata from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("awadhi-voice-meta");
    if (saved) {
      const meta = JSON.parse(saved);
      if (meta.district) setDistrict(meta.district);
      if (meta.ageGroup) setAgeGroup(meta.ageGroup);
      if (meta.gender) setGender(meta.gender);
      if (meta.count) setSessionCount(meta.count);
    }
    if (!localStorage.getItem("awadhi-session-id")) {
      localStorage.setItem(
        "awadhi-session-id",
        crypto.randomUUID(),
      );
    }
  }, []);

  // Save metadata to localStorage
  useEffect(() => {
    localStorage.setItem(
      "awadhi-voice-meta",
      JSON.stringify({ district, ageGroup, gender, count: sessionCount }),
    );
  }, [district, ageGroup, gender, sessionCount]);

  const pickRandom = useCallback(
    (pool?: Sentence[]) => {
      const list = pool || sentences;
      if (list.length === 0) return;
      const idx = Math.floor(Math.random() * list.length);
      setCurrent(list[idx]);
    },
    [sentences],
  );

  // Waveform animation loop
  const animateWaveform = useCallback(() => {
    if (!analyserRef.current) return;
    const data = new Uint8Array(analyserRef.current.frequencyBinCount);
    analyserRef.current.getByteFrequencyData(data);
    const bars = 40;
    const step = Math.floor(data.length / bars);
    const newLevels: number[] = [];
    for (let i = 0; i < bars; i++) {
      newLevels.push(data[i * step] / 255);
    }
    setLevels(newLevels);
    animRef.current = requestAnimationFrame(animateWaveform);
  }, []);

  const startRecording = async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          channelCount: 1,
          sampleRate: 48000,
          echoCancellation: false,
          noiseSuppression: false,
          autoGainControl: false,
        },
      });
      streamRef.current = stream;

      const audioCtx = new AudioContext({ sampleRate: 48000 });
      audioCtxRef.current = audioCtx;

      const source = audioCtx.createMediaStreamSource(stream);
      sourceRef.current = source;

      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;
      analyserRef.current = analyser;
      source.connect(analyser);

      const processor = audioCtx.createScriptProcessor(4096, 1, 1);
      processorRef.current = processor;
      chunksRef.current = [];

      processor.onaudioprocess = (e) => {
        const data = e.inputBuffer.getChannelData(0);
        chunksRef.current.push(new Float32Array(data));
      };

      source.connect(processor);
      processor.connect(audioCtx.destination);

      setDuration(0);
      setState("recording");

      timerRef.current = setInterval(() => {
        setDuration((d) => d + 1);
      }, 1000);

      animRef.current = requestAnimationFrame(animateWaveform);
    } catch {
      setError(
        "Could not access microphone. Please allow microphone permission and try again.",
      );
    }
  };

  // Handle mic button click: show onboarding if first time, else start recording
  const handleMicClick = () => {
    if (!hasMetadata) {
      setShowOnboarding(true);
    } else {
      startRecording();
    }
  };

  // Complete onboarding and start recording
  const completeOnboarding = () => {
    if (!district || !ageGroup || !gender) return;
    setShowOnboarding(false);
    startRecording();
  };

  const stopRecording = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (animRef.current) cancelAnimationFrame(animRef.current);

    processorRef.current?.disconnect();
    sourceRef.current?.disconnect();
    streamRef.current?.getTracks().forEach((t) => t.stop());

    const sampleRate = audioCtxRef.current?.sampleRate || 48000;
    audioCtxRef.current?.close();

    const blob = encodeWAV(chunksRef.current, sampleRate);
    const url = URL.createObjectURL(blob);

    setAudioBlob(blob);
    setAudioUrl(url);
    setLevels(new Array(40).fill(0));
    setState("recorded");
  }, []);

  // Auto-stop at 30 seconds
  useEffect(() => {
    if (state === "recording" && duration >= 30) {
      stopRecording();
    }
  }, [state, duration, stopRecording]);

  const reRecord = () => {
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    setAudioBlob(null);
    setAudioUrl(null);
    setDuration(0);
    setState("idle");
  };

  const playBack = () => {
    if (!audioUrl) return;
    if (playbackRef.current) {
      playbackRef.current.pause();
    }
    const audio = new Audio(audioUrl);
    playbackRef.current = audio;
    audio.play();
  };

  const submit = async () => {
    if (!audioBlob || !current) return;
    setState("submitting");

    try {
      const formData = new FormData();
      formData.append("audio", audioBlob, `sentence_${current.id}.wav`);
      formData.append("sentence_id", String(current.id));
      formData.append("session_id", localStorage.getItem("awadhi-session-id") || "");
      formData.append("district", district);
      formData.append("age_group", ageGroup);
      formData.append("gender", gender);
      formData.append("duration", String(duration));

      const res = await fetch("/api/upload-voice", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      setSessionCount((c) => c + 1);
      setState("submitted");

      // Clean up
      if (audioUrl) URL.revokeObjectURL(audioUrl);
      setAudioBlob(null);
      setAudioUrl(null);
    } catch {
      setError("Upload failed. Please try again.");
      setState("recorded");
    }
  };

  const nextSentence = () => {
    setDuration(0);
    pickRandom();
    setState("idle");
  };

  const formatTime = (s: number) =>
    `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  if (state === "loading") {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-parchment border-t-saffron" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      {/* Onboarding modal overlay */}
      <AnimatePresence>
        {showOnboarding && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/60 backdrop-blur-sm px-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowOnboarding(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-parchment bg-cream p-6 shadow-2xl sm:p-8"
            >
              {/* Header */}
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-saffron/10">
                  <svg className="h-7 w-7 text-saffron" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-bold text-charcoal sm:text-2xl">
                  Before You Start
                </h3>
                <p className="mt-1 text-sm text-slate">
                  Quick details + instructions (one-time only)
                </p>
              </div>

              {/* Instructions */}
              <div className="mt-6 rounded-xl bg-saffron/5 border border-saffron/20 p-4 sm:p-5">
                <h4 className="font-semibold text-charcoal text-xs uppercase tracking-wider mb-3">
                  How this works
                </h4>
                <ul className="space-y-2 text-sm text-charcoal-light leading-relaxed">
                  <li className="flex gap-2.5">
                    <span className="mt-0.5 shrink-0 text-saffron font-bold">1.</span>
                    <span>We show you a sentence in <strong>Hindi</strong> and <strong>English</strong></span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-0.5 shrink-0 text-saffron font-bold">2.</span>
                    <span>You <strong>say that sentence in your Awadhi</strong>, translate it naturally</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-0.5 shrink-0 text-saffron font-bold">3.</span>
                    <span><strong>Do not read the Hindi as-is.</strong> Say it in your own Awadhi dialect</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-0.5 shrink-0 text-saffron font-bold">4.</span>
                    <span>Speak <strong>slowly and clearly</strong>, as you would explain something to a child</span>
                  </li>
                </ul>

                <div className="mt-3 rounded-lg bg-cream p-3 border border-parchment">
                  <p className="text-sm text-saffron-dark font-semibold">
                    हिंदी वाक्य को वैसे का वैसे मत बोलिए, उसे अपनी अवधी में बोलिए।
                  </p>
                  <p className="text-xs text-slate mt-1">
                    Don&apos;t repeat the Hindi sentence. Translate it into your Awadhi.
                  </p>
                </div>
              </div>

              {/* Metadata form */}
              <div className="mt-6 space-y-3">
                <div>
                  <label htmlFor="onb-district" className="mb-1 block text-sm font-medium text-charcoal">
                    Which district are you from? <span className="text-terracotta">*</span>
                  </label>
                  <select
                    id="onb-district"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full rounded-lg border border-parchment bg-cream-dark/30 px-3 py-2.5 text-sm text-charcoal outline-none transition-colors focus:border-saffron/50"
                  >
                    <option value="">Select your district</option>
                    {DISTRICTS.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label htmlFor="onb-age" className="mb-1 block text-sm font-medium text-charcoal">
                      Age group <span className="text-terracotta">*</span>
                    </label>
                    <select
                      id="onb-age"
                      value={ageGroup}
                      onChange={(e) => setAgeGroup(e.target.value)}
                      className="w-full rounded-lg border border-parchment bg-cream-dark/30 px-3 py-2.5 text-sm text-charcoal outline-none transition-colors focus:border-saffron/50"
                    >
                      <option value="">Select age group</option>
                      {AGE_GROUPS.map((a) => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="onb-gender" className="mb-1 block text-sm font-medium text-charcoal">
                      Gender <span className="text-terracotta">*</span>
                    </label>
                    <select
                      id="onb-gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="w-full rounded-lg border border-parchment bg-cream-dark/30 px-3 py-2.5 text-sm text-charcoal outline-none transition-colors focus:border-saffron/50"
                    >
                      <option value="">Select gender</option>
                      {GENDERS.map((g) => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Start button */}
              <div className="mt-6 text-center">
                <button
                  type="button"
                  onClick={completeOnboarding}
                  disabled={!district || !ageGroup || !gender}
                  className="inline-flex items-center gap-2 rounded-full bg-saffron px-8 py-3 text-base font-semibold text-cream transition-all hover:bg-saffron-dark disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                  Start Recording
                </button>
                <p className="mt-2 text-xs text-slate/60">
                  Your details are saved locally and never shared publicly
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sentence display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current?.id}
          variants={fadeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-parchment bg-cream-dark/60 p-8 text-center backdrop-blur-sm"
        >
          {/* Glowing instruction */}
          <div className="inline-block rounded-full bg-saffron/10 px-5 py-2 nav-glow">
            <p className="text-sm font-semibold text-saffron-dark md:text-base">
              इस वाक्य को अवधी में बोलिए
            </p>
            <p className="text-xs text-saffron-dark/70">
              Say this sentence in your Awadhi
            </p>
          </div>

          <p className="mt-6 font-devanagari text-3xl leading-relaxed text-charcoal md:text-4xl">
            {current?.hindi}
          </p>

          <p className="mt-3 text-lg text-slate md:text-xl">
            {current?.english}
          </p>

          <button
            type="button"
            onClick={() => pickRandom()}
            disabled={state === "recording"}
            className="mt-4 text-sm text-saffron-dark/70 underline underline-offset-2 transition-colors hover:text-saffron-dark disabled:opacity-40"
          >
            Skip to another sentence
          </button>
        </motion.div>
      </AnimatePresence>

      {/* Waveform visualizer */}
      <div className="mt-8 flex h-20 items-end justify-center gap-[3px]">
        {levels.map((level, i) => (
          <motion.div
            key={i}
            className="w-[5px] rounded-full bg-saffron/70"
            animate={{
              height:
                state === "recording"
                  ? Math.max(4, level * 80)
                  : 4,
            }}
            transition={{ duration: 0.08, ease: "easeOut" }}
          />
        ))}
      </div>

      {/* Timer */}
      <AnimatePresence>
        {(state === "recording" || state === "recorded") && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-3 text-center font-data text-2xl text-charcoal"
          >
            {formatTime(duration)}
            {state === "recording" && (
              <span className="ml-2 text-sm text-saffron">
                Recording
              </span>
            )}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Controls */}
      <div className="mt-8 flex flex-col items-center gap-4">
        <AnimatePresence mode="wait">
          {/* IDLE: Record button */}
          {state === "idle" && (
            <motion.button
              key="record"
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              type="button"
              onClick={handleMicClick}
              className="group flex h-20 w-20 items-center justify-center rounded-full bg-saffron text-cream shadow-lg transition-all duration-300 hover:bg-saffron-dark hover:shadow-xl active:scale-95"
            >
              <svg
                className="h-8 w-8 transition-transform group-hover:scale-110"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </motion.button>
          )}

          {/* RECORDING: Stop button */}
          {state === "recording" && (
            <motion.button
              key="stop"
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              type="button"
              onClick={stopRecording}
              className="flex h-20 w-20 items-center justify-center rounded-full bg-terracotta text-cream shadow-lg transition-all hover:bg-terracotta-dark active:scale-95"
            >
              <motion.div
                className="h-7 w-7 rounded-md bg-cream"
                animate={{ scale: [1, 0.9, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.button>
          )}

          {/* RECORDED: Action buttons */}
          {state === "recorded" && (
            <motion.div
              key="actions"
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex items-center gap-4"
            >
              <button
                type="button"
                onClick={reRecord}
                className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-parchment bg-cream text-slate transition-colors hover:border-saffron/40 hover:text-charcoal"
                title="Re-record"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>

              <button
                type="button"
                onClick={playBack}
                className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-parchment bg-cream text-slate transition-colors hover:border-saffron/40 hover:text-charcoal"
                title="Play back"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>

              <button
                type="button"
                onClick={submit}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-vitality-green text-cream shadow-lg transition-all hover:shadow-xl active:scale-95"
                title="Submit"
              >
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </button>
            </motion.div>
          )}

          {/* SUBMITTING: Spinner */}
          {state === "submitting" && (
            <motion.div
              key="submitting"
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col items-center gap-3"
            >
              <div className="h-12 w-12 animate-spin rounded-full border-3 border-parchment border-t-saffron" />
              <p className="text-sm text-slate">Uploading your recording...</p>
            </motion.div>
          )}

          {/* SUBMITTED: Success */}
          {state === "submitted" && (
            <motion.div
              key="submitted"
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col items-center gap-4"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-vitality-green text-cream"
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>

              <p className="font-playfair text-xl font-semibold text-charcoal">
                Thank you!
              </p>

              <button
                type="button"
                onClick={nextSentence}
                className="rounded-full bg-saffron px-8 py-3 text-base font-semibold text-cream transition-colors hover:bg-saffron-dark"
              >
                Record Next Sentence
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Label under record button */}
        {state === "idle" && (
          <div className="text-center">
            <p className="text-sm text-slate">Tap to start recording</p>
            <p className="mt-1 text-xs text-slate/60">धीरे और साफ़ बोलिए · Speak slowly and clearly</p>
          </div>
        )}
        {state === "recording" && (
          <p className="text-sm text-slate">Tap the square to stop</p>
        )}
      </div>

      {/* Error message */}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-4 text-center text-sm text-terracotta"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Compact metadata display (only when metadata is set) */}
      {hasMetadata && (
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-slate">
          <span className="rounded-full bg-parchment/40 px-3 py-1">{district}</span>
          <span className="rounded-full bg-parchment/40 px-3 py-1">{ageGroup}</span>
          <span className="rounded-full bg-parchment/40 px-3 py-1">{gender}</span>
          <button
            type="button"
            onClick={() => setShowOnboarding(true)}
            className="text-saffron-dark/70 underline underline-offset-2 hover:text-saffron-dark"
          >
            Edit
          </button>
        </div>
      )}

      {/* Session progress */}
      <div className="mt-6 text-center">
        <p className="text-sm text-slate">
          You&apos;ve recorded{" "}
          <span className="font-semibold text-saffron-dark">
            {sessionCount}
          </span>{" "}
          sentence{sessionCount !== 1 ? "s" : ""} this session
        </p>
        <div className="mx-auto mt-2 h-1.5 w-48 overflow-hidden rounded-full bg-parchment/60">
          <motion.div
            className="h-full rounded-full bg-saffron"
            initial={{ width: 0 }}
            animate={{
              width: `${Math.min(100, (sessionCount / 20) * 100)}%`,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
        <p className="mt-1 text-xs text-slate/60">Goal: 20 per session</p>
      </div>

      {/* Quality badge */}
      <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate/60">
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        Recording quality: Lossless WAV, 48kHz, 16-bit
      </div>
    </div>
  );
}
