import type { NextConfig } from "next";
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Qd0e_lK5wuOTP3_fZ-QynqZUdpEAdc1IwexeP5qp_g&s=10
const nextConfig: NextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "/images",
      },
    ],
  },
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
