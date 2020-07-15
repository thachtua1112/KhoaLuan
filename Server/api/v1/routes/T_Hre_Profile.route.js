const express = require("express");

const T_ProfileController = require("../controllers/T_Hre_Profile.controller");

const T_ProfileRoute = express.Router();

T_ProfileRoute.get("/", T_ProfileController.getAll);

T_ProfileRoute.get("/filter", T_ProfileController.getWithFilter);

T_ProfileRoute.get("/:ID", T_ProfileController.getByID);

T_ProfileRoute.post("/", T_ProfileController.create);

T_ProfileRoute.put("/:ID", T_ProfileController.update);

T_ProfileRoute.patch("/:ID", T_ProfileController.delete);

module.exports = T_ProfileRoute;
