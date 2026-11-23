import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shayan Movers and Packers",
    short_name: "Shayan Movers",
    description:
      "House, villa and office movers and packers across Dubai and the UAE.",
    start_url: "/",
    display: "browser",
    background_color: "#fdf4f1",
    theme_color: "#d84315",
    icons: [
      {
        src: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
