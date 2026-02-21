import 'cypress-xpath';
describe ('Flipkart', () =>{

   it("Implict Assertions Should", () =>{

        cy.visit('https://www.flipkart.com/')
            cy.url().and('contain','flip')
            cy.url().and('include','kart.com')
            cy.url().and('eq','https://www.flipkart.com/')
            cy.url().and('not.contain','kflip')
            //cy.title().should('include','flip')
            cy.get('.YLCOuy > picture > img').should('be.visible')  //Logo visibility
            cy.get('.YLCOuy > picture > img').should('exist')       //logo exist
            //cy.xpath("//a").should('have.length','6')  //No of links
            cy.get('.Pke_EE').type('pants')
            cy.get('.Pke_EE').should('have.value','pants') //value check
    
            

    })
})