import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const DebugTokenModule = buildModule("DebugToken", (m) => {
  const debugTokenA = m.contract("DebugToken", ["DebugTokenA", "DTA"], {
    id: "DebugTokenA", // 最终输出会根据id排序
  });
  const debugTokenB = m.contract("DebugToken", ["DebugTokenB", "DTB"], {
    id: "DebugTokenB", // 最终输出会根据id排序
  });
  const debugTokenC = m.contract("DebugToken", ["DebugTokenC", "DTC"], {
    id: "DebugTokenC",
  });

  return {
    debugTokenA,
    debugTokenB,
    debugTokenC,
  };
});

export default DebugTokenModule;
