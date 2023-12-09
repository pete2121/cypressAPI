import { bookingAPI } from "../api/bookingAPI";

describe('This is my first test', () => {


const api = new bookingAPI


    it('Get all Bookings', () => {
     api.getBookingID(2).should((response)=> {
      expect(response.status).to.eq(200);
      //expect(response.body).property('firstname').to.eq('Mark')
      //expect(response.body).property('bookingdates').property('checkin').to.eq('2019-10-25')

    }); 
})


it('Create booking', () => {
   api.postBooking('Petros','Plakogiannis','777','200','2023-10-10','2023-10-10','breakfast').should((response)=> {
    expect(response.status).to.eq(200);

    })
})



it('Create token', () => {
        cy.api('POST','https://restful-booker.herokuapp.com/auth', 
        {
            username : "admin",
            password : "password123"

        }).then((response) =>{
            const respoBody = response.body
            const token = respoBody['token']
            cy.log(token)
        cy.api(

    {

       method: 'PATCH',
       url : 'https://restful-booker.herokuapp.com/booking/2',
       headers: {
        'Content-Type': 'application/json',
        'Cookie': 'token='+token
       },
       body: {

        lastname: 'Petros Aek'

       }
    }        

    )

})

})

})