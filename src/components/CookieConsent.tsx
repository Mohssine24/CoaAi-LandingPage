"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Script from "next/script";

const CONSENT_KEY = "coaai_cookie_consent";
const GA_ID = "G-XR31Q4WPJK";

type Consent = "pending" | "accepted" | "declined";

function getStoredConsent(): Consent {
  try {
    const val = localStorage.getItem(CONSENT_KEY);
    if (val === "accepted" || val === "declined") return val;
  } catch {}
  return "pending";
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent>("accepted"); // default to accepted to avoid flash
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    setConsent(stored);
    if (stored === "pending") {
      // Show after a short delay so users see the page first
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = useCallback(() => {
    try { localStorage.setItem(CONSENT_KEY, "accepted"); } catch {}
    setConsent("accepted");
    setVisible(false);
  }, []);

  const handleDecline = useCallback(() => {
    try { localStorage.setItem(CONSENT_KEY, "declined"); } catch {}
    setConsent("declined");
    setVisible(false);
  }, []);

  return (
    <>
      {/* Only load GA if user accepted */}
      {consent === "accepted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}

      {/* Banner */}
      <div
        className="fixed bottom-0 left-0 z-[9997] w-full px-4 pb-4 sm:bottom-4 sm:left-4 sm:w-auto sm:max-w-[420px] sm:px-0 sm:pb-0"
        style={{
          transform: visible ? "translateY(0)" : "translateY(calc(100% + 32px))",
          opacity: visible ? 1 : 0,
          transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease",
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        <div
          className="rounded-2xl border border-[#E5E5E3] bg-white p-5 shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
        >
          <p className="text-[14px] leading-[1.6] text-[#6B7280]">
            We use cookies to understand how you use our site and improve your experience.{" "}
            <Link
              href="/privacy"
              className="text-[#6D5BD0] underline underline-offset-2 transition-colors hover:text-[#5546B7]"
            >
              Privacy Policy
            </Link>
          </p>

          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={handleAccept}
              className="flex h-[38px] cursor-pointer items-center rounded-xl bg-[#111111] px-5 text-[13px] font-bold text-white transition-all duration-200 hover:bg-[#333333] active:scale-[0.97]"
            >
              Accept
            </button>
            <button
              onClick={handleDecline}
              className="flex h-[38px] cursor-pointer items-center rounded-xl px-4 text-[13px] font-medium text-[#6B7280] transition-colors duration-200 hover:text-[#111111]"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
