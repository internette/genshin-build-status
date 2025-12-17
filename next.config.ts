import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://homdgcat.wiki/homdgcat-res/**')],
  },
};

export default nextConfig;
