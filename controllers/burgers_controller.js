var express = require("express");

//importing burger.js model for use of database functions
var burger = require("../models/burger.js");

var router = express.Router();

//displaying all burgers in database
router.get("/", function(request, response) {
	burger.selectAll(function(data) {
		var handleBarsOb = {
			burgers: data
		};
		console.log(handleBarsOb);
		response.render("index", handleBarsOb);
	});
});

//adds new burger to database
router.post("/", function(request, response) {
	burger.insertOne([
		"burger_name", "devoured"
		], [
		  request.body.burger_name, request.body.devoured
		], function() {
			//brings user back to beginning of process to enter another burger
		  response.redirect("/");
		});
});
	

//changes the status of the burger
router.put("/:id", function(request, response) {
	var status = "id = " + request.params.id;

	console.log("status", status);
	burger.updateOne({
		devoured: request.body.devoured
	}, status, function() {
		response.redirect("/");
	});
});

// Export routes for server.js to use.
module.exports = router;
