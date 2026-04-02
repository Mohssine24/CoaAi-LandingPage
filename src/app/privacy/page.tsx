import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Coa AI",
  description:
    "Learn how Coa AI handles your data. We are committed to protecting your privacy and being transparent about the information we collect and how we use it.",
  alternates: {
    canonical: "/privacy",
  },
  robots: "noindex, follow",
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-[760px] mx-auto px-5 md:px-10 py-20 md:py-28">
      {/* Back link */}
      <Link
        href="/"
        className="text-sm text-[#5856D6] hover:underline inline-flex items-center gap-1"
      >
        &larr; Back to home
      </Link>

      {/* Section label pill */}
      <div className="mt-8">
        <span className="bg-[rgba(88,86,214,0.08)] text-[#5856D6] text-xs font-bold uppercase tracking-[0.1em] rounded-full py-1.5 px-4 inline-block">
          LEGAL
        </span>
      </div>

      {/* Headline */}
      <h1 className="text-[30px] md:text-[44px] font-[800] text-[#1A1A22] mt-4">
        Privacy Policy
      </h1>

      {/* Last updated */}
      <p className="text-sm text-[#A0A0AE] mt-2">
        Last updated: January 2025
      </p>

      {/* Intro */}
      <p className="text-base leading-[1.75] text-[#6B6B7A] mt-8">
        At Coa AI, your privacy matters to us. This Privacy Policy explains what
        information we collect, how we use it, and the choices you have. By using
        Coa AI, you agree to the collection and use of information in accordance
        with this policy.
      </p>

      {/* -- 1. Information We Collect -- */}
      <h2 className="text-[32px] font-bold text-[#1A1A22] mt-12 mb-4">
        1. Information We Collect
      </h2>

      <h3 className="text-2xl font-bold text-[#1A1A22] mt-8 mb-3">
        Account Data
      </h3>
      <p className="text-base leading-[1.75] text-[#6B6B7A] mb-4">
        When you sign up for Coa AI using Google OAuth, we collect your name,
        email address, and profile picture. This information is used to create
        and manage your account.
      </p>

      <h3 className="text-2xl font-bold text-[#1A1A22] mt-8 mb-3">
        Profile Data
      </h3>
      <p className="text-base leading-[1.75] text-[#6B6B7A] mb-4">
        During onboarding, we collect personal details you provide, including
        your age, weight, height, fitness goals, experience level, and preferred
        workout schedule. This data is essential for generating personalized
        workout and meal plans tailored to your body and objectives.
      </p>

      <h3 className="text-2xl font-bold text-[#1A1A22] mt-8 mb-3">
        Usage Analytics
      </h3>
      <p className="text-base leading-[1.75] text-[#6B6B7A] mb-4">
        We use PostHog to collect anonymous usage analytics, including usage
        patterns and feature interactions. This data helps us understand how our
        users engage with the app so we can improve the experience. Analytics
        data is not linked to your personal identity.
      </p>

      <h3 className="text-2xl font-bold text-[#1A1A22] mt-8 mb-3">
        Fitness Data
      </h3>
      <p className="text-base leading-[1.75] text-[#6B6B7A] mb-4">
        As you use Coa AI, we store fitness-related data including workouts
        completed, meal plan adherence, progress photos, and body measurements.
        This information is used to track your progress over time and adapt your
        plan accordingly.
      </p>

      {/* -- 2. How We Use Your Information -- */}
      <h2 className="text-[32px] font-bold text-[#1A1A22] mt-12 mb-4">
        2. How We Use Your Information
      </h2>
      <p className="text-base leading-[1.75] text-[#6B6B7A] mb-4">
        We use the information we collect for the following purposes:
      </p>
      <ul className="list-disc list-inside text-base leading-[1.75] text-[#6B6B7A] mb-4 space-y-2">
        <li>
          <strong className="text-[#1A1A22]">Personalized plans:</strong> To
          provide personalized workout routines and carb-cycled meal plans based
          on your profile, goals, and progress.
        </li>
        <li>
          <strong className="text-[#1A1A22]">AI coaching:</strong> To power AI
          coach interactions with relevant context about your fitness journey,
          enabling more accurate and helpful responses.
        </li>
        <li>
          <strong className="text-[#1A1A22]">Progress tracking:</strong> To
          track your progress and adapt your plan over time as your body and
          fitness level change.
        </li>
        <li>
          <strong className="text-[#1A1A22]">Service improvement:</strong> To
          improve our app, features, and services based on aggregated usage
          patterns.
        </li>
        <li>
          <strong className="text-[#1A1A22]">Communications:</strong> To
          communicate important updates about our services, policy changes, or
          your account.
        </li>
      </ul>

      {/* -- 3. Data Storage -- */}
      <h2 className="text-[32px] font-bold text-[#1A1A22] mt-12 mb-4">
        3. Data Storage
      </h2>
      <p className="text-base leading-[1.75] text-[#6B6B7A] mb-4">
        Your data is stored securely on Supabase cloud infrastructure. Supabase
        provides enterprise-grade security with row-level security policies,
        encrypted connections, and regular backups.
      </p>
      <p className="text-base leading-[1.75] text-[#6B6B7A] mb-4">
        Progress photos are stored in encrypted cloud storage. Access to these
        files is restricted to your account only and they are never shared with
        third parties.
      </p>
      <p className="text-base leading-[1.75] text-[#6B6B7A] mb-4">
        We use industry-standard security measures to protect your data,
        including encryption in transit (TLS) and encryption at rest. While no
        system is 100% secure, we take reasonable precautions to safeguard your
        information.
      </p>

      {/* -- 4. Third-Party Services -- */}
      <h2 className="text-[32px] font-bold text-[#1A1A22] mt-12 mb-4">
        4. Third-Party Services
      </h2>
      <p className="text-base leading-[1.75] text-[#6B6B7A] mb-4">
        Coa AI relies on the following third-party services to operate. Each
        service has its own privacy policy governing how they handle data:
      </p>
      <ul className="list-disc list-inside text-base leading-[1.75] text-[#6B6B7A] mb-4 space-y-2">
        <li>
          <strong className="text-[#1A1A22]">Clerk</strong> — Authentication
          and user management. Clerk securely handles sign-in flows and session
          management on our behalf.
        </li>
        <li>
          <strong className="text-[#1A1A22]">AI Coaching Engine</strong> — AI
          coaching conversations. Your messages are processed by our AI to
          generate personalized coaching responses. Conversations may be
          temporarily stored for response generation but are not used to train
          AI models.
        </li>
        <li>
          <strong className="text-[#1A1A22]">Supabase</strong> — Database and
          file storage. All persistent user data, including profile information,
          fitness data, and progress photos, is stored on Supabase
          infrastructure.
        </li>
        <li>
          <strong className="text-[#1A1A22]">PostHog</strong> — Anonymous usage
          analytics. We collect aggregated, anonymized usage data to understand
          how features are used and where we can improve the app.
        </li>
        <li>
          <strong className="text-[#1A1A22]">
            RevenueCat / Superwall
          </strong>{" "}
          — Subscription and payment processing. These services handle in-app
          purchases, subscription management, and paywall presentation. Payment
          information is processed securely and is never stored on our servers.
        </li>
      </ul>

      {/* -- 5. Your Rights -- */}
      <h2 className="text-[32px] font-bold text-[#1A1A22] mt-12 mb-4">
        5. Your Rights
      </h2>
      <p className="text-base leading-[1.75] text-[#6B6B7A] mb-4">
        You have the following rights regarding your personal data:
      </p>
      <ul className="list-disc list-inside text-base leading-[1.75] text-[#6B6B7A] mb-4 space-y-2">
        <li>
          <strong className="text-[#1A1A22]">Access:</strong> You may request a
          copy of all personal data we hold about you.
        </li>
        <li>
          <strong className="text-[#1A1A22]">Deletion:</strong> You may request
          the deletion of your account and all associated data. Upon request, we
          will permanently remove your data from our systems within 30 days.
        </li>
        <li>
          <strong className="text-[#1A1A22]">Opt out of analytics:</strong> You
          may opt out of anonymous usage analytics tracking at any time through
          the app settings.
        </li>
        <li>
          <strong className="text-[#1A1A22]">Contact:</strong> To exercise any
          of these rights, please contact us at{" "}
          <a
            href="mailto:support@coaai.app"
            className="text-[#5856D6] hover:underline"
          >
            support@coaai.app
          </a>
          .
        </li>
      </ul>

      {/* -- 6. Children's Privacy -- */}
      <h2 className="text-[32px] font-bold text-[#1A1A22] mt-12 mb-4">
        6. Children&apos;s Privacy
      </h2>
      <p className="text-base leading-[1.75] text-[#6B6B7A] mb-4">
        Coa AI is not intended for users under the age of 13. We do not
        knowingly collect personal information from children under 13. If we
        become aware that we have inadvertently collected data from a child under
        13, we will take steps to delete that information as quickly as possible.
      </p>
      <p className="text-base leading-[1.75] text-[#6B6B7A] mb-4">
        If you are a parent or guardian and believe your child has provided us
        with personal information, please contact us at{" "}
        <a
          href="mailto:support@coaai.app"
          className="text-[#5856D6] hover:underline"
        >
          support@coaai.app
        </a>{" "}
        so we can take appropriate action.
      </p>

      {/* -- 7. Changes to This Policy -- */}
      <h2 className="text-[32px] font-bold text-[#1A1A22] mt-12 mb-4">
        7. Changes to This Policy
      </h2>
      <p className="text-base leading-[1.75] text-[#6B6B7A] mb-4">
        We may update this Privacy Policy from time to time to reflect changes
        in our practices, technology, or legal requirements. When we make
        changes, we will update the &quot;Last updated&quot; date at the top of
        this page.
      </p>
      <p className="text-base leading-[1.75] text-[#6B6B7A] mb-4">
        Significant changes will be communicated through the app via an in-app
        notification. We encourage you to review this policy periodically to
        stay informed about how we protect your data.
      </p>

      {/* -- 8. Contact Information -- */}
      <h2 className="text-[32px] font-bold text-[#1A1A22] mt-12 mb-4">
        8. Contact Information
      </h2>
      <p className="text-base leading-[1.75] text-[#6B6B7A] mb-4">
        If you have any questions, concerns, or requests regarding this Privacy
        Policy or how we handle your data, please reach out to us:
      </p>
      <ul className="list-disc list-inside text-base leading-[1.75] text-[#6B6B7A] mb-4 space-y-2">
        <li>
          <strong className="text-[#1A1A22]">Email:</strong>{" "}
          <a
            href="mailto:support@coaai.app"
            className="text-[#5856D6] hover:underline"
          >
            support@coaai.app
          </a>
        </li>
        <li>
          <strong className="text-[#1A1A22]">Contact page:</strong>{" "}
          <Link href="/contact" className="text-[#5856D6] hover:underline">
            coaai.app/contact
          </Link>
        </li>
      </ul>
      <p className="text-base leading-[1.75] text-[#6B6B7A] mb-4">
        We aim to respond to all privacy-related inquiries within 5 business
        days.
      </p>
    </div>
  );
}
