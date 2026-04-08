import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      url: `https://coaai.app/blog/${post.slug}`,
    },
    twitter: {
      card: "summary",
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-[760px] px-5 py-20 md:px-10 md:py-28">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-[#5856D6] transition-colors hover:text-[#7B79E8]"
      >
        &larr; All posts
      </Link>

      {/* Header */}
      <div className="mt-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-block rounded-full border border-[rgba(88,86,214,0.12)] bg-[rgba(88,86,214,0.08)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[#5856D6]">
            {post.category}
          </span>
          <span className="text-[13px] text-[#A0A0AE]">{post.date}</span>
          <span className="text-[13px] text-[#A0A0AE]">
            &middot; {post.readTime}
          </span>
        </div>

        <h1 className="mt-5 text-[32px] font-[800] leading-[1.15] tracking-[-0.02em] text-[#1A1A22] sm:text-[40px] md:text-[44px]">
          {post.title}
        </h1>
      </div>

      {/* Divider */}
      <div className="my-8 h-px bg-[rgba(0,0,0,0.06)]" />

      {/* Content */}
      <article
        className="prose-coa"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* CTA */}
      <div className="mt-16 rounded-2xl border border-[rgba(88,86,214,0.12)] bg-[rgba(88,86,214,0.03)] p-8 text-center">
        <h3 className="text-xl font-bold text-[#1A1A22]">
          Ready to get your personalized plan?
        </h3>
        <p className="mx-auto mt-2 max-w-[400px] text-sm text-[#6B6B7A]">
          Download Coa AI and get an AI-powered workout plan and carb-cycled meal
          plan built for your body.
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=com.coaai.app"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex h-[48px] items-center gap-2 rounded-xl bg-[#5856D6] px-7 text-sm font-bold text-white transition-all duration-200 hover:bg-[#7B79E8] active:scale-[0.97]"
        >
          Download Coa AI
        </a>
      </div>

      {/* Tags */}
      <div className="mt-10 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-lg bg-[rgba(0,0,0,0.04)] px-3 py-1 text-xs text-[#A0A0AE]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Back */}
      <div className="mt-10">
        <Link
          href="/blog"
          className="text-sm text-[#5856D6] transition-colors hover:text-[#7B79E8]"
        >
          &larr; Back to all posts
        </Link>
      </div>
    </div>
  );
}
