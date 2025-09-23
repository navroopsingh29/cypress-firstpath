import locators from '../support/locators'

describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://test.firstpath.co/login')

    //cy.contains('type').click()

    // Should be on a new URL which
    // includes '/login'
    cy.url().should('include', '/login')

    // Get an username, type into it
    cy.get('#inputEmail').type('gurteststaff1')

    // Get an Password, type into it
    cy.get('#inputPassword').type('Welcome@1')

    // Get an submit, click on it
    cy.get('[type="submit"]').click()

  //Temperature acknolgement
  cy.get('[viewBox="0 0 49 53"]').click()

    
  })
})

import { locators } from "../support/locators";

// describe("Login Test", () => {
//   it("logs in and verifies franchise page", () => {
//     cy.visit("/");

//     // Use env vars for creds
//     cy.get(locators.uname).type(Cypress.env("username"));
//     cy.get(locators.pass).type(Cypress.env("password"));
//     cy.xpath(locators.submit).click();

//     // Verify page
//     cy.xpath(locators.verifyPage).should("contain.text", "Franchise");
//   });
// });

// describe('My First Test', () => {
//   it('Gets, types and asserts', () => {
//     cy.visit('https://example.cypress.io')

//     cy.contains('type').click()

//     // Should be on a new URL which
//     // includes '/commands/actions'
//     cy.url().should('include', '/commands/actions')

//     // Get an input, type into it
//     cy.get('.action-email').type('fake@email.com')

//     //  Verify that the value has been updated
//     cy.get('.action-email').should('have.value', 'fake@email.com')
//   })
// })