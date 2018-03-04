const express = require('express');
const app = express();
const env = require('dotenv');
const axios = require('axios');

const Participant = require('./src/participant');

var alice = new Participant('alice'),
    bob = new Participant('bob');

app.get('/receive-alice-key/:publicKey', function(req, res) {
    bob.receivedKey = req.params.publicKey;
    res.send(bob.receivedKey);
});

app.get('/receive-bob-key/:publicKey', function(req, res) {
    alice.receivedKey = req.params.publicKey;
    alice.generateSecret();
    res.send(alice.receivedKey);
});

app.listen(3000, function() {
    console.log('listening 3000');
});
