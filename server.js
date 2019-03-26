const http = require('http');
const hr = require("./halls.js");

http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body as "Hello World"
    var myFunction = function (value) {
        return value.name;
    }
    var newArray = hr.hallsArray.map(myFunction);

    console.log(newArray);
    //response.end(newArray);

    //response.end(hr.hallsArray.map(h=>h.name).join(","));
   
    
 }).listen(8081);
 
 // Console will print the message
 console.log('Server running at http://127.0.0.1:8081/');
