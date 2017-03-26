var EasyWebStorage = require("./easy_web_storage_class");

/**
 * 根據 storageType 初始化
 * (Type error would trigger default condition)
 */
EasyWebStorage.prototype.init = function () {
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
    this.keys = this.storage[this.keysName];
    if (!this.keys) {
        this.keys = [];
        this.storage[this.keysName] = JSON.stringify(this.keys);
    } else {
        this.keys = JSON.parse(this.keys);
    }
};