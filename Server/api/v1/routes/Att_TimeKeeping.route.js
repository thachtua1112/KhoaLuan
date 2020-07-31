const express = require("express");

const TimeKeepingController = require("../controllers/Att_TimeKeeping.controller");

const TimeKeepingRoute = express.Router();

TimeKeepingRoute.get("/", TimeKeepingController.get);
TimeKeepingRoute.post("/calculate", TimeKeepingController.calculate);

module.exports = TimeKeepingRoute;
