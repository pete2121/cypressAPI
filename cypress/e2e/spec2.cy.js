describe('Test api', () => {
    
    it('Test api', () => {
    cy.api('GET', 'https://restful-booker.herokuapp.com/booking').should((response) => {
    expect(response.status).to.eq(200);
    });
        
    });
});


it('GET API testing Using Cypress API Plugin', () => {
    cy.api('GET', 'https://restful-booker.herokuapp.com/booking/2').should((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).property('firstname').to.eq('Mark')
    expect(response.body).property('bookingdates').property('checkin').to.eq('2016-02-18') //ean exei pinaka json
    });
    });
    


    it('Create Booking', () => {
        cy.api('POST', 'https://restful-booker.herokuapp.com/booking', 
        {
        
            firstname : "Petros",
                lastname : "Plakogiannis",
                totalprice : 111,
                depositpaid : true,
                bookingdates : {
                    checkin : "2018-01-01",
                    checkout : "2019-01-01"
                },
                additionalneeds : "Breakfast"
        
        }).should((response) => {
        expect(response.status).to.eq(200);
        });
        });