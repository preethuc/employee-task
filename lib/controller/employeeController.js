"use strict";

var _employeeModel = require("../model/employeeModel");

var _employeeModel2 = _interopRequireDefault(_employeeModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//get - alldata
var getData = async function getData(req, res, next) {
  try {
    // const details = await Employee.findOne()
    var details = await _employeeModel2.default.find();
    res.status(200).json({
      status: "success",
      datas: details.length,
      message: "All Datas fetched successfully",
      EmployeeDatas: details
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "unable to fetch all the datas"
    });
  }
};
//get -Data by ID
var getDataById = async function getDataById(req, res, next) {
  try {
    var detail = await _employeeModel2.default.findById(req.params.id);
    if (!detail) {
      return res.send("no data");
    }

    res.status(200).json({
      status: "success",
      message: "Datas fetched successfully by ID",
      EmployeeData: detail
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "unable to fetch the data by ID"
    });
  }
};
//POST - CREATING  POST AND UPLOADING IMAGE BY MULTER
var postData = async function postData(req, res, next) {
  try {
    var newData = await new _employeeModel2.default(req.body);
    if (req.file) {
      newData.photo = req.file.path;
    }
    newData.save();
    res.status(201).json({
      status: "success",
      message: "Datas added successfully",
      NewEmployeeData: newData
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: "unable to add the data",
      err: err.message
    });
  }
};

//Update data
var updateDataById = async function updateDataById(req, res, next) {
  try {
    // console.log(req.params);
    var detail = await _employeeModel2.default.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    res.status(200).json({
      status: "success",
      message: "Datas updated successfully by ID",
      UpdatedEmployeeData: detail
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "unable to update the data"
    });
  }
};

//delete data
var deleteData = async function deleteData(req, res, next) {
  try {
    await _employeeModel2.default.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      message: "Data deleted successfully by ID"
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "unable to delete the data"
    });
  }
};

module.exports = {
  getData: getData,
  getDataById: getDataById,
  postData: postData,
  updateDataById: updateDataById,
  deleteData: deleteData
};