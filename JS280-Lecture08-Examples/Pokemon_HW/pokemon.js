var express = require('express');
var app = express();
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", 'ejs');
app.listen(1111);

var pokemons = [
    { name: 'Fushigidane', nationalNo: 1 },
    { name: 'Hitokage', nationalNo: 2 }
];

app.get('/pokemon', function (req, res) {
    if (req.query.nationalNo != null) {
        var nationalNo = req.query.nationalNo;
        for (var index = 0; index < pokemons.length; index++) {
            if (nationalNo == pokemons[index].nationalNo) {
                pokemon = pokemons[index];
            } else {
                res.render("query");
            }
        }
    } else {
        res.render('query');
    }
    res.render('pic', pokemon);
    res.end();

});