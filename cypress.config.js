const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
    },
  specPattern: 'cypress/e2e/scenarios',
  supportFile: 'cypress/support/commands.js',
  env:{
    baseUrl : 'https://www.saucedemo.com',
  }
},
chromeWebSecurity: false
});
