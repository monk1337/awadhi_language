import type { NextConfig } from "next";

const RECORDER_URL = "https://awadhirecorder.vercel.app/";

const nextConfig: NextConfig = {
  turbopack: {
    root: ".",
  },
  async redirects() {
    return [
      {
        source: "/contribute-voice",
        destination: RECORDER_URL,
        permanent: true,
      },
      {
        source: "/contribute-voice/:path*",
        destination: RECORDER_URL,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
