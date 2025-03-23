import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'foshati.storage.c2.liara.space',
     
      },
    ],
  },};

export default nextConfig;
