import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Relative path keeps Next.js happy; lives inside node_modules to reduce OneDrive sync conflicts
  distDir: "node_modules/.cache/next",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.leetcode.com",
      },
    ],
  },
};

export default nextConfig;
