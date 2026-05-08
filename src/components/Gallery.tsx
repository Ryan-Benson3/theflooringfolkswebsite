"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const photos = [
  "20161204_124155.jpg",
  "20170211_150923.jpg",
  "20170422_152435.jpg",
  "20170619_202636.jpg",
  "20170706_221029.jpg",
  "20170714_083918.jpg",
  "20170811_195531.jpg",
  "20170812_151946.jpg",
  "20170815_143719.jpg",
  "20170818_203642.jpg",
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextPhoto = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i + 1) % photos.length : null)),
    []
  );
  const prevPhoto = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null)),
    []
  );

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-[0.15em] mb-3">
            Portfolio
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary mb-4">
            Our Work Speaks for Itself
          </h2>
          <p className="text-warm-text-light text-lg max-w-2xl mx-auto">
            Browse through our portfolio of completed flooring installations.
            Every photo is a real project, real craftsmanship.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
          {photos.map((photo, index) => (
            <button
              key={photo}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer"
            >
              <Image
                src={`/images/portfolio/${photo}`}
                alt={`Flooring installation project ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                loading={index < 10 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center lightbox-overlay"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-10"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            className="absolute left-4 text-white/70 hover:text-white p-3 z-10"
            aria-label="Previous"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <div
            className="relative w-[90vw] h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/images/portfolio/${photos[lightboxIndex]}`}
              alt={`Flooring project ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            className="absolute right-4 text-white/70 hover:text-white p-3 z-10"
            aria-label="Next"
          >
            <ChevronRight size={40} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
            {lightboxIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </section>
  );
}
