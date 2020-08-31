const express = require("express");

const ClassAtt_DayKeepingController = require("./Att_DayKeeping.controller");

const DayKeepingController = new ClassAtt_DayKeepingController();

const DayKeepingRoute = express.Router();

DayKeepingRoute.route("/")
  .get(DayKeepingController.get)
  .post(DayKeepingController.create)
  .put()
  .patch()
  .delete();

DayKeepingRoute.route("/synthesis").get(DayKeepingController.synthesis);

DayKeepingRoute.route("/:ID")
  .get(DayKeepingController.getByID)
  .post()
  .put(DayKeepingController.update)
  .patch()
  .delete(DayKeepingController.delete);

module.exports = DayKeepingRoute;
