import Link from "next/link";
import Image from "next/image";
import { GooglePlayButtonSmall, IOSBadgeSmall } from "./StoreButtons";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "FAQ", href: "/#faq" },
      { label: "Download", href: "https://play.google.com/store/apps/details?id=com.coaai.app", external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="bg-[#FFFFFF]"
      style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}
    >
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/images/icon.png"
                alt="Coa AI logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-base font-bold tracking-wider text-[#1A1A22]">
                Coa AI
              </span>
            </Link>

            <p className="mt-3 text-sm leading-relaxed text-[#A0A0AE]">
              The only coach you&apos;ll ever need.
            </p>

            {/* Badges */}
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              <GooglePlayButtonSmall />
              <IOSBadgeSmall />
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.08em] text-[#A0A0AE]">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#6B6B7A] transition-colors duration-150 hover:text-[#1A1A22]"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-[#6B6B7A] transition-colors duration-150 hover:text-[#1A1A22]"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-8 text-center"
          style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}
        >
          <p className="text-[11px] text-[#A0A0AE]">
            &copy; 2025 Coa AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
