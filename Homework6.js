//HomeWork #6

var hallsArray = [];

hallsArray[0] = {
  id: 0,
  name: "Hall 00",
  reservation : {
	  isReserved: true,
	  reservedFrom: new Date(2019, 10, 03, 14, 00, 00, 0),
	  reservedUntil: new Date(2019, 10, 03, 15, 00, 00, 0),
  }
}
hallsArray[1] = {
  id: 1,
  name: "Hall 01",
  reservation : {
    //debugging
	  //isReserved: true,
	  //reservedFrom: new Date(2018, 11, 24, 10, 30, 00, 0),
	  //reservedUntil: new Date(2018, 11, 24, 12, 30, 00, 0),
	  isReserved: false,
	  reservedFrom: null,
	  reservedUntil: null,

  }
}
hallsArray[2] = {
  id: 2,
  name: "Hall 02",
  reservation : {
	  isReserved: false,
	  reservedFrom: null,
	  reservedUntil: null,
  }
}
hallsArray[3] = {
  id: 3,
  name: "Hall 03",
  reservation : {
	  isReserved: false,
	  reservedFrom: null,
    reservedUntil: null,
    //debugging
	  //isReserved: true,
	  //reservedFrom: new Date(2019, 04, 11, 07, 20, 00, 0),
	  //reservedUntil: new Date(2019, 04, 11, 08, 50, 00, 0),
  }
}
hallsArray[4] = {
  id: 4,
  name: "Hall 04",
  reservation : {
	  isReserved: false,
	  reservedFrom: null,
    reservedUntil: null,
    //debugging
	  //isReserved: true,
	  //reservedFrom: new Date(2019, 02, 11, 17, 20, 00, 0),
	  //reservedUntil: new Date(2019, 02, 11, 18, 50, 00, 0),
  }
}

function add(name) {
  var newHall = {
    id: 5,
    name: name,
    reservation : {
	  isReserved: false,
	  reservedFrom: null,
	  reservedUntil: null,
    }
  }
  hallsArray.push(newHall);
}

//debugging
/*
console.log("<------------first-------------------->");
console.log(hallsArray);
add("nova dvorana");
console.log("<------------second---------------------->");
console.log(hallsArray);
*/

function remove(id) {
  for (i = 0; i < hallsArray.length; i++) {
    if (hallsArray[i].id === id) {
      hallsArray.splice(i, 1); 
      break;
    }
  }
}

//debugging
/*
remove(1);
console.log("<------------third-------------------->");
console.log(hallsArray);
*/

function reservation(id, reservedFrom, reservedUntil) {
  for (i = 0; i < hallsArray.length; i++) {
    if (hallsArray[i].id === id) {
      hallsArray[i].reservation.reservedFrom = reservedFrom; 
      hallsArray[i].reservation.reservedUntil = reservedUntil; 
      break;
    }
  }
}

//debugging
/*
var reservedFromDate = new Date(2019, 01, 11, 17, 20, 00, 0);
var reservedUntilDate = new Date(2019, 01, 11, 17, 20, 00, 0);
reservation(3, reservedFromDate, reservedUntilDate);
console.log("<------------fourth-------------------->");
console.log(hallsArray);
*/

function checkReservation(id) {
  var currentTime = new Date();
  for (i = 0; i < hallsArray.length; i++) {
    if (hallsArray[i].id === id) {
      if (hallsArray[i].reservation.reservedUntil < currentTime) {
        hallsArray[i].reservation.reservedFrom = null; 
        hallsArray[i].reservation.reservedUntil = null; 
        hallsArray[i].reservation.isReserved = false; 
      }
      break;
    }
  }
}

//debugging
/*
checkReservation(4);
console.log("<------------fifth-------------------->");
console.log(hallsArray);
*/