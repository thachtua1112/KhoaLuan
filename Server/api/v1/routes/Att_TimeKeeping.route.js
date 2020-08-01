const express = require("express");

const TimeKeepingController = require("../controllers/Att_TimeKeepingDay.controller");

const TimeKeepingRoute = express.Router();

TimeKeepingRoute.get("/", TimeKeepingController.get);

TimeKeepingRoute.post("/", TimeKeepingController.create);

TimeKeepingRoute.put("/:_id", TimeKeepingController.update);

module.exports = TimeKeepingRoute;
