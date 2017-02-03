var express = require('express');
var router = express.Router();
var db = require('../models');

//Grabs all the customers
router.get("/", function(req, res) {
    var query = {};
    if (req.query.burger_id) {
        query.BurgerId = req.query.burger_id;
    }
    db.Customer.findAll({
        where: query,
        include: [db.Burger]
    }).then(function(data) {
        console.log(data)
        res.render("index", { customers: data });
    })
});

//User can enter a new customer
router.post("/", function(req, res) {
    db.Customer.create({
        customer_name: req.body.customer_name
    }).then(function() {
        res.redirect("/");
    });
});

module.exports = router;
