// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>


//Cypress.Commands.add('login',(username,password)=>{
    //cy.session('user_login',()=>{
        //cy.visit(Cypress.config('baseUrl'))
        //cy.wait(5000)
       // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
      //  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
    //    cy.get('[type="submit"]').click()
  //  })

//})

Cypress.Commands.add('visitFramePage', () => {
  cy.visit("https://demo.automationtesting.in/Frames.html");
  cy.get('.col-xs-6.col-xs-offset-5')
    .its('0.contentDocument.body')
    .then(cy.wrap);
})

//const frame=   cy.visit("https://demo.automationtesting.in/Frames.html")
        //cy.get('.col-xs-6 col-xs-offset-5')
        //.its('0.contentDocument.body')
        //.then(cy.wrap);
        
