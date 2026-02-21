import 'cypress-iframe'
describe("Handling iFrame in Cypress", ()=>{
    it("iFrame Handling-approach-1",()=>{
    cy.visit("https://demo.automationtesting.in/Frames.html")
        cy.iframe
    
        frame.clear().type('welcome');
    })
    it.only('approach -2 ',()=>{
        cy.visit("https://demo.automationtesting.in/Frames.html")
        cy.frameLoaded()
        cy.iframe().clear().type('welcome{ctrl+a}');
        cy.get().click();

    })
})