import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CINEMA OS",
    short_name: "Cinema",
    description: "Your personal history of cinema.",
    start_url: "/",
    display: "standalone",
    background_color: "#090909",
    theme_color: "#090909",
    orientation: "portrait-primary"
  };
}
