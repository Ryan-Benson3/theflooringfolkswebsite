import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Phone,
  MapPin,
  ChevronRight,
  Star,
  Quote,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cities, getCityBySlug, citySlugs } from "@/lib/cities-data";
import { services } from "@/lib/services-data";

export const dynamicParams = false;

export async function generateStaticParams() {
  return citySlugs.map((city) => ({ city }));
}

type Props = {
  params: Promise<{ city: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) return {};

  return {
    title: `Flooring Installation in ${cityData.fullName} | The Flooring Folks`,
    description: cityData.metaDescription,
    alternates: {
      canonical: `https://theflooringfolks.com/areas/${city}`,
    },
    openGraph: {
      title: `Flooring Installation in ${cityData.fullName} | The Flooring Folks`,
      description: cityData.metaDescription,
      type: "website",
      locale: "en_US",
      url: `https://theflooringfolks.com/areas/${city}`,
    },
  };
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} className="fill-accent text-accent" />
      ))}
    </div>
  );
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const cityData = getCityBySlug(city);

  if (!cityData) {
    notFound();
  }

  const otherCities = cities.filter((c) => c.slug !== city);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "The Flooring Folks",
    image:
      "https://theflooringfolks.com/images/assets/Logo_The Flooring Folks.PNG",
    telephone: "+12564157610",
    email: "theflooringfolks@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Florence",
      addressRegion: "AL",
      addressCountry: "US",
    },
    areaServed: cities.map((c) => c.fullName),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "50",
    },
    url: "https://theflooringfolks.com",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

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
            <span className="text-accent">
              {cityData.fullName}
            </span>
          </nav>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Expert Flooring Installation in{" "}
            <span className="text-accent">{cityData.fullName}</span>
          </h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-3xl leading-relaxed mb-8">
            Professional flooring services from The Flooring Folks — serving{" "}
            {cityData.name} and the greater Shoals area with 17+ years of
            quality craftsmanship.
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

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SEO Content */}
          <div className="mb-16">
            {cityData.content.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-warm-text-light leading-relaxed mb-6 text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Services Offered */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-8">
              Our Services in {cityData.name}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="bg-white rounded-xl p-5 shadow-sm border border-warm-surface hover:border-accent/20 hover:shadow-md transition-all group flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary group-hover:text-accent transition-colors">
                      {service.shortTitle}
                    </h3>
                    <p className="text-warm-text-light text-sm line-clamp-1">
                      {service.heroDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Local Landmarks */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-8">
              Serving {cityData.name} & Surrounding Areas
            </h2>
            <p className="text-warm-text-light text-lg mb-6">
              We provide flooring installation throughout {cityData.fullName} and
              the surrounding communities, including areas near:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {cityData.landmarks.map((landmark, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-warm-text-light"
                >
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>{landmark}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-8">
              What {cityData.name} Customers Say
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {cityData.testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-warm-surface relative"
                >
                  <Quote className="w-8 h-8 text-accent/20 absolute top-6 right-6" />
                  <StarRating count={testimonial.rating} />
                  <p className="text-warm-text-light leading-relaxed mt-4 mb-6">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="font-semibold text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-warm-text-light text-sm">
                    {cityData.fullName}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
              Ready for New Floors in {cityData.name}?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Get your free in-home estimate today. We serve all of{" "}
              {cityData.fullName} and surrounding areas.
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

          {/* Other Cities */}
          <div className="mt-16">
            <h2 className="font-serif text-3xl text-primary mb-8 text-center">
              We Also Serve These Areas
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/areas/${c.slug}`}
                  className="bg-white rounded-xl p-5 shadow-sm border border-warm-surface hover:border-accent/20 hover:shadow-md transition-all group flex items-center gap-3"
                >
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="font-medium text-primary group-hover:text-accent transition-colors">
                    {c.fullName}
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
