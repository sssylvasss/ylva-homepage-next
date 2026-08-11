/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/collage",
        permanent: false,
      },
    ];
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
    deviceSizes: [520, 900, 1200],
    imageSizes: [320, 480],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
