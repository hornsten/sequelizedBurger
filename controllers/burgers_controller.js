// This file sets up all of the routes for the application. MySQL queries are in here.
var express = require('express');
var router = express.Router();
var methodOverride = require('method-override');
var models = require('../models');
var Burger = models.Burger;
var Sequelize = require('sequelize');
var bodyParser = require('body-parser');
// var connection = require('../config/connection.js');

//Grabs all the data from the burgers table...all of the burgers! These are sorted later with Handlebars #if and #unless statements
router.get("/", function(req, res) {
    Burger.findAll({}).then(function(data) {
        res.render("index", { burgers: data });
    })
});

router.post("/", function(req, res) {
    Burger.create({
        burger_name: req.body.burger_name
    }).then(function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    Burger.update({
        devoured: true
    }, {
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.redirect("/");
    });
});


// //User can enter a new burger into the system. Default value of devoured=false, so user doesn't actually enter that
// router.post("/", function(req, res) {
//     burger.insertOne(req.body.burger_name, function() {

//         res.redirect("/");
//     });
// });

// //Changes status of burger from devoured=false to devoured=true

// router.put("/:id", function(req, res) {
//     burger.updateOne(req.params.id, function() {

//         res.redirect("/");

//     });
// });

module.exports = router;
