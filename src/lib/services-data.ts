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
import type { LucideIcon } from "lucide-react";

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  metaDescription: string;
  heroDescription: string;
  content: string;
  benefits: string[];
  processSteps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const services: ServiceData[] = [
  {
    slug: "lvp-flooring",
    title: "Luxury Vinyl Plank (LVP) Flooring Installation",
    shortTitle: "Luxury Vinyl Plank",
    icon: Layers,
    metaDescription:
      "Professional LVP flooring installation in Florence, AL. Waterproof, durable luxury vinyl plank from The Flooring Folks. 17+ years experience. Free estimates!",
    heroDescription:
      "Durable, waterproof, and beautiful — the most popular flooring choice today.",
    content: `Luxury vinyl plank flooring has become the most popular flooring choice for homeowners in Florence, AL and throughout The Shoals area — and for good reason. LVP delivers the stunning look of natural hardwood with superior durability, complete waterproof protection, and a price point that makes sense for any budget.

At The Flooring Folks, we've installed thousands of LVP floors across northwest Alabama. Our 17+ years of experience means we know how to handle every subfloor condition, room layout, and product specification to deliver a flawless installation that will look beautiful for decades.

Modern LVP flooring features incredibly realistic wood-grain textures and patterns that are nearly indistinguishable from real hardwood. Unlike genuine wood, LVP won't warp, swell, or stain when exposed to moisture, making it perfect for kitchens, bathrooms, laundry rooms, and basements. It's also scratch-resistant, making it ideal for homes with pets and children.

The click-lock installation system used by most LVP products allows for a floating floor installation that can often be placed directly over your existing subfloor. This means faster installation times and less disruption to your daily routine. We also offer glue-down LVP options for commercial applications or areas that require extra stability.

Our LVP installation process includes thorough subfloor preparation, precise measurements, acclimation time for the material, and expert cutting around doorways, corners, and transitions. We handle every detail so you can enjoy your beautiful new floors with confidence.`,
    benefits: [
      "100% waterproof — perfect for kitchens, bathrooms, and basements",
      "Scratch and dent resistant for homes with pets and kids",
      "Realistic hardwood look at a fraction of the cost",
      "Easy to maintain — just sweep and mop",
      "Comfortable underfoot with built-in underlayment",
      "Quick installation with minimal disruption",
    ],
    processSteps: [
      {
        title: "Free In-Home Consultation",
        description:
          "We visit your home, assess your subfloor, take measurements, and help you choose the perfect LVP product for your space and budget.",
      },
      {
        title: "Subfloor Preparation",
        description:
          "We inspect and prepare your subfloor, addressing any imperfections, moisture issues, or leveling needs to ensure a perfect foundation.",
      },
      {
        title: "Material Acclimation",
        description:
          "Your LVP flooring is delivered and allowed to acclimate to your home's temperature and humidity for optimal performance.",
      },
      {
        title: "Expert Installation",
        description:
          "Our skilled installers carefully lay each plank with precision cuts around doorways, walls, and transitions for a seamless finish.",
      },
      {
        title: "Final Inspection & Cleanup",
        description:
          "We complete a thorough inspection, install trim and transitions, and leave your home spotless with your beautiful new floors ready to enjoy.",
      },
    ],
    faqs: [
      {
        question: "How long does LVP flooring installation take?",
        answer:
          "Most LVP installations are completed in 1-3 days depending on the size of the area and subfloor preparation needed. A typical single room can often be completed in just one day.",
      },
      {
        question: "Can LVP be installed over existing flooring?",
        answer:
          "In many cases, yes. LVP can be installed over existing tile, vinyl, or hardwood if the surface is flat and in good condition. We'll assess your specific situation during our free consultation.",
      },
      {
        question: "Is LVP flooring really waterproof?",
        answer:
          "Yes! LVP is 100% waterproof from top to bottom. Unlike laminate, the core material won't swell or warp when exposed to water, making it safe for bathrooms, kitchens, and even basements.",
      },
      {
        question: "How long does LVP flooring last?",
        answer:
          "With proper installation and care, quality LVP flooring can last 15-25 years or more. Most products come with residential warranties of 15 years to lifetime.",
      },
      {
        question: "What does LVP installation cost?",
        answer:
          "LVP installation costs vary based on the product selected, room size, and subfloor condition. We provide free, detailed estimates with no hidden fees. Contact us at (262) 327-3989 for your quote.",
      },
    ],
  },
  {
    slug: "hardwood-flooring",
    title: "Hardwood Flooring Installation",
    shortTitle: "Hardwood Installation",
    icon: TreePine,
    metaDescription:
      "Expert hardwood flooring installation in Florence, AL. Solid and engineered hardwood from The Flooring Folks. Timeless beauty, lasting value. Call for free estimate!",
    heroDescription:
      "Solid and engineered hardwood installation. Timeless beauty that adds lasting value to your home.",
    content: `Nothing matches the timeless beauty and lasting value of genuine hardwood flooring. At The Flooring Folks, we specialize in both solid and engineered hardwood installation, bringing over 17 years of expert craftsmanship to every project in Florence, AL and the surrounding Shoals communities.

Hardwood flooring is one of the most sought-after features for homebuyers, consistently ranking as a top preference in real estate surveys. Whether you're renovating your forever home or preparing a property for sale, professionally installed hardwood floors add significant value and curb appeal that other flooring types simply can't match.

We work with all popular hardwood species including oak, maple, hickory, walnut, and exotic varieties. Each species offers unique grain patterns, hardness levels, and color characteristics. Our team helps you select the perfect wood for your lifestyle, traffic levels, and design preferences.

Engineered hardwood is an excellent option for areas where solid wood may not be recommended, such as over concrete subfloors or in spaces with fluctuating humidity. Engineered wood features a real hardwood veneer over a stable plywood core, providing the authentic look of solid wood with enhanced dimensional stability.

Our installation process accounts for proper acclimation, moisture testing, subfloor preparation, and precise nailing or gluing techniques. We take special care around transitions, doorways, and custom borders to ensure a professional finish that will be admired for generations.`,
    benefits: [
      "Increases your home's resale value significantly",
      "Timeless aesthetic that never goes out of style",
      "Can be refinished multiple times over its lifetime",
      "Natural, eco-friendly flooring material",
      "Available in dozens of species, stains, and finishes",
      "Durable enough to last 50+ years with proper care",
    ],
    processSteps: [
      {
        title: "Consultation & Wood Selection",
        description:
          "We discuss your vision, assess your space, and help you choose the perfect wood species, stain, and finish for your home.",
      },
      {
        title: "Moisture Testing & Subfloor Prep",
        description:
          "We test your subfloor and hardwood for proper moisture content and prepare the surface to ensure a stable, long-lasting installation.",
      },
      {
        title: "Acclimation Period",
        description:
          "Your hardwood is delivered and allowed to acclimate to your home's environment for 3-7 days to prevent gaps or buckling after installation.",
      },
      {
        title: "Precision Installation",
        description:
          "Our experienced installers nail or glue each board with meticulous attention to pattern, spacing, and alignment for a flawless result.",
      },
      {
        title: "Sanding & Finishing",
        description:
          "For unfinished hardwood, we sand to a smooth surface and apply your chosen stain and protective finish coats for lasting beauty.",
      },
    ],
    faqs: [
      {
        question: "Should I choose solid or engineered hardwood?",
        answer:
          "Solid hardwood is ideal for ground-level or above-grade rooms with plywood subfloors. Engineered hardwood is better for basements, concrete subfloors, or areas with humidity fluctuations. We'll help you decide during your consultation.",
      },
      {
        question: "How long does hardwood installation take?",
        answer:
          "A typical hardwood installation takes 3-5 days, including acclimation time. Unfinished hardwood with sanding and finishing may take 5-7 days. The timeline depends on room size and product type.",
      },
      {
        question: "Can hardwood be installed in kitchens and bathrooms?",
        answer:
          "Engineered hardwood can be installed in kitchens with proper precautions. We generally recommend avoiding hardwood in full bathrooms due to excessive moisture exposure. LVP is a great waterproof alternative for wet areas.",
      },
      {
        question: "How much does hardwood installation cost?",
        answer:
          "Hardwood installation costs vary based on wood species, room size, and subfloor requirements. We provide transparent, detailed estimates with no hidden fees. Call (262) 327-3989 for your free quote.",
      },
    ],
  },
  {
    slug: "tile-installation",
    title: "Tile & Stone Installation",
    shortTitle: "Tile & Stone Work",
    icon: SquareStack,
    metaDescription:
      "Professional tile and stone installation in Florence, AL. Precision tile work for kitchens, bathrooms, and more from The Flooring Folks. Free estimates!",
    heroDescription:
      "Precision tile work including LVT with grout. Perfect for kitchens, bathrooms, and accent walls.",
    content: `Professional tile and stone installation transforms any space with elegance, durability, and easy maintenance. The Flooring Folks provides expert tile installation services throughout Florence, AL and The Shoals area, with 17+ years of experience working with ceramic, porcelain, natural stone, and luxury vinyl tile with grout.

Tile flooring is one of the most durable and versatile flooring options available. It's naturally waterproof, incredibly easy to clean, and available in an endless array of colors, patterns, sizes, and textures. From classic subway tile to large-format porcelain planks that mimic hardwood, the design possibilities are virtually limitless.

Our tile installation services cover floors, walls, showers, backsplashes, and accent features. We work with all popular tile materials including ceramic, porcelain, marble, travertine, slate, and glass. Each material requires specific installation techniques, and our experienced team knows exactly how to handle each one for optimal results.

Proper tile installation is critical to longevity and appearance. Uneven surfaces, lippage (height differences between tiles), and grout issues are common problems with amateur installations. Our meticulous approach ensures perfectly level, evenly spaced tiles with clean grout lines that will look beautiful for decades.

We also specialize in LVT (luxury vinyl tile) with grout, which offers the stunning look of ceramic or stone tile with added warmth and comfort underfoot. This increasingly popular option is perfect for homeowners who love the tile look but want a more forgiving surface.`,
    benefits: [
      "Extremely durable — lasts 50+ years with proper care",
      "100% waterproof for kitchens, bathrooms, and laundry rooms",
      "Easy to clean and maintain",
      "Endless design options in colors, patterns, and textures",
      "Ideal for allergy sufferers — doesn't trap dust or allergens",
      "Increases home value with a premium look",
    ],
    processSteps: [
      {
        title: "Design Consultation",
        description:
          "We help you select the perfect tile material, size, pattern, and color to complement your space and design vision.",
      },
      {
        title: "Subfloor Assessment & Prep",
        description:
          "We inspect your subfloor for levelness and structural integrity, making any necessary repairs or leveling before installation.",
      },
      {
        title: "Layout Planning",
        description:
          "We plan the tile layout to minimize cuts, ensure symmetry, and create the most visually appealing pattern for your room.",
      },
      {
        title: "Expert Tile Installation",
        description:
          "Our installers apply mortar, set each tile with precision spacing and leveling, and cut tiles to fit perfectly around edges and fixtures.",
      },
      {
        title: "Grouting & Sealing",
        description:
          "We apply grout in your chosen color, clean excess material, and apply sealer to protect your tile and grout for years of beauty.",
      },
    ],
    faqs: [
      {
        question: "What type of tile is best for bathroom floors?",
        answer:
          "Porcelain tile is the top choice for bathroom floors due to its low water absorption rate and durability. Textured or matte finishes provide better slip resistance than polished tiles.",
      },
      {
        question: "How long does tile installation take?",
        answer:
          "A typical bathroom tile installation takes 3-5 days. Larger floor areas may take 3-7 days depending on the tile size, pattern complexity, and whether old flooring needs to be removed first.",
      },
      {
        question: "Do you install heated flooring under tile?",
        answer:
          "Yes! Radiant heated flooring can be installed under tile floors for added comfort. We can coordinate with electricians to install the heating elements before we lay the tile.",
      },
      {
        question: "What is LVT with grout?",
        answer:
          "Luxury vinyl tile with grout combines the look of ceramic or stone tile with the comfort and warmth of vinyl. The tiles are set with grout just like traditional tile, creating an authentic look that's softer and warmer underfoot.",
      },
    ],
  },
  {
    slug: "laminate-flooring",
    title: "Laminate Flooring Installation",
    shortTitle: "Laminate Flooring",
    icon: Grid3x3,
    metaDescription:
      "Affordable laminate flooring installation in Florence, AL. Expert laminate install and removal from The Flooring Folks. Call (262) 327-3989 for free estimate!",
    heroDescription:
      "Expert laminate installation and removal. Affordable style that stands up to daily wear and tear.",
    content: `Laminate flooring offers an unbeatable combination of style, durability, and affordability. The Flooring Folks provides professional laminate flooring installation throughout Florence, AL and The Shoals area, helping homeowners achieve the look of hardwood or stone at a fraction of the cost.

Today's laminate flooring is a far cry from the products of decades past. Modern laminate features high-definition photographic layers that beautifully replicate the look of real wood, stone, or tile with remarkable accuracy. Advanced embossing techniques add texture that matches the visual grain patterns, creating a floor that's nearly indistinguishable from the real thing.

Laminate flooring consists of multiple layers: a protective wear layer, a photographic design layer, a high-density fiberboard core, and a backing layer for stability. This construction makes laminate highly resistant to scratches, dents, fading, and staining — ideal for busy households with children and pets.

The click-lock installation system makes laminate one of the faster flooring options to install. The floating floor method means laminate can often be installed over existing flooring without the need for nails or glue. This reduces installation time and cost while still delivering a professional, long-lasting result.

While laminate is not waterproof like LVP, many newer products feature water-resistant coatings and tighter locking systems that provide protection against everyday spills. We can help you determine if laminate or LVP is the better choice for your specific rooms and lifestyle.`,
    benefits: [
      "Most affordable way to get a hardwood or stone look",
      "Highly scratch and fade resistant",
      "Easy to clean — just sweep and damp mop",
      "Quick installation with click-lock floating floor system",
      "Wide variety of realistic wood and stone patterns",
      "Great for high-traffic areas and busy households",
    ],
    processSteps: [
      {
        title: "Product Selection",
        description:
          "We help you choose from our range of laminate products, matching the perfect style, color, and durability rating to your needs and budget.",
      },
      {
        title: "Measurement & Planning",
        description:
          "We take precise measurements and plan the layout to minimize waste and ensure the best visual result for your space.",
      },
      {
        title: "Old Flooring Removal",
        description:
          "If needed, we carefully remove your existing flooring and prepare the subfloor surface for the new laminate installation.",
      },
      {
        title: "Underlayment & Installation",
        description:
          "We install the appropriate underlayment for moisture protection and sound dampening, then click-lock each plank into place with precision.",
      },
      {
        title: "Finishing Touches",
        description:
          "We install baseboards, transitions, and trim to complete the look, then do a final walkthrough to ensure your complete satisfaction.",
      },
    ],
    faqs: [
      {
        question: "Is laminate flooring good for kitchens?",
        answer:
          "Laminate can work in kitchens with proper precautions. We recommend water-resistant laminate products and recommend wiping up spills promptly. For kitchens with high moisture exposure, LVP may be a better waterproof alternative.",
      },
      {
        question: "How long does laminate flooring last?",
        answer:
          "Quality laminate flooring typically lasts 15-25 years with proper care. Higher-end products with thicker wear layers can last even longer. The lifespan depends on the quality of the product and traffic levels.",
      },
      {
        question: "Can laminate be installed over concrete?",
        answer:
          "Yes, laminate can be installed over concrete with a proper moisture barrier and underlayment. We test the concrete for moisture content and take appropriate precautions to protect your new floor.",
      },
      {
        question: "What's the difference between laminate and LVP?",
        answer:
          "Laminate has a fiberboard core that can swell if exposed to excessive moisture. LVP has a waterproof vinyl core. LVP is better for wet areas, while laminate offers a slightly more realistic wood feel at a lower price point.",
      },
    ],
  },
  {
    slug: "carpet-installation",
    title: "Carpet & Carpet Tile Installation",
    shortTitle: "Carpet & Carpet Tile",
    icon: Grid3x3,
    metaDescription:
      "Professional carpet installation in Florence, AL. Expert carpet removal and installation from The Flooring Folks. Comfort and warmth for your home. Free estimate!",
    heroDescription:
      "Professional carpet removal and installation. Comfort and warmth for bedrooms and living spaces.",
    content: `Carpet remains one of the most popular flooring choices for bedrooms, living rooms, and family spaces throughout Florence, AL. The Flooring Folks provides expert carpet and carpet tile installation with over 17 years of experience, ensuring a plush, professional finish that transforms your space into a cozy retreat.

Modern carpet comes in an incredible variety of styles, textures, colors, and fiber types. From plush cut pile that feels luxurious underfoot to durable loop pile that stands up to heavy traffic, there's a perfect carpet for every room and lifestyle. We help you navigate the options to find the ideal balance of comfort, style, and durability.

Carpet provides unmatched benefits that no other flooring type can offer. It's the warmest and softest flooring option, providing natural insulation that reduces energy costs and dampens sound transmission between floors. Carpet also improves indoor air quality by trapping allergens and dust particles until they can be vacuumed away.

Carpet tile is an increasingly popular option for both residential and commercial applications. These modular squares offer easy installation, individual replacement if damaged, and creative design possibilities through mixing colors and patterns. Carpet tiles are particularly popular for playrooms, offices, and commercial spaces.

Our carpet installation process includes careful measurement, old carpet removal and disposal, subfloor inspection and preparation, quality padding installation, and precise stretching and seaming for a wrinkle-free, professional result.`,
    benefits: [
      "Softest and warmest flooring option available",
      "Natural sound insulation — reduces noise between floors",
      "Traps allergens and dust for improved air quality",
      "Non-slip surface — safer for children and elderly",
      "Wide range of colors, patterns, and textures",
      "Most affordable flooring option per square foot",
    ],
    processSteps: [
      {
        title: "Carpet Selection",
        description:
          "We help you choose from a wide range of carpet styles, fibers, and colors, considering your lifestyle, traffic levels, and design preferences.",
      },
      {
        title: "Old Carpet Removal",
        description:
          "We carefully remove your existing carpet and padding, dispose of it responsibly, and inspect the subfloor underneath.",
      },
      {
        title: "Subfloor Preparation",
        description:
          "We clean, repair, and level the subfloor as needed, and address any squeaks or loose areas before the new installation.",
      },
      {
        title: "Padding & Carpet Installation",
        description:
          "We install quality carpet padding for comfort and longevity, then precisely cut, stretch, and seam your new carpet for a flawless fit.",
      },
      {
        title: "Final Stretching & Cleanup",
        description:
          "We power-stretch the carpet to eliminate wrinkles, install transitions at doorways, and leave your space clean and ready to enjoy.",
      },
    ],
    faqs: [
      {
        question: "How often should carpet be replaced?",
        answer:
          "Quality carpet typically lasts 10-15 years depending on traffic, maintenance, and quality. High-traffic areas may need replacement sooner, while well-maintained bedrooms can last much longer.",
      },
      {
        question: "What carpet fiber is best for pets?",
        answer:
          "Nylon is the most popular choice for pet owners due to its excellent durability and stain resistance. Solution-dyed polyester and triexta fibers also offer good stain resistance at lower price points.",
      },
      {
        question: "Do you remove old carpet?",
        answer:
          "Yes! We handle the complete removal and disposal of your old carpet and padding as part of our installation service. There's no need to hire a separate contractor.",
      },
      {
        question: "How long does carpet installation take?",
        answer:
          "Most carpet installations are completed in one day. Larger homes or complex layouts may take 1-2 days. We'll give you a specific timeline with your estimate.",
      },
    ],
  },
  {
    slug: "vinyl-flooring",
    title: "Sheet Vinyl & VCT Installation",
    shortTitle: "Sheet Vinyl & VCT",
    icon: Droplets,
    metaDescription:
      "Commercial and residential sheet vinyl and VCT installation in Florence, AL. Seamless, professional results from The Flooring Folks. Free estimate!",
    heroDescription:
      "Commercial and residential sheet vinyl and VCT installation. Clean, seamless, and professional.",
    content: `Sheet vinyl and vinyl composition tile (VCT) offer practical, affordable flooring solutions for both residential and commercial properties throughout Florence, AL. The Flooring Folks provides expert installation of sheet vinyl and VCT with the precision and attention to detail that 17+ years of experience brings.

Sheet vinyl is an excellent choice for areas that need seamless, waterproof flooring. Unlike individual tiles or planks, sheet vinyl comes in large rolls that create a continuous surface with minimal or no seams. This makes it ideal for bathrooms, kitchens, laundry rooms, and medical facilities where moisture resistance and hygiene are priorities.

Modern sheet vinyl has evolved dramatically from the dated products of the past. Today's options feature stunning photographic designs that realistically replicate the look of hardwood, stone, and ceramic tile. Cushioned backing provides comfort underfoot, and commercial-grade wear layers ensure long-lasting performance in high-traffic areas.

VCT (vinyl composition tile) is a time-tested commercial flooring solution found in schools, hospitals, retail stores, and office buildings throughout northwest Alabama. VCT is extremely durable, easy to repair (individual tiles can be replaced), and can be stripped and refinished to maintain its appearance for decades.

Both sheet vinyl and VCT require skilled installation for the best results. Sheet vinyl demands precise cutting, careful adhesive application, and expert seaming to create a watertight surface. VCT installation requires careful layout planning, consistent adhesive application, and proper strip-and-finish maintenance protocols.`,
    benefits: [
      "Sheet vinyl provides seamless waterproof protection",
      "Extremely affordable flooring option",
      "Easy to clean and maintain",
      "VCT is individually repairable — replace damaged tiles easily",
      "Available in realistic wood, stone, and tile looks",
      "Ideal for commercial and high-traffic applications",
    ],
    processSteps: [
      {
        title: "Product Consultation",
        description:
          "We assess your space and needs to recommend the right sheet vinyl or VCT product, including commercial-grade options for high-traffic areas.",
      },
      {
        title: "Measurement & Material Planning",
        description:
          "We take precise measurements and plan the sheet layout to minimize seams and waste while ensuring the best visual result.",
      },
      {
        title: "Subfloor Preparation",
        description:
          "We prepare the subfloor to create a perfectly smooth surface, as any imperfections will show through sheet vinyl over time.",
      },
      {
        title: "Expert Installation",
        description:
          "We carefully lay the sheet vinyl or VCT, using professional techniques for seaming, adhesive application, and edge finishing.",
      },
      {
        title: "Finishing & Maintenance Guidance",
        description:
          "We complete the installation with proper edge sealing and transitions, and provide maintenance instructions to keep your floor looking great.",
      },
    ],
    faqs: [
      {
        question: "Is sheet vinyl better than LVP?",
        answer:
          "Sheet vinyl offers truly seamless waterproof protection, making it excellent for wet areas. LVP provides a more realistic look and easier installation. The best choice depends on your specific room and needs.",
      },
      {
        question: "How long does sheet vinyl last?",
        answer:
          "Quality sheet vinyl typically lasts 10-20 years depending on the wear layer thickness and traffic levels. Commercial-grade products can last even longer with proper maintenance.",
      },
      {
        question: "Do you install commercial flooring?",
        answer:
          "Yes! We install sheet vinyl, VCT, and other flooring types for commercial properties including offices, retail stores, medical facilities, and restaurants throughout The Shoals area.",
      },
      {
        question: "Can sheet vinyl be installed over existing flooring?",
        answer:
          "In some cases, sheet vinyl can be installed over existing vinyl if the surface is smooth and in good condition. We'll assess your specific situation during our free consultation.",
      },
    ],
  },
  {
    slug: "subfloor-preparation",
    title: "Subfloor Preparation & Repair",
    shortTitle: "Subfloor Preparation",
    icon: Hammer,
    metaDescription:
      "Expert subfloor preparation and repair in Florence, AL. Skimcoat, subfloor install, and leveling from The Flooring Folks. A solid foundation for beautiful floors!",
    heroDescription:
      "Skimcoat, subfloor install, and repair. A great floor starts with a solid foundation.",
    content: `Every beautiful floor starts with a properly prepared subfloor. The Flooring Folks provides comprehensive subfloor preparation and repair services throughout Florence, AL and The Shoals area, ensuring your new flooring has the perfect foundation for long-lasting performance and beauty.

Subfloor preparation is the most critical — and most overlooked — step in any flooring installation. An uneven, damaged, or improperly prepared subfloor can cause squeaking, premature wear, visible imperfections, and even complete flooring failure. That's why we take subfloor preparation as seriously as the flooring installation itself.

Our subfloor services include leveling uneven surfaces with self-leveling compound, repairing damaged or rotted subfloor sections, installing new plywood or cement board subfloors, skimcoating to smooth imperfections, and addressing moisture issues with proper vapor barriers and treatments.

Many older homes in the Florence and Shoals area have subfloors that have settled, been damaged by moisture, or were never properly leveled during construction. Our experienced team has seen every type of subfloor issue and has the expertise to correct them all, creating a flat, stable surface ready for any flooring material.

Proper subfloor preparation is especially critical for luxury vinyl plank and tile installations, as these materials conform to the subfloor surface and will telegraph any imperfections. Investing in proper subfloor prep ensures your new flooring looks flawless and performs beautifully for its entire lifespan.`,
    benefits: [
      "Prevents squeaking, buckling, and premature wear",
      "Ensures a perfectly flat surface for new flooring",
      "Addresses moisture issues before they damage your new floor",
      "Extends the lifespan of your flooring investment",
      "Required for warranty compliance with most flooring products",
      "Experienced with all subfloor types and conditions",
    ],
    processSteps: [
      {
        title: "Subfloor Inspection",
        description:
          "We thoroughly inspect your existing subfloor for levelness, moisture content, structural integrity, and any damage that needs to be addressed.",
      },
      {
        title: "Issue Identification",
        description:
          "We identify all problem areas including high spots, low spots, moisture damage, squeaks, and structural deficiencies that need correction.",
      },
      {
        title: "Repair & Replacement",
        description:
          "We repair or replace damaged subfloor sections, fix squeaks by securing loose areas, and address any structural concerns.",
      },
      {
        title: "Leveling & Smoothing",
        description:
          "We apply self-leveling compound or skimcoat to create a perfectly flat surface that meets the tolerance requirements for your chosen flooring.",
      },
      {
        title: "Moisture Protection",
        description:
          "We install vapor barriers or apply moisture treatments as needed to protect your new flooring from subfloor moisture.",
      },
    ],
    faqs: [
      {
        question: "How do I know if my subfloor needs preparation?",
        answer:
          "Signs include squeaking floors, visible dips or humps, soft spots, water stains, or existing flooring that has cracked or separated. We can assess your subfloor during a free consultation.",
      },
      {
        question: "Can you install a new subfloor over the old one?",
        answer:
          "In many cases, yes. We can install new plywood or cement board over existing subfloors to create a fresh, flat surface. This is often more cost-effective than full subfloor replacement.",
      },
      {
        question: "How much does subfloor repair cost?",
        answer:
          "Costs depend on the extent of the damage and the repair method needed. Minor leveling is very affordable, while extensive repairs will be more. We provide detailed estimates after inspection.",
      },
      {
        question: "Is subfloor preparation really necessary?",
        answer:
          "Absolutely. Skipping proper subfloor prep is the number one cause of flooring failure. Most flooring manufacturers require subfloor preparation to meet specific flatness tolerances for warranty coverage.",
      },
    ],
  },
  {
    slug: "baseboard-trim",
    title: "Baseboard & Trim Installation",
    shortTitle: "Baseboard & Trim",
    icon: Paintbrush,
    metaDescription:
      "Professional baseboard and trim installation in Florence, AL. Shoe moulding, quarter round, and cove base from The Flooring Folks. The perfect finishing touch!",
    heroDescription:
      "Shoe moulding, quarter round, and cove base installation. The finishing touch that makes all the difference.",
    content: `The right baseboard and trim work transforms a good flooring installation into a truly professional result. The Flooring Folks provides expert baseboard, shoe moulding, quarter round, and cove base installation services throughout Florence, AL and The Shoals area, adding the finishing touch that makes all the difference.

Baseboard and trim serve both functional and aesthetic purposes. They cover the expansion gap required between your flooring and the wall, protect walls from scuffs and damage, and create a clean visual transition between your floor and wall surfaces. The right trim elevates the entire look of a room.

We work with all popular trim styles, from simple shoe moulding and quarter round to elegant baseboards and contemporary cove base. Each style creates a different visual effect, and we help you select the trim that best complements your flooring choice and interior design.

Proper trim installation requires precise cutting, especially at inside corners, outside corners, and transitions between rooms. Our experienced installers use professional miter saws and coping techniques to create tight, seamless joints that look professionally finished.

We also offer painting and staining services for your trim work, whether you prefer a classic white finish that contrasts with your flooring or a stained finish that matches your wood tones. Proper preparation, priming, and painting techniques ensure a smooth, durable finish that resists chipping and yellowing.`,
    benefits: [
      "Creates a clean, finished look for any flooring installation",
      "Protects walls from scuffs, vacuums, and mops",
      "Covers the required expansion gap around flooring edges",
      "Available in many styles to match any design aesthetic",
      "Expert miter and coping cuts for seamless corners",
      "Painting and staining services available",
    ],
    processSteps: [
      {
        title: "Style Selection",
        description:
          "We help you choose the perfect baseboard or trim style, height, and finish to complement your new flooring and room design.",
      },
      {
        title: "Measurement & Planning",
        description:
          "We measure each wall and plan the installation to minimize joints and ensure the best visual result throughout your space.",
      },
      {
        title: "Precision Cutting",
        description:
          "We use professional miter saws and coping techniques to cut perfect corners and joints that fit together seamlessly.",
      },
      {
        title: "Installation",
        description:
          "We nail each piece of trim securely, fill nail holes, and caulk joints for a clean, professional finish.",
      },
      {
        title: "Painting & Finishing",
        description:
          "If requested, we prime and paint or stain your trim to match your desired finish, applying multiple coats for durability.",
      },
    ],
    faqs: [
      {
        question: "Do I need new baseboards with new flooring?",
        answer:
          "Not always. If your existing baseboards are in good condition, shoe moulding or quarter round can be added to cover the expansion gap. However, new baseboards provide the cleanest, most professional look.",
      },
      {
        question: "What's the difference between shoe moulding and quarter round?",
        answer:
          "Quarter round is exactly that — a quarter of a circle in profile. Shoe moulding has a slightly more oval profile and is generally considered more decorative. Both serve the same functional purpose of covering expansion gaps.",
      },
      {
        question: "Can you paint the trim to match my walls?",
        answer:
          "Absolutely! We can paint your trim in any color you choose. Most homeowners prefer white or a color that matches their wall trim for a cohesive look.",
      },
      {
        question: "How long does baseboard installation take?",
        answer:
          "Most baseboard installations are completed in one day for an average-sized home. Larger homes or projects that include painting may take 2-3 days.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);
