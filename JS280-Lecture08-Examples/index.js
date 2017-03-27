var express = require("express");
var app = express();
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");



app.get("/user", function (req, res) {
    if (req.query.x != null && req.query.y != null) {
        var y = req.query.y;
        var x = req.query.x;
        var data = {
            "y": y,
            "x": x,
            "result": parseInt(x) + parseInt(y)
        };
        res.render("result", data);
    } else {
        res.render("query");
    }

    res.end();
});

app.get("/add/:x/:y", function (req, res) {
    if (req.params.x != null && req.params.y != null) {
        var y = req.params.y;
        var x = req.params.x;
        var data = {
            "y": y,
            "x": x,
            "result": parseInt(x) + parseInt(y)
        };
        res.render("result", data);
    } else {
        res.render("Error");
    }

    res.end();
});
app.get('/home', function (req, res) {
    var pokemon = {
        name: "Fugidane",
        img: "001.png"
    };
    res.render('home', { "pokemon": pokemon });
});


app.listen(1234);