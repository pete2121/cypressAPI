describe('This is my first test', () => {

before(() => {

  cy.log('Before all')

})

beforeEach(() => {

  cy.visit('https://parabank.parasoft.com/parabank/index.htm')

})

it('Login in to the bank', ()=>{
  cy.log('This is login')
  //cy.get('[name="username"]').type('Petros')
  //cy.get('[name="password"]').type('Petros')
  //cy.get('[value="Log In"]').click()

  //cy.get('a').contains('Forgot login info?').click()

  cy.get('input.button').invoke('val').as('valueVariable')


  cy.get('@valueVariable').then(thisatext=> {

    expect(thisatext).to.contains('Log In')
  })

})

 
  it('I want to visit Parabank', () => {

    cy.get('.contact').click()
    cy.get('h1.title').should('have.text','Customer Care')
    cy.get('#name').type('Petros')
    cy.get('#email').type('peteplako@yahoo.com')
    cy.get('#phone').type('9999999')
    cy.get('#message').type('aaaaaaa')
    cy.get('input.button').contains('Send to Customer Care').click()
    //cy.get('#rightPanel>p').should('have.text','Thank you Petros')

    
  })

  it('this is the second test', ()=>{
     cy.log('The second test is started')
  })


  it('this is the third test', function() {
    expect(this.valueVariable).to.contains('Log In')
  
 })



  after(() => {

    cy.log('After all')
  
  })

  afterEach(() => {

    cy.log('After Each')
  
  })
  

})