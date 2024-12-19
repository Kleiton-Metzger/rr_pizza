import type { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "rrpizzaria.vercel.app"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Feature-Policy",
            value: "camera 'none'; microphone 'none'; geolocation 'none'",
          },
        ],
      },
    ];
  },

};

export default config;
