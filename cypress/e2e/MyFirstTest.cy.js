describe('My First Test', () => {
    it('verify title-positive test', () => {
        
      cy.visit("opensource-demo.orangehrmlive.com")
      cy.title().should('eq',"OrangeHRM")
    })

    it('verify test-negative test', () => {
        
        cy.visit("opensource-demo.orangehrmlive.com")
        cy.title().should('eq',"OrangeHRMTEST")
      })

   
})