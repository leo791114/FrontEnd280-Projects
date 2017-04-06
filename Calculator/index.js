var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.listen(2222);

app.get('/calculation', function (req, res) {
    if (req.query.x != null && req.query.y != null) {
        var x = req.query.x;
        var y = req.query.y;
        var arithmetic = req.query.arithmetic;
        switch (arithmetic) {
            case '+':
                arithmetic = function (a, b) {
                    return a + b;
                };
                break;
            case '-':
                arithmetic = function (a, b) {
                    return a - b;
                };
                break;
            case '*':
                arithmetic = function (a, b) {
                    return a * b;
                };
                break;
            case '/':
                arithmetic = function (a, b) {
                    return a / b;
                };
                break;
        }
        // var formula = x + arithmetic + y;
        var data = {
            "x": x,
            "y": y,
            "arithmetic": req.query.arithmetic,
            "result": arithmetic(parseFloat(x), parseFloat(y))
        };
        res.render('result', data);
    } else {
        res.render('query');
    }
    res.end();
});


