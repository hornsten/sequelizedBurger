In this file is everything needed to establish connection with MySQL db
var mysql = require("mysql");

var connection;

if (process.env.NODE_URL) {
    connection = mysql.createConnection(process.env.NODE_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "pass",
        database: "burgers_database"
    });
};

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);

});

//exports this file content so other files can access it
module.exports = connection;
