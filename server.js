const express = require("express");
const bodyParser = require("body-parser");

const app =  express();
var items = ["Buy Food", "Cook Food", "Eat Food"];


app.set("view-engine", "ejs");



app.use(bodyParser.urlencoded({extended: true}));
//app.use(express.static(__dirname));



app.get("/", function(req, res){

    var today= new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);






//}
    /*
    var currentDay = today.getDay();
    var day= "";

  switch(currentDay) {
    case 0:
        day = "Sunday";
        break;
    case 1:
         day = "Monday";
         break;
    case 2:
        day = "Tuesday";
        break;
    case 3: 
        day="Wednesday";
        break;
    case 4:
        day="Thursday";
        break;
    case 5:
        day="Friday";
        break;
    case 6:
        day="Saturday";
        break;
        default:
        console.log("Error: current day is equal to: " + currentDay);
  }
  */
        res.render("index.ejs", {kindOfDay: day, newListItems: items } );
    
});

app.post("/", function(req, res){
   var item= req.body.newItem;

   items.push(item);
  
   res.redirect("/");
});

//res.render("index.ejs", {newListItem: item});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});