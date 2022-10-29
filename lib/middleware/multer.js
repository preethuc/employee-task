"use strict";

//MULTER -POST CREATION
var multer = require("multer");
var fileStorageEngine = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function filename(req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({ storage: fileStorageEngine });

module.exports = upload;