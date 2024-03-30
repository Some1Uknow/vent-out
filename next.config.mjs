/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com', 
          },
          {
            protocol: 'https',
            hostname: 'hips.hearstapps.com',
          },
          {
            protocol: 'https',
            hostname: 'static.vecteezy.com', 
          },
          {
            protocol: 'https',
            hostname: 'i.redd.it',
          },
          {
            protocol: 'https',
            hostname: 'via.placeholder.com'
          },
        ],
      },
};

export default nextConfig;
