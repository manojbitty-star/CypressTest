describe('Handling different types of alers',()=>{
    it.skip('Js Alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.wait(4000)
        cy.get("button[onclick='jsAlert()']").click();

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')
        })

        //alert window is automatically closed by cypress
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })
    it('Js confirmation alert',()=>{
        //const url= Cypress.config('baseUrlalert');
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.wait(4000)
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })
        //cypress is automatically closed alert window by using Ok button
            cy.get('#result').should('have.text','You clicked: Ok')

        
    })
    it('Js confirmation alert alert',()=>{
        //const url= Cypress.config('baseUrlalert');
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.wait(4000)
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })
        cy.on('window:confirm',()=> false); //cypress closes alert window with CLOSE button here
            cy.get('#result').should('have.text','You clicked: Cancel')
  
    })
    it.only('Js confirmation Prompt alert',()=>{
        //const url= Cypress.config('baseUrlalert');
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.wait(4000)
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome'); //stub is a method used to send the text to Alert window before opening the alert
        })
        cy.get("button[onclick='jsPrompt()']").click();
        cy.get('#result').should('have.text','You entered: welcome')
        //cypress will automatically the close the alert - it will use OK button by default

        
    })
})