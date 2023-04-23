var express = require("express");
var bodyParser = require("body-parser");
var http = require("http");
var app = express();
var cors = require('cors');
var server = http.createServer(app);
var chatRoute = require('./chatRouter');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", chatRoute);
app.use(function(err, req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://www.sandbox.paypal.com");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next(err);
});
server.listen(4000, function() {
    console.log('Example app listening on port 4000!');
});