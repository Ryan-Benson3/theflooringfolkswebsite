import { Award, Hammer, Shield, Users } from "lucide-react";

const stats = [
  { icon: Award, value: "17+", label: "Years Experience" },
  { icon: Hammer, value: "1000+", label: "Jobs Completed" },
  { icon: Shield, value: "100%", label: "Licensed & Insured" },
  { icon: Users, value: "5★", label: "Quality Rating" },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-warm-surface"
            >
              <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="font-serif text-3xl text-primary mb-1">{stat.value}</div>
              <div className="text-warm-text-light text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-[0.15em] mb-3">
            About Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight mb-6">
            Built on Quality.
            <br />
            Driven by Craftsmanship.
          </h2>
          <p className="text-warm-text-light text-lg leading-relaxed mb-6">
            Professional flooring installation since 2009. With over 17 years of
            experience serving Florence, AL and The Shoals area, we&apos;ve built our
            reputation one floor at a time.
          </p>
          <p className="text-warm-text-light text-lg leading-relaxed mb-8">
            From luxury vinyl plank to hardwood and precision tile work — every
            project is completed with the same attention to detail and commitment
            to excellence that has defined The Flooring Folks from day one.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-success font-medium">
              <span className="text-lg">✓</span> Realtor &amp; Contractor Friendly
            </div>
            <div className="flex items-center gap-2 text-success font-medium">
              <span className="text-lg">✓</span> Clean, Respectful Job Sites
            </div>
            <div className="flex items-center gap-2 text-success font-medium">
              <span className="text-lg">✓</span> Quality Guaranteed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
