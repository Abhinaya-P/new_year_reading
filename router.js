/*
  author: Abhinaya
*/
var handle = require("./requestHandler");
var url = require('url');

function route(request,response) {
  var pathname = url.parse(request.url).pathname;
  if(pathname == "/") {
    handle.detailsForm(response);
  } else if(pathname == '/reading') {
    var postData = '';
    request.addListener("data",function(postDatachunk) {
      postData += postDatachunk; 
    });
    request.addListener("end",function(){
        handle.getReading(response,postData);
    });
  }
}

exports.route = route;
