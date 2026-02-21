describe ('Flipkart', () =>{

    it("Login", () =>{

        cy.visit("https://www.flipkart.com/");
            cy.get(".uiU-ZX").click()     
    })
})