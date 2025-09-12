// // cypress/e2e/smokeAddTest.cy.js

// describe('Smoke Add Test', () => {

//   // Runs once before all tests
//   before(() => {
//     // Visit base URL from config or directly
//     cy.visit(Cypress.env('baseurl') || 'https://test.firstpath.co/login')

//     // Maximize window (Cypress runs headless but viewport can be set)
//     cy.viewport(1920, 1080)

//     // Clear cookies/session storage
//     cy.clearCookies()
//     cy.clearLocalStorage()

//     // Login process
//     cy.get('[data-testid="uname"]').type(Cypress.env('username'))
//     cy.get('[data-testid="pass"]').type(Cypress.env('password'))
    
//     // Click submit (uncomment if actual button exists)
//     // cy.get('[data-testid="submit"]').click()

//     // Temperature workflow
//     cy.wait(4000)
//     cy.get('[data-testid="TempratureYES"]').click()
//     cy.wait(2000)
//     cy.get('[data-testid="SelectTemprature"]').click()
//     cy.wait(2000)
//     cy.get('[data-testid="SelectTempratureDD"]').click()
//     cy.get('[data-testid="SelectSubmit"]').click()
//   })

//   it('Login verification', () => {
//     const expected = "Franchise"

//     // Wait for Angular to load → Cypress automatically retries until element appears
//     cy.get('[data-testid="VerifyPage"]')
//       .should('be.visible')
//       .and('have.text', expected)
//   })

//   // Runs once after all tests
//   after(() => {
//     // Cypress automatically closes browser after test run,
//     // no need for driver.quit() like Selenium
//   })
// })
