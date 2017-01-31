var express = require('express');
var router = express.Router();
var methodOverride = require('method-override');
var models = require('../models');
var Burger = models.Burger;
var Customer = models.Customer;
var Sequelize = require('sequelize');
var bodyParser = require('body-parser');


//Grabs all the data from the burgers table...all of the burgers! These are sorted later with Handlebars #if and #unless statements
router.get("/", function(req, res) {

    Burger.findAll({
        // include: [{
        //     model: Customer
        // }]
    }).then(function(data) {
        res.render("index", { burgers: data });
    })
});

// router.get('/', function(req, res) {
//     Customer.findAll({}).then(function(data) {
//         res.render("index", { customers: data });
//     })
// })

//User can enter a new burger into the system. Default values are already set for id, devoured=false, createdAt and updatedAt
router.post("/", function(req, res) {
    Burger.create({
        burger_name: req.body.burger_name
    }).then(function() {
        res.redirect("/");
    });
});

router.post('/', function(req, res) {
    Customer.create({
        customer_name: req.body.customer_name
    }).then(function() {
        res.redirect('/');
    });
});

//Changes status of burger from devoured=false to devoured=true
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

module.exports = router;
