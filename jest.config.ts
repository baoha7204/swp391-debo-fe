import type { Config } from "@jest/types";

const Config: Config.InitialOptions = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        diagnostics: {
          ignoreCodes: [1343],
        },
        astTransformers: {
          before: [
            {
              path: "node_modules/ts-jest-mock-import-meta",
              options: {
                metaObjectReplacement: {
                  env: {
                    // Replicate as .env.local
                    NODE_ENV: "development",
                    API_URL: "http://localhost:5193/api",
                  },
                },
              },
            },
          ],
        },
      },
    ],
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-transformer-svg",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  // verbose: true,
  // collectCoverage: true,
  // collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
};

export default Config;
