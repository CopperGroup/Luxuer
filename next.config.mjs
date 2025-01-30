/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
      domains: ['shop.juventa.ua', 'utfs.io', 'uploadthing.com', "www.sveamoda.com.ua"], // Add the external hostname here
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb'
    }
  }
};

export default nextConfig;
