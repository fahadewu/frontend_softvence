import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'softvence.agency',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
