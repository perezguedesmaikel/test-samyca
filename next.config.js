/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');
// module.exports = withFonts();
module.exports = {
    // ...
    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'en',
    },
    // ...
};
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
}

module.exports = nextConfig
