// var mongoose = require('mongoose');
// require('./config/database.js');

var mongoose = require('mongoose');
var Database = require('./config/database');
var db = new Database('dbadmin', 'leo791114', 31729, "mystickynotes");
mongoose.connect('mongodb://dbadmin:leo791114@ds131729.mlab.com:31729/mystickynotes');

var Product = mongoose.model('Product', {
    name: String,
    price: Number,
    description: String
});

var iPhone = new Product({
    name: "iPhone 7",
    price: 28900,
    description: "導航很爛的手機"
});


Product.find({
    name: 'iPhone 7'
}, function (err, products) {
    for (var index in products) {
        var product = products[index];
        console.log(product.name);
    }
});

Product.remover({ name: "iPhone 7" }, function (err) {


});

// var mongoose = require('mongoose');
// var Database = require('./config/database');
// var db = new Database('dbadmin', 'leo791114', 31729, "mystickynotes");
// mongoose.connect(db.getURI());

// var Product = mongoose.model('Product', {
//     name: String,
//     price: Number,
//     description: String
// });

// var iPhone = new Product({
//     name: "iPhone 7",
//     price: 28900,
//     description: "導航很爛的手機"
// });


// Product.find(function (err, products) {
//     for (var index in products) {
//         var product = products[index];
//         console.log(product.name);
//     }
// });

// var Cat = mongoose.model('Cat', {
//     name: String,
//     age: Number
// });

// var cat = new Cat({
//     name: "加菲貓",
//     age: 10
// });

// function Database(user, pass, port, name) {
//     this.user = user;
//     this.pass = pass;
//     this.port = port;
//     this.name = name;
// }

// Database.prototype.getURI = function () {
//     return "mongodb://" + this.user + ":" + this.pass + "@ds021884.mlab.com:" + this.port + "/" + this.name;
// }
// var mongoose = require('mongoose');
// var Database = require('./config/database');
// var db = new Database('dbadmin', 'dbadmin1234', 21884, "mystickynotes");
// mongoose.connect(db.getURI());

// var Product = mongoose.model('Product', {
//     name: String,
//     price: Number,
//     description: String
// });

// var iPhone = new Product({
//     name: "iPhone 7",
//     price: 28900,
//     description: "導航很爛的手機"
// });


// Product.find(function (err, products) {
//     for (var index in products) {
//         var product = products[index];
//         console.log(product.name);
//     }
// });
// module.exports = Database;

// cat.save(function (err) {
//     if (err) {
//         console.log('發生錯誤' + err);
//         return;
//     } else {
//         console.log('寫入資料成功');
//     }
// });