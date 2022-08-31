const express = require('express');
const testroute = express.Router();
const test = require('../lib/js/index.js');


testroute.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/test.html');
  });

testroute.post('/post', (req, res,next) => {
    console.log('-test-');
    console.log(test.count(req.body.amount));
    res.sendFile(__dirname + '/views/test.html');
});  
module.exports = testroute;   