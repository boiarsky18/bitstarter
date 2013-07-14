var express = require('express');
var fs = require('index.html');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(bu.tosString(fs.readFile('index.html')));


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
