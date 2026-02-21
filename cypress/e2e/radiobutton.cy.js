
/// <reference types="cypress"/>
describe('Handing Radio Buttons & Checkboxes', () =>{

it('Radio Buttons',()=>{
cy.visit('https://qa-automation-practice.netlify.app')
cy.get(':nth-child(6) > #buttons').click()
cy.get('#radio-buttons').click()
cy.get(':nth-child(3) > .form-check-label').should('be.visible')
cy.get(':nth-child(6) > .form-check-label').should('be.visible')
cy.get('#content > :nth-child(4)').should('not.be.checked')
//cy.get(':nth-child(3) > .form-check-label').click().should('be.checked')
})

it('Checkboxes', () =>{
    cy.visit('https://qa-automation-practice.netlify.app')
    cy.get(':nth-child(6) > #buttons').click()
    cy.get('#checkboxes').click()
    //Visibility of the Checkbox
    cy.get(':nth-child(1) > .form-check-label').should('be.visible')
    //Selecting Single checkbox - Checkout out -1
    cy.get('#checkbox1').check()
    cy.get('#checkbox1').uncheck().should('not.be.checked')
})

})