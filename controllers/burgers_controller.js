var express = require("express");

//importing burger.js model for use of database functions
var Burger = require("../models").Burger;

var router = express.Router();

//displaying all burgers in database
router.get("/", function(request, response) {
	Burger.findAll().then(function(data) {
		var handleBarsOb = {
			burgers: data
		};
		
		response.render("index", handleBarsOb);
	});
});

//adds new burger to database
router.post("/", function(request, response) {
	Burger.create({
		burger_name: request.body.burger_name
	}).then(function() {
		response.redirect('/');
	});
});
	

//changes the status of the burger
router.put("/:id", function(request, response) {
	var id = request.params.id;

	Burger.update({
	  devoured: true,
	}, {
	  where: {
	    id: id
	  }
	}).then(function() {
		response.redirect('/');
	});
});

// Export routes for server.js to use.
module.exports = router;
