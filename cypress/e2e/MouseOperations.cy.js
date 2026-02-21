describe('MouseOperations',()=>{
    it('MouseHover',()=>{
        cy.visit('https://demoqa.com/menu')
        cy.get("//a[normalize-space()='Main Item 2']").trigger('mousehover')
    })
    })