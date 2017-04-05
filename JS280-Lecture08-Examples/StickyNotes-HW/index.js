var EasyWebStorage = require('./EasyWebStorage');
var storage = new EasyWebStorage("sticker", "localStorage");
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + 'views');
app.set('view engine', 'ejs');
app.listen('2222');

app.get('/sticker', function (req, res) {
    if (req.query.noteColor != null && req.query.noteText != null) {
        var noteColor = req.query.noteColor;
        var noteText = req.query.noteText;
        var sticker = {
            "color": noteColor,
            "text": noteText
        };
        storage.insert(sticker);
        res.render('result', sticker);
    } else {
        res.render('query');
    }
    res.end();
});
