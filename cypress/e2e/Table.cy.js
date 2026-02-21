describe('Handle Tables', ()=>{
    beforeEach('Login', ()=>{

        cy.visit('https://demo.opencart.com/admin/index.php')
        cy.get("#input-email").type("demo");
        cy.get("#input-password").type("deomo");
        cy.get("button[type='submit']").click();
        //Customers---->Customers
        cy.get("#menu-customer>a").click(); //Customer Main Menu
        cy.get("#menu-customer>ul>li:first-child").click(); //Customers sub items



    })
    it.only('Check Number of Rows and Coloumns',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should("have.length",'10');
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should("have.lenght","6");


    })
    it('Check cell data from specific Row and Coloumn',()=>{
        
    })
    it('Read all the Row and Coloumn data in the first page',()=>{
        
    })
    it('Pagination',()=>{
        
    })

})