const dns = require("dns");

dns.setDefaultResultOrder("ipv4first")

/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
};

module.exports = nextConfig;
