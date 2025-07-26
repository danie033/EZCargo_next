import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // 👈 enable static export
  trailingSlash: true, // 👈 optional, but makes GitHub Pages happy
  images: {
    unoptimized: true // 👈 required if you're using next/image
  },
  basePath: "/EZCargo_next", // 👈 important for GitHub Pages routing
};

export default nextConfig;
