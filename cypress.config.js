const { defineConfig } = require("cypress"); 

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://barrigareact.wcaquino.me',

    env: {
      baseUrl: 'https://wcaquino.me/cypress/componentes.html'
    },

    viewportWidth: 1280,
		viewportHeight: 720,

    failOnStatusCode: "false",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
