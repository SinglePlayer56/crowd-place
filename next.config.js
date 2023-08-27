const dns = require("dns");

dns.setDefaultResultOrder("ipv4first")

/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    async redirects() {
        return [
            {
                source: '/platform/',
                destination: '/platforms/',
                permanent: true,
            },
            {
                source: '/blog/all-posts/',
                destination: '/blog/',
                permanent: true,
            },
            {
                source: '/fr/',
                destination: '/',
                permanent: false,
            },
            {
                source: '/de/',
                destination: '/',
                permanent: false,
            },
        ]
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*', // Запросы, начинающиеся с /api
                destination: `${process.env.SERVER}/api/:path*`, // Прокси на Express сервер
            }
        ]
    },
    api: {
        bodyParser: false,
        externalResolver: true,
    }
};

module.exports = nextConfig;
