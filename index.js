const port = 8000
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const test = require('./lib/js/index.js');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());

let amount;
let result;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/views/test.html');
});
app.post('/test', (req, res,next) => {
    console.log('-test-');
    amount = req.body.amount;
    result = test.count(req.body.amount)
    console.log(amount);
    res.sendFile(__dirname + '/views/test.html');
});
app.get('/test/api' ,(req, res, next) => {
    res.json({"amount": amount, "result": result});
});
app.get('/oldtest', (req, res) => {
    res.redirect('/test');
});
app.listen(port);
console.log('server has started on port' + port);

