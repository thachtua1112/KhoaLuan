const express = require("express");

const ProfileController = require("../controllers/profile.controller");

const ProfileRoute = express.Router();

ProfileRoute.get("/", ProfileController.getAll);
ProfileRoute.get("/:ID", ProfileController.getByID);
ProfileRoute.get("/filter", ProfileController.getWithFilter);

ProfileRoute.post("/", ProfileController.create);

ProfileRoute.put("/:ID", ProfileController.update);

ProfileRoute.patch("/:ID", ProfileController.delete);

module.exports = ProfileRoute;
