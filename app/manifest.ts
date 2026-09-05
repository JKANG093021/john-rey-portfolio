import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "John Rey Baliguat Portfolio",
    short_name: "John Rey",
    description: "Technical Virtual Assistant portfolio focused on web support, troubleshooting, systems, and automation.",
    start_url: "/",
    display: "standalone",
    background_color: "#050b13",
    theme_color: "#050b13",
  };
}
