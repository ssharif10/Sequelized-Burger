//dependencies

var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

//establishing the port we will be using
var port = process.env.PORT || 3000;

//setting express to the variable "app"
var app = express();

//gives access to the html/css/js files
app.use(express.static("public"));

//will parse data
app.use(bodyParser.urlencoded({ extended: false }));

// Requiring our models for syncing
var db = require("./models");


app.use(methodOverride("_method"));

//requiring handlbars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port, function() {
 console.log("App listening on PORT: " + port);
});
