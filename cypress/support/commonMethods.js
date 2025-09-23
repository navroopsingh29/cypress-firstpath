// // cypress/support/commonMethods.js
// import { AngularHelpers } from './angularHelpers';

// export const CommonMethods = {
//   explicitWait(selector) {
//     AngularHelpers.waitForAngularToLoad();
//     return cy.get(selector).should('be.visible');
//   },

//   explicitWaitClick(selector) {
//     this.explicitWait(selector).click();
//   },

//   explicitWaitSendKeys(selector, value) {
//     this.explicitWait(selector).clear().type(value);
//   },

//   jsClick(selector) {
//     cy.get(selector).then(($el) => {
//       $el[0].click();
//     });
//   },

//   jsSendKeys(selector, value) {
//     cy.get(selector).then(($el) => {
//       $el.val(value)[0].dispatchEvent(new Event('input', { bubbles: true }));
//     });
//   },

//   dragAndDrop(source, target) {
//     cy.get(source).drag(target); // requires cypress-drag-drop plugin
//   },

//   captureScreenshot(name) {
//     cy.screenshot(name);
//   },
// };
