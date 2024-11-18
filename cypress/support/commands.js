// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('EnterContactDetails', (name,email,phone,message) => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
     cy.get('.contact').click()
     cy.get('h1.title').contains('Customer Care')
     cy.get('#name').type(name)
     cy.get('#email').type(email)
     cy.get('#phone').type(phone)
     cy.get('#message').type(message)
     cy.get('input.button').contains('Send to Customer Care').click()
 });
 