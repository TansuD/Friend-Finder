var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/api/friends", function (req, res) {
    res.sendFile(path.join(__dirname, "package.json"));
});

app.post("/api/friends", function (req, res) {

    var table = req.body;

    table.routeName = table.name.replace(/\s+/g, "").toLowerCase();

    console.log(table);

    if (tables.length <= 4) {
        tables.push(table);
        console.log(table);
        res.json({ res: true });
    }
    else {
        waitlist.push(table);
        res.json({ res: false });
    }

});





app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});