describe("Interacting with UI elements",()=>{
it("RadiButton Interaction on the Website",()=>{

    cy.visit("https://testautomationpractice.blogspot.com/")
    
    //visibility of radio buttons
    cy.get("label[for='male']").should('be.visible')
    cy.get("label[for='female']").should('be.visible')


    //selecting radio buttons
    cy.get("#male").check().should('be.checked')
    cy.get("#female").should('not.be.checked')


    //selecting female radio button
    cy.get("#female").check().should('be.checked')
    cy.get("#male").should('not.be.checked')

    
})    
})