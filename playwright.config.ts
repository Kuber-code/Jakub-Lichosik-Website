import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL: "http://localhost:3000",
    viewport: { width: 1280, height: 900 },
    screenshot: "only-on-failure",
  },
  timeout: 30000,
});
