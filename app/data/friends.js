
var htmlRouting = require("routing/htmlRoutes.js");
var apiRouting = require("routing/apiRoutes.js");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.listen(PORT, function(){
console.log("we made it")
})


var Friends = []

// this for loop is suppose to be going through the array of the scores that each person gave and looking for any diference in the number the returning an alert that says which peron is your match 
for (var i = 0; i < Friends.uniqueID.length; i++){
    if (Friends.uniqueID === newFriend.uniqueID){
        // push the match of your score onto an alert that would pop up once it was done going through the array of people 
        return alert(Friends.name)
    }
}


module.export