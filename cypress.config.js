const { defineConfig } = require("cypress");
const environment = require(`./cypress/config/${process.env.ENV || 'qa'}.json`);

module.exports = defineConfig({
  e2e: {
    // Base URL from environment file
    baseUrl: environment.baseUrl,

    // Global page load timeout
    pageLoadTimeout: 30000, // 30 seconds

    // Set default viewport
    viewportWidth: 1440,
    viewportHeight: 900,

    // Keep test isolation false if needed
    testIsolation: false,

    // Node event listeners
    setupNodeEvents(on, config) {
      // You can add plugins or custom events here
    },
  },

  // Environment variables from your environment JSON
  env: {
    username: environment.username,
    password: environment.password,
  },
});
