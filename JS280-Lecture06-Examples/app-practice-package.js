/**
 * 
 * @param {string} nameSpace -Name of the storage space
 * @param {string} storageType -Type of the storage
 */
function WebStorage(nameSpace, storageType) {
    this.nameSpace = nameSpace;
    this.storageType = storageType;
    this.keysName = this.nameSpace + "KeyTable";
    this.init();
}

/**
 * Initialize the storage
 */
WebStorage.prototype.init = function () {
    switch (this.storageType) {
        case "localStorage":
            this.storage = localStorage;
            break;
        case "sessionStorage":
            this.storage = sessionStorage;
            break;
        default:
            this.storage = localStorage;
            break;
    }
    this.keyTable = this.storage[this.keysName];
    if (!this.keyTable) {
        this.keyTable = [];
        this.storage[this.keysName] = JSON.stringify(this.keyTable);
    } else {
        this.keyTable = JSON.parse(this.keyTable);
    }
};

/**
 * Parse the key value
 * @param {string} key - storage's key
 */
WebStorage.prototype.select = function (key) {
    return JSON.parse(this.storage[key]);
};

/**
 * @param {string} key - storage's key
 * @param {object} value - storage's value
 */

WebStorage.prototype.udata = function (key, value) {
    this.storage.setItem(key, JSON.stringify(value));
};
/**
 * Update all the keys
 */
WebStorage.prototype.updateKeys = function () {
    this.update(this.keysName, this.keyTable);
};

/**
 * add new key and value to storage
 * @param {objact} value 
 */

WebStorage.prototype.add = function (value) {

    var key = this.nameSpace + "_" + (new Date()).getTime();
    this.keyTable.push(key);
    this.updateKeys();
    this.storage.setItem(key, JSON.stringify(value));
    return value;
};

/**
 * delete certain key and its corresponding value
 * @param {string} key 
 */
WebStorage.prototype.delete = function (key) {
    if (this.keyTable) {
        for (var index = 0; index < this.keyTable.length; index++) {
            if (key === this.keyTable[index]) {
                this.keyTable.splice(index, 1);
            }
        }
    }
    this.storage.removeItem(key);
    this.updateKeys();
};

/**
 * clear all the keys in the storage
 */
WebStorage.prototype.clearAll = function () {
    this.keyTable.forEach(function (key) {
        this.storage.removeItem(key);
    });
    this.keyTable = [];
    this.updateKeys();
};




