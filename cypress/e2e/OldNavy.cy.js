describe('OLD Navi Home page login',()=>{

    it('Homepage login',()=>{

        cy.wait(5000)
        cy.visit("https://oldnavy.gap.com/");
        cy.get('svg[data-testid="account-icon"]').click();
        cy.wait(5000)
        cy.get('[data-testid="account-dropdown-sign-in"]').should('be.visible').click();
        cy.wait(5000)
        cy.get('input[id="verify-email-input"]').type('test@gmail.com');
        cy.get('button[type="submit"]').click();
    })

})