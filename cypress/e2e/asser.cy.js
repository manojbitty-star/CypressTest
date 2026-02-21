

describe("Cypress Asserstions", ()=>{
    it("Implict Assertions",()=>{
        cy.visit('https://www.google.com/')
        //cy.url().should('include', 'go')
        //cy.url().should('eq', "https://www.google.com/")
        //cy.url().should('contain','google')

        //cy.url().should('include', 'go')
        //.should('eq', "https://www.google.com/")
        //.should('contain','google')

        cy.url().should('include', 'go')
        .and('eq', "https://www.google.com/")
        .and('contain','google')
        .and('not.eq', "https://www.goo.com/")
        .and('not.contain','amazon')
    })
})
