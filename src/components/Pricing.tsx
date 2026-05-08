import { Check } from "lucide-react";

const installPrices = [
  { service: "LVP", price: "$1.75/sq ft" },
  { service: "Laminate", price: "$1.75/sq ft" },
  { service: "Hardwood", price: "$3.00/sq ft" },
  { service: "Sheet Vinyl", price: "$1.25/sq ft" },
  { service: "LVT (Grouted)", price: "$2.75/sq ft" },
];

const removalPrices = [
  { service: "Carpet", price: "$0.35/sq ft" },
  { service: "Vinyl", price: "$1.00/sq ft" },
  { service: "Floating", price: "$0.35/sq ft" },
  { service: "VCT", price: "$1.00/sq ft" },
];

const extrasPrices = [
  { service: "¼–⅜\" Subfloor Install", price: "$1.00/sq ft" },
  { service: "½\" Subfloor Install", price: "$2.00/sq ft" },
  { service: "Skimcoat", price: "$1.00/sq ft" },
  { service: "Hourly Prep", price: "$50/hr" },
  { service: "Toilet Removal & Reset", price: "$125" },
  { service: "Appliance Removal & Reset", price: "$50" },
  { service: "Shoe Moulding Remove & Reset", price: "$50/hr" },
  { service: "New Shoe Moulding Install", price: "$1.00/lin ft" },
];

function PriceTable({
  title,
  items,
  accent,
}: {
  title: string;
  items: { service: string; price: string }[];
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-8 ${
        accent
          ? "bg-accent text-primary shadow-lg scale-105"
          : "bg-white border border-warm-surface shadow-sm"
      }`}
    >
      <h3
        className={`font-serif text-2xl mb-6 ${
          accent ? "text-primary" : "text-primary"
        }`}
      >
        {title}
      </h3>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.service} className="flex items-center justify-between">
            <span className={`flex items-center gap-2 ${accent ? "text-primary/80" : "text-warm-text-light"}`}>
              <Check size={16} className={accent ? "text-primary" : "text-accent"} />
              {item.service}
            </span>
            <span className={`font-semibold ${accent ? "text-primary" : "text-primary"}`}>
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-warm-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-[0.15em] mb-3">
            Pricing
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary mb-4">
            Transparent, Competitive Pricing
          </h2>
          <p className="text-warm-text-light text-lg max-w-2xl mx-auto">
            No hidden fees. No surprises. Just honest pricing for quality work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          <PriceTable title="Installation" items={installPrices} />
          <PriceTable title="Removal" items={removalPrices} accent />
          <PriceTable title="Extras & Prep" items={extrasPrices} />
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            Get Your Free Estimate Today
          </a>
        </div>
      </div>
    </section>
  );
}
