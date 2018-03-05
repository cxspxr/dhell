const getKey = require('./get-key');
const powMod = require('./pow-mod');
const params = require('./_params');

module.exports = function(name) {
    this.name = name;

    this.keyPair = {};

    this.keyPair.private = getKey.private();
    this.keyPair.public = getKey.public(this.keyPair.private);

    this.inbox = [];

    this.receiveMessage = function(message) { this.inbox.push(message); }

    this.generateSecret = function() {
        this.secret = powMod(this.receivedKey, this.keyPair.private, params.modulus);
    }
}
