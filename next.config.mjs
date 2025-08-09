/** @type {import('next').NextConfig} */
const repo = 'cultural-grade'

const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
    },
    output: 'export',
    basePath: `/${repo}`,
    assetPrefix: `/${repo}/`,
    trailingSlash: true,
}

export default nextConfig