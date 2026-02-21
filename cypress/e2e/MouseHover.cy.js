import '@4tw/cypress-drag-drop';
describe('MouseOperations',()=>{
    it('MouseHover',()=>{
        cy.visit("https://www.shoecarnival.com/")
        cy.wait(4000)
        cy.get("//a[@data-divisionname='Women']").trigger('mouseover')
        cy.get("a[aria-label='Deals Powerchill from $20'] span").click()
       
    })
    it('Right Click Mouse Operation',()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        /*cy.get("span[class='context-menu-one btn btn-neutral']").trigger('contextmenu')
        cy.get(".context-menu-icon-copy").contains('Copy')
        //.should('be.visible')*/
        cy.get("span[class='context-menu-one btn btn-neutral']").rightclick()
        cy.get(".context-menu-icon-copy").contains('Copy')
    })

    it('DoubleClick Operation',()=>{
        cy.visit("https://www.w3schools.com/TAgs/tryit.asp?filename=tryhtml5_ev_ondblclick")
        cy.frameLoaded('#iframeResult')
        //cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').trigger('dblclick')
        //cy.iframe('#iframeResult').find('#demo').should('have.text','Hello World')

        cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').dblclick()
        cy.iframe('#iframeResult').find('#demo').should('have.text','Hello World')
    })
    it('Drag and Drop option',()=>{
        cy.visit("https://crossbrowsertesting.github.io/drag-and-drop.html?utm_source=chatgpt.com")
        cy.get("div[id='draggable'] p").drag('#droppable',{force:true})
    })
   /*it.only('Drag and Drop option', () => {
    cy.visit("https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_draganddrop")

    // Wait until iframe exists (longer timeout for slow loading)
    cy.get('iframe#iframeResult', { timeout: 20000 }).should('be.visible')

    // Load the iframe using cypress-iframe plugin
    cy.frameLoaded('iframe#iframeResult')

    // Interact inside iframe: use correct draggable ID
    cy.iframe('iframe#iframeResult').should('be.visible').find('#img1').should('be.visible').drag('#div1').should('be.visible')

    // Verify drop
    cy.iframe('iframe#iframeResult').find('#div1').should('contain.text', 'Dropped!')
})*/
    it.only('Scrolling on the page',()=>{
    cy.visit("https://www.countries-ofthe-world.com/")
    
})
})