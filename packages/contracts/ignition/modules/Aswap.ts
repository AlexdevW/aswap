import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const AswapModule = buildModule("Aswap", (m) => {
  const poolManager = m.contract("PoolManager");
  const swapRouter = m.contract("SwapRouter", [poolManager]);
  const positionManager = m.contract("PositionManager", [poolManager]);

  return { poolManager, swapRouter, positionManager };
});

export default AswapModule;
