var Sequelize = require('sequelize');

var Customer = require('./Customer');

module.exports = function(sequelize, DataTypes) {

    var Burger = sequelize.define("Burger", {

        burger_name: DataTypes.STRING,
        devoured: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false }
    });
    return Burger;
    Burger.belongsTo(Customer);
    Burger.sync();
    Customer.sync();
}
