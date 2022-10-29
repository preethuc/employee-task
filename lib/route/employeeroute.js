"use strict";

var express = require("express");
var router = express.Router();
var employeeController = require("../controller/employeeController");
var upload = require("../middleware/multer");

router.route("/create").post(upload.single("photo"), employeeController.postData);
router.route("/fetch").get(employeeController.getData);
router.route("/:id").get(employeeController.getDataById);
router.route("/update/:id").patch(employeeController.updateDataById);
router.route("/delete/:id").delete(employeeController.deleteData);

module.exports = router;