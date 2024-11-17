const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    // unoptimized: true, // Disable default image optimization
  },
  // assetPrefix: isProd ? '/awning.london/' : '',
  // basePath: isProd ? '/awning.london' : '',
  output: 'export'
};

export default nextConfig;
