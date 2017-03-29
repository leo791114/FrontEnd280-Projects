var express = require('express');
var app = express();
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", 'ejs');
app.listen(1111);

var PokemonDetail = require('./pokemon_class');


var pokemons = [
    { 'name': '妙蛙種子', 'nationalNo': '001' },
    { 'name': '妙蛙草', 'nationalNo': '002' },
    { 'name': '妙蛙花', 'nationalNo': '003' },
    { 'name': '小火龍', 'nationalNo': '004' },
    { 'name': '火恐龍', 'nationalNo': '005' },
    { 'name': '噴火龍', 'nationalNo': '006' },
];

app.get('/pokemon', function (req, res) {
    var number = req.query.nationalNo;
    if (number == 1) {
        var pokemon = new PokemonDetail(
            '001',
            1234,
            ['GRASS', 'POISON'],
            'Seed',
            0.71,
            6.9,
            ['Overgrow', 'Hidden'],
            '080',
            '妙蛙種子'
        );
        res.render('no1', pokemon);
    } else if (number == 2) {
        res.render('no2', pokemons[number - 1]);
    } else if (number == 3) {
        res.render('no3', pokemons[number - 1]);
    } else if (number == 4) {
        res.render('no4', pokemons[number - 1]);
    } else if (number == 5) {
        res.render('no5', pokemons[number - 1]);
    } else {
        res.render('query');
    }
});

