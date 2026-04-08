import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coa AI — Your Personal AI Fitness Coach",
  description:
    "Personalized workout plans, carb-cycled meal plans, and a 24/7 AI coach that adapts to your body. Download on Google Play.",
  keywords:
    "AI fitness coach, personalized workout plan, carb cycling meal plan, AI personal trainer, fitness app",
  openGraph: {
    type: "website",
    url: "https://coaai.app/",
    title: "Coa AI — Your Personal AI Fitness Coach",
    description:
      "Personalized workout plans, carb-cycled meal plans, and a 24/7 AI coach that adapts to your body. Download now on Google Play.",
    images: [
      {
        url: "https://coaai.app/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coa AI — Your Personal AI Fitness Coach",
    description:
      "Personalized workout plans, carb-cycled meal plans, and a 24/7 AI coach that adapts to your body.",
    images: ["https://coaai.app/og-image.png"],
  },
  metadataBase: new URL("https://coaai.app"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Coa AI",
              operatingSystem: "Android",
              applicationCategory: "HealthApplication",
              offers: {
                "@type": "Offer",
                price: "19.99",
                priceCurrency: "USD",
              },
              description:
                "AI-powered fitness coaching app with personalized workouts, carb-cycled meal plans, and 24/7 AI coach chat.",
              url: "https://coaai.app",
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-[family-name:var(--font-body)]">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
