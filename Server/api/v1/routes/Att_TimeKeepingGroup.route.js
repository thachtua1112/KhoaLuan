const express = require("express");

const TimeKeepingGroupController = require("../controllers/Att_TimeKeepingGroup.controller");

const TimeKeepingGroupRoute = express.Router();


TimeKeepingGroupRoute.route("/")
.get(TimeKeepingGroupController.get);


TimeKeepingGroupRoute.route("/:_id")
.patch(TimeKeepingGroupController.update);

TimeKeepingGroupRoute.route("/synthesis")
.post(TimeKeepingGroupController.synthesis);

module.exports = TimeKeepingGroupRoute;

