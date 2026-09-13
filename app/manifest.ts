import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "John Rey Baliguat Portfolio",
    short_name: "John Rey",
    description: "Portfolio of John Rey Baliguat for technical support, customer support, admin operations, business systems, hardware installation, maintenance, and web support.",
    start_url: "/",
    display: "standalone",
    background_color: "#050b13",
    theme_color: "#050b13",
  };
}
