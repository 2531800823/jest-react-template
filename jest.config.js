/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  testEnvironment: "jsdom",

  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",

    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
  },

  setupFilesAfterEnv: ["./test/jest-setup.ts"],
};