import type { NextConfig } from "next";

const nextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'fypvieoljlcmvxwixvmg.supabase.co'
          }
      ]
  }
}

export default nextConfig;
