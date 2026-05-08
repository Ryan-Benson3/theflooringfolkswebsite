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

  const blogSlugs = [
    "lvp-flooring-cost-florence-al-2026",
    "hardwood-vs-lvp-shoals-area",
    "best-flooring-alabama-humidity",
    "how-to-choose-flooring-installer-florence-al",
    "carpet-vs-hardwood-vs-tile-florence-al",
  ];

  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return [...staticPages, ...servicePages, ...cityPages, ...blogPages];
}
