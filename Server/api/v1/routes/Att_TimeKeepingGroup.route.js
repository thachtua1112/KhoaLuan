const express = require("express");

const TimeKeepingGroupController = require("../controllers/Att_TimeKeepingGroup.controller");

const TimeKeepingGroupRoute = express.Router();

TimeKeepingGroupRoute.get("/", TimeKeepingGroupController.get);


TimeKeepingGroupRoute.patch("/:_id", TimeKeepingGroupController.update);

TimeKeepingGroupRoute.post("/synthesis", TimeKeepingGroupController.synthesis);

module.exports = TimeKeepingGroupRoute;

