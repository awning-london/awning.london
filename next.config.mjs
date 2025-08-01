/** @type {import('next').NextConfig} */

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const nextConfig = {
    output: 'export',
    async redirects() {
        return isGitHubPages
        ? [
            {
                source: '/sudio/:path*',
                destination: '/',
                permanent: false,
            },
            ]
        : [];
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

export default nextConfig;