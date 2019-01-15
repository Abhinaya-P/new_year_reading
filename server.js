/*
  author: Abhinaya
*/
var http = require('http');
var router = require("./router");

function onRequest(request,response) {
  router.route(request,response);
}

http.createServer(onRequest).listen(3000);

