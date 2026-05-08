import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/lvp-flooring" },
  { label: "Areas", href: "/areas/florence-al" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

const serviceLinks = [
  { label: "LVP Installation", href: "/services/lvp-flooring" },
  { label: "Hardwood", href: "/services/hardwood-flooring" },
  { label: "Tile & Stone", href: "/services/tile-installation" },
  { label: "Laminate", href: "/services/laminate-flooring" },
  { label: "Carpet", href: "/services/carpet-installation" },
  { label: "Subfloor Prep", href: "/services/subfloor-preparation" },
];

const serviceAreaLinks = [
  { label: "Florence, AL", href: "/areas/florence-al" },
  { label: "Muscle Shoals, AL", href: "/areas/muscle-shoals-al" },
  { label: "Sheffield, AL", href: "/areas/sheffield-al" },
  { label: "Tuscumbia, AL", href: "/areas/tuscumbia-al" },
  { label: "Killen, AL", href: "/areas/killen-al" },
  { label: "Russellville, AL", href: "/areas/rogersville-al" },
];

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/assets/Logo_The Flooring Folks.PNG"
                alt="The Flooring Folks"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-white font-serif text-lg">
                The Flooring Folks
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Professional flooring installation serving The Shoals and beyond.
              17+ years of quality craftsmanship.
            </p>
            <div className="space-y-2">
              <a href="tel:2623273989" className="flex items-center gap-2 text-white/60 hover:text-accent transition-colors text-sm">
                <Phone size={14} /> (262) 327-3989
              </a>
              <a href="mailto:theflooringfolks@gmail.com" className="flex items-center gap-2 text-white/60 hover:text-accent transition-colors text-sm">
                <Mail size={14} /> theflooringfolks@gmail.com
              </a>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin size={14} /> Florence, AL
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-semibold mb-4">Areas Served</h4>
            <ul className="space-y-2">
              {serviceAreaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © 2026 The Flooring Folks. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-white/30 text-sm">
            <span>Licensed &amp; Insured</span>
            <span>•</span>
            <span>Florence, AL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
