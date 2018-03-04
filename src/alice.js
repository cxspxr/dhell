const params = require('./_params');
const getKey = require('./get-key');

const aliceKeyPair = {
    private: getKey.private()
}

aliceKeyPair.public = getKey.public(aliceKeyPair.private);

console.log('Alice\'s keypair is' + aliceKeyPair);

module.exports = {
    keyPair: aliceKeyPair
}
