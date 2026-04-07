"use client";

import { useRef, useCallback, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Dumbbell, UtensilsCrossed } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

interface PhoneScreen { label: string; caption: string; content: React.ReactNode; }

function ChatScreen() {
  return (
    <div className="flex flex-col px-3 pt-10">
      <div className="mb-3 flex items-center gap-2 px-1">
        <div className="h-6 w-6 rounded-full bg-[rgba(109,91,208,0.1)]" />
        <div>
          <div className="h-2 w-16 rounded-full bg-[rgba(0,0,0,0.06)]" />
          <div className="mt-1 h-1.5 w-8 rounded-full bg-[rgba(109,91,208,0.2)]" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="max-w-[78%] rounded-2xl rounded-tl-md bg-[rgba(109,91,208,0.07)] px-3 py-2">
          <p className="text-[9px] leading-[1.4] text-[#6B7280]">Your bench press is up 5kg this month! Great progress</p>
        </div>
        <div className="ml-auto max-w-[65%] rounded-2xl rounded-tr-md bg-[#111111] px-3 py-2">
          <p className="text-[9px] leading-[1.4] text-white">Thanks! Should I increase weight?</p>
        </div>
        <div className="max-w-[82%] rounded-2xl rounded-tl-md bg-[rgba(109,91,208,0.07)] px-3 py-2">
          <p className="text-[9px] leading-[1.4] text-[#6B7280]">Yes, add 2.5kg next session. You&apos;re ready for it</p>
        </div>
      </div>
    </div>
  );
}

