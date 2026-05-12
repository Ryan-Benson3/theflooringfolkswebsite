export interface CityData {
  slug: string;
  name: string;
  fullName: string;
  metaDescription: string;
  content: string;
  landmarks: string[];
  testimonials: { name: string; text: string; rating: number }[];
}

export const cities: CityData[] = [
  {
    slug: "florence-al",
    name: "Florence",
    fullName: "Florence, AL",
    metaDescription:
      "Professional flooring installation in Florence, AL. LVP, hardwood, tile, laminate & carpet from The Flooring Folks. 17+ years experience. Call (256) 415-7610!",
    content: `The Flooring Folks is proud to be Florence, Alabama's trusted flooring installation company. Based right here in the Shoals, we've been serving Florence homeowners and businesses with expert flooring installation for over 17 years. From the historic districts near downtown to the growing neighborhoods along Cox Creek Parkway, we've installed beautiful floors in homes and commercial properties throughout the entire Florence community.

Florence is the cultural and economic hub of The Shoals region, and we understand the unique character of homes here — from the charming historic residences near the University of North Alabama to the newer developments in west Florence. Each home presents unique flooring challenges and opportunities, and our experienced team knows how to deliver exceptional results regardless of the property's age or style.

We offer the complete range of flooring services to Florence residents, including luxury vinyl plank installation, hardwood flooring, tile and stone work, laminate, carpet, sheet vinyl, subfloor preparation, and baseboard and trim work. Whether you're renovating a historic home on Wood Avenue, updating a family residence in Sherwood Estates, or outfitting a new commercial space, The Flooring Folks has the expertise to exceed your expectations.

Our commitment to Florence goes beyond just flooring installation. We're your neighbors, and we take pride in contributing to the beauty and value of our community, one floor at a time. Every project we complete reflects our dedication to quality craftsmanship, honest pricing, and treating every home with the respect it deserves.`,
    landmarks: [
      "University of North Alabama (UNA)",
      "Florence Downtown Historic District",
      "Wilson Park",
      "Deibert Park",
      "Cox Creek Parkway shopping area",
      "McFarland Park",
      "The Shoals Conference Center",
      "Florence-Lauderdale Coliseum",
    ],
    testimonials: [
      {
        name: "Sarah M.",
        text: "Ryan and his team installed LVP throughout our entire home in Florence. The craftsmanship is outstanding — every plank is perfectly placed. They were professional, on time, and left our home spotless. Highly recommend!",
        rating: 5,
      },
      {
        name: "David & Karen W.",
        text: "We had hardwood installed in our Florence living room and hallway. The attention to detail was incredible. They took the time to explain everything, gave us a fair price, and the finished floor is absolutely beautiful.",
        rating: 5,
      },
    ],
  },
  {
    slug: "muscle-shoals-al",
    name: "Muscle Shoals",
    fullName: "Muscle Shoals, AL",
    metaDescription:
      "Expert flooring installation in Muscle Shoals, AL. LVP, hardwood, tile & more from The Flooring Folks. Serving The Shoals for 17+ years. Free estimates!",
    content: `The Flooring Folks is the go-to flooring installation company for Muscle Shoals, Alabama homeowners. With over 17 years of experience serving The Shoals area, we've built a reputation for exceptional craftsmanship, reliable service, and fair pricing that Muscle Shoals residents trust for their flooring projects.

Muscle Shoals is one of the fastest-growing communities in northwest Alabama, with a wonderful mix of established neighborhoods and new construction. Whether you're building a new home in one of the area's popular subdivisions or updating flooring in an existing residence, our team has the skills and experience to deliver beautiful, long-lasting results.

We provide the full spectrum of flooring services to Muscle Shoals homeowners. Our most popular service is luxury vinyl plank (LVP) installation, which has become the top choice for families who want the look of hardwood with waterproof protection and superior durability. We also install genuine hardwood, tile and stone, laminate, carpet, and sheet vinyl flooring.

What sets The Flooring Folks apart in Muscle Shoals is our attention to detail and commitment to customer satisfaction. We treat every home as if it were our own, maintaining clean work areas, communicating clearly throughout the project, and standing behind our work with confidence. Our many repeat customers and referrals in Muscle Shoals are a testament to the quality of our service.`,
    landmarks: [
      "Muscle Shoals Sound Studio",
      "FAME Recording Studios",
      "Joe Wheeler State Park",
      "Riverfront Park",
      "Muscle Shoals National Golf Club",
      "Helen Keller Hospital area",
      "Woodmont Baptist Church area",
      "Regency Square Mall area",
    ],
    testimonials: [
      {
        name: "James & Linda T.",
        text: "We had hardwood installed in our Muscle Shoals home. The attention to detail was incredible. They took the time to explain everything, gave us a fair price, and the finished floor is absolutely beautiful.",
        rating: 5,
      },
      {
        name: "Patricia H.",
        text: "The Flooring Folks installed tile in our Muscle Shoals bathroom renovation. The work was flawless — perfect cuts, clean grout lines, and they cleaned up everything. Couldn't be happier!",
        rating: 5,
      },
    ],
  },
  {
    slug: "sheffield-al",
    name: "Sheffield",
    fullName: "Sheffield, AL",
    metaDescription:
      "Quality flooring installation in Sheffield, AL. LVP, hardwood, tile, carpet & more from The Flooring Folks. 17+ years serving The Shoals. Call today!",
    content: `The Flooring Folks proudly serves Sheffield, Alabama with professional flooring installation services backed by over 17 years of experience. As a local company rooted in The Shoals community, we understand the unique character of Sheffield homes and deliver flooring solutions that enhance both beauty and value.

Sheffield's rich history is reflected in its diverse housing stock, from charming bungalows and craftsman-style homes near downtown to mid-century residences and newer construction throughout the city. Each style presents different flooring considerations, and our experienced team has the expertise to work with any home type and subfloor condition.

We offer Sheffield residents the complete range of professional flooring services. Whether you're looking for the modern appeal of luxury vinyl plank, the timeless elegance of hardwood, the durability of tile, or the comfort of carpet, we have the products and installation expertise to bring your vision to life. We also handle all the prep work, including subfloor leveling, moisture testing, and trim installation.

Sheffield homeowners choose The Flooring Folks because we combine small-town service with professional-grade craftsmanship. We show up on time, keep our work areas clean, communicate clearly throughout the project, and deliver results that exceed expectations. Our goal is to be Sheffield's flooring company for life.`,
    landmarks: [
      "Spring Park",
      "Sheffield Historic Downtown",
      "Tom Hendrix Wall",
      "Tennessee River waterfront",
      "Sheffield Public Library",
      "Veterans Memorial Park",
      "Colbert County Courthouse area",
      "Riverfront Park & Walking Trail",
    ],
    testimonials: [
      {
        name: "Mike R.",
        text: "As a contractor, I've worked with many flooring installers. The Flooring Folks are the best in The Shoals area. Reliable, skilled, and fairly priced. They're my go-to for every project now.",
        rating: 5,
      },
      {
        name: "Jennifer L.",
        text: "We had LVP installed throughout our Sheffield home and it looks amazing. The team was professional, efficient, and the price was very fair. We've already recommended them to neighbors!",
        rating: 5,
      },
    ],
  },
  {
    slug: "tuscumbia-al",
    name: "Tuscumbia",
    fullName: "Tuscumbia, AL",
    metaDescription:
      "Professional flooring installation in Tuscumbia, AL. Hardwood, LVP, tile & carpet from The Flooring Folks. Expert service in The Shoals. Free estimates!",
    content: `The Flooring Folks is honored to serve Tuscumbia, Alabama with expert flooring installation services. As part of The Shoals community, we've been helping Tuscumbia homeowners transform their spaces with beautiful, professionally installed floors for over 17 years.

Tuscumbia is a city rich in history and Southern charm, home to the famous Ivy Green — the birthplace of Helen Keller. The homes here reflect that heritage, from beautifully preserved historic residences to comfortable family homes in established neighborhoods. We take special care when working in Tuscumbia's historic properties, using techniques that respect the home's character while delivering modern flooring performance.

Our flooring services available to Tuscumbia residents include luxury vinyl plank installation, hardwood flooring, tile and stone work, laminate flooring, carpet installation, sheet vinyl and VCT, subfloor preparation, and baseboard and trim work. We handle everything from single-room updates to whole-home flooring renovations.

Tuscumbia homeowners appreciate our honest, straightforward approach to flooring installation. We provide detailed estimates with no hidden fees, arrive on schedule, maintain clean work environments, and ensure complete customer satisfaction before considering any job done. It's this commitment to excellence that has made us a trusted name in Tuscumbia and throughout The Shoals.`,
    landmarks: [
      "Ivy Green (Helen Keller Birthplace)",
      "Spring Park",
      "Downtown Tuscumbia Historic District",
      "Tuscumbia Railroad Depot",
      "Colbert County Courthouse",
      "Key-Cameron Park",
      "Cane Creek Canyon Nature Preserve",
      "Palace Theater",
    ],
    testimonials: [
      {
        name: "Robert & Susan K.",
        text: "The Flooring Folks installed hardwood in our Tuscumbia home and it's absolutely beautiful. They were respectful of our older home and took extra care with the installation. Outstanding work!",
        rating: 5,
      },
      {
        name: "Amanda C.",
        text: "We had carpet installed in our Tuscumbia bedrooms and couldn't be happier. The team was professional, on time, and the carpet looks and feels wonderful. Great experience from start to finish.",
        rating: 5,
      },
    ],
  },
  {
    slug: "killen-al",
    name: "Killen",
    fullName: "Killen, AL",
    metaDescription:
      "Trusted flooring installation in Killen, AL. LVP, hardwood, tile & carpet from The Flooring Folks. Serving Killen and Lauderdale County. Free estimates!",
    content: `The Flooring Folks is Killen, Alabama's trusted flooring installation company. We've been serving homeowners in Killen and throughout Lauderdale County for over 17 years, providing expert flooring installation with the personal attention and care that small-town communities deserve.

Killen is a wonderful community just east of Florence, known for its friendly neighborhoods, excellent schools, and beautiful countryside. Whether you live in the heart of Killen or in one of the surrounding rural areas, The Flooring Folks brings the same professional flooring installation services right to your door.

We offer Killen residents a complete range of flooring options including luxury vinyl plank, hardwood, tile and stone, laminate, carpet, sheet vinyl, and professional subfloor preparation. LVP has become particularly popular with Killen families who want beautiful, waterproof flooring that can handle the demands of active households and the variable Alabama climate.

What makes The Flooring Folks the right choice for Killen homeowners? We combine the quality and professionalism of a large company with the personal service and attention you'd expect from a local business. We're not a big-box store with rotating staff — you'll work directly with experienced craftsmen who take pride in every installation. Our reputation in Killen is built one satisfied customer at a time.`,
    landmarks: [
      "Killen Town Center",
      "Lauderdale County High School area",
      "Wilson Lake / Wheeler Lake access",
      "Joe Wheeler State Park nearby",
      "Killen Park",
      "Highway 72 corridor",
      "Countryside / rural properties",
      "Bluewater Creek area",
    ],
    testimonials: [
      {
        name: "Tom & Betty S.",
        text: "We had LVP installed throughout our Killen home and it looks incredible. The Flooring Folks team was professional, courteous, and the quality of work is top-notch. We'll definitely use them again!",
        rating: 5,
      },
      {
        name: "Gary D.",
        text: "Great experience with The Flooring Folks. They installed tile in our Killen kitchen and it's absolutely perfect. Fair pricing, excellent work, and they cleaned up everything. Highly recommend.",
        rating: 5,
      },
    ],
  },
  {
    slug: "rogersville-al",
    name: "Rogersville",
    fullName: "Rogersville, AL",
    metaDescription:
      "Quality flooring installation in Rogersville, AL. LVP, hardwood, tile & carpet from The Flooring Folks. Serving Rogersville and Lauderdale County. Free estimates!",
    content: `The Flooring Folks proudly serves Rogersville, Alabama with professional flooring installation services. Located along beautiful Wheeler Lake in Lauderdale County, Rogersville homeowners have trusted us for over 17 years to deliver beautiful, professionally installed floors that stand the test of time.

Rogersville offers a wonderful blend of lakeside living and small-town charm. From waterfront properties to family homes throughout the community, each home presents unique flooring needs. Our experienced team understands the specific considerations of Rogersville homes, including moisture management for lakefront properties and the demands of rural and semi-rural living.

We bring the full range of professional flooring services to Rogersville, including luxury vinyl plank installation, hardwood flooring, tile and stone work, laminate, carpet, sheet vinyl, subfloor preparation, and baseboard and trim installation. For lakefront and lakeside properties, we often recommend LVP or tile for their superior moisture resistance.

Rogersville homeowners choose The Flooring Folks because we're local, reliable, and committed to quality. We travel to Rogersville with the same enthusiasm and professionalism we bring to every job in The Shoals area. Our estimates are honest and detailed, our workmanship is exceptional, and we treat every customer like a neighbor — because you are.`,
    landmarks: [
      "Wheeler Lake / Wilson Lake access",
      "Rogersville Town Square",
      "Lauderdale County area",
      "Joe Wheeler State Park",
      "Rogersville Public Library",
      "Elk River access",
      "Highway 72 corridor",
      "Lakeside communities",
    ],
    testimonials: [
      {
        name: "Steve & Carol B.",
        text: "The Flooring Folks installed LVP in our Rogersville lake home and it's perfect. They understood the moisture considerations and recommended the right product. Beautiful work and great service!",
        rating: 5,
      },
      {
        name: "Nancy P.",
        text: "Had hardwood installed in our Rogersville home's living room and dining room. The craftsmanship is outstanding. The team was friendly, professional, and finished on time. Couldn't ask for more!",
        rating: 5,
      },
    ],
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}

export const citySlugs = cities.map((c) => c.slug);
