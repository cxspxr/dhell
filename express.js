const express = require('express');
const app = express();
const env = require('dotenv');
const axios = require('axios');

var a = '',
    b = '';

app.get('/receive-alice-key/:publicKey', function(req, res) {
    a = req.params.publicKey;
    res.send(a);
});

app.get('/receive-bob-key/:publicKey', function(req, res) {
    b = req.params.publicKey;
    res.send(b);
});

app.listen(3000, function() {
    console.log('listening 3000');
});
