const getKey = require('./get-key');
const powMod = require('./pow-mod');
const params = require('./_params');

module.exports = function(name) {
    this.name = name;

    this.keyPair = {};

    this.keyPair.private = getKey.private();
    this.keyPair.public = getKey.public(this.keyPair.private);

    this.generateSecret = function() {
        this.secret = powMod(this.receivedKey, this.privateKey, params.modulus);
    }
}
