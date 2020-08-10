const express = require("express");
const { Get, CreatByFilesCSV } = require("../controllers/NewStaff.controller");
const NewStaffRoute = express.Router();

NewStaffRoute.get("/", Get);
NewStaffRoute.post("/create-files", CreatByFilesCSV);

module.exports = NewStaffRoute;
