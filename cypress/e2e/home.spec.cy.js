describe('The website must be rendered', () => {
  it('should visit home', () => {
    cy.visit('http://localhost:3000/es')
  })
  it('should navigate into the sections', ()=>{
    cy.visit('http://localhost:3000/es')
    cy.contains('SERVICIOS').click()
    cy.contains('NOSOTROS').click()
    cy.contains('INICIO').click()
  })
  it('should change the language', () =>{
    cy.visit('http://localhost:3000/es')
    cy.contains('#link').click()
    cy.contains('SERVICES').click()
    cy.contains('ABOUT US').click()
    cy.contains('HOME').click()
    cy.url().should('include', '/en')
  })
})