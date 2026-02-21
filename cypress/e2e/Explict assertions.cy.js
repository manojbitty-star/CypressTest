import 'cypress-xpath';
describe ('Flipkart', () =>{

   it("Explict Assertions Should", () =>{

        cy.visit('https://www.flipkart.com/')
            cy.url().and('contain','flip')
            cy.url().and('include','kart.com')
            cy.url().and('eq','https://www.flipkart.com/')
            cy.url().and('not.contain','kflip')
            //cy.title().should('include','flip')
            cy.get('.YLCOuy > picture > img').should('be.visible')  //Logo visibility
            cy.get('.YLCOuy > picture > img').should('exist')       //logo exist
            //cy.xpath("//a").should('have.length','6')  //No of links
            cy.get('.Pke_EE').type('pants')
            cy.get('.Pke_EE').should('have.value','pants') //value check
   })
        
    it("User Defined Explict Assertions", () =>{
           cy.visit('http://www.automationpractice.pl/index.php')
           cy.get('.login').click()
           cy.get('#email').type('sveta386@avuedy.com')
           cy.get('#passwd').type('test@1234')
           cy.get('#SubmitLogin > span').click()

           //JavaScript User defined function
           
           let expName='My account' //Name of the user after loggin
           cy.get('.page-heading').then( (x)=>{ //get is the method to get the text locator of the user and storing that value in x variable
            let actName=x.text() //text is methoed user to get the actname value using x variable
            
            //BDD Approach
            expect(actName).to.contain(expName) //we can use both contain or equal to compare act and exp name values
            expect(actName).to.not.equal(expName)

            //TDD Approach

            assert.equal(actName,expName)
            assert.not.equal(actName,expName)


           })


    })
})