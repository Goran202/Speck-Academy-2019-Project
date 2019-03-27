const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const hallsFile = require("./halls.js");
var hallsAr = hallsFile.hallsArray;

var _ = require('lodash');
var uniqHallsArray = _.uniqBy(hallsAr, 'name');
var allNamesArray = _.map(hallsAr, 'name');
var uniqNamesArray = _.map(uniqHallsArray, 'name');
var allNamesString = allNamesArray.join(",");
var uniqNamesString = uniqNamesArray.join(",");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("ALL Names separated by a comma: " + allNamesString + "\n" + "UNIQ Names separated by a comma: " + uniqNamesString);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});