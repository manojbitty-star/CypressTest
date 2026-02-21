import 'cypress-file-upload'
describe('FileUploading',()=>{
    it('Single File Upload',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile('Photo.pdf')
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')

    })
    it('File-Rename Upload',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile({filePath:'Photo.pdf', fileName:'Myphoto.pdf'})
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
        //cy.get('#uploaded-files').should('have.text','MyPhoto')

    })
    it.only('Multiple File Upload',()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get('#filesToUpload').attachFile(['Photo.pdf','Badge Photo Requirements.pdf'])
        cy.get('#filesToUpload').click()
        cy.wait(5000)
        cy.contains('Files You Selected:', { timeout: 10000 }).should('be.visible');
    })
})