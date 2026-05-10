"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  { label: "Luxury Vinyl Plank", href: "/services/lvp-flooring" },
  { label: "Hardwood Installation", href: "/services/hardwood-flooring" },
  { label: "Tile & Stone Work", href: "/services/tile-installation" },
  { label: "Laminate Flooring", href: "/services/laminate-flooring" },
  { label: "Carpet & Carpet Tile", href: "/services/carpet-installation" },
  { label: "Sheet Vinyl & VCT", href: "/services/vinyl-flooring" },
  { label: "Subfloor Preparation", href: "/services/subfloor-preparation" },
  { label: "Baseboard & Trim", href: "/services/baseboard-trim" },
];

const areas = [
  { label: "Florence", href: "/areas/florence-al" },
  { label: "Muscle Shoals", href: "/areas/muscle-shoals-al" },
  { label: "Sheffield", href: "/areas/sheffield-al" },
  { label: "Tuscumbia", href: "/areas/tuscumbia-al" },
  { label: "Killen", href: "/areas/killen-al" },
  { label: "Rogersville", href: "/areas/rogersville-al" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (areasRef.current && !areasRef.current.contains(e.target as Node)) {
        setAreasOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/assets/Logo_The Flooring Folks.PNG"
            alt="The Flooring Folks"
            width={48}
            height={48}
            className="rounded-lg"
          />
          <span className="text-white font-serif text-xl hidden sm:block">
            The Flooring Folks
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className="text-white/80 hover:text-accent transition-colors text-sm font-medium tracking-wide uppercase"
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div ref={servicesRef} className="relative">
            <button
              onClick={() => { setServicesOpen(!servicesOpen); setAreasOpen(false); }}
              className="text-white/80 hover:text-accent transition-colors text-sm font-medium tracking-wide uppercase flex items-center gap-1"
            >
              Services
              <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 bg-primary border border-white/10 rounded-lg shadow-xl py-2 min-w-[220px]">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2 text-white/80 hover:text-accent hover:bg-white/5 text-sm transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Areas Dropdown */}
          <div ref={areasRef} className="relative">
            <button
              onClick={() => { setAreasOpen(!areasOpen); setServicesOpen(false); }}
              className="text-white/80 hover:text-accent transition-colors text-sm font-medium tracking-wide uppercase flex items-center gap-1"
            >
              Areas
              <ChevronDown size={14} className={`transition-transform ${areasOpen ? "rotate-180" : ""}`} />
            </button>
            {areasOpen && (
              <div className="absolute top-full left-0 mt-2 bg-primary border border-white/10 rounded-lg shadow-xl py-2 min-w-[180px]">
                {areas.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    onClick={() => setAreasOpen(false)}
                    className="block px-4 py-2 text-white/80 hover:text-accent hover:bg-white/5 text-sm transition-colors"
                  >
                    {a.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-accent transition-colors text-sm font-medium tracking-wide uppercase"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="bg-accent hover:bg-accent-dark text-primary font-semibold px-6 py-2.5 rounded-lg transition-colors flex items-center gap-2"
          >
            <Phone size={16} />
            Free Estimate
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary/95 backdrop-blur-md border-t border-white/10 mt-2 max-h-[80vh] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="text-white/80 hover:text-accent transition-colors text-base font-medium py-2"
            >
              Home
            </Link>

            {/* Mobile Services Expandable */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="text-white/80 hover:text-accent transition-colors text-base font-medium py-2 flex items-center justify-between w-full"
            >
              Services
              <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 flex flex-col gap-1 border-l border-white/10 ml-2">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-white/60 hover:text-accent transition-colors text-sm py-1.5"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Mobile Areas Expandable */}
            <button
              onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
              className="text-white/80 hover:text-accent transition-colors text-base font-medium py-2 flex items-center justify-between w-full"
            >
              Areas
              <ChevronDown size={16} className={`transition-transform ${mobileAreasOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileAreasOpen && (
              <div className="pl-4 flex flex-col gap-1 border-l border-white/10 ml-2">
                {areas.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-white/60 hover:text-accent transition-colors text-sm py-1.5"
                  >
                    {a.label}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/80 hover:text-accent transition-colors text-base font-medium py-2"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="bg-accent text-primary font-semibold px-6 py-3 rounded-lg text-center mt-2"
            >
              Get Free Estimate
            </Link>

            <a
              href="tel:+12623273989"
              className="border border-white/20 text-white font-semibold px-6 py-3 rounded-lg text-center mt-1 flex items-center justify-center gap-2"
            >
              <Phone size={16} />
              (262) 327-3989
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
