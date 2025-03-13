/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  // experimental: {
  //   createMessagesDeclaration: "./messages/en.json",
  // },
}
const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
