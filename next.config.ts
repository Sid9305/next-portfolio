import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Ensures better debugging and warnings in development\
  devIndicators: {
    buildActivity: true, // Shows build activity on the browser
  },
};

export default nextConfig;
