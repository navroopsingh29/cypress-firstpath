// // cypress/support/angularHelpers.js

// export const AngularHelpers = {
//   waitForAngularToLoad(timeout = 30000) {
//     // Cypress automatically waits for DOM updates, but we can add Angular stability check
//     cy.window({ timeout }).then((win) => {
//       return new Cypress.Promise((resolve) => {
//         const check = () => {
//           if (
//             (win.getAllAngularTestabilities &&
//               win.getAllAngularTestabilities().every((t) => t.isStable())) ||
//             (win.angular || win.ng)
//           ) {
//             resolve(true);
//           } else {
//             setTimeout(check, 100);
//           }
//         };
//         check();
//       });
//     });
//   },

//   waitForMaterialOverlayToHide(timeout = 10000) {
//     cy.get('.cdk-overlay-backdrop', { timeout })
//       .should('not.exist')
//       .or('not.be.visible');
//   },

//   clickMaterialOption(optionText, timeout = 10000) {
//     cy.contains('mat-option', optionText, { timeout }).click({ force: true });
//   },

//   waitForElementWithAngularSupport(selector, timeout = 30000) {
//     this.waitForAngularToLoad(timeout);
//     return cy.get(selector, { timeout }).should('be.enabled');
//   },
// };
