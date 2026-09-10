import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BRAYON Technologies | Enterprise Software & Cloud Engineering",
    short_name: "BRAYON Tech",
    description:
      "Enterprise software development, modern web applications, high-performance cloud systems, and custom business automation.",
    start_url: "/",
    display: "standalone",
    background_color: "#070B19",
    theme_color: "#0066FF",
    icons: [
      {
        src: "/brayon-icon-square.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
