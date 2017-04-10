// function Database(user, pass, port, name) {
//     this.user = user;
//     this.pass = pass;
//     this.port = port;
//     this.name = name;
// }

// Database.prototype.getURI = function () {
//     return "mongodb://" + this.user + ":" + this.pass + "@ds021884.mlab.com:" + this.port + "/" + this.name;

// };

function Database(user, pass, port, name) {
    this.user = user;
    this.pass = pass;
    this.port = port;
    this.name = name;
}

Database.prototype.getURI = function () {
    return "mongodb://" + this.user + ":" + this.pass + "@ds131729.mlab.com:" + this.port + "/" + this.name;
};

module.exports = Database;

