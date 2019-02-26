var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;
var htmlRouting = require("routing/htmlRoutes.js");
var apiRouting = require("routing/apiRoutes.js");

app.use(express.urlencoded({extended: true}));
app.use(express.json());


var Friends = []



// code to deploy to heroku which i couldn't get 