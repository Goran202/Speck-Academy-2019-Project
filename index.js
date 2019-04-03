const port = 3000;

var express = require('express');
var app = express();

const hallsFile = require("./halls.js");
var hallsAr = hallsFile.hallsArray;

app.use('/halls', function (req, res) {
    res.json(hallsFile);
    
})

//debug code
/*
app.get('/', function (req, res) {
  res.send('Hello World' + ' ' + hallsAr.length)
})
*/


app.listen(port)