const express = require("express");

const TimeKeepingGroupController = require("../controllers/Att_TimeKeepingGroup.controller");

const TimeKeepingGroupRoute = express.Router();

TimeKeepingGroupRoute.get("/", TimeKeepingGroupController.get);

TimeKeepingGroupRoute.post("/calculate", TimeKeepingGroupController.calculate);

TimeKeepingGroupRoute.patch("/:_id", TimeKeepingGroupController.update);

module.exports = TimeKeepingGroupRoute;
