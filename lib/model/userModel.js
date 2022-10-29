"use strict";

var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  phone: {
    type: Number
  },
  email: {
    type: String
  }
}, { timestamps: true });

var User = mongoose.model('User', userSchema);

module.exports = User;