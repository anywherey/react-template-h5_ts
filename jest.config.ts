// jest.config.ts

import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  // Jest 配置选项
  clearMocks: true,
  moduleDirectories: ["node_modules", "src"],
  testMatch: ["<rootDir>/test/**/*.test.tsx"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json",
      },
    ],
  },
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  // 其他配置...
};

export default config;
