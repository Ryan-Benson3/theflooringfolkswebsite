import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, ArrowRight, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cities } from "@/lib/cities-data";

export const metadata: Metadata = {
  title:
    "Service Areas | Flooring Installation — Florence, AL & The Shoals | The Flooring Folks",
  description:
    "The Flooring Folks serves Florence, Muscle Shoals, Sheffield, Tuscumbia, Killen, Rogersville & surrounding areas. Professional flooring installation with 17+ years experience. Call (256) 415-7610!",
  alternates: {
    canonical: "https://theflooringfolks.com/areas",
  },
  openGraph: {
    title:
      "Service Areas — The Flooring Folks | Flooring Installation in The Shoals",
    description:
      "Professional flooring installation serving Florence, Muscle Shoals, Sheffield, Tuscumbia, Killen, Rogersville & beyond. 17+ years experience. Licensed & insured.",
    type: "website",
    locale: "en_US",
    url: "https://theflooringfolks.com/areas",
  },
};

export default function AreasPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-accent font-semibold text-sm uppercase tracking-[0.15em] mb-3">
              Service Areas
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Serving The Shoals
              <br />
              <span className="text-accent">&amp; Beyond</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Professional flooring installation across northwest Alabama.
              Whether you&apos;re in Florence, Muscle Shoals, or anywhere in
              between — we bring expert craftsmanship to your doorstep.
            </p>
          </div>
        </section>

        {/* Cities Grid */}
        <section className="py-20 lg:py-28 bg-warm-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-semibold text-sm uppercase tracking-[0.15em] mb-3">
                Where We Work
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-4">
                Cities We Serve
              </h2>
              <p className="text-warm-text-light text-lg max-w-2xl mx-auto">
                Click on your city to learn more about our flooring services in
                your area.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/areas/${city.slug}`}
                  className="group bg-white rounded-2xl p-8 shadow-sm border border-warm-surface hover:shadow-lg hover:border-accent/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-primary group-hover:text-accent transition-colors">
                        {city.fullName}
                      </h3>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className="fill-accent text-accent"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-warm-text-light text-sm leading-relaxed mb-4 line-clamp-3">
                    {city.content.substring(0, 150)}...
                  </p>
                  <div className="flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                    View Services
                    <ArrowRight size={16} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-6">
              Don&apos;t See Your City?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              We serve a wide radius around The Shoals area. Contact us to see
              if we can come to you — chances are, we can.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2564157610"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-primary font-bold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                <Phone size={20} />
                (256) 415-7610
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-accent text-white hover:text-accent font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Get Free Estimate
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
