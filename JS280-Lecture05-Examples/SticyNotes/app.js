// Initialize app page
// window.onload --> one js can only contain on window.onload
// $(document).readyState(function())}; --> it's possible to have multiple

function DataProvider(namespace, providerType) {
    this.namespace = namespace;
    this.providerType = providerType;
    this.keyTable = [];

}

DataProvider.prototype.init = function () {
    switch (providerType) {
        case "localStorage":
            this.initLocalStorage();
            break;
        default:
            this.initLocalStorage();
            break;
    }
};

DataProvider.prototype.initLocalStorage = function () {
    this.keyTable = localStorage[this.namespace + "KeyTable"];
    if (!this.keyTable) {
        this.keyTable = [];
        localStorage[this.namespace + "KeyTable"] = JSON.stringify(this.keyTable);
    } else {
        this.keyTable = JSON.parse(this.keyTable);
    }
};

DataProvider.prototype.get = function () {
    return JSON.parse(localStorage[key]);
};

DataProvider.prototype.insert = function (data) {
    var key = this.namespace + "_" + (new Date()).getTime();
    keyTable.push(key);
    localStorage[this.namespace + "KeyTable"] = JSON.stringify(keyTable);
    localStorage.setItem(key, JSON.stringify(data));

};

DataProvider.prototype.update = function (key, data) {
    localStorage.setItem(key, JSON.stringify(data));
};

DataProvider.prototype.delete = function (data) {
    if (this.keyTable) {
        for (var index = 0; index < keyTable.length; index++) {
            if (key === this.keyTable[index]) {
                this.keyTable.splice(index, 1);
            }
        }
        localStorage.removeItem(key);
        localStorage.stickersKeyTable = JSON.stringify(keyTable);
        removeStickerFromList(key);
    }
};


$(function () {
    // read all the keys related to sticker in localStroage
    var keyTable = getKeyTable();

    for (var index = 0; index < keyTable.length; index++) {
        // put all the values that are corresponded to specific keys into unregisterModule
        var key = keyTable[index];
        var sticker = JSON.parse(localStorage[key]);
        addStickerToList(key, sticker);
    }
    // binding add button function
    // tap add button to creat a new sticker
    $("#add_button").click(createSticker);

    // binding clear button function
    // tap clear button to delet all stickers
    $("#clear_button").click(clearStickers);

});

function getKeyTable() {
    // if the table exist, use it directly
    // if the table does not exist, creat a new one, then use it
    var keyTable = localStorage.stickersKeyTable;
    if (!keyTable) {
        keyTable = [];
        localStorage.stickersKeyTable = JSON.stringify(keyTable);
    } else {
        keyTable = JSON.parse(keyTable);
    }
    return keyTable;
}

/**
 * 
 * @param {*} key 
 * @param {*} sticker 
 */
function addStickerToList(key, sticker) {

    var $stickers = $("#stickies");
    var $sticker = $("<li></li>");
    $sticker.attr("id", key);
    $sticker.css("background-color", sticker.color);
    $sticker.text(sticker.text);
    $sticker.click(deleteSticker);
    // append to UL
    $stickers.append($sticker);
}

function createSticker() {
    var keyTable = getKeyTable();
    var key = "sticky_" + (new Date()).getTime();
    keyTable.push(key);
    localStorage.stickersKeyTable = JSON.stringify(keyTable);
    var sticker = {
        color: $("#note_color").val(),
        text: $("#note_text").val()
    };
    localStorage.setItem(key, JSON.stringify(sticker));
    addStickerToList(key, sticker);

}

function clearStickers() {
    var keyTable = getKeyTable();
    for (var index = 0; index < keyTable.length; index++) {
        var key = keyTable[index];
        localStorage.removeItem(key);
        removeStickerFromList(key);
    }

    localStorage.stickersKeyTable = JSON.stringify([]);

}

function removeStickerFromList(key) {
    $("#" + key).remove();
}

// event parameter
// brower servers the surveillance
function deleteSticker(event) {
    var key = event.target.id;
    var keyTable = getKeyTable();

    if (keyTable) {
        for (var index = 0; index < keyTable.length; index++) {
            if (key === keyTable[index]) {
                keyTable.splice(index, 1);
            }
        }
        localStorage.removeItem(key);
        localStorage.stickersKeyTable = JSON.stringify(keyTable);
        removeStickerFromList(key);
    }

}