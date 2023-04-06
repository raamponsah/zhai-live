/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "res.cloudinary.com",
        port:'',
        pathname: '/dozaqkiam/image/upload/**',
        
     
      },
    ],
  },
};

module.exports = nextConfig;
