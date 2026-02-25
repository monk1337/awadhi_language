"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ANIMATION_DEFAULTS } from "@/lib/constants";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import PullQuote from "@/components/shared/PullQuote";

interface TreeNode {
  label: string;
  branch: "hindi" | "awadhi" | "shared";
  children?: string[];
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DEFAULTS.duration,
      ease: ANIMATION_DEFAULTS.ease,
    },
  },
};

function NodeBox({
  label,
  branch,
  className,
}: {
  label: string;
  branch: TreeNode["branch"];
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        "rounded-lg border-2 px-4 py-3 text-center font-playfair text-sm font-semibold leading-tight shadow-sm md:px-5 md:py-3.5 md:text-base",
        branch === "hindi" &&
          "border-slate-light/40 bg-slate/5 text-slate",
        branch === "awadhi" &&
          "border-saffron/40 bg-saffron/10 text-saffron-dark",
        branch === "shared" &&
          "border-amber/40 bg-amber/10 text-charcoal",
        className,
      )}
    >
      {label}
    </motion.div>
  );
}

function Connector({
  branch,
  className,
}: {
  branch: TreeNode["branch"];
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        "mx-auto h-8 w-0.5 md:h-10",
        branch === "hindi" && "bg-slate-light/40",
        branch === "awadhi" && "bg-saffron/40",
        branch === "shared" && "bg-amber/40",
        className,
      )}
    />
  );
}

function SplitConnector() {
  return (
    <motion.div
      variants={fadeUp}
      className="relative mx-auto h-8 w-full max-w-xs md:h-10 md:max-w-md"
    >
      {/* Vertical stem from parent */}
      <div className="absolute left-1/2 top-0 h-1/2 w-0.5 -translate-x-px bg-amber/40" />
      {/* Horizontal bar */}
      <div className="absolute left-[25%] top-1/2 h-0.5 w-[50%] bg-amber/40 md:left-[20%] md:w-[60%]" />
      {/* Left drop */}
      <div className="absolute left-[25%] top-1/2 h-1/2 w-0.5 -translate-x-px bg-slate-light/40 md:left-[20%]" />
      {/* Right drop */}
      <div className="absolute right-[25%] top-1/2 h-1/2 w-0.5 translate-x-px bg-saffron/40 md:right-[20%]" />
    </motion.div>
  );
}

export default function FamilyTree() {
  return (
    <section className="py-16 md:py-24">
      <RevealOnScroll direction="up">
        <h3 className="mb-2 text-center font-playfair text-2xl font-bold text-charcoal md:text-3xl">
          Different Ancestors, Different Languages
        </h3>
        <p className="mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed text-slate md:text-lg">
          Awadhi and Hindi do not share a parent language. They descend from
          different Prakrit branches and diverged over a thousand years ago.
        </p>
      </RevealOnScroll>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={ANIMATION_DEFAULTS.viewport}
        className="mx-auto max-w-2xl"
      >
        {/* Root: Proto-Indo-Aryan */}
        <div className="flex justify-center">
          <NodeBox label="Proto-Indo-Aryan" branch="shared" />
        </div>

        <Connector branch="shared" />

        {/* Middle Indo-Aryan split */}
        <SplitConnector />

        {/* Two Prakrit branches */}
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          <div className="flex justify-center">
            <NodeBox label="Sauraseni Prakrit" branch="hindi" />
          </div>
          <div className="flex justify-center">
            <NodeBox label="Ardhamagadhi Prakrit" branch="awadhi" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8">
          <Connector branch="hindi" />
          <Connector branch="awadhi" />
        </div>

        {/* Apabhramsha stage */}
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          <div className="flex justify-center">
            <NodeBox label="Sauraseni Apabhramsha" branch="hindi" />
          </div>
          <div className="flex justify-center">
            <NodeBox label="Eastern Apabhramsha" branch="awadhi" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8">
          <Connector branch="hindi" />
          <Connector branch="awadhi" />
        </div>

        {/* Regional language groups */}
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          <div className="flex justify-center">
            <NodeBox
              label="Western Hindi (Khari Boli, Braj)"
              branch="hindi"
            />
          </div>
          <div className="flex justify-center">
            <NodeBox
              label="Eastern Hindi (Awadhi, Bagheli, Chhattisgarhi)"
              branch="awadhi"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8">
          <Connector branch="hindi" />
          <Connector branch="awadhi" />
        </div>

        {/* Modern languages */}
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          <div className="flex justify-center">
            <NodeBox
              label="Standard Hindi"
              branch="hindi"
              className="text-base font-bold md:text-lg"
            />
          </div>
          <div className="flex justify-center">
            <NodeBox
              label="Awadhi"
              branch="awadhi"
              className="text-base font-bold md:text-lg"
            />
          </div>
        </div>
      </motion.div>

      {/* Legend */}
      <div className="mx-auto mt-8 flex items-center justify-center gap-6 text-sm text-slate">
        <div className="flex items-center gap-2">
          <div className="size-3 rounded-sm bg-slate-light/40" />
          <span>Hindi branch</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="size-3 rounded-sm bg-saffron/40" />
          <span>Awadhi branch</span>
        </div>
      </div>

      {/* Closing quote */}
      <div className="mx-auto mt-12 max-w-3xl">
        <PullQuote
          quote="Calling Awadhi a 'dialect of Hindi' is roughly equivalent to calling Portuguese a 'dialect of Spanish'"
        />
      </div>
    </section>
  );
}
