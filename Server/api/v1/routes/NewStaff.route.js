const express = require("express");
const NewStaffController = require("../controllers/NewStaff.controller");
const NewStaffRoute = express.Router();

NewStaffRoute.route("/")
    .get(NewStaffController.ApproveToProfiles, NewStaffController.Get)
    .patch(NewStaffController.deleteAll)

NewStaffRoute.route("/:ID")
    .patch(NewStaffController.delete);

//NewStaffRoute.get("/black-lists", );
NewStaffRoute.post("/create-files", NewStaffController.CreatByFilesCSV);

module.exports = NewStaffRoute;
