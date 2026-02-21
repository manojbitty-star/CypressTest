describe('Download a file from web and verify',()=>{
    it('Verify Downloaded File',()=>{
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
    })
})