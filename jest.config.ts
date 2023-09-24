/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "tests/__coverage__",
  moduleDirectories: ["src","node_modules",],
  moduleFileExtensions: ["tsx","ts","js"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/tests/setupTests.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^~test/(.*)$": "<rootDir>/tests/$1",
    "\\.(less|css)$": 'jest-less-loader' // 支持less
  },
  testMatch: ["<rootDir>/tests/__test__/**/*.test.tsx"],
  transform: {
    "^.+\\.ts$": ['ts-jest', {
      babel: true,
      tsConfig: 'tsconfig.json',
    }]
  }
};
export {};