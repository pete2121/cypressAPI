const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "s9abye",
  experimentalSourceRewriting: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },


});
