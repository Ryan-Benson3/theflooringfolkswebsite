import { Shield, FileText, DollarSign, Users, Award, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Licensed & Fully Insured",
    description: "Your investment is fully protected. We carry comprehensive insurance for your peace of mind.",
  },
  {
    icon: FileText,
    title: "Free In-Home Estimates",
    description: "No obligation, no pressure. We come to you, measure up, and give you a clear, honest quote.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Honest rates with no hidden fees. What we quote is what you pay — period.",
  },
  {
    icon: Users,
    title: "Realtor & Contractor Friendly",
    description: "We work seamlessly with your real estate agents, contractors, and project managers.",
  },
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description: "Every job done right the first time. 17+ years of experience in every cut and every seam.",
  },
  {
    icon: Sparkles,
    title: "Clean, Respectful Job Sites",
    description: "We treat your home like our own. Clean work areas and thorough cleanup after every job.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-[0.15em] mb-3">
            Why Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary mb-4">
            Why Choose The Flooring Folks
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <reason.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-primary mb-2">{reason.title}</h3>
                <p className="text-warm-text-light leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
