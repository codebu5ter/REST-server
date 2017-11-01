var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

var ingredients = [{
    "id": "232kAk",
    "text": "Eggs"
  },
  {
    "id": "d23iOk",
    "text": "Milk"
  },
  {
    "id": "cbv12A",
    "text": "Bacon"
  },
  {
    "id": "ifo98j",
    "text": "Chicken"
  },
];

app.get('/ingredients', function(request, response) {
  response.send(ingredients);
});

app.post('/ingredients', function(request, response) {
  var ingredient = request.body;
  if (!ingredient || ingredient.text == "") {
    response.status(500).send({
      error: "Your ingredient must have some text!"
    });
  } else {
    ingredients.push(ingredient);
    response.status(200).send(ingredient);
  }
});

app.get('/test', function(req, res) {
  res.send('This is the test subdomain!');
});

app.put('/ingredients/:ingredientID', function(request, response) {
  var ingredientID = request.params.ingredientID;
  var newText = request.body.text;
  if (!newText || newText === "") {
    response.status(500).send({
      error: "You must provide ingredient text!!"
    });
  } else {
    for (var x = 0; x < ingredients.length; x++) {
      var ing = ingredients[x];

      if (ing.id === request.params.ingredientID) {
        ingredients[x].text = newText;
        break;
      }
    }

    response.send(ingredients);
  }

});

app.listen(3000, function() {
  console.log("First API running on port 3000!");
});
