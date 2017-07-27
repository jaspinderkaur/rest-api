'use strict';

var express = require("express");
var router = express.Router();

//GET /questions
//return all the questions
router.get("/", function(req, res){
	res.json({response: "You sent me a GET request"});
});

//POST /questions
//create questions
router.post("/", function(req, res){
	res.json({
		response: "You sent me a POST request",
		body: req.body
		});
});

//GET /questions
//return all the questions
router.get("/:id", function(req, res){
	res.json({response: "You sent me a GET request for" + req.params.id});
});

module.exports = router;