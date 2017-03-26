

/**
 * @constructor
 * @param {string} namespace - 應用程式命名空間
 * @param {string} storageType - WebStorage 型態
 */
function EasyWebStorage(namespace, storageType) {
    this.namespace = namespace;
    this.storageType = storageType;
    this.keysName = this.namespace + "-keys";
    this.init();
}

module.exports = EasyWebStorage;