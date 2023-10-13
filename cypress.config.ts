import { defineConfig } from "cypress";
export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:" + process.env.SERVER_PORT,
    fileServerFolder: "tests/e2e/fileServer",
    fixturesFolder: "tests/e2e/fixtures",
    downloadsFolder: "tests/e2e/downloads",
    screenshotsFolder: "tests/e2e/screenshots",
    videosFolder: "tests/e2e/videos",
    specPattern: "tests/e2e/specs/*.cy.{js,jsx,ts,tsx}",
    supportFile: "tests/e2e/support/index.ts",
  },
});
