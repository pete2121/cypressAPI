export class bookingAPI {


apiURL = 'https://restful-booker.herokuapp.com/booking/'


getBookings() {
    return cy.api('GET',this.apiURL)
}


getBookingID(bookingID) {
    return cy.api('GET',this.apiURL+bookingID)
}


postBooking(firstname,lastname,totalprice,depositpaid,checkin,checkout,additionalneeds) {
  return cy.api('POST',this.apiURL,

  {
    firstname : firstname,
    lastname : lastname,
    totalprice : totalprice,
    depositpaid : depositpaid,
    bookingdates : {
        checkin : checkin,
        checkout : checkout
    },
    additionalneeds : additionalneeds

    }

)}


}