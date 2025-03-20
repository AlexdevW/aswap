/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  // experimental: {
  //   createMessagesDeclaration: "./messages/en.json",
  // },
  webpack: (config) => {
    config.externals.push("pino-pretty")
    return config
  },
}
const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
