/* Hello World! program in Node.js */
"use strict";

// variables
var iPort = 8081;

//required module
var mHttp = require("http");

//create Http server
var oServer = mHttp.createServer(function(req, res){

    console.log("request received.");
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end();

    console.log("Response sent !");

});
oServer.listen(iPort);

//Console will print the server info
console.log("Server running at http://127.0.0.1:"+ iPort + "/");

// var sMessage = "Hello world!";
// sMessage = sMessage + "!";

// console.log(sMessage);