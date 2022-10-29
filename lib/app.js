'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var employeeRoute = require('./route/employeeroute');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//http://localhost:3000/uploads/beagle.jpg
app.use('/uploads', express.static('uploads'));

app.use('/api/employee', employeeRoute);

module.exports = app;