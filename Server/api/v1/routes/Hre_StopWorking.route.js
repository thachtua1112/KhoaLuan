const express = require("express");

const StopWorkingController = require("../controllers/Hre_StopWorking.controller");
const { get } = require("mongoose");

const StopWorkingRoute = express.Router();

StopWorkingRoute.route("/")
.get(StopWorkingController.get)
.post( StopWorkingController.create);

StopWorkingRoute.route("/:ID")
.get(StopWorkingController.getByID)
.put(StopWorkingController.update)
.delete(StopWorkingController.delete);




module.exports = StopWorkingRoute;
