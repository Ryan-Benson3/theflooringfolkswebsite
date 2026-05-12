import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Phone,
  CheckCircle,
  ChevronRight,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services, getServiceBySlug, serviceSlugs } from "@/lib/services-data";

export const dynamicParams = false;

export async function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.shortTitle} Florence AL | The Flooring Folks`,
    description: service.metaDescription,
    alternates: {
      canonical: `https://theflooringfolks.com/services/${slug}`,
    },
    openGraph: {
      title: `${service.shortTitle} Florence AL | The Flooring Folks`,
      description: service.metaDescription,
      type: "website",
      locale: "en_US",
      url: `https://theflooringfolks.com/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const otherServices = services.filter((s) => s.slug !== slug);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "The Flooring Folks",
    image: "https://theflooringfolks.com/images/assets/Logo_The Flooring Folks.PNG",
    telephone: "+12564157610",
    email: "theflooringfolks@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "100 Pine Brook Drive",
      addressLocality: "Florence",
      addressRegion: "AL",
      addressCountry: "US",
    },
    areaServed: [
      "Florence, AL",
      "Muscle Shoals, AL",
      "Sheffield, AL",
      "Tuscumbia, AL",
      "Killen, AL",
      "Rogersville, AL",
      "Russellville, AL",
      "Decatur, AL",
      "Athens, AL",
      "Madison, AL",
      "Huntsville, AL",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "52",
    },
    url: "https://theflooringfolks.com",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.shortTitle,
    description: service.heroDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "The Flooring Folks",
      telephone: "+125****7610",
      address: {
        "@type": "PostalAddress",
        streetAddress: "100 Pine Brook Drive",
        addressLocality: "Florence",
        addressRegion: "AL",
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Florence",
      containedInPlace: {
        "@type": "State",
        name: "Alabama",
      },
    },
    url: `https://theflooringfolks.com/services/${slug}`,
  };

  const faqSchema =
    service.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-primary overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-8">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link
              href={`/services/${slug}`}
              className="hover:text-accent transition-colors text-accent"
            >
              {service.shortTitle}
            </Link>
          </nav>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
            {service.title}{" "}
            <span className="text-accent">Florence AL</span>
          </h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-3xl leading-relaxed mb-8">
            {service.heroDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-accent/20 inline-flex items-center justify-center gap-2"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:2564157610"
              className="border-2 border-white/30 hover:border-accent text-white hover:text-accent font-semibold px-8 py-4 rounded-xl text-lg transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              (256) 415-7610
            </a>
          </div>
        </div>
      </section>

      {/* Direct Answer (AI Overview optimization) */}
      {service.directAnswer && (
        <section className="py-8 bg-accent/5 border-b border-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-primary leading-relaxed font-medium">
              {service.directAnswer}
            </p>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SEO Content */}
          <div className="prose prose-lg max-w-none mb-16">
            {service.content.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-warm-text-light leading-relaxed mb-6 text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-8">
              Why Choose {service.shortTitle}?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-sm border border-warm-surface"
                >
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-warm-text-light">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-8">
              Our {service.shortTitle} Installation Process
            </h2>
            <div className="space-y-6">
              {service.processSteps.map((step, i) => (
                <div
                  key={i}
                  className="flex gap-6 bg-white rounded-xl p-6 shadow-sm border border-warm-surface"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold text-lg">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-warm-text-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-8">
              Frequently Asked Questions About {service.shortTitle}
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow-sm border border-warm-surface"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <HelpCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <h3 className="font-serif text-lg text-primary">
                      {faq.question}
                    </h3>
                  </div>
                  <p className="text-warm-text-light leading-relaxed pl-8">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
              Ready for New {service.shortTitle}?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Get your free in-home estimate today. No obligation, no pressure.
              Call us or fill out our quick contact form.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all inline-flex items-center justify-center gap-2"
              >
                Get Free Estimate
                <ArrowRight size={20} />
              </Link>
              <a
                href="tel:2564157610"
                className="border-2 border-white/30 hover:border-accent text-white hover:text-accent font-semibold px-8 py-4 rounded-xl text-lg transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                (256) 415-7610
              </a>
            </div>
          </div>

          {/* Other Services */}
          <div className="mt-16">
            <h2 className="font-serif text-3xl text-primary mb-8 text-center">
              Our Other Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherServices.slice(0, 6).map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="bg-white rounded-xl p-5 shadow-sm border border-warm-surface hover:border-accent/20 hover:shadow-md transition-all group flex items-center gap-3"
                >
                  <s.icon className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="font-medium text-primary group-hover:text-accent transition-colors">
                    {s.shortTitle}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
