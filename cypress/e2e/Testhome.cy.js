describe('Ecomm Test',()=>{
    it('Homepage L1 categories',()=>{
        //cy.wait(7000)
    cy.visit("https://oldnavy.gap.com/")
    cy.get("a[data-divisionname='Women']").trigger('mouseover')
    cy.get("a[aria-label='Deals Powerchill from $20'] span").should('be.visible')
    cy.wait(4000)
    cy.get("a[aria-label='Deals Powerchill from $20'] span").click()
    cy.wait(4000)
    //cy.get('div.plp_product-card img.plp_zoom-image[data-image-index="1"]').first().should('be.visible').click()
        cy.get("div[id='product847603012'] img:nth-child(1)").click()
    })
})
