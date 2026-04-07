"use client";

import { useRef, useState, useEffect, FormEvent } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GooglePlayButtonLarge } from "./StoreButtons";

const EASE = [0.16, 1, 0.3, 1] as const;
const STORAGE_KEY = "coaai_waitlist_joined";
type Status = "idle" | "loading" | "success" | "error" | "duplicate";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.15, once: true });
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [validationError, setValidationError] = useState("");

  useEffect(() => {
    try { if (localStorage.getItem(STORAGE_KEY) === "true") setStatus("success"); } catch {}
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setValidationError("");
    if (!email.trim()) { setValidationError("Email is required"); return; }
    if (!isValidEmail(email)) { setValidationError("Please enter a valid email"); return; }
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();
      if (!res.ok && res.status !== 200) {
        setValidationError(data.error ?? "Something went wrong");
        setStatus("error");
        return;
      }
      try { localStorage.setItem(STORAGE_KEY, "true"); } catch {}
      setStatus("success");
    } catch { setStatus("error"); }
  };

  const resetForm = () => {
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
    setEmail(""); setStatus("idle"); setValidationError("");
  };

  return (
    <section id="download" ref={sectionRef} className="py-16 md:py-[80px] lg:py-[120px]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="relative overflow-hidden rounded-[28px] border border-[#E5E5E3] bg-white shadow-[0_4px_60px_rgba(0,0,0,0.04)]"
        >
          <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#6D5BD0] opacity-[0.04] blur-[140px]" />

          <div className="relative px-6 py-14 text-center sm:px-10 md:px-16 md:py-20">
            <div className="flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-[22px] bg-[rgba(109,91,208,0.06)] ring-1 ring-[rgba(109,91,208,0.12)]" style={{ animation: "pulse-subtle 3s infinite ease-in-out" }}>
                <Image src="/images/icon.png" alt="Coa AI" width={48} height={48} className="rounded-xl" />
              </div>
            </div>

            <h2 className="mt-8 font-[family-name:var(--font-heading)] text-[28px] font-[700] leading-[1.1] text-[#111111] sm:text-[36px] md:text-[44px]">
              Ready to transform{" "}
              <span className="bg-gradient-to-r from-[#6D5BD0] to-[#8B7FE8] bg-clip-text text-transparent">your fitness?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[440px] text-[15px] leading-[1.7] text-[#6B7280] sm:text-base">
              Get your personalized workout and meal plan in under 5 minutes.
            </p>

            <div className="mt-10 flex flex-col items-center gap-3">
              <GooglePlayButtonLarge />
              <p className="text-[13px] font-medium text-[#10B981]">Available now on Android</p>
            </div>

            <div className="mx-auto my-10 flex max-w-[400px] items-center gap-4">
              <div className="h-px flex-1 bg-[#E5E5E3]" />
              <span className="text-xs font-semibold text-[#9CA3B8]">iOS COMING SOON</span>
              <div className="h-px flex-1 bg-[#E5E5E3]" />
            </div>

            <div className="mx-auto max-w-[440px]">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div key="success" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="flex flex-col items-center gap-3 rounded-2xl bg-[rgba(109,91,208,0.04)] py-8">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6D5BD0]">
                      <Check size={22} className="text-white" />
                    </motion.div>
                    <p className="text-base font-bold text-[#111111]">You&rsquo;re on the list!</p>
                    <p className="text-sm text-[#6B7280]">We&rsquo;ll email you the moment the iOS app launches.</p>
                    <button onClick={resetForm} className="mt-1 cursor-pointer text-xs text-[#9CA3B8] transition-colors hover:text-[#6D5BD0] hover:underline">Use a different email?</button>
                  </motion.div>
                ) : (
                  <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                    <input
                      type="email"
                      placeholder="Enter your email for iOS launch"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); if (validationError) setValidationError(""); }}
                      className={`h-[52px] flex-1 rounded-xl border-[1.5px] bg-[#F5F5F3] px-4 text-[15px] text-[#111111] placeholder-[#9CA3B8] transition-all duration-200 focus:outline-none ${
                        validationError
                          ? "border-[#EF4444] focus:border-[#EF4444] focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]"
                          : "border-[#E5E5E3] focus:border-[#6D5BD0] focus:shadow-[0_0_0_3px_rgba(109,91,208,0.1)]"
                      }`}
                    />
                    <button type="submit" disabled={status === "loading"}
                      className="flex h-[52px] shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#6D5BD0] px-7 text-[15px] font-bold text-white transition-all duration-200 hover:bg-[#5546B7] active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60">
                      {status === "loading" ? (
                        <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      ) : (
                        <>Notify Me <ArrowRight size={16} /></>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

              {validationError && <p className="mt-2 text-left text-xs text-[#EF4444]">{validationError}</p>}
              {status === "error" && <p className="mt-2 text-xs text-[#EF4444]">Something went wrong. Please try again.</p>}
              {(status === "idle" || status === "loading" || status === "error") && (
                <p className="mt-3 text-[12px] text-[#9CA3B8]">No spam. Only the iOS launch notification.</p>
              )}
            </div>
          </div>
        </motion.div>

        <p className="mt-8 text-center text-sm text-[#9CA3B8]">
          Have questions?{" "}
          <Link href="/contact" className="text-[#6D5BD0] transition-colors hover:text-[#5546B7] hover:underline">Contact us</Link>
        </p>
      </div>
    </section>
  );
}
