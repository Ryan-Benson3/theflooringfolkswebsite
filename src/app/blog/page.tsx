import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blog-data";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flooring Blog | Tips & Guides for Florence AL Homeowners",
  description:
    "Expert flooring advice for Florence AL and Shoals area homeowners. Cost guides, material comparisons, and installation tips from The Flooring Folks.",
};

export default function BlogIndex() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-[0.15em] mb-3">
              Flooring Blog
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary mb-4">
              Expert Flooring Advice for Florence AL
            </h1>
            <p className="text-warm-text-light text-lg max-w-2xl mx-auto">
              Tips, guides, and honest advice from 17+ years installing floors
              in the Shoals area.
            </p>
          </div>

          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl p-8 shadow-sm border border-warm-surface hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4 text-sm text-warm-text-light mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readingTime}
                  </span>
                </div>
                <h2 className="font-serif text-2xl text-primary mb-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-accent transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-warm-text-light mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                >
                  Read Full Article <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
