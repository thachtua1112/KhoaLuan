const express = require("express");

const StopWorkingController = require("../controllers/Hre_StopWorking.controller");

const StopWorkingRoute = express.Router();

StopWorkingRoute.get("/", StopWorkingController.getAll);

StopWorkingRoute.get("/filter", StopWorkingController.getWithFilter);

StopWorkingRoute.get("/:ID", StopWorkingController.getByID);

StopWorkingRoute.post("/", StopWorkingController.create);

StopWorkingRoute.put("/:ID", StopWorkingController.update);

StopWorkingRoute.patch("/:ID", StopWorkingController.delete);

module.exports = StopWorkingRoute;
