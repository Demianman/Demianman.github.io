   /** @type {import('next').NextConfig} */
//    const nextConfig = {
//     experimental: {
//       appDir: true,
//     },
//   }
  
//   module.exports = nextConfig
//   export default {
//     output: 'export',
//   };
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  }
  
  module.exports = nextConfig
  
  