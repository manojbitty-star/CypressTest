class Login
{
    txtusername='input[name="username"]';
    txtpassword='input[name="password"]';
    btnSubmit='button[type="submit"]';
    LoginPage='h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]';

    setUserName(username)
    {
        cy.get(this.txtusername).type(username);
    }
    setPassword(password)
    {
        cy.get(this.txtpassword).type(password);
    }
    ClickSubmit()
    {
        cy.get(this.btnSubmit).click();
    }
    setLogin()
    {
        cy.get(this.Loginpage).should('have.text','Dashboard');
    }
}   
export default Login;
