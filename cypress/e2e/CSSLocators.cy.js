describe('CSS Locators',()=>{
    it('Id Locator',()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get("#search_query_top").type("blouse")
        cy.get("[name='submit_search']").click()
    })
    it('class Locator',()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get(".search_query").type("blouse")
        cy.get("[name='submit_search']").click()
    })
    it('attribue Locator',()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get("[name='search_query']").type("blouse")
        cy.get("[name='submit_search']").click()
    })
    it('class and attribue Locator',()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get(".search_query[name='search_query']").type("blouse")
        cy.get("[name='submit_search']").click()
        cy.get(".lighter").contains("blouse")
    })
})

   //cy.visit("https://www.amazon.in/")
        //cy.get("#twotabsearchtextbox").type("pants")
        //cy.get(".nav-search-submit.nav-sprite").click()
        //cy.get(".a-dropdown-label").should('contain','Featured')