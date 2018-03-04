const params = require('./_params');
const powMod = require('./powByModulus');

module.exports = function(receivedPublicKey, privateKey) {
    return powMod(receivedPublicKey, privateKey, params.modulus);
}
