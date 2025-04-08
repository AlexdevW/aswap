/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  webpack: (config) => {
    config.externals.push("pino-pretty")
    return config
  },
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
    sri: { algorithm: "sha256" },
  },
}
const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: "./messages/en.json",
  },
})
export default withNextIntl(nextConfig)
