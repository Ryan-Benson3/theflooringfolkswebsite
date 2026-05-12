import Image from "next/image";
import { Phone, ChevronDown, Shield, Clock, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/portfolio/20170819_182927.jpg"
          alt="Beautiful flooring installation"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          <p className="text-accent font-semibold text-sm sm:text-base uppercase tracking-[0.2em] mb-4">
            Serving The Shoals &amp; Beyond
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-white font-serif leading-tight mb-6">
            Expert Flooring
            <br />
            <span className="text-accent">Installation</span>
          </h1>
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            17+ years of quality craftsmanship. From luxury vinyl plank to
            hardwood and tile — every job is done right, on time, and on budget.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="bg-accent hover:bg-accent-dark text-primary font-bold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-accent/20 inline-flex items-center justify-center gap-2"
            >
              Get Your Free Estimate
            </a>
            <a
              href="tel:2564157610"
              className="border-2 border-white/30 hover:border-accent text-white hover:text-accent font-semibold px-8 py-4 rounded-xl text-lg transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              (256) 415-7610
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            <div className="flex items-center gap-2 text-white/70">
              <Shield size={18} className="text-accent" />
              <span className="text-sm font-medium">Licensed &amp; Insured</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Star size={18} className="text-accent" />
              <span className="text-sm font-medium">Free Estimates</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Clock size={18} className="text-accent" />
              <span className="text-sm font-medium">17+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-accent transition-colors animate-bounce-slow"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
