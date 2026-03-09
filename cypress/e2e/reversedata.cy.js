describe('Reverse String using Fixtures',()=>{
    it('Should reverse the string from fixture file',()=>{

        /*cy.fixture('reversestring').then((data)=>{

            const orignalstring=data.inputstring;
            const reversestring=orignalstring
            .split('')
            .reverse()
            .join('');
            cy.log('orignalstring:' + orignalstring);
            cy.log('reversedstring: ' + reversestring);
            //Asserstion
            expect(reversestring).to.equal('noitamotuAsserpyC')
    })*/

             cy.fixture('reversestring').then((data)=>{
            const originalString=data.inputstring;
            const reverseString=originalString
            .split('') // converting string into array
            .reverse() // reverse the array(string)
            .join('') //converting array backs to string
            cy.log('Orignial String:' + originalString);
            cy.log('ReversedString:' + reverseString);
            expect(reverseString).to.equal('noitamotuAsserpyC')
        })

        })
        
        })

       
    

