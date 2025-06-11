import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: {
            ssr: true,
            displayName: true,
        },
    },
    images: {
        domains: (process.env['ALLOWED_IMAGES_DOMAINS'] ?? '')
            .split(',')
            .map((domain) => domain.trim())
            .filter((domain) => domain.length > 0),
    },
};

export default nextConfig;
