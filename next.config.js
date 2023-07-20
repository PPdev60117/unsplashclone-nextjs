/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
            port: '',
            pathname: '/u/**',
          },
        ],
      },
      env: {
        UNSPLASH_URL :'https://api.unsplash.com/',
        CLIENT_ID :'0nyihTD4s7s3wH442RtStPzonHZw5NbHXWilbXSFXNw',
        ACCESS_KEY :'o7QU9LBpR5jEBTGL_gEKIt-wHV5WWoNUMotWKfQhdrU'
      },
}

module.exports = nextConfig
