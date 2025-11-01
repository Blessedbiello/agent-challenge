import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  experimental: {
    externalDir: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      "@sentinelops/agents": path.resolve(__dirname, "../../packages/agents/src"),
      "@sentinelops/tools": path.resolve(__dirname, "../../packages/tools/src"),
      "@sentinelops/ui": path.resolve(__dirname, "../../packages/ui/src"),
    };
    return config;
  },
};

export default nextConfig;
