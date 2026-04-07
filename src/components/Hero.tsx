"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GooglePlayButton, IOSWaitlistButton } from "./StoreButtons";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

const fadeScale = (delay: number) => ({
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-72px)] items-center justify-center overflow-hidden">
      {/* Subtle background orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 z-0 h-[500px] w-[500px] rounded-full bg-[#6D5BD0] opacity-[0.04] blur-[140px] will-change-transform"
        style={{ animation: "floatA 20s infinite ease-in-out" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-10 z-0 h-[400px] w-[400px] rounded-full bg-[#6D5BD0] opacity-[0.035] blur-[120px] will-change-transform"
        style={{ animation: "floatB 25s infinite ease-in-out" }}
      />

      <div className="relative z-10 flex flex-col items-center px-5 py-20 text-center md:py-16">
        {/* Pill */}
        <motion.span
          {...fadeUp(0.15)}
          className="inline-flex items-center gap-2 rounded-full border border-[rgba(109,91,208,0.15)] bg-[rgba(109,91,208,0.06)] px-5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#6D5BD0]"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#6D5BD0]" />
          AI Fitness Coach
        </motion.span>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.4)}
          className="mx-auto mt-8 max-w-[740px] font-[family-name:var(--font-heading)] text-[40px] font-[800] leading-[1.06] tracking-[-0.04em] text-[#111111] sm:text-[52px] md:text-[64px]"
        >
          The only coach you&rsquo;ll
          <br />
          <span className="bg-gradient-to-r from-[#6D5BD0] to-[#8B7FE8] bg-clip-text text-transparent">
            ever need.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.6)}
          className="mx-auto mt-6 max-w-[520px] text-base leading-[1.75] text-[#6B7280] sm:text-lg"
        >
          Personalized workouts, carb-cycled meal plans, and an AI coach that
          adapts to your body every single day.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.8)}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-5"
        >
          <GooglePlayButton />
          <IOSWaitlistButton />
        </motion.div>

        {/* Phone mockup */}
        <motion.div {...fadeScale(1.0)} className="mt-16 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 -z-10 scale-[0.8] rounded-full bg-[#6D5BD0] opacity-[0.06] blur-[80px]" />
            <div
              className="relative h-[460px] w-[220px] overflow-hidden rounded-[36px] border-[6px] border-[#ECEAE6] sm:h-[540px] sm:w-[260px] md:h-[580px] md:w-[280px]"
              style={{
                background: "linear-gradient(180deg, #FFFFFF 0%, #F8F8F6 40%, #F2F2F0 100%)",
                boxShadow: "0 25px 80px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)",
              }}
            >
              {/* Status bar */}
              <div className="flex items-center justify-between px-5 pt-3">
                <span className="text-[10px] font-medium text-[#9CA3B8]">9:41</span>
                <div className="flex items-center gap-1">
                  <div className="h-1.5 w-3 rounded-full bg-[#9CA3B8]" />
                  <div className="h-1.5 w-1.5 rounded-full bg-[#9CA3B8]" />
                </div>
              </div>

              {/* Header */}
              <div className="mt-2 flex items-center gap-2.5 px-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(109,91,208,0.08)]">
                  <Image src="/images/icon.png" alt="" width={20} height={20} className="rounded-full" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#111111]">Coa AI Coach</p>
                  <p className="text-[9px] text-[#6D5BD0]">Online</p>
                </div>
              </div>

              {/* Chat */}
              <div className="mt-4 flex flex-col gap-2.5 px-3">
                <div className="max-w-[80%] rounded-2xl rounded-tl-md bg-[rgba(109,91,208,0.07)] px-3.5 py-2.5">
                  <p className="text-[10px] leading-[1.5] text-[#111111]">Great session today! Your bench press is up 5kg this month</p>
                </div>
                <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-[rgba(109,91,208,0.07)] px-3.5 py-2.5">
                  <p className="text-[10px] leading-[1.5] text-[#6B7280]">Tomorrow is push day. I&apos;ve increased your working weight on overhead press.</p>
                </div>
                <div className="ml-auto max-w-[70%] rounded-2xl rounded-tr-md bg-[#111111] px-3.5 py-2.5">
                  <p className="text-[10px] leading-[1.5] text-white">Should I deload next week?</p>
                </div>
                <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-[rgba(109,91,208,0.07)] px-3.5 py-2.5">
                  <p className="text-[10px] leading-[1.5] text-[#111111]">Not yet — your recovery metrics look solid. Let&apos;s push one more week.</p>
                </div>
              </div>

              {/* Input */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2 border-t border-[#E5E5E3] bg-white px-3 py-3">
                <div className="flex-1 rounded-full border border-[#E5E5E3] bg-white px-3.5 py-2">
                  <span className="text-[10px] text-[#9CA3B8]">Message your coach...</span>
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6D5BD0]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </div>
              </div>

              {/* Notch */}
              <div className="absolute left-1/2 top-0 h-[24px] w-[100px] -translate-x-1/2 rounded-b-2xl bg-[#F5F5F3]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
