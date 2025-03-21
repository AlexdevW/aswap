/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  webpack: (config) => {
    config.externals.push("pino-pretty")
    return config
  },
}
const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: "./messages/en.json",
  },
})
export default withNextIntl(nextConfig)
