var express = require("express");
var db = require("./models");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var app = express();
var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

//Require Handlebars
var exphbs = require("express-handlebars");

//Select and set Handlebars as the engine and "main" as the default layout
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Imports the routes from burgers_controller
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("Listening on port %s", PORT);
    });
});
