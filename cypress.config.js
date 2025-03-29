const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    baseUrl: "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
    env: {
      URL: "https://naveenautomationlabs.com/opencart/index.php?route=account/register"
    },
    video: true, // Enable video recording
  },
});
