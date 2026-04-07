"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Dumbbell, UtensilsCrossed, Bot, Camera, Mic, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureCard {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

const FEATURES: FeatureCard[] = [
  { icon: Dumbbell, title: "Personalized Workouts", description: "Push/Pull/Legs split built around your experience level, available equipment, and schedule. Progressive overload built in — your plan evolves as you get stronger.", iconBg: "rgba(109,91,208,0.08)", iconColor: "#6D5BD0" },
  { icon: UtensilsCrossed, title: "Carb-Cycled Meal Plans", description: "High carb on training days, low carb on rest days, weekly refeed. Every meal hits your macros and adapts to your food preferences.", iconBg: "rgba(16,185,129,0.08)", iconColor: "#10B981" },
  { icon: Bot, title: "AI Coach Chat", description: "A coach that actually knows your body, your history, and your goals. Ask anything — form checks, substitutions, motivation. Available 24/7.", iconBg: "rgba(109,91,208,0.08)", iconColor: "#6D5BD0" },
  { icon: Camera, title: "Progress Photo Tracking", description: "Front, side, and back progress photos with AI-powered body composition analysis. See changes your scale can't measure.", iconBg: "rgba(245,158,11,0.08)", iconColor: "#F59E0B" },
  { icon: Mic, title: "Voice Messages", description: "Talk to your coach like you'd text a friend. Send voice notes and get responses that actually understand context.", iconBg: "rgba(239,68,68,0.08)", iconColor: "#EF4444" },
  { icon: TrendingUp, title: "Adaptive Intelligence", description: "Your plan adjusts based on check-ins, weight trends, energy levels, and progress. The longer you use it, the smarter it gets.", iconBg: "rgba(59,130,246,0.08)", iconColor: "#3B82F6" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.1, once: true });

  return (
    <section id="features" ref={sectionRef} className="py-16 md:py-[80px] lg:py-[120px]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col items-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(109,91,208,0.15)] bg-[rgba(109,91,208,0.06)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#6D5BD0]">
            Features
          </span>
          <h2 className="mx-auto mt-5 max-w-[600px] text-center font-[family-name:var(--font-heading)] text-[30px] font-[700] leading-[1.1] tracking-[-0.03em] text-[#111111] sm:text-[36px] lg:text-[44px]">
            Everything you need.{" "}
            <span className="text-[#9CA3B8]">Nothing you don&apos;t.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[460px] text-center text-base text-[#6B7280] sm:text-lg">
            Six tools that work together so you can focus on showing up.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
              className="group rounded-[20px] border border-[#E5E5E3] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D1D0CC] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: feature.iconBg }}>
                <feature.icon size={22} style={{ color: feature.iconColor }} />
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-heading)] text-lg font-semibold text-[#111111]">{feature.title}</h3>
              <p className="mt-2.5 text-sm leading-[1.7] text-[#6B7280]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
