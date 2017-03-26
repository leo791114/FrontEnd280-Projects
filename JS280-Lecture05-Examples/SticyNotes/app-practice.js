// initialize the page
$(document).ready(function () {

    getKeyTable();

    // add existent sticker to to do list
    getKeyTable().forEach(function (key) {
        var stickerKey = key;
        addStickerToList(stickerKey);
    });
    // add sticker
    $("#add_sticker").click(createSticker);

    // clear all stickers
    $("#clear_sticker").click(clearStickers);

});



function getKeyTable() {

    var keyTable = localStorage.stickersKeyTable;

    // if there is no stickersKeyTable
    if (!keyTable) {
        keyTable = [];
        localStorage.stickersKeyTable = JSON.stringify(keyTable);
    } else {
        keyTable = JSON.parse(keyTable);
    }

    return keyTable;
}

// create sticker

function createSticker() {
    var keyTable = getKeyTable();
    var key = "Sticker_" + new Date().getTime();
    keyTable.push(key);
    localStorage.stickersKeyTable = JSON.stringify(keyTable);
    var sticker = {
        color: $("#note_color").val(),
        text: $("#note_text").val()
    };
    localStorage.setItem(key, JSON.stringify(sticker));
    addStickerToList(key);
}


// add stickers to to do list
function addStickerToList(key) {
    var stickerContent = JSON.parse(localStorage[key]);
    var $stickers = $("#stickers");
    $("#stickers").append("<li></li>");
    $("li:last-child").text(stickerContent.text);
    $("li:last-child").css("background-color", stickerContent.color);
    $("li:last-child").attr("id", key);
    $("#" + key).click(deleteSticker);


}


// clear all stickers

function clearStickers() {
    var keyTable = getKeyTable();
    for (var index = 0; index < keyTable.length; index++) {
        localStorage.removeItem(keyTable[index]);
        removeStickerFromList(keyTable[index]);
    }
    localStorage.stickersKeyTable = JSON.stringify([]);

}

function removeStickerFromList(key) {
    $("#" + key).remove();
}

// delete sticker

function deleteSticker(event) {
    var keyTable = getKeyTable();
    var key = event.target.id;
    if (keyTable) {
        for (var index = 0; index < keyTable.length; index++) {
            if (key === keyTable[index]) {
                keyTable.splice(index, 1);
            }
        }
    }
    localStorage.removeItem(key);
    localStorage.stickersKeyTable = JSON.stringify(keyTable);
    removeStickerFromList(key);

}

