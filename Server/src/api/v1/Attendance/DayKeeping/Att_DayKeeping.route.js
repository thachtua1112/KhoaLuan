const express = require("express");

const ClassAtt_TimeKeepingDayController = require("./Att_DayKeeping.controller");

const TimeKeepingDayController = new ClassAtt_TimeKeepingDayController();

const TimeKeepingDayRoute = express.Router();

TimeKeepingDayRoute.route("/")
  .get(TimeKeepingDayController.get)
  .post(TimeKeepingDayController.create)
  .put()
  .patch()
  .delete();

TimeKeepingDayRoute.route("/:ID")
  .get(TimeKeepingDayController.getByID)
  .post()
  .put(TimeKeepingDayController.update)
  .patch()
  .delete(TimeKeepingDayController.delete);

module.exports = TimeKeepingDayRoute;
