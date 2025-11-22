/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
  },
  async rewrites() {
    return [
      {
        source: '/lagos-talk-112025',
        destination: 'https://lagos-talk.vercel.app/',
      },
      {
        source: '/lagos-talk-112025/:path*',
        destination: 'https://lagos-talk.vercel.app/:path*',
      },
    ]
  },
}

module.exports = nextConfig
