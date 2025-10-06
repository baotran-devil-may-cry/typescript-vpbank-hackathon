import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'w.ladicdn.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
