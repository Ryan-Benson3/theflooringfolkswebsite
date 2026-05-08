# The Flooring Folks — Website Specification

## Overview

Professional single-page marketing website for **The Flooring Folks**, a flooring installation company based in Florence, AL serving The Shoals area. The site should feel warm, trustworthy, and professional — showcasing 17+ years of craftsmanship with a portfolio of real work photos.

**Live URL will be:** theflooringfolks.com (TBD)

## Design Direction

### Inspiration
- **Style:** Warm, photography-forward (like Airbnb's approach but for a local trade business)
- **Feel:** Trustworthy, professional, clean — like a premium contractor, not a cheap handyman
- **Color Palette:**
  - Primary: Deep charcoal `#1a1a2e` (dark navy-black for headers/hero)
  - Accent: Warm amber/honey `#c9a96e` (like polished hardwood — THE brand color)
  - Secondary accent: Rich brown `#8b6f47`
  - Background: Warm white `#faf8f5` (slightly warm, not cold white)
  - Text: `#2d2d2d` (warm near-black)
  - Light surface: `#f0ece4` (warm cream for alternating sections)
  - Success green: `#4a7c59` (for checkmarks/badges)
- **Typography:**
  - Headings: DM Serif Display (elegant, warm serif — conveys craftsmanship)
  - Body: DM Sans (clean, modern, readable)
  - Google Fonts: `<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&display=swap" rel="stylesheet">`
- **Border Radius:** 8px for cards, 12px for buttons, 4px for subtle elements
- **Shadows:** Soft warm shadows using `rgba(0,0,0,0.08)` tones

### Key Design Principles
1. Photography is king — the 50 portfolio photos are the star
2. Warm earth tones throughout (honey, amber, brown) — matches flooring materials
3. Generous whitespace, clean sections
4. Trust signals everywhere (years of experience, licensed, insured)
5. Clear CTAs — "Get Free Estimate" should be impossible to miss
6. Mobile-first responsive design

## Tech Stack

- **Framework:** Next.js 15+ with App Router
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Images:** Next.js Image component with optimization
- **Icons:** Lucide React
- **Deployment:** Vercel (later)

## Page Structure (Single Page — Smooth Scroll Sections)

### 1. Navigation (Fixed/Sticky)
- Logo (use `/images/assets/Logo_The Flooring Folks.PNG`)
- Nav links: Home, Services, Gallery, Pricing, About, Contact
- CTA button: "Get Free Estimate" (amber accent)
- Mobile hamburger menu
- Transparent on hero, solid background on scroll

### 2. Hero Section
- Full-width background: Dark overlay on a stunning flooring photo (use `20170819_182927.jpg` as hero bg)
- **Headline:** "Expert Flooring Installation Serving The Shoals & Beyond"
- **Subheadline:** "17+ Years of Quality Craftsmanship — Trusted by Homeowners & Contractors Alike"
- **CTAs:** "Get Your Free Estimate" (primary amber) + "Call (262) 327-3989" (secondary outline)
- Trust badges row: "Licensed & Insured" | "Free Estimates" | "17+ Years Experience"
- Subtle scroll-down arrow animation

### 3. About / Trust Section
- Split layout: text left, large photo right (or grid of 3-4 photos)
- **Heading:** "Built on Quality. Driven by Craftsmanship."
- Body text: Professional flooring installation since 2009. 17+ years serving Florence, AL and The Shoals area. From luxury vinyl plank to hardwood and tile — every job is done right, on time, and on budget.
- Key stats in a row: "17+ Years" | "1000+ Jobs" | "Licensed & Insured" | "5-Star Quality"
- Mention: reator & contractor friendly, clean and respectful job sites

### 4. Services Section
- Grid of service cards (3 columns desktop, 1 mobile)
- Each card: icon + title + description
- **Services to display:**
  1. **Luxury Vinyl Plank (LVP)** — Professional LVP installation and removal. Durable, waterproof, and beautiful.
  2. **Laminate Flooring** — Expert laminate installation and removal. Affordable style that lasts.
  3. **Hardwood Installation** — Solid and engineered hardwood installation. Timeless beauty for your home.
  4. **Tile & Stone Work** — Including LVT with grout. Precision tile work for kitchens, bathrooms, and more.
  5. **Sheet Vinyl & VCT** — Commercial and residential sheet vinyl and VCT installation.
  6. **Carpet & Carpet Tile** — Professional carpet removal and installation.
  7. **Professional Measurements** — Accurate room measuring for perfect material estimates.
  8. **Subfloor Preparation** — Skimcoat, subfloor install, and repair. The foundation of a great floor.
  9. **Baseboard & Trim** — Shoe moulding, quarter round, and cove base installation.

### 5. Portfolio / Gallery Section
- **Heading:** "Our Work Speaks for Itself"
- Masonry or grid photo gallery using all 50 photos in `/public/images/portfolio/`
- Lightbox functionality (click to enlarge)
- Photos should lazy-load for performance
- Subtle hover effect (scale/shadow)
- The 50 photo filenames:
  ```
  20161204_124155.jpg
  20170211_150923.jpg, 20170211_150932.jpg, 20170211_150938.jpg, 20170211_150951.jpg
  20170211_190347.jpg, 20170211_190400.jpg
  20170212_081206.jpg, 20170212_081223.jpg
  20170422_152435.jpg, 20170422_152443.jpg, 20170422_152449.jpg
  20170619_202636.jpg
  20170706_221029.jpg, 20170706_221033.jpg, 20170706_221040.jpg
  20170707_204322.jpg, 20170707_204325.jpg
  20170714_083918.jpg, 20170714_083921.jpg, 20170714_084140.jpg, 20170714_084309.jpg, 20170714_084312.jpg, 20170714_084326.jpg
  20170811_195531.jpg, 20170811_195546.jpg
  20170811_225501.jpg, 20170811_225508.jpg, 20170811_225521.jpg
  20170812_104147.jpg
  20170812_151946.jpg, 20170812_151954.jpg, 20170812_152003.jpg
  20170812_185611.jpg
  20170815_141252.jpg, 20170815_141327.jpg, 20170815_141333.jpg
  20170815_143719.jpg, 20170815_143725.jpg, 20170815_143737.jpg, 20170815_143746.jpg, 20170815_143750.jpg
  20170817_211242.jpg
  20170818_203642.jpg, 20170818_203645.jpg
  20170818_231728.jpg, 20170818_231744.jpg
  20170819_114455.jpg
  20170819_182927.jpg
  20170820_115359.jpg
  ```

### 6. Pricing Section
- **Heading:** "Transparent, Competitive Pricing"
- **Subheading:** "No hidden fees. No surprises. Just honest pricing."
- Three pricing tables/cards side by side:

  **Installation Prices:**
  | Service | Price/sq ft |
  |---------|------------|
  | LVP | $1.75 |
  | Laminate | $1.75 |
  | Hardwood | $3.00 |
  | Sheet Vinyl | $1.25 |
  | LVT (Grouted) | $2.75 |

  **Removal Prices:**
  | Service | Price/sq ft |
  |---------|------------|
  | Carpet | $0.35 |
  | Vinyl | $1.00 |
  | Floating | $0.35 |
  | VCT | $1.00 |

  **Extras & Prep:**
  | Service | Price |
  |---------|-------|
  | ¼–⅜" Subfloor Install | $1.00/sq ft |
  | ½" Subfloor Install | $2.00/sq ft |
  | Skimcoat | $1.00/sq ft |
  | Additional Hourly Prep | $50/hr |
  | Toilet Removal & Reset | $125 |
  | Appliance Removal & Reset | $50 |
  | Shoe Moulding Remove & Reset | $50/hr |
  | New Shoe Moulding Install | $1.00/linear ft |

- CTA: "Get Your Free Estimate Today"

### 7. Service Areas Section
- **Heading:** "Serving The Shoals & Beyond"
- Nice map-style layout or list of cities with a decorative treatment
- Cities: Florence, Muscle Shoals, Sheffield, Tuscumbia, Killen, Russellville
- "And surrounding areas" at the bottom
- Maybe a simple SVG map outline of the Shoals area or Alabama with a pin

### 8. Why Choose Us Section
- Grid of feature cards with icons
- Items:
  1. ✅ Licensed & Fully Insured — Your investment is protected
  2. ✅ Free In-Home Estimates — No obligation, no pressure
  3. ✅ Competitive Pricing — Honest rates, no hidden fees
  4. ✅ Realtor & Contractor Friendly — We work with your team
  5. ✅ Quality Craftsmanship — Every job done right the first time
  6. ✅ Clean, Respectful Job Sites — We treat your home like our own

### 9. Testimonials Section (Placeholder)
- **Heading:** "What Our Customers Say"
- 3 placeholder testimonial cards with:
  - Quote text
  - Customer name
  - Star rating (5 stars)
- Use realistic but generic placeholder testimonials about flooring quality, professionalism, and timeliness

### 10. Contact / CTA Section
- Dark background section (charcoal)
- **Heading:** "Ready for Beautiful New Floors?"
- **Subheading:** "Get your free in-home estimate today. No obligation, no pressure."
- Large phone number: (262) 327-3989
- Email: theflooringfolks@gmail.com
- Two CTAs: "Call Us Now" + "Email Us"
- Contact form: Name, Phone, Email, Message, Flooring Type dropdown, Submit button

### 11. Footer
- Logo + company name
- Quick nav links
- Contact info
- Service areas list
- "© 2026 The Flooring Folks. All Rights Reserved."
- "Licensed & Insured — Florence, AL"

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata
│   ├── page.tsx            # Main single-page
│   └── globals.css         # Tailwind + custom styles
├── components/
│   ├── Navbar.tsx          # Sticky nav with scroll effect
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About/trust section
│   ├── Services.tsx        # Services grid
│   ├── Gallery.tsx         # Photo portfolio with lightbox
│   ├── Pricing.tsx         # Pricing tables
│   ├── ServiceAreas.tsx    # Areas served
│   ├── WhyChooseUs.tsx     # Feature grid
│   ├── Testimonials.tsx    # Customer reviews
│   ├── Contact.tsx         # Contact form + info
│   └── Footer.tsx          # Footer
public/
└── images/
    ├── portfolio/          # 50 flooring photos (already copied)
    └── assets/
        ├── Logo_The Flooring Folks.PNG
        ├── Business Card.pdf
        ├── Flyer.pdf
        └── Price Sheet.pdf
```

## Metadata / SEO

```typescript
export const metadata: Metadata = {
  title: 'The Flooring Folks | Professional Flooring Installation — Florence, AL',
  description: 'Expert flooring installation serving The Shoals & beyond. LVP, hardwood, laminate, tile & more. 17+ years experience. Licensed & insured. Free estimates!',
  keywords: ['flooring installation', 'Florence AL', 'LVP', 'hardwood', 'laminate', 'tile', 'The Shoals', 'flooring contractor'],
  openGraph: {
    title: 'The Flooring Folks — Professional Flooring Installation',
    description: '17+ years of quality flooring installation in Florence, AL and The Shoals area.',
    type: 'website',
  },
}
```

## Performance Requirements
- All images must use Next.js Image component with proper sizing
- Lazy-load gallery images (only load first 8-12 initially)
- Lightbox should be a client component
- Smooth scroll navigation
- Lighthouse score target: 90+ on all metrics

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked)
- Tablet: 768px - 1024px (2 columns where appropriate)
- Desktop: > 1024px (full grid layouts)
