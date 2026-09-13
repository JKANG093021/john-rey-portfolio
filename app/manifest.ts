import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "John Rey Baliguat Portfolio",
    short_name: "John Rey",
    description: "Portfolio of John Rey Baliguat for Technical VA, web, e-commerce, customer and admin support, plus hardware and light licensed real-estate experience.",
    start_url: "/",
    display: "standalone",
    background_color: "#050b13",
    theme_color: "#050b13",
  };
}
