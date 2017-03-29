var express = require('express');
var app = express();
app.use(express.static(__dirname + '/testing'));
app.set('views', __dirname + '/templates');
app.set('view engine', 'ejs');

app.get('/user', function (req, res) {
    if (req.query.name != null) {
        res.render('result', { 'name': req.query.name });
    } else {
        res.render('testing');
    }
});


app.listen(2222);