function WorkoutScreen() {
  const exercises = [
    { name: "Bench Press", sets: "4 × 8" },
    { name: "Incline DB Press", sets: "3 × 10" },
    { name: "Cable Flyes", sets: "3 × 12" },
    { name: "Lateral Raises", sets: "4 × 15" },
  ];
  return (
    <div className="flex flex-col px-3 pt-10">
      <div className="mb-2 flex items-center gap-2 px-1">
        <Dumbbell size={10} className="text-[#6D5BD0]" />
        <span className="text-[9px] font-bold text-[#6B7280]">Push Day</span>
      </div>
      <div className="flex flex-col gap-1.5">
        {exercises.map((ex, i) => (
          <div key={i} className="flex items-center justify-between rounded-lg bg-[rgba(0,0,0,0.03)] px-2.5 py-2">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full border border-[rgba(109,91,208,0.25)]" />
              <span className="text-[8px] text-[#6B7280]">{ex.name}</span>
            </div>
            <span className="text-[8px] font-medium text-[#6D5BD0]">{ex.sets}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MealsScreen() {
  const meals = [
    { name: "Breakfast", cal: "520 kcal" },
    { name: "Lunch", cal: "680 kcal" },
    { name: "Dinner", cal: "590 kcal" },
  ];
  return (
    <div className="flex flex-col px-3 pt-10">
      <div className="mb-2 flex items-center gap-2 px-1">
        <UtensilsCrossed size={10} className="text-[#10B981]" />
        <span className="text-[9px] font-bold text-[#6B7280]">Training Day</span>
      </div>
      <div className="flex flex-col gap-1.5">
        {meals.map((meal, i) => (
          <div key={i} className="rounded-lg bg-[rgba(0,0,0,0.03)] px-2.5 py-2">
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-medium text-[#6B7280]">{meal.name}</span>
              <span className="text-[7px] text-[#9CA3B8]">{meal.cal}</span>
            </div>
            <div className="mt-1.5 flex gap-1.5">
              <div className="h-1 w-10 rounded-full bg-[rgba(109,91,208,0.3)]" />
              <div className="h-1 w-7 rounded-full bg-[rgba(16,185,129,0.35)]" />
              <div className="h-1 w-8 rounded-full bg-[rgba(245,158,11,0.3)]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProgressScreen() {
  return (
    <div className="px-3 pt-10">
      <div className="mb-2 px-1"><span className="text-[9px] font-bold text-[#6B7280]">Progress Photos</span></div>
      <div className="grid grid-cols-3 gap-1.5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-lg bg-[rgba(0,0,0,0.04)]" style={{ opacity: 1 - i * 0.08 }} />
        ))}
      </div>
      <div className="mt-2 flex items-center gap-2">
        <div className="h-1 flex-1 rounded-full bg-[rgba(109,91,208,0.15)]" />
        <span className="text-[7px] text-[#6D5BD0]">-3.2% body fat</span>
      </div>
    </div>
  );
}

function OnboardingScreen() {
  return (
    <div className="flex h-full flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center rounded-2xl bg-[rgba(0,0,0,0.03)] px-5 py-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(109,91,208,0.1)]">
          <Check size={18} className="text-[#6D5BD0]" />
        </div>
        <p className="mt-3 text-[9px] font-bold text-[#111111]">Your plan is ready!</p>
        <p className="mt-1 text-[7px] text-[#9CA3B8]">Personalized for you</p>
        <div className="mt-3 h-5 w-20 rounded-full bg-[rgba(109,91,208,0.12)]" />
      </div>
    </div>
  );
}

const PHONES: PhoneScreen[] = [
  { label: "Chat", caption: "Your AI coach", content: <ChatScreen /> },
  { label: "Workout", caption: "Today\u2019s workout", content: <WorkoutScreen /> },
  { label: "Meals", caption: "Carb-cycled meals", content: <MealsScreen /> },
  { label: "Progress", caption: "Track your progress", content: <ProgressScreen /> },
  { label: "Onboarding", caption: "Personalized from day one", content: <OnboardingScreen /> },
];

function PhoneMockup({ phone }: { phone: PhoneScreen }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[220px] overflow-hidden rounded-[32px] border-[5px] border-[#ECEAE6] sm:w-[240px]" style={{ aspectRatio: "9/19", background: "linear-gradient(180deg, #FFFFFF 0%, #F5F5F3 100%)", boxShadow: "0 12px 48px rgba(0,0,0,0.08)" }}>
        <div className="absolute left-1/2 top-0 z-10 h-5 w-20 -translate-x-1/2 rounded-b-xl bg-[#F5F5F3]" />
        {phone.content}
      </div>
      <p className="mt-4 text-center text-[13px] font-medium text-[#9CA3B8]">{phone.caption}</p>
    </div>
  );
}

export default function Screenshots() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.1, once: true });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const itemWidth = el.scrollWidth / PHONES.length;
    setActiveIndex(Math.min(Math.round(el.scrollLeft / itemWidth), PHONES.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: (el.scrollWidth / PHONES.length) * index, behavior: "smooth" });
  };

  return (
    <section id="screenshots" ref={sectionRef} className="py-16 md:py-[80px] lg:py-[120px]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6, ease: EASE }} className="flex flex-col items-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(109,91,208,0.15)] bg-[rgba(109,91,208,0.06)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#6D5BD0]">Inside the App</span>
          <h2 className="mx-auto mt-5 max-w-[600px] text-center font-[family-name:var(--font-heading)] text-[30px] font-[700] leading-[1.1] tracking-[-0.03em] text-[#111111] sm:text-[36px] lg:text-[44px]">
            Built for the gym,{" "}<span className="text-[#9CA3B8]">not the boardroom.</span>
          </h2>
        </motion.div>

        <div className="mt-14 hidden lg:flex lg:items-start lg:justify-center lg:gap-5">
          {PHONES.map((phone, i) => (
            <motion.div key={phone.label} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.6, ease: EASE, delay: i * 0.12 }} className={i % 2 === 1 ? "mt-8" : ""}>
              <PhoneMockup phone={phone} />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 lg:hidden">
          <div ref={scrollRef} className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4" style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {PHONES.map((phone) => (
              <div key={phone.label} className="shrink-0 snap-center first:pl-[calc(50%-120px)] last:pr-[calc(50%-120px)]">
                <PhoneMockup phone={phone} />
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-center gap-2">
            {PHONES.map((phone, i) => (
              <button key={phone.label} aria-label={`Go to ${phone.caption}`} onClick={() => scrollTo(i)} className={`rounded-full transition-all duration-300 ${i === activeIndex ? "h-2 w-6 bg-[#6D5BD0]" : "h-2 w-2 bg-[#E5E5E3]"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
