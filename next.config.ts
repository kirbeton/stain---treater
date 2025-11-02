import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // מתעלם משגיאות Lint בזמן build
  },
  typescript: {
    ignoreBuildErrors: true, // מתעלם משגיאות TypeScript בזמן build
  },
};

export default nextConfig;


