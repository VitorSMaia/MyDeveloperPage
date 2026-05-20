import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.postimg.cc" },
      { protocol: "https", hostname: "agenciandc.com.br" },
      { protocol: "https", hostname: "cloud.wirelink.com.br" },
      { protocol: "https", hostname: "revo360.revoenergia.com.br" },
      { protocol: "https", hostname: "www.philips.com.br" },
    ],
  },
};

export default nextConfig;
