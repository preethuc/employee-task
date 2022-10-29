'use strict';

var express = require('express');
var app = require('./app');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test-data');
var db = mongoose.connection;
db.on('error', function (err) {
    console.log(err);
});
db.once('open', function () {
    console.log('db connected');
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('server running on the port ' + PORT);
});