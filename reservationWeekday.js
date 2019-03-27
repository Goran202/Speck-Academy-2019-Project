const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const hallsFile = require("./halls.js");
var hallsAr = hallsFile.hallsArray;
var { DateTime } = require('luxon');
var _ = require('lodash');

//this didint work...
var newArray = _.filter(hallsAr, { 'reservation.isReserved' : true   });

//this is alternative solution
var newArray2 = [];
for (i=0; i <hallsAr.length;i++) {
  if (hallsAr[i].reservation.isReserved == true) {
    newArray2.push(hallsAr[i]);
  }
}

//console.log(newArray2);
var firstElement = _.first(newArray2);
var stringDate = DateTime.fromJSDate(firstElement.reservation.reservedUntil).toLocaleString(DateTime.DATE_HUGE);
//console.log(stringDate);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(stringDate);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});