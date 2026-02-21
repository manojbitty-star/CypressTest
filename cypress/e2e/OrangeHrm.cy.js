import Login from "../PageObjects/LoginPage"
describe('Orange Hrm Login',()=>{
    it.skip('Login',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[type="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
    })
    it.only('Login using fixture',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.fixture('orangehrm').then((data)=>{
            const ln=new Login();
            ln.setUserName(data.username);
            ln.setPassword(data.password);
            ln.ClickSubmit(data.btnSubmit)
            ln.setLogin(data.expected);
        })
        })
    })

    /*cy.fixture('orangehrm').then((data)=>{
    const ln=new Login();
    ln.setUserName(data.username);
    ln.setPassword(data.password);
    ln.ClickSubmit();
    })*/


