/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    trailingSlash: true,
    basePath: process.env.NODE_ENV === 'production' ? '/hosptail-mangment-' : '',
};

module.exports = nextConfig;
