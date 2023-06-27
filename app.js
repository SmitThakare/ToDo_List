const express = require("express");
const bodyParser = require("body-parser");
const MyDate = require(__dirname + "/date.js");
const app = express();

var inputs = [];
var workitems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
    var day = MyDate.getDate();
    res.render("list", { ListTitle: day, newListItem: inputs });
});

app.post("/", function (req, res) {
    let item = req.body.newItem;
    if (req.body.list === "Work") {
        workitems.push(item);
        res.redirect("/work");
    } else {
        inputs.push(item);
        res.redirect("/");
    }
});

app.get("/work", function (req, res) {
    res.render("list", { ListTitle: "Work List", newListItem: workitems });
});

app.get("/about", function (req, res) {
    res.render("about");
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});


/* const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var inputs = [];
var workitems = [];
//we need to store multiple list item 
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
//for ejs it assumes that there exist views folder with index file in it.
app.use(express.static("public"));
app.get("/", function (req, resp) {
    var today = new Date();
    var options = {
        day: "numeric",
        weekday: "long",
        month: "long"
    }
    var day = today.toLocaleDateString("en-US", options);
    resp.render("list", { ListTitle: day, newListItem: inputs });
});
app.post("/", function (req, resp) {
    // we create inputs array n append input in it which stores the current variable
    let item = req.body.list;
    if (req.body.list === "Work") {
        workitems.push(item);
        resp.redirect("/work")
    }
    else {
        inputs.push(item);
        resp.redirect("/")
    }

});
app.get("/work", function (req, resp) {
    resp.render("list", { ListTitle: "Work List", newListItem: workitems });
});
app.get("/about", function (req, resp) {
    resp.render("about");
})
app.listen(3000, function () {
    console.log("running on port 3000");
}); */