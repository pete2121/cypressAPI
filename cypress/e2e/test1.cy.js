describe('template spec', () => {

  before(()=> {

    cy.log("Before Hook")

  })

  beforeEach(()=> {

    cy.log("Before Each")

  })

  it('passes', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('.contact').click()
    cy.get('h1.title').contains('Customer Care')
    cy.get('#name').type('Petros')
    cy.get('#email').type('peteplako@gmail.com')
    cy.get('#phone').type('55555')
    cy.get('#message').type('Petros aaaaa')
    cy.get('input.button').contains('Send to Customer Care').click()
    cy.get('#rightPanel>p').contains('Petros')
  })

  it('passes2', () => {
    cy.log("whatever")
  })


})