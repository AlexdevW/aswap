import { defineConfig } from "@wagmi/cli"
import { actions, hardhat, react } from "@wagmi/cli/plugins"

export default defineConfig({
  out: "src/lib/contracts.ts",
  contracts: [],
  plugins: [
    actions(),
    hardhat({
      project: "../contracts",
      // deployments: {
      //   Message: {
      //     11155111: '0xF11f180eE37dd6aa7dD08b8C1Cd670fC4DBE0e34',
      //   },
      // },
    }),
    react(),
  ],
})
