/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    redirects() {
        return [
            {
                source: '/platform/:page(\\\\d+)',
                destination: '/platforms/',
                permanent: true
            }
        ]
    }
};

module.exports = nextConfig;
