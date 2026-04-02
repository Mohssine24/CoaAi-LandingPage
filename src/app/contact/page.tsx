"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle, ChevronDown } from "lucide-react";
import Link from "next/link";

type Status = "idle" | "loading" | "success" | "error";

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const SUBJECTS = [
  "General Inquiry",
  "Bug Report",
  "Feature Request",
  "Billing Question",
  "Partnership",
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!name.trim()) errs.name = "Name is required.";
    if (!email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Please enter a valid email.";
    }
    if (!subject) errs.subject = "Please select a subject.";
    if (!message.trim()) errs.message = "Message is required.";
    return errs;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  }

  const inputBase =
    "h-[52px] w-full rounded-[16px] bg-[#F0EFF5] border-[1.5px] border-[rgba(0,0,0,0.07)] px-[18px] text-[#1A1A22] placeholder-[#A0A0AE] text-[15px] outline-none transition-all duration-200 focus:border-[#5856D6] focus:shadow-[0_0_0_3px_rgba(88,86,214,0.12)]";

  const inputError = "!border-[#E85050]";

  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-20 md:py-28">
      {/* -- Header -- */}
      <div className="text-center">
        <motion.span
          {...fadeUp(0.1)}
          className="inline-block rounded-full bg-[rgba(88,86,214,0.08)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-[#5856D6]"
        >
          CONTACT
        </motion.span>

        <motion.h1
          {...fadeUp(0.25)}
          className="text-[30px] md:text-[44px] font-[800] text-[#1A1A22] mt-4"
        >
          Get in touch
        </motion.h1>

        <motion.p
          {...fadeUp(0.4)}
          className="text-lg text-[#6B6B7A] max-w-[560px] mx-auto mt-4"
        >
          Have a question, found a bug, or just want to say hi? We&rsquo;d love
          to hear from you.
        </motion.p>
      </div>

      {/* -- Two-column layout -- */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 mt-14">
        {/* -- Left: Contact Form -- */}
        <motion.div {...fadeUp(0.5)}>
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-[72px] h-[72px] rounded-full bg-[rgba(88,86,214,0.08)] flex items-center justify-center mb-5">
                  <CheckCircle className="w-9 h-9 text-[#5856D6]" />
                </div>
                <h2 className="text-[24px] font-bold text-[#1A1A22]">
                  Message sent!
                </h2>
                <p className="text-base text-[#6B6B7A] mt-2 max-w-[360px]">
                  We&rsquo;ll get back to you within 48 hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-5"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[#1A1A22] mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name)
                        setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    className={`${inputBase} ${errors.name ? inputError : ""}`}
                  />
                  {errors.name && (
                    <p className="text-[#E85050] text-[11px] mt-1.5">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[#1A1A22] mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email)
                        setErrors((prev) => ({ ...prev, email: undefined }));
                    }}
                    className={`${inputBase} ${errors.email ? inputError : ""}`}
                  />
                  {errors.email && (
                    <p className="text-[#E85050] text-[11px] mt-1.5">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-[#1A1A22] mb-2"
                  >
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      id="subject"
                      required
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                        if (errors.subject)
                          setErrors((prev) => ({
                            ...prev,
                            subject: undefined,
                          }));
                      }}
                      className={`${inputBase} appearance-none pr-12 ${!subject ? "text-[#A0A0AE]" : ""} ${errors.subject ? inputError : ""}`}
                    >
                      <option value="" disabled>
                        Select a topic
                      </option>
                      {SUBJECTS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A0A0AE]" />
                  </div>
                  {errors.subject && (
                    <p className="text-[#E85050] text-[11px] mt-1.5">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[#1A1A22] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us what's on your mind..."
                    required
                    maxLength={500}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message)
                        setErrors((prev) => ({ ...prev, message: undefined }));
                    }}
                    className={`w-full min-h-[140px] rounded-[16px] bg-[#F0EFF5] border-[1.5px] border-[rgba(0,0,0,0.07)] p-4 text-[#1A1A22] placeholder-[#A0A0AE] text-[15px] outline-none transition-all duration-200 resize-y focus:border-[#5856D6] focus:shadow-[0_0_0_3px_rgba(88,86,214,0.12)] ${errors.message ? inputError : ""}`}
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.message ? (
                      <p className="text-[#E85050] text-[11px]">
                        {errors.message}
                      </p>
                    ) : (
                      <span />
                    )}
                    <span className="text-[11px] text-[#A0A0AE]">
                      {message.length}/500
                    </span>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="h-[58px] rounded-[18px] bg-[#1A1A22] text-white font-bold text-[17px] w-full mt-2 transition-colors duration-200 hover:bg-[#333] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <span className="inline-flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="3"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* -- Right: Contact Info Card -- */}
        <motion.div {...fadeUp(0.6)}>
          <div className="bg-[#FFFFFF] border border-[rgba(0,0,0,0.07)] rounded-[20px] p-7 lg:sticky lg:top-28">
            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-[12px] bg-[rgba(88,86,214,0.08)] flex items-center justify-center shrink-0 mt-0.5">
                <Mail className="w-[18px] h-[18px] text-[#5856D6]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1A1A22]">Email</p>
                <a
                  href="mailto:support@coaai.app"
                  className="text-[#5856D6] text-sm hover:underline"
                >
                  support@coaai.app
                </a>
              </div>
            </div>

            {/* Response time */}
            <p className="text-[13px] text-[#A0A0AE] mt-3 ml-[52px]">
              Usually within 48 hours
            </p>

            {/* Divider */}
            <div className="border-t border-[rgba(0,0,0,0.07)] my-5" />

            {/* Quick links */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#A0A0AE] mb-3">
                Quick Links
              </p>
              <div className="flex flex-col gap-2">
                <Link
                  href="/privacy"
                  className="text-[#5856D6] text-sm hover:underline"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-[#5856D6] text-sm hover:underline"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
