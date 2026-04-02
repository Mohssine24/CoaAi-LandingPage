"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Dumbbell,
  UtensilsCrossed,
  Bot,
  Camera,
  Mic,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureCard {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

const FEATURES: FeatureCard[] = [
  {
    icon: Dumbbell,
    title: "Personalized Workouts",
    description:
      "Push/Pull/Legs split built around your experience level, available equipment, and schedule. Progressive overload built in — your plan evolves as you get stronger.",
    iconBg: "rgba(139,133,242,0.12)",
    iconColor: "#8B85F2",
  },
  {
    icon: UtensilsCrossed,
    title: "Carb-Cycled Meal Plans",
    description:
      "High carb on training days, low carb on rest days, weekly refeed. Every meal hits your macros and adapts to your food preferences.",
    iconBg: "rgba(96,211,148,0.12)",
    iconColor: "#60D394",
  },
  {
    icon: Bot,
    title: "AI Coach Chat",
    description:
      "A coach that actually knows your body, your history, and your goals. Ask anything — form checks, substitutions, motivation. Available 24/7.",
    iconBg: "rgba(139,133,242,0.12)",
    iconColor: "#8B85F2",
  },
  {
    icon: Camera,
    title: "Progress Photo Tracking",
    description:
      "Front, side, and back progress photos with AI-powered body composition analysis. See changes your scale can't measure.",
    iconBg: "rgba(240,176,64,0.12)",
    iconColor: "#F0B040",
  },
  {
    icon: Mic,
    title: "Voice Messages",
    description:
      "Talk to your coach like you'd text a friend. Send voice notes and get responses that actually understand context.",
    iconBg: "rgba(240,96,96,0.12)",
    iconColor: "#F06060",
  },
  {
    icon: TrendingUp,
    title: "Adaptive Intelligence",
    description:
      "Your plan adjusts based on check-ins, weight trends, energy levels, and progress. The longer you use it, the smarter it gets.",
    iconBg: "rgba(96,176,240,0.12)",
    iconColor: "#60B0F0",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;
const CARD_DELAYS = [0, 0.1, 0.2, 0.3, 0.4, 0.5];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.1, once: true });

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-16 md:py-[80px] lg:py-[120px]"
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col items-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(88,86,214,0.12)] bg-[rgba(88,86,214,0.08)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-[#5856D6]">
            Features
          </span>

          <h2 className="mx-auto mt-5 max-w-[600px] text-center text-[30px] font-[800] leading-[1.1] tracking-[-0.02em] text-[#1A1A22] sm:text-[36px] lg:text-[44px]">
            Everything you need.{" "}
            <span className="text-[#6B6B7A]">Nothing you don&apos;t.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[460px] text-center text-base text-[#6B6B7A] sm:text-lg">
            Six tools that work together so you can focus on showing up.
          </p>
        </motion.div>

        {/* Card grid */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={
                inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{
                duration: 0.6,
                ease: EASE,
                delay: CARD_DELAYS[i],
              }}
              className="group relative overflow-hidden rounded-[20px] border border-[rgba(0,0,0,0.06)] bg-[#FFFFFF] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(0,0,0,0.10)] hover:bg-[#F8F7FC] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
            >
              {/* Subtle gradient on hover */}
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-[0.06]"
                style={{ background: feature.iconColor }}
              />

              {/* Icon */}
              <div
                className="relative flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ background: feature.iconBg }}
              >
                <feature.icon
                  size={22}
                  style={{ color: feature.iconColor }}
                />
              </div>

              {/* Title */}
              <h3 className="relative mt-5 text-lg font-bold text-[#1A1A22]">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="relative mt-2.5 text-sm leading-[1.65] text-[#6B6B7A]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
