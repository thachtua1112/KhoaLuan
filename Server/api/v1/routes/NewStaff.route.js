const express = require("express");
const { GetAll, CreatByFilesCSV } = require("../controllers/NewStaff.controller");
const NewStaffRoute = express.Router();

NewStaffRoute.get("/", GetAll);
NewStaffRoute.post("/create-files", CreatByFilesCSV);

module.exports = NewStaffRoute;
