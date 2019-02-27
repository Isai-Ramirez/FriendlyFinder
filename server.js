var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;
var htmlRouting = require("./app/routing/htmlRoutes.js");
var apiRouting = require("./app/routing/apiRoutes.js");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(htmlRouting);
app.use(apiRouting);

app.listen(PORT, function(){
console.log("we made it")
})
