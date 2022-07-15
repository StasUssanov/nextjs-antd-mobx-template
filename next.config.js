const withLess = require('next-with-less');
const i18n = require('./next-i18next.config').i18n;

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n
}

module.exports = withLess(nextConfig)
