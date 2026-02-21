describe('Hooks Concept',()=>{

//before()  - Before staritng all it block 
//after() - only once after completiong of all ite in describle block.
//before.each() - it'll executre each and every time for every it block
//after.each() - it'll execute each and every time for every it block
before(()=>{
    cy.log('**** LAUNCH APPLICATION ******')
})

after(()=>{
    cy.log('****** CLOSE THE APPLICATION ********')
})

beforeEach(()=>{
    cy.log('**** LOGIN *******')
})
afterEach(()=>{
    cy.log('*** LOGOUT FROM APPLICATION')
})
it('Search',  ()=>{
    cy.log('******* SEARCH *******')
})

it('Advance Search',()=>{
    cy.log('****** ADVANCE SEARCH ******')
})

it('Listiing Products',()=>{
    cy.log('******** LISTING PRODUCTS **********')
})

})
