const port = 3000;

var _ = require('lodash');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

const hallsFile = require("./halls.js");
var hallsAr = hallsFile.hallsArray;
app.use('/', express.static('public'));
app.use(bodyParser.urlencoded({ extended: true })); 

app.use('/halls', function (req, res) {
    res.json(hallsFile);
})

app.post('/hallsCreate', function (req, res) {
  var newId = hallsAr[hallsAr.length - 1].id + 1;
  var hallName = req.body.hallName;
  hallsAr.push({
    id: newId,
    name: hallName,
    reservation : {
      isReserved: false,
      reservedFrom: null,
      reservedUntil: null,
    }
  } )
  res.redirect('/halls');
})

app.post('/hallsUpdate', function (req, res) {
  hallsAr = _.map(hallsAr, function(a) {
    if (a.id == req.body.hallId) {
      a.reservation.reservedUntil = new Date(req.body.reservedUntil);
      a.reservation.reservedFrom = Date.now();
      //had to "hack" it this way...
      if (req.body.isReserved == undefined) {
        a.reservation.isReserved = false;
      }
      else {
        a.reservation.isReserved = true;
      }
    }
    return a;
  });
  res.redirect('/halls');
})

app.post('/hallsDelete', function (req, res) {
  _.remove(hallsAr, item => item.id == req.body.hallId);  
  res.redirect('/index.html');
})


app.listen(port)