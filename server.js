// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3000;

// Body Parser settings
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Client side css or js files
app.use(express.static("app/public"));

// Client side and api routes
require("./app/routing/htmlRoutes.js").survey(app);
require("./app/routing/apiRoutes.js").post(app);
require("./app/routing/apiRoutes.js").get(app);
require("./app/routing/htmlRoutes.js").home(app);

// Start Server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });