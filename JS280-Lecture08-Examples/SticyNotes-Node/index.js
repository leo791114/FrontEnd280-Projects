var express = require('express');
var app = express();
app.use(express.static(__dirname + "/SticyNotes-Node"));
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');
app.listen(2222);

app.get('')
//初始化app頁面id
var storage = new EasyWebStorage("sticky", "localStorage");

$(function () {
    storage.keys.forEach(function (key) {
        var sticky = storage.select(key);
        addStickyToList(sticky);
    });
    $("#add_button").click(createSticky);
    $("#clear_button").click(clearStickies);

});

function addStickyToList(sticky) {
    var $stickies = $("#stickies");
    var $sticky = $("<li></li>");
    $sticky.attr("id", sticky._id)
        .css("background-color", sticky.color)
        .text(sticky.text)
        .click(deleteSticky)
        .appendTo($stickies);
}

function createSticky() {

    var sticky = {
        color: $("#note_color").val(),
        text: $("#note_text").val()
    };
    addStickyToList(storage.insert(sticky));

}

function clearStickies() {
    storage.clearAll();
    $("#stickies").html("");

}

function deleteSticky(event) {
    var key = event.target.id;
    storage.delete(key);
    $("#" + key).remove();
}