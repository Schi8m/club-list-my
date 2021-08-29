export const API_URL = 'https://apimonaco.avi-tech.ru'
export const ENDPOINST = {
  clubs: '/Api/v2/odata/Clubs',
  classes: '/Api/v2/odata/Classes',
  bookClass: '/Api/v2/ClassBooking/BookClass',
  unBookClass: '/Api/v2/ClassBooking/CancelClassBooking',
  getBookedClasses: '/Api/v2/odata/ClassBookings'
}
export const HEADERS = {
  'Content-Type': 'application/json',
  config: 'clubru',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjE0NTQsImlhdCI6MTYyOTcyMDkyMH0.7mWDICG7ZyC14Qd52t4FERDfI3B7_Lx8uU5z00RCXGw'
}
