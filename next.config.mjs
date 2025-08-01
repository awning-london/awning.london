/** @type {import('next').NextConfig} */

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const nextConfig = {
    output: 'export',
    async rewrites() {
        if (isGitHubPages) {
        return [];
        }
        return [
        {
            source: '/sudio/:path*',
            destination: '/sudio', // handled only outside GH Pages
        },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
                pathname: '/images/**',
            },
        ],
    }
};

module.exports = nextConfig;