import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

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
  title: "The Flooring Folks | Professional Flooring Installation — Florence, AL",
  description:
    "Expert flooring installation serving The Shoals & beyond. LVP, hardwood, laminate, tile & more. 17+ years experience. Licensed & insured. Free estimates!",
  keywords: [
    "flooring installation",
    "Florence AL",
    "LVP",
    "hardwood",
    "laminate",
    "tile",
    "The Shoals",
    "flooring contractor",
    "Muscle Shoals",
    "Sheffield",
    "Tuscumbia",
  ],
  openGraph: {
    title: "The Flooring Folks — Professional Flooring Installation",
    description:
      "17+ years of quality flooring installation in Florence, AL and The Shoals area.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
