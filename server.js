var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.send('My first API!');
});

app.get('/test', function(req, res) {
  res.send('This is the test subdomain!')
})

app.listen(3000, function() {
  console.log("First API running on port 3000!");
});
