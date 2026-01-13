import { APP } from "@/App";
import { MetadataRoute } from "next";
const pages: MetadataRoute.Sitemap = [
  {
    url: "/",
    changeFrequency: "weekly",
    priority: 1,
    images: ["/shayan-movers-packers.jpg"],
    lastModified: "26-01-13",
  },
  {
    url: "/contact-us",
    changeFrequency: "monthly",
    priority: 0.5,
    images: ["/contact-us.jpg"],
    lastModified: "26-01-13",
  },
  {
    url: "/movers-in-ajman",
    changeFrequency: "monthly",
    priority: 0.8,
    images: ["/movers-in-ajman.jpg"],
    lastModified: "26-01-13",
  },
  {
    url: "/movers-in-al-ain",
    changeFrequency: "monthly",
    priority: 0.8,
    images: ["/movers-in-al-ain.jpg"],
    lastModified: "26-01-13",
  },
  {
    url: "/movers-in-ras-al-khaimah",
    changeFrequency: "monthly",
    priority: 0.8,
    images: ["/movers-in-ras-al-khaimah.jpg"],
    lastModified: "26-01-13",
  },
  {
    url: "/movers-in-sharjah",
    changeFrequency: "monthly",
    priority: 0.85,
    images: ["/movers-in-sharjah.jpg"],
    lastModified: "26-01-13",
  },
  {
    url: "/house-furniture-movers-abu-dhabi",
    changeFrequency: "monthly",
    priority: 0.9,
    images: ["/house-furniture-movers-abu-dhabi.jpg"],
    lastModified: "26-01-13",
  },
  {
    url: "/house-movers-in-dubai",
    changeFrequency: "monthly",
    priority: 0.95,
    images: ["/best-house-mover-in-dubai.jpg"],
    lastModified: "26-01-13",
  },
  {
    url: "/office-movers-in-dubai",
    changeFrequency: "monthly",
    priority: 0.95,
    images: ["/office-movers-in-dubai.jpg"],
    lastModified: "26-01-13",
  },
];
export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    ...page,
    url: `${APP.url}${page.url}`,
    images: page.images ? page.images.map((img) => `${APP.url}${img}`) : [],
    lastModified: page.lastModified,
  }));
}
