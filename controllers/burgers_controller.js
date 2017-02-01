var express = require('express');
var router = express.Router();
var db = require('../models');

//Grabs all the data from the burgers table...all of the burgers! These are sorted later with Handlebars #if and #unless statements
router.get("/", function(req, res) {

    db.Burger.findAll({}).then(function(data) {
        res.render("index", { burgers: data });
    })
});

//User can enter a new burger into the system. Default values are already set for id, devoured=false, createdAt and updatedAt
router.post("/", function(req, res) {
    db.Burger.create({
        burger_name: req.body.burger_name
    }).then(function() {
        res.redirect("/");
    });
});

router.post('/', function(req, res) {
    db.Customer.create({
        customer_name: req.body.customer_name
    }).then(function() {
        res.redirect('/');
    });
});

//Changes status of burger from devoured=false to devoured=true
router.put("/:id", function(req, res) {
    db.Burger.update({
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
