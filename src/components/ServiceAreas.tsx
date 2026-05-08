import { MapPin } from "lucide-react";

const areas = [
  "Florence, AL",
  "Muscle Shoals, AL",
  "Sheffield, AL",
  "Tuscumbia, AL",
  "Killen, AL",
  "Russellville, AL",
];

export default function ServiceAreas() {
  return (
    <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-[0.15em] mb-3">
            Service Areas
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Serving The Shoals &amp; Beyond
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Proudly serving communities across northwest Alabama
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {areas.map((area) => (
            <div
              key={area}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center hover:bg-accent/10 hover:border-accent/30 transition-all group"
            >
              <MapPin className="w-6 h-6 text-accent mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-white font-medium text-sm">{area}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-white/40 mt-8 text-sm">
          ...and surrounding areas. Contact us to see if we serve your location.
        </p>
      </div>
    </section>
  );
}
