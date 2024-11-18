describe('template spec', () => {

  before(()=> {

    cy.log("Before Hook")

  })

  beforeEach(()=> {

    cy.log("Before Each")

  })

  it('passes', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    //cy.checkAccessibility()

    //Ensure all elements are visible for analysis

    cy.get('.contact').click()
    cy.get('h1.title').contains('Customer Care')
    cy.get('#name').type('Petros')
    cy.get('#email').type('peteplako@gmail.com')
    cy.get('#phone').type('55555')
    cy.get('#message').type('Petros aaaaa')
    cy.get('input.button').contains('Send to Customer Care').click()
      cy.checkAccessibility(null, {
    generateReport: false,
    includedImpacts: ['critical', 'serious', 'moderate'],
    runOnly: ['wcag2a', 'wcag2aa']
  });
    cy.get('#rightPanel>p').contains('Petros')
  })

  it('passes2', () => {
    // cy.log("whatever")
    // cy.EnterContactDetails('petros','peteplako@gmail.com','5555','Aekara21')
    // cy.get('#rightPanel>p').contains('petros')
  })



})