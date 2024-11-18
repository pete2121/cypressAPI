const { defineConfig } = require("cypress");
// Import the accessibility tasks from wick-a11y plugin
const addAccessibilityTasks = require('wick-a11y/accessibility-tasks');

module.exports = defineConfig({

  projectId: "s9abye",
  experimentalSourceRewriting: true,

  env: {
    enableAccessibilityVoice: true
},

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // Add accessibility tasks
      addAccessibilityTasks(on);
    },
  },


});
