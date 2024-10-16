   /** @type {import('next').NextConfig} */
   const nextConfig = {
    experimental: {
      appDir: true,
    },
  }
  
  module.exports = nextConfig
  export default {
    // 支持静态导出
    output: 'export',
    // 你可以添加这个来确保 GitHub Pages 的 URL 末尾加上 `/`
    trailingSlash: true,
  }
  