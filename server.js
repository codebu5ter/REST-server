var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ingredients = [
  {
      "id":"232kAk",
      "text":"Eggs"
  },
  {
      "id":"d23iOk",
      "text":"Milk"
  },
  {
      "id":"cbv12A",
      "text":"Bacon"
  },
  {
      "id":"ifo98j",
      "text":"Chicken"
  },
];

app.get('/', function(request, response) {
  response.send(ingredients);
});

app.post('/', function(request, response) {
  var ingredient = request.body;
  if (!ingredient || ingredient.text == "") {
    response.status(500).send({error: "Your ingredient must have some text!"});
  } else {
    ingredients.push(ingredient);
    response.status(200).send(ingredient);
  }
});

app.get('/test', function(req, res) {
  res.send('This is the test subdomain!');
});

app.listen(3000, function() {
  console.log("First API running on port 3000!");
});
