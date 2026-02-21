class Login
{
    txtusername='input[name="username"]';
    txtpassword='input[name="password"]';
    btnSubmit='button[type="submit"]';

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
}   
export default Login;
