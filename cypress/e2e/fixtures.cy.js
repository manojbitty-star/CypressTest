describe('Fixtures',()=>{
    it('AccessthefromFixtureFile',()=>{
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //cy.fixture('Cypressautomation',(data)=>{
            cy.get("input[placeholder='Username']").type('admin')
            cy.get("input[placeholder='Password']").type('admin123')
        /*
         cy.get("input[placeholder='Username']").type(data.username)   
         cy.get("input[placeholder='Password']").type(data.password)
            cy.get("button[type='submit']").click()*/

        })
        cy.wait(5000)
    })
