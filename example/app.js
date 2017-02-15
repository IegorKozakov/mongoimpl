'use strict';

var express = require('express');
var app = express();
var db = null;

app.get('/', function (req, res) {
    res.send(db);
});

function setDb (mongoimp) {
    db = mongoimp;
}

module.exports = {
    app,
    setDb
};