import { MetadataRoute } from "next";

const BASE_URL = "https://lichosik.dev";

const blogSlugs = [
  "building-observable-hft-infra",
  "shipping-portfolio-nextjs16",
];

const caseStudySlugs = [
  "portofino-monitoring",
  "portofino-packet-capture",
  "six-converter-app",
  "jakub-website",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogSlugs.map((slug) => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...caseStudySlugs.map((slug) => ({
      url: `${BASE_URL}/projects/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
