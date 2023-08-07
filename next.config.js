/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    redirects() {
        return [
            {
                source: `/platforms\\/\\?page\\=1/`,
                destination: '/platforms/',
                permanent: true
            }
        ]
    }
};

module.exports = nextConfig;
