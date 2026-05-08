import {
  Layers,
  Grid3x3,
  TreePine,
  Ruler,
  Droplets,
  SquareStack,
  Hammer,
  Paintbrush,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Luxury Vinyl Plank (LVP)",
    description:
      "Professional LVP installation and removal. Durable, waterproof, and beautiful — the most popular flooring choice today.",
  },
  {
    icon: Grid3x3,
    title: "Laminate Flooring",
    description:
      "Expert laminate installation and removal. Affordable style that stands up to daily wear and tear.",
  },
  {
    icon: TreePine,
    title: "Hardwood Installation",
    description:
      "Solid and engineered hardwood installation. Timeless beauty that adds lasting value to your home.",
  },
  {
    icon: SquareStack,
    title: "Tile & Stone Work",
    description:
      "Precision tile work including LVT with grout. Perfect for kitchens, bathrooms, and accent walls.",
  },
  {
    icon: Droplets,
    title: "Sheet Vinyl & VCT",
    description:
      "Commercial and residential sheet vinyl and VCT installation. Clean, seamless, and professional.",
  },
  {
    icon: Grid3x3,
    title: "Carpet & Carpet Tile",
    description:
      "Professional carpet removal and installation. Comfort and warmth for bedrooms and living spaces.",
  },
  {
    icon: Ruler,
    title: "Professional Measurements",
    description:
      "Accurate room measuring for perfect material estimates. No waste, no guesswork.",
  },
  {
    icon: Hammer,
    title: "Subfloor Preparation",
    description:
      "Skimcoat, subfloor install, and repair. A great floor starts with a solid foundation.",
  },
  {
    icon: Paintbrush,
    title: "Baseboard & Trim",
    description:
      "Shoe moulding, quarter round, and cove base installation. The finishing touch that makes all the difference.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-warm-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-[0.15em] mb-3">
            What We Do
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary mb-4">
            Our Services
          </h2>
          <p className="text-warm-text-light text-lg max-w-2xl mx-auto">
            From start to finish, we handle every aspect of your flooring project
            with professional care and expert craftsmanship.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-warm-surface hover:shadow-md hover:border-accent/20 transition-all group"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-xl text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-warm-text-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
