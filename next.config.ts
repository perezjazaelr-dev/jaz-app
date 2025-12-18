import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co', // Keep this for your placeholders
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'feastndelightsbilaopackages.netlify.app', // Added this hostname
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'illustrious-sfogliatella-2f450e.netlify.app', // Added this hostname
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;