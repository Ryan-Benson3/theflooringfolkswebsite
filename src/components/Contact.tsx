"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Web3Forms - free form submission service
    formData.append("access_key", "edd0ecf0-f3ea-46a8-bc31-b3725214b651");
    formData.append("subject", "New Estimate Request from The Flooring Folks Website");
    formData.append("from_name", "The Flooring Folks Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Get Your Free Estimate
          </h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
            Ready to transform your floors? Fill out the form below and we&apos;ll get back to you within 24 hours with a free estimate.
          </p>
        </div>

        <div className="bg-cream rounded-2xl p-8 sm:p-10 border border-charcoal/5">
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-charcoal mb-2">Thank You!</h3>
              <p className="text-charcoal/60">We&apos;ve received your request and will get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-charcoal/10 bg-white text-charcoal focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-charcoal mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-charcoal/10 bg-white text-charcoal focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="(262) 327-3989"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-charcoal/10 bg-white text-charcoal focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="flooringType" className="block text-sm font-semibold text-charcoal mb-2">
                  Flooring Type
                </label>
                <select
                  id="flooringType"
                  name="flooringType"
                  className="w-full px-4 py-3 rounded-lg border border-charcoal/10 bg-white text-charcoal focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select flooring type...</option>
                  <option value="Hardwood">Hardwood</option>
                  <option value="Tile">Tile</option>
                  <option value="Vinyl">Vinyl / LVP</option>
                  <option value="Carpet">Carpet</option>
                  <option value="Laminate">Laminate</option>
                  <option value="Refinishing">Floor Refinishing</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-charcoal/10 bg-white text-charcoal focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-accent hover:bg-accent-dark disabled:bg-accent/50 text-white font-bold text-lg py-4 rounded-xl transition-colors"
              >
                {status === "sending" ? "Sending..." : "Get Free Estimate"}
              </button>

              {status === "error" && (
                <p className="text-red-600 text-center text-sm">
                  Something went wrong. Please try again or call us directly at (262) 327-3989.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
