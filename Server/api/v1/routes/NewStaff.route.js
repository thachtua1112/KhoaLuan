const express = require("express");
const { Get, CreatByFilesCSV, ApproveToProfiles } = require("../controllers/NewStaff.controller");
const NewStaffRoute = express.Router();

NewStaffRoute.get("/", Get);
NewStaffRoute.get("/black-lists", ApproveToProfiles);
NewStaffRoute.post("/create-files", CreatByFilesCSV);

module.exports = NewStaffRoute;
