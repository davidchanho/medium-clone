const { defaults: tsjPreset } = require("ts-jest/presets");

module.exports = {
  roots: ["./tests"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: tsjPreset.transform,
  testEnvironment: "node",
};
