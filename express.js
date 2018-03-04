const express = require('express');
const app = express();
const env = require('dotenv');

app.get('/send/:encryptedKey', function(req, res) {

});

app.get('/receive/:encryptedKey', function(req, res) {

});

app.listen(3000, function() {
    console.log('listening 3000');
});
