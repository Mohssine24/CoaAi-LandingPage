"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "/blog" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith("#")) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        closeMobile();
      } else {
        closeMobile();
      }
    },
    [closeMobile]
  );

  const scrollToTop = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      closeMobile();
    },
    [closeMobile]
  );

  return (
    <>
      <nav
        className="fixed left-0 top-0 z-50 w-full transition-all duration-300"
        style={{
          height: 72,
          backgroundColor: scrolled ? "rgba(250,250,248,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(0,0,0,0.06)"
            : "1px solid transparent",
        }}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link
            href="/"
            onClick={scrollToTop}
            className="flex shrink-0 items-center gap-2.5"
          >
            <Image
              src="/images/icon.png"
              alt="Coa AI logo"
              width={36}
              height={36}
              className="h-9 w-auto rounded-lg"
              priority
            />
            <span className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-[0.5px] text-[#111111]">
              Coa AI
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={(e) => handleAnchorClick(e, href)}
                className="text-[14px] font-medium text-[#6B7280] transition-colors duration-150 hover:text-[#111111]"
              >
                {label}
              </Link>
            ))}

            <Link
              href="/#download"
              onClick={(e) => handleAnchorClick(e, "#download")}
              className="ml-2 flex h-[40px] items-center gap-2 rounded-xl bg-[#111111] px-5 text-[14px] font-bold text-white transition-all duration-200 hover:bg-[#333333] active:scale-[0.97]"
            >
              Get the App
              <ArrowRight size={14} />
            </Link>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 items-center justify-center text-[#111111] lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span key="x" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.15 }}>
                  <X size={24} />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.15 }}>
                  <Menu size={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div key="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-40 bg-[rgba(0,0,0,0.25)] lg:hidden" onClick={closeMobile} aria-hidden="true" />
            <motion.aside key="drawer" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.3, ease: "easeOut" }} className="fixed right-0 top-0 z-40 flex h-full w-[280px] flex-col border-l border-[#E5E5E3] bg-white lg:hidden">
              <div className="h-[72px] shrink-0" />
              <nav className="flex flex-1 flex-col">
                {NAV_LINKS.map(({ label, href }) => (
                  <Link key={href} href={href} onClick={(e) => handleAnchorClick(e, href)} className="flex h-14 items-center px-6 text-[17px] font-medium text-[#6B7280] transition-colors hover:bg-[#F5F5F3] hover:text-[#111111]">
                    {label}
                  </Link>
                ))}
                <div className="mt-auto p-6">
                  <Link href="/#download" onClick={(e) => handleAnchorClick(e, "#download")} className="flex h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#111111] text-[15px] font-bold text-white transition-all hover:bg-[#333333]">
                    Get the App <ArrowRight size={14} />
                  </Link>
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
