/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  async redirects() {
    return [
      {
        source: "/.well-known/matrix/:slug*",
        destination: "https://matrix.jackmerrill.com/.well-known/matrix/:slug*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
