# :hamburger: Fancy Burger
A Burger Builder incorporating Node/Express.js/MySQL/Handlebars/ORMs


## Home Page
![app image](/public/assets/img/fancy-burger.png?raw=true "App Image")


## Description
When the user inputs a new burger, the burger is inserted into the database.  Burgers are displayed correctly in either "Ready To Eat" or "Devoured" using the built-in Handlebars helpers #each, #if, and #unless.  When the user "eats" a burger, the burger's status is updated from "devoured=false" to "devoured=true".


## Dependencies
* express
* express-handlebars
* body-parser
* method-override
* mysql
* Materialize CSS
* JawsDB