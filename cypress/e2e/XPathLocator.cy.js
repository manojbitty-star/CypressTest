describe('Xpath Locator',()=>
    {
        it('Find No of Products on the page using Xpath Locator',()=>{
            cy.visit("http://www.automationpractice.pl/")
            cy.get(".sf-with-ul[title='Women']").click()
            cy.xpath("//ul[@class='product_list grid row']/li").should('have.length',7)
        })

})