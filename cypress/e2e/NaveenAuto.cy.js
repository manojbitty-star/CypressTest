describe('NaveenAutomation',()=>{
    it('Loing from the homepage',()=>{

        cy.visit("https://naveenautomationlabs.com/opencart/");
        cy.get("a[title='My Account'] span[class='hidden-xs hidden-sm hidden-md']").click();
    })
})