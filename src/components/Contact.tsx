"use client";

import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Send, Loader2 } from "lucide-react";

const flooringTypes = [
  "Luxury Vinyl Plank (LVP)",
  "Laminate",
  "Hardwood",
  "Tile & Stone",
  "Sheet Vinyl / VCT",
  "Carpet / Carpet Tile",
  "Other / Not Sure",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          flooringType: formData.get("flooringType"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try calling us instead.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full translate-x-1/3 -translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-[0.15em] mb-3">
            Get In Touch
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Ready for Beautiful New Floors?
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Get your free in-home estimate today. No obligation, no pressure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl text-white mb-6">Let&apos;s Talk</h3>
              <div className="space-y-6">
                <a
                  href="tel:2623273989"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Call or Text</div>
                    <div className="text-white text-xl font-semibold group-hover:text-accent transition-colors">
                      (262) 327-3989
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:theflooringfolks@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Email</div>
                    <div className="text-white text-lg group-hover:text-accent transition-colors">
                      theflooringfolks@gmail.com
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Location</div>
                    <div className="text-white text-lg">Florence, AL</div>
                    <div className="text-white/40 text-sm">Serving The Shoals &amp; Beyond</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-400 text-3xl">✓</span>
                </div>
                <h3 className="font-serif text-2xl text-white mb-2">Thank You!</h3>
                <p className="text-white/60">
                  We&apos;ll get back to you within 24 hours with your free estimate.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Name *</label>
                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Phone *</label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors"
                      placeholder="(xxx) xxx-xxxx"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">Flooring Type</label>
                  <select
                    name="flooringType"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white/70 focus:outline-none focus:border-accent transition-colors"
                  >
                    <option value="">Select flooring type...</option>
                    {flooringTypes.map((type) => (
                      <option key={type} value={type} className="bg-primary">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent hover:bg-accent-dark disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-lg"
                >
                  {loading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Request Free Estimate
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
