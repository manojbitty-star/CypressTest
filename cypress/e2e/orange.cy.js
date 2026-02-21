
const username = Cypress.env('username')
const password = Cypress.env('password')

describe('login',()=>{
    before(()=>{

        cy.login(username,password)
    })
    beforeEach(()=>{
        Cypress.session.getSession('user_login')
    })
    it('test1',()=>{
        cy.get('[alt="client brand banner"]')  
    })
    it('test2',()=>{
        cy.get('[placeholder="Search"]')
    })
})
