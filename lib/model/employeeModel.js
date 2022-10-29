"use strict";

var mongoose = require("mongoose");

var employeeSchema = new mongoose.Schema({
  name: {
    type: String
  },
  designation: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: Number
  },
  age: {
    type: Number
  },
  photo: {
    type: String
  }
}, { timestamps: true });
var Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;