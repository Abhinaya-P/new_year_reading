/*
  author: Abhinaya
*/
var saying = require("./saying");
var qs = require("querystring");

function detailsForm(response) {
  var body = '<html> \
              <head> \
              <title> Get Your New Year Saying </title> \
              <meta http-equiv="content-type" type="text/html; charset=UTF-8"/>  \
              </head> \
              <body bgcolor="#C0C0C0" > \
              <center> \
              <h2 style="color: #336666; padding-top: 20px;"> NEW YEAR IS HERE!! Get your reading... </h2> \
              <form action="/reading" method="post" style="padding-top: 150px;"> \
                <label for="name">Enter Your Name: </label> \
                <input type="text" name="name" />\
                </br> \
                </br> \
                <label for="bday">Enter Your Birthday: </label> \
                <input type="date" name="bday" />\
                </br> \
                </br> \
                <input type="submit" value="Go" > \
              </form> \
              </body> \
              <center> \
              </html>'
  response.writeHead(200,{"Content-type": "text/html"});
  response.write(body);
  response.end();
  return response; 
}

function getReading(response,postData) {
  var reading = saying.saying(qs.parse(postData).name,qs.parse(postData).bday) + " Happy New Year!";
  var body = '<html> \
              <body bgcolor="#C0C0C0"> \
              <center> \
              <h4> YOUR READING FOR THIS YEAR: </h4> \
              </br> \
              </br> \
              <p>  \
              <b> ' + reading + '\
              </b> \
              </p> \
              </center> \
              </body> \
              </html>'
  response.writeHead(200,{"Content-type": "text/html"});
  response.write(body);
  response.end();
}

exports.detailsForm = detailsForm;
exports.getReading = getReading;