/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thumbs.dreamstime.com',
      },
      {
        protocol:'https',
        hostname:'www.pngmart.com'
      },
      {
        protocol:'https',
        hostname:'1.bp.blogspot.com'
      },
      {
        protocol:'https',
        hostname:'images.vexels.com'
      },
      {
        protocol:'https',
        hostname:'upload.wikimedia.org'
      },
      {
        protocol:'https',
        hostname:'www.elcolombiano.com'
      },
      {
        protocol:'https',
        hostname:'midias.correiobraziliense.com.br'
      },
      {
        protocol:'https',
        hostname:'s3.static.brasilescola.uol.com.br'
      },
      {
        protocol:'https',
        hostname:'i0.wp.com'
      },
    ],
  },
}

module.exports = nextConfig
