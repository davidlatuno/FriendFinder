// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(express.static("app/public"));

require("./app/routing/htmlRoutes.js").home(app);
require("./app/routing/htmlRoutes.js").survey(app);
require("./app/routing/apiRoutes.js").post(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });