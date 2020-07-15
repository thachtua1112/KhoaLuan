const express = require("express");

const ProfileController = require("../controllers/Hre_Profile.controller");

const ProfileRoute = express.Router();

ProfileRoute.get("/", ProfileController.getAll);

ProfileRoute.get("/filter", ProfileController.getWithFilter);

ProfileRoute.get("/:ID", ProfileController.getByID);

ProfileRoute.post("/", ProfileController.create);

ProfileRoute.put("/:ID", ProfileController.update);

ProfileRoute.patch("/:ID", ProfileController.delete);

module.exports = ProfileRoute;
