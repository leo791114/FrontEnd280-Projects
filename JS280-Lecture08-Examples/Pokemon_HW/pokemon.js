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

