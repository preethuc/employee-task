import Employee from "../model/employeeModel";

//get - alldata
const getData = async (req, res, next) => {
  try {
    // const details = await Employee.findOne()
    const details = await Employee.find();
    res.status(200).json({
      status: "success",
      datas: details.length,
      message: "All Datas fetched successfully",
      EmployeeDatas: details,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "unable to fetch all the datas",
    });
  }
};
//get -Data by ID
const getDataById = async (req, res, next) => {
  try {
    const detail = await Employee.findById(req.params.id);
    if (!detail) {
      return res.send("no data");
    }

    res.status(200).json({
      status: "success",
      message: "Datas fetched successfully by ID",
      EmployeeData: detail,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "unable to fetch the data by ID",
    });
  }
};
//POST - CREATING  POST AND UPLOADING IMAGE BY MULTER
const postData = async (req, res, next) => {
  try {
    const newData = await new Employee(req.body);
    if (req.file) {
      newData.photo = req.file.path;
    }
    newData.save();
    res.status(201).json({
      status: "success",
      message: "Datas added successfully",
      NewEmployeeData: newData,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: "unable to add the data",
      err: err.message,
    });
  }
};

//Update data
const updateDataById = async (req, res, next) => {
  try {
    // console.log(req.params);
    const detail = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      status: "success",
      message: "Datas updated successfully by ID",
      UpdatedEmployeeData: detail,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "unable to update the data",
    });
  }
};

//delete data
const deleteData = async (req, res, next) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      message: "Data deleted successfully by ID",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "unable to delete the data",
    });
  }
};

module.exports = {
  getData,
  getDataById,
  postData,
  updateDataById,
  deleteData,
};
