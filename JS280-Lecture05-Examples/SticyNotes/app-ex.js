//初始化app頁面id

function DataProvider(namespace, providerType) {
    this.namespace = namespace;
    this.providerType = providerType;
    this.keyTable = [];
    this.init();
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

DataProvider.prototype.get = function (key) {
    return JSON.parse(localStorage[key]);
};


DataProvider.prototype.insert = function (data) {

    var key = this.namespace + "_" + (new Date()).getTime();
    keyTable.push(key);
    data["_id"] = key;
    localStorage[this.namespace + "KeyTable"] = JSON.stringify(this.keyTable);
    localStorage.setItem(key, JSON.stringify(data));
    return data;

};

DataProvider.prototype.update = function (key, data) {
    localStorage.setItem(key, JSON.stringify(data));
};

DataProvider.prototype.delete = function (key) {

    if (this.keyTable) {
        for (var index = 0; index < this.keyTable.length; index++) {
            if (key === this.keyTable[index]) {
                this.keyTable.splice(index, 1);
            }
        }
        localStorage.removeItem(key);
        localStorage[this.namespace + "KeyTable"] = JSON.stringify(this.keyTable);
    }
};






$(function () {

    //讀取LOCALSTORAGE中關於便利貼的所有KEY
    var storage = new DataProvider("sticky", "localStorage");
    storage.keyTable.forEach(function (key) {
        var sticky = storage.get(key);
        addStickyToList(sticky);
    });
    // for (var index = 0; index < storage.keyTable.length; index++) {
    //     //把KEY所對應的VALUE加到UL中
    //     var key = storage.keyTable[index];
    //     var sticky = storage.get(key);
    //     addStickyToList(key, sticky);
    // }


    //綁定新增按鈕要做的事情
    //按了新增按鈕就要加入一則新便利貼
    $("#add_button").click(createSticky);

    //綁定清除按鈕要做的事情
    //按了清除按鈕就要刪除全部的便利貼
    $("#clear_button").click(clearStickies);

});

/**
 * 
 */
function getKeyTable() {
    //如果 表格已存在 就拿來用
    //不然 就建立一個空表格 再拿來用
    var keyTable = localStorage.stickiesKeyTable;
    if (!keyTable) {
        keyTable = [];
        localStorage.stickiesKeyTable = JSON.stringify(keyTable);
    } else {
        keyTable = JSON.parse(keyTable);
    }
    return keyTable;
}

/**
 * 
 * @param {*} key 
 * @param {*} sticky 
 */
function addStickyToList(sticky) {
    var $stickies = $("#stickies");
    var $sticky = $("<li></li>");
    $sticky.attr("id", sticky._id);
    $sticky.css("background-color", sticky.color);
    $sticky.text(sticky.text);
    $sticky.click(deleteSticky);
    $stickies.append($sticky);
}

function createSticky() {

    var sticky = {
        color: $("#note_color").val(),
        text: $("#note_text").val()
    };
    addStickyToList(storage.insert(sticky));

}

function clearStickies() {
    var keyTable = getKeyTable();
    for (var index = 0; index < keyTable.length; index++) {
        //把KEY所對應的VALUE加到UL中
        var key = keyTable[index];
        localStorage.removeItem(key);
        removeStickyFromList(key);
    }

    localStorage.stickiesKeyTable = JSON.stringify([]);

}

function removeStickyFromList(key) {
    $("#" + key).remove();
}

function deleteSticky(event) {
    var key = event.target.id;
    var keyTable = getKeyTable();

    if (keyTable) {
        for (var index = 0; index < keyTable.length; index++) {
            if (key === keyTable[index]) {
                keyTable.splice(index, 1);
            }
        }
        localStorage.removeItem(key);
        localStorage.stickiesKeyTable = JSON.stringify(keyTable);
        removeStickyFromList(key);

    }


}
