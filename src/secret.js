const params = require('./_params');

module.exports = function(receivedPublicKey, privateKey) {
    return Math.pow(receivedPublicKey, privateKey) % params.modulus;
}
