"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What exactly is Coa AI?",
    answer:
      "Coa AI is a fitness coaching app that uses advanced AI to give you a fully personalized workout plan, carb-cycled meal plan, and an AI coach you can chat with anytime. It\u2019s like having a personal trainer and nutritionist in your pocket.",
  },
  {
    question: "How is this different from other fitness apps?",
    answer:
      'Most fitness apps give you a generic template and call it "personalized." Coa AI actually builds your plan from scratch based on your body, goals, experience, and schedule. The AI coach knows your full history and adapts your plan based on your progress, energy levels, and check-ins. It gets smarter the longer you use it.',
  },
  {
    question: "What kind of workout plan will I get?",
    answer:
      "You\u2019ll get a Push/Pull/Legs split with exercises selected for your experience level and available equipment. The plan uses progressive overload through double progression \u2014 meaning it automatically adjusts sets, reps, and weight as you get stronger. Deload weeks are built in every 4\u20136 weeks.",
  },
  {
    question: "How does carb cycling work in the meal plan?",
    answer:
      "Your meal plan adjusts daily based on whether you\u2019re training or resting. Training days are high carb to fuel your workouts. Rest days are lower carb. You get a weekly refeed day (usually legs day) for a metabolic boost. Protein stays constant at roughly 2g per kg of bodyweight.",
  },
  {
    question: "Is the AI coach actually useful or is it gimmicky?",
    answer:
      "The coach is powered by one of the most capable AI models available. It doesn\u2019t give generic responses \u2014 it has full context of your profile, your current plan, your recent workouts, and your progress. You can ask about exercise form, request substitutions, discuss plateaus, or just vent about a bad day at the gym. It responds like a real coach texting you, not a corporate chatbot.",
  },
  {
    question: "Can I send voice messages?",
    answer:
      "Yes. You can tap and hold to record a voice message. The app transcribes it and your coach responds based on what you said. It\u2019s faster than typing when you\u2019re at the gym.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "The app offers the standard trial period available through the Google Play Store. Download the app to see current trial availability.",
  },
  {
    question: "When is the iOS version coming?",
    answer:
      "We\u2019re actively working on the iOS release. Drop your email in the waitlist form on this page and we\u2019ll notify you the moment it\u2019s available on the App Store.",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.1, once: true });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-16 md:py-[80px] lg:py-[120px]"
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col items-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(88,86,214,0.12)] bg-[rgba(88,86,214,0.08)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-[#5856D6]">
            FAQ
          </span>
          <h2 className="mt-5 text-center text-[30px] font-[800] leading-[1.1] text-[#1A1A22] sm:text-[36px] lg:text-[44px]">
            Questions?{" "}
            <span className="bg-gradient-to-r from-[#5856D6] to-[#7B79E8] bg-clip-text text-transparent">
              Answered.
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
          className="mx-auto mt-12 flex max-w-[720px] flex-col gap-3"
        >
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl border transition-colors duration-200 ${
                  isOpen
                    ? "border-[rgba(88,86,214,0.15)] bg-[rgba(88,86,214,0.02)]"
                    : "border-[rgba(0,0,0,0.06)] bg-[#FFFFFF] hover:border-[rgba(0,0,0,0.10)]"
                }`}
              >
                <button
                  id={buttonId}
                  role="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                  className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left"
                >
                  <span className="pr-4 text-[15px] font-semibold text-[#1A1A22]">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[rgba(0,0,0,0.04)]"
                  >
                    <ChevronDown
                      size={16}
                      className={`transition-colors duration-200 ${
                        isOpen ? "text-[#5856D6]" : "text-[#A0A0AE]"
                      }`}
                    />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-[1.75] text-[#6B6B7A]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
