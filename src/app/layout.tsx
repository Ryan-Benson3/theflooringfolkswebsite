import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

// Replace with your actual GA4 Measurement ID from analytics.google.com
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default:
      "The Flooring Folks | Professional Flooring Installation — Florence, AL",
    template: "%s | The Flooring Folks",
  },
  description:
    "Expert flooring installation serving Florence, AL & The Shoals area. LVP, hardwood, laminate, tile, carpet & more. 17+ years experience. Licensed & insured. Call (256) 415-7610!",
  keywords: [
    "flooring installation Florence AL",
    "flooring contractor Florence Alabama",
    "LVP flooring Florence AL",
    "hardwood flooring Florence AL",
    "tile installation Florence AL",
    "laminate flooring Florence AL",
    "carpet installation Florence AL",
    "The Shoals flooring",
    "Muscle Shoals flooring contractor",
    "Sheffield AL flooring",
    "Tuscumbia AL flooring",
    "flooring near me",
    "The Flooring Folks",
  ],
  metadataBase: new URL("https://theflooringfolks.com"),
  alternates: {
    canonical: "https://theflooringfolks.com",
  },
  openGraph: {
    title:
      "The Flooring Folks — Professional Flooring Installation in Florence, AL",
    description:
      "Expert flooring installation serving Florence, AL & The Shoals area. 17+ years experience. LVP, hardwood, tile, laminate & more. Licensed & insured. Free estimates!",
    type: "website",
    locale: "en_US",
    url: "https://theflooringfolks.com",
    siteName: "The Flooring Folks",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    // Replace with your actual Google Search Console verification code
    // See GSC-SETUP.md for instructions
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "The Flooring Folks",
  image:
    "https://theflooringfolks.com/images/assets/Logo_The Flooring Folks.PNG",
  telephone: "+12564157610",
  email: "theflooringfolks@gmail.com",
  url: "https://theflooringfolks.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "100 Pine Brook Drive",
    addressLocality: "Florence",
    addressRegion: "AL",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.7998,
    longitude: -87.6773,
  },
  areaServed: [
    { "@type": "City", name: "Florence", containedInPlace: { "@type": "State", name: "Alabama" } },
    { "@type": "City", name: "Muscle Shoals", containedInPlace: { "@type": "State", name: "Alabama" } },
    { "@type": "City", name: "Sheffield", containedInPlace: { "@type": "State", name: "Alabama" } },
    { "@type": "City", name: "Tuscumbia", containedInPlace: { "@type": "State", name: "Alabama" } },
    { "@type": "City", name: "Killen", containedInPlace: { "@type": "State", name: "Alabama" } },
    { "@type": "City", name: "Rogersville", containedInPlace: { "@type": "State", name: "Alabama" } },
    { "@type": "City", name: "Russellville", containedInPlace: { "@type": "State", name: "Alabama" } },
    { "@type": "City", name: "Decatur", containedInPlace: { "@type": "State", name: "Alabama" } },
    { "@type": "City", name: "Athens", containedInPlace: { "@type": "State", name: "Alabama" } },
    { "@type": "City", name: "Madison", containedInPlace: { "@type": "State", name: "Alabama" } },
    { "@type": "City", name: "Huntsville", containedInPlace: { "@type": "State", name: "Alabama" } },
  ],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "18:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "52",
    bestRating: "5",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Flooring Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luxury Vinyl Plank Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hardwood Flooring Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tile & Stone Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Laminate Flooring Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Carpet Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sheet Vinyl & VCT Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Subfloor Preparation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Baseboard & Trim Installation" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>
          <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
