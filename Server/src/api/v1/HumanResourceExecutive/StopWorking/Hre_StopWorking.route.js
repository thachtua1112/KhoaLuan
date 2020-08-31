const express = require("express");

const ClassHre_StopWorkingController = require("./Hre_StopWorking.controller");

const ContractController = new ClassHre_StopWorkingController();

const StopWorkingRoute = express.Router();

StopWorkingRoute.route("/")
  .get(ContractController.get)
  .post(ContractController.create)
  .put()
  .patch()
  .delete();

StopWorkingRoute.route("/:ID")
  .get(ContractController.getByID)
  .post()
  .put(ContractController.update)
  .patch()
  .delete(ContractController.delete);

module.exports = StopWorkingRoute;
