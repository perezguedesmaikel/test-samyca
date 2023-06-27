/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');
module.exports = {
    i18n: {
        locales: ['es', 'en'],
        defaultLocale: 'es',
    },
    reactStrictMode: true,
    swcMinify: true,
};

