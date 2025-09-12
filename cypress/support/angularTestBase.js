// // cypress/support/angularTestBase.js

// import { AngularHelpers } from './angularHelpers';

// export function setupTest() {
//   before(() => {
//     cy.visit(Cypress.env('baseurl'));
//     cy.viewport(1920, 1080);
//     cy.clearCookies();
//     cy.clearLocalStorage();

//     performLogin();
//   });

//   after(() => {
//     // Cypress auto-cleans browser state; nothing required
//   });
// }

// function performLogin() {
//   AngularHelpers.waitForAngularToLoad();

//   cy.get('#uname').type(Cypress.env('username'));
//   cy.get('#pass').type(Cypress.env('password'));

//   // Temperature flow
//   cy.get('#TempratureYES').click();
//   cy.get('#SelectTemprature').click();
//   cy.get('#SelectTempratureDD').click();
//   cy.get('#SelectSubmit').click();

//   AngularHelpers.waitForAngularToLoad();

//   cy.get('#VerifyPage').should('have.text', 'Franchise');
// }
