import { bookingAPI } from "../api/bookingAPI";

describe('Test API for Cypress conf', () => {

const api = new bookingAPI

    it('Get All bookings', () => {
       api.getBookings().should((response)=> {
            expect(response.status).to.eq(200);
         })
        
    });


    it('Get a specific booking id', () => {
        api.getBookingID(5).then((response)=> {
           cy.writeFile('./cypress/e2e/response.pdf', response.body, 'binary')
           // expect(response.body).property('firstname').to.eq('Eric')
           // expect(response.body).property('bookingdates').property('checkin').to.eq('2021-07-20')
         })
        
    });


    
    it('create a booking', () => {
        api.postBooking("Petros","Plakogiannis","111","true","2024-3-3","2024-3-5","Breakfrast").should((response)=> {
            expect(response.status).to.eq(200); 
         })
        
    });


});