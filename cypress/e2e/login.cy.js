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

    //  Verify that the value has been updated
   cy.url().should('include', '/childs')

    
  })
})

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