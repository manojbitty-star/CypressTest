describe('Handling tab',()=>{
    it('Approach 1',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.get('.example>a').invoke('removeAttr','target').click();
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000);
        //after performing some actions on the child tab and wants to return back to the parent tab
        cy.go('back'); //it will go back to the parent tab
    })
    it.only('Approach 2',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.get('.example>a').then((e)=>{
           let url=e.prop('href');
           cy.visit(url);
        })
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000);
        //after performing some actions on the child tab and wants to return back to the parent tab
        cy.go('back'); //it will go back to the parent tab
        
    })
})