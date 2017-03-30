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
    { 'name': '傑尼龜', 'nationalNo': '007' },
    { 'name': '卡咪龜', 'nationalNo': '008' },
    { 'name': '水箭龜', 'nationalNo': '009' },
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

app.get('/pokemon/all', function (req, res) {
    var link = []
    for (var index = 1; index <= 151; index++) {
        if (index < 10) {
            index = '00' + index;
            link.push(index);
        } else if (index < 100) {
            index = '0' + index;
            link.push(index);
        } else {
            link.push(index);
        }

    }
    res.render('all', { 'nationalNo': link });
});

app.get('/home', function (req, res) {
    res.redirect('/pokemon/all');
});

