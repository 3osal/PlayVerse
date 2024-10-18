/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.gamerpower.com'], // أضف هنا النطاق لاستخدام الصور
  },
  async rewrites() {
    return [
      {
        source: '/api/giveaways',
        destination: 'https://www.gamerpower.com/api/giveaways',
      },
      {
        source: '/api/giveaway/:id',
        destination: 'https://www.gamerpower.com/api/giveaway?id=:id', // لاحظ :id هنا
      },
    ];
  },
};

export default nextConfig;
