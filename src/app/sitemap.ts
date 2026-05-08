import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://theflooringfolks.com";

  const serviceSlugs = [
    "lvp-flooring",
    "hardwood-flooring",
    "tile-installation",
    "laminate-flooring",
    "carpet-installation",
    "vinyl-flooring",
    "subfloor-preparation",
    "baseboard-trim",
  ];

  const citySlugs = [
    "florence-al",
    "muscle-shoals-al",
    "sheffield-al",
    "tuscumbia-al",
    "killen-al",
    "rogersville-al",
  ];

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const cityPages: MetadataRoute.Sitemap = citySlugs.map((slug) => ({
    url: `${baseUrl}/areas/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...cityPages];
}
