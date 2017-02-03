var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {

    var Burger = sequelize.define("Burger", {

        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        classMethods: {
            associate: function(models) {
                Burger.hasMany(models.Customer, {
                    onDelete: "cascade"
                });
            }

        }
    });
    Burger.sync();
    return Burger;

}
