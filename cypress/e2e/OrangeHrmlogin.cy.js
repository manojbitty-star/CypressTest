import Login from "../PageObjects/LoginPage"
describe('Login',()=>{
    
    //General Approach
    it('login',()=>{
    cy.wait(4000)
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get('input[name="username"]').type("Admin")
    cy.get('input[name="password"]').type("admin123")
    cy.get('button[type="submit"]').click()
})
//using the pom 
  it('login',()=>{
    cy.wait(4000)
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const ln=new Login();
    ln.setUserName("Admin");
    ln.setPassword("admin123")
    ln.ClickSubmit();

})
//fetching the data from fixtures file.
it('login',()=>{
    cy.wait(4000)
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.fixture('orangehrm').then((data)=>{
    const ln=new Login();
    ln.setUserName(data.username);
    ln.setPassword(data.password);
    ln.ClickSubmit();
    })
    
it.only('login',()=>{
    cy.fixture('orangehrm').then((user)=>{
        user.forEach((user)=>{
    cy.wait(4000)
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const ln=new Login();
    ln.setUserName(user.username);
    ln.setPassword(user.password);
    ln.ClickSubmit();
    })
})
})

})
})