const express = require('express')
const app = require('./app')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test-data')
const db = mongoose.connection
db.on('error', (err) => {
    console.log(err);
})
db.once('open', () => {
    console.log('db connected');
})
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server running on the port ${PORT}`);
})