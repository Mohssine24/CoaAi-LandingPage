import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Coa AI",
  description:
    "Training tips, nutrition science, and behind-the-scenes updates from the Coa AI team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Coa AI",
    description: "Training tips, nutrition science, and behind-the-scenes updates from the Coa AI team.",
    url: "https://coaai.app/blog",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Blog — Coa AI",
    description: "Training tips, nutrition science, and behind-the-scenes updates from the Coa AI team.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-10 md:py-28">
      {/* Header */}
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(88,86,214,0.12)] bg-[rgba(88,86,214,0.08)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-[#5856D6]">
          Blog
        </span>

        <h1 className="mt-5 text-[32px] font-[800] leading-[1.1] text-[#1A1A22] sm:text-[40px] md:text-[44px]">
          From the Lab
        </h1>

        <p className="mx-auto mt-4 max-w-[560px] text-base text-[#6B6B7A] sm:text-lg">
          Training tips, nutrition science, and behind-the-scenes updates from
          the Coa AI team.
        </p>
      </div>

      {/* Post Grid */}
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-[rgba(0,0,0,0.06)] bg-[#FFFFFF] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(0,0,0,0.10)] hover:bg-[#F8F7FC] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
          >
            {/* Color bar */}
            <div className="h-1 w-full bg-gradient-to-r from-[#5856D6] to-[#7B79E8] opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="flex flex-1 flex-col p-6">
              {/* Meta */}
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-[rgba(88,86,214,0.08)] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.05em] text-[#5856D6]">
                  {post.category}
                </span>
                <span className="text-[12px] text-[#A0A0AE]">
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h2 className="mt-4 text-lg font-bold leading-snug text-[#1A1A22] transition-colors duration-200 group-hover:text-[#5856D6]">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="mt-3 flex-1 text-sm leading-[1.65] text-[#6B6B7A]">
                {post.excerpt}
              </p>

              {/* Footer */}
              <div className="mt-5 flex items-center justify-between border-t border-[rgba(0,0,0,0.05)] pt-4">
                <span className="text-[12px] text-[#A0A0AE]">{post.date}</span>
                <span className="text-[13px] font-semibold text-[#5856D6] transition-colors duration-200 group-hover:text-[#7B79E8]">
                  Read &rarr;
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
