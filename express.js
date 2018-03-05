const express = require('express');
const app = express();
const axios = require('axios');
const CryptoJS = require('crypto-js');
const AES = CryptoJS.AES;
const enc = CryptoJS.enc;

const Participant = require('./src/participant');
const Liner = require('./liner');

var alice = new Participant('alice'),
    bob = new Participant('bob');

var participants = {
    alice: alice,
    bob: bob
}

console.log("Alice public: " + participants.alice.keyPair.public);
console.log("Alice private: " + participants.alice.keyPair.private);
console.log("Bob public: " + participants.bob.keyPair.public);
console.log("Bob private: " + participants.bob.keyPair.private);

app.get('/send-public-key/:from/:to', function(req, res) {
    sender = participants[req.params.from];
    receiver = participants[req.params.to];
    receiver.receivedKey = sender.keyPair.public;
    receiver.generateSecret();

    var liner = new Liner;
    liner.add(receiver.name + " has received a public key: " + receiver.receivedKey);
    liner.add(receiver.name + " has generated a secret password: " + receiver.secret);
    console.log(liner.get());

    res.send(liner.get());
});

app.get('/send-message/:from/:to/:message', function(req, res) {
    sender = participants[req.params.from];
    receiver = participants[req.params.to];
    message = req.params.message;
    encryptedMessage = AES.encrypt(message, sender.secret.toString());

    receiver.receiveMessage(encryptedMessage);

    let liner = new Liner;
    liner.add("Message to " + receiver.name + " has been delivered: " + message);
    liner.add("Message to " + receiver.name + " has been encrypted: " + encryptedMessage);
    console.log(liner.get());

    res.send(liner.get());
});

app.get('/inbox/:whose', function(req, res) {
    owner = participants[req.params.whose];
    encryptedInbox = owner.inbox;
    decryptedInbox = encryptedInbox.map(function(message) {
        return AES.decrypt(message, owner.secret.toString()).toString(enc.Utf8);
    });

    let liner = new Liner;
    liner.add(owner.name + "'s inbox is looking like this:");
    liner.add(decryptedInbox.join('\n'));
    console.log(liner.get());

    res.send(liner.get());
});

const port = 3000;

app.listen(port, function() {
    console.log('listening ' + port);

    axios.defaults.baseURL = 'http://localhost:' + port;
    axios.get('/send-public-key/alice/bob');
    axios.get('/send-public-key/bob/alice');
    axios.get('/send-message/bob/alice/Hola');
    axios.get('/send-message/alice/bob/Hi');

    axios.get('/inbox/alice');
    axios.get('/inbox/bob');
});
