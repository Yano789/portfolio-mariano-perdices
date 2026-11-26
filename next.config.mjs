/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/work", destination: "/#work", permanent: true },
      { source: "/blog/:path*", destination: "/", permanent: false },
      { source: "/gallery", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
