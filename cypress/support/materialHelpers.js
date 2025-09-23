// // cypress/support/materialHelpers.js
// import { AngularHelpers } from './angularHelpers';

// export const MaterialHelpers = {
//   selectMaterialDropdown(dropdownSelector, optionText) {
//     cy.get(dropdownSelector).click();
//     AngularHelpers.waitForAngularToLoad();
//     cy.contains('mat-option', optionText).click({ force: true });
//     AngularHelpers.waitForMaterialOverlayToHide();
//   },

//   selectMaterialDate(datePickerSelector, day) {
//     cy.get(datePickerSelector).click();
//     AngularHelpers.waitForAngularToLoad();
//     cy.contains('td.mat-calendar-body-cell', day).click();
//   },

//   clickMaterialButton(buttonText) {
//     AngularHelpers.waitForAngularToLoad();
//     cy.contains('button', buttonText).click({ force: true });
//   },

//   sendKeysToMaterialInput(selector, text) {
//     cy.get(selector).clear().type(text);
//   },
// };
