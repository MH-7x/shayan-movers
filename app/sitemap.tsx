import { APP } from "@/App";
import { MetadataRoute } from "next";
const pages: MetadataRoute.Sitemap = [
  {
    url: "",
    images: ["/shayan-movers-packers.jpg"],
    lastModified: "2026-11-23",
  },
  {
    url: "/contact-us",
    images: ["/contact-us.jpg"],
    lastModified: "2026-11-23",
  },
  {
    url: "/about-us",
    images: ["/shayan-movers-packers.jpg"],
    lastModified: "2026-11-23",
  },
  {
    url: "/movers-in-ajman",
    images: ["/movers-in-ajman.jpg"],
    lastModified: "2026-11-23",
  },
  {
    url: "/movers-in-al-ain",
    images: ["/movers-in-al-ain.jpg"],
    lastModified: "2026-11-23",
  },
  {
    url: "/movers-in-ras-al-khaimah",
    images: ["/movers-in-ras-al-khaimah.jpg"],
    lastModified: "2026-11-23",
  },
  {
    url: "/movers-in-sharjah",
    images: ["/movers-in-sharjah.jpg"],
    lastModified: "2026-11-23",
  },
  {
    url: "/house-furniture-movers-abu-dhabi",
    images: ["/house-furniture-movers-abu-dhabi.jpg"],
    lastModified: "2026-11-23",
  },
  {
    url: "/house-movers-in-dubai",
    images: ["/best-house-mover-in-dubai.jpg"],
    lastModified: "2026-11-23",
  },
  {
    url: "/office-movers-in-dubai",
    images: ["/office-movers-in-dubai.jpg"],
    lastModified: "2026-11-23",
  },
  {
    url: "/villa-movers-in-dubai",
    images: ["/villa-movers-in-dubai.jpg"],
    lastModified: "2026-11-23",
  },
  {
    url: "/affordable-movers-in-dubai",
    images: ["/Full-Service-House-Moving.jpg"],
    lastModified: "2026-11-23",
  },
  {
    url: "/movers-and-packers-abu-dhabi",
    images: ["/movers-and-packers-abu-dhabi.jpg"],
    lastModified: "2026-11-23",
  },
  {
    url: "/terms-and-conditions",
    lastModified: "2026-11-23",
  },
  {
    url: "/privacy-policy",
    lastModified: "2026-11-23",
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
