/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com'],
  },
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/404',
        permanent: false,
      },
      {
        source: '/blog/:slug',
        destination: '/404',
        permanent: false,
      },
      {
        source: '/tags/:slug',
        destination: '/404',
        permanent: false,
      },
    ];
  },
};
