describe('Interacting with DropDownList',()=>{

    it('DropDownlist Ineraction',()=>{

      cy.visit('https://www.zoho.com/commerce/free-demo.html')
      cy.get('#zcf_users_1').select('Yes, I currently sell online').should('have.value','Yes, I currently sell online')
})

    it.skip('DropDownlist Ineraction',()=>{

        cy.visit('https://dummyticketvisa.com/Bookdummyticket.aspx')
        cy.get('#ContentPlaceHolder1_ddlfamily').contains('GBP').click()
    })

})
