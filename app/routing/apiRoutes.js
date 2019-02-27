
var express = require("express");
var app = express();

app.get("/api/friends", function (req, res) {
    return res.json(friends);
});
app.post("/api/tables", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    Friends.push(newFriend)

    console.log(newFriend);


    res.json(newFriend);
});
module.exports = app;