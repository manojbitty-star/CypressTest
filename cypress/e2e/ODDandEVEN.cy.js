describe('counting odd and even numbers',()=>{
    it('couting odd and even numbers',()=>{
        const number = [11,22,33,44,55,];
        let countodd=0;
        let counteven=0;
        number.forEach((num)=>{

            if (num % 2 ==0){
                counteven++;
            }
            else{
                countodd++;
            }
            
        });
            
    
        cy.log("Total Evennumber:"+ counteven);
        cy.log("Total Oddnumber:"+ countodd);
 });
  });
    