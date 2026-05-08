import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Florence, AL",
    text: "Ryan and his team installed LVP throughout our entire home. The craftsmanship is outstanding — every plank is perfectly placed. They were professional, on time, and left our home spotless. Highly recommend!",
    rating: 5,
  },
  {
    name: "James & Linda T.",
    location: "Muscle Shoals, AL",
    text: "We had hardwood installed in our living room and hallway. The attention to detail was incredible. They took the time to explain everything, gave us a fair price, and the finished floor is absolutely beautiful.",
    rating: 5,
  },
  {
    name: "Mike R.",
    location: "Sheffield, AL",
    text: "As a contractor, I've worked with many flooring installers. The Flooring Folks are the best in The Shoals area. Reliable, skilled, and fairly priced. They're my go-to for every project now.",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} className="fill-accent text-accent" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-warm-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-[0.15em] mb-3">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary mb-4">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-sm border border-warm-surface relative"
            >
              <Quote className="w-8 h-8 text-accent/20 absolute top-6 right-6" />
              <StarRating count={t.rating} />
              <p className="text-warm-text-light leading-relaxed mt-4 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <div className="font-semibold text-primary">{t.name}</div>
                <div className="text-warm-text-light text-sm">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
