var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Database = require('./config/database');
var db = new Database('dbadmin', 'leo791114', 31729, "mystickynotes");
mongoose.connect('mongodb://dbadmin:leo791114@ds131729.mlab.com:31729/mystickynotes');
/* GET home page. */
router.get('/products', function (req, res, next) {

    Product.find(function (err, products) {
        if (err) {
            console.log('No such product');
        } else {
            res.render('products', products);
        }
    });
    var prodcuts = [{
        name: "iPhone 7",
        price: 28900
    }, {
        name: "iPhone 7+",
        price: 32900
    }];
    res.render('products', products);
});

module.exports = router;                                     