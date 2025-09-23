const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: '54y9zd',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: "https://uat.firstpath.co/",   // Constants.baseurl
//     env: {
//       username: "Genesis",                  // Constants.UnameData
//       password: "_S8$q?m?il-Uo\"X\r\n"      // Constants.PassData
//     },
//     viewportWidth: 1920,
//     viewportHeight: 1080,
//     defaultCommandTimeout: 10000
//   }
// });


// 8kqbhs new one for firstpath-cypress