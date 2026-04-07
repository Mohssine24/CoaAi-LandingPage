"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { UserCircle, Sparkles, Play } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step { number: number; title: string; description: string; icon: LucideIcon; }

const STEPS: Step[] = [
  { number: 1, title: "Tell us about you", description: "Age, weight, goals, schedule, experience. 2 minutes. Your coach needs to know who it\u2019s working with.", icon: UserCircle },
  { number: 2, title: "Get your plan", description: "AI generates your workout split and carb-cycled meal plan instantly. Tailored to your body, not a template.", icon: Sparkles },
  { number: 3, title: "Start training", description: "Open the app, follow today\u2019s workout, hit your meals. Your coach checks in and adapts the plan as you progress.", icon: Play },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.15, once: true });

  return (
    <section id="how-it-works" ref={sectionRef} className="py-16 md:py-[80px] lg:py-[120px]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6, ease: EASE }} className="flex flex-col items-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(109,91,208,0.15)] bg-[rgba(109,91,208,0.06)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#6D5BD0]">How It Works</span>
          <h2 className="mt-5 max-w-[700px] text-center font-[family-name:var(--font-heading)] text-[30px] font-[700] leading-[1.1] tracking-[-0.03em] text-[#111111] sm:text-[36px] lg:text-[44px]">
            From download to first workout{" "}<span className="text-[#9CA3B8]">in 5 minutes.</span>
          </h2>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-[900px] grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-0">
          {STEPS.map((step, i) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6, ease: EASE, delay: i * 0.15 }} className="relative flex flex-col items-center text-center">
              {i < STEPS.length - 1 && (
                <div className="absolute left-[calc(50%+32px)] top-[28px] hidden h-[2px] w-[calc(100%-64px)] lg:block">
                  <div className="h-full w-full border-t-2 border-dashed border-[#E5E5E3]" />
                </div>
              )}
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(109,91,208,0.12)] bg-[rgba(109,91,208,0.06)]">
                  <step.icon size={24} className="text-[#6D5BD0]" />
                </div>
                <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#111111] text-[11px] font-[800] text-white shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-heading)] text-xl font-semibold text-[#111111]">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-[260px] text-sm leading-[1.7] text-[#6B7280]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
