import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts, getBlogPost } from "@/lib/blog-data";
import { Calendar, Clock, Phone, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = getBlogPost(slug);
    if (!post) return {};
    return {
      title: post.title,
      description: post.metaDescription,
      openGraph: {
        title: post.title,
        description: post.metaDescription,
        url: `https://theflooringfolks.com/blog/${slug}`,
        type: "article",
      },
    };
  });
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: "2026-05-08",
    author: { "@type": "Organization", name: "The Flooring Folks" },
    publisher: { "@type": "Organization", name: "The Flooring Folks" },
    mainEntityOfPage: `https://theflooringfolks.com/blog/${slug}`,
  };

  const faqSchema =
    post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <Navbar />
      <main className="pt-24 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-accent font-semibold mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <header className="mb-10">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-warm-text-light">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {post.readingTime}
              </span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-primary [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-serif [&_h3]:text-xl [&_h3]:text-primary [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-warm-text-light [&_p]:leading-relaxed [&_ul]:text-warm-text-light [&_li]:mb-2 [&_a]:text-accent [&_strong]:text-primary">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {post.faqs.length > 0 && (
            <section className="mt-12 bg-warm-surface rounded-2xl p-8">
              <h2 className="font-serif text-2xl text-primary mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {post.faqs.map((faq, i) => (
                  <div key={i}>
                    <h3 className="font-serif text-lg text-primary mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-warm-text-light">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="mt-12 bg-primary text-white rounded-2xl p-8 text-center">
            <h2 className="font-serif text-2xl mb-3">
              Ready for New Floors?
            </h2>
            <p className="text-white/80 mb-6">
              Get a free estimate from The Flooring Folks. We serve Florence,
              Muscle Shoals, Sheffield, Tuscumbia, and the entire Shoals area.
            </p>
            <a
              href="tel:2623273989"
              className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              <Phone size={18} /> (262) 327-3989
            </a>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
