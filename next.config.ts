// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // compress: true,
//   swcMinify: true,
//   output: "export",
//   images: {
//     remotePatterns: [
//       { protocol: "http", hostname: "45.159.112.35" },
//       { protocol: "https", hostname: "i.ibb.co" },
//     ],
//   },
// };

// export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   compress: true,
//   swcMinify: true,
//   /* config options here */
//   output: "export"
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  //output: "export", // زمانیکه بخواهیم SSG باشد. یعنی Static Site Generation.
  images: {
    unoptimized: true, // لازم داری چون next/image در حالت export بهینه‌سازی نمی‌کنه
    remotePatterns: [
      { protocol: "http", hostname: "45.159.112.35" },
      { protocol: "https", hostname: "i.ibb.co" },
      { protocol: "https", hostname: "gateway.mayan-group.com" },
      { protocol: "http", hostname: "gateway.mayan-group.com" }
    ],
  },
};

export default nextConfig;
