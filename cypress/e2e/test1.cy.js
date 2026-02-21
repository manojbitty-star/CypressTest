describe('My Test Suite', () => {

  it('Verify the title', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.title().should('eq','Swag Labs')
  });

   it('Verify the title-Negative test', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.title().should('eq','Swag Labs111')
  });

});