describe('Myntra Tabs Handling',()=>{
    it('Handling myntra tabs',()=>{
        cy.wait(5000);
        cy.visit("https://www.myntra.com/")
        cy.get('.desktop-main[href="/shop/women"]').trigger('mouseover');

    })
    it('Handling myntra tabs',()=>{
        cy.visit("https://www.myntra.com/")
    })
})