// initialize the page
var storage = new WebStorage("stickers", "localStorage");

$(document).ready(function () {

    // add existent sticker to to do list
    storage.keyTable.forEach(function (key) {
        var stickerValue = storage.select(key);
        addStickerToList(stickerValue);
    });
    // add sticker
    $("#add_sticker").click(createSticker);

    // clear all stickers
    $("#clear_sticker").click(clearStickers);

});



// create sticker

function createSticker() {

    var sticker = {
        color: $("#note_color").val(),
        text: $("#note_text").val()
    };
    addStickerToList(storage.add(sticker));
}


// add stickers to to do list
function addStickerToList(value) {
    var stickerContent = value;
    var $stickers = $("#stickers");
    $("#stickers").append("<li></li>");
    $("li:last-child").text(stickerContent.text);
    $("li:last-child").css("background-color", stickerContent.color);
    $("li:last-child").attr("id", key);
    $("#" + key).click(deleteSticker);


}


// clear all stickers

function clearStickers() {
    storage.clearAll();
    $("#stickers").html("");

}


// delete sticker

function deleteSticker(event) {
    storage.delete(event);
    var key = event.target.id;
    $("#" + key).remove();
}

