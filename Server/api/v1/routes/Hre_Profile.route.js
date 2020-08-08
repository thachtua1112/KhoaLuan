const express = require("express");

const ProfileController = require("../controllers/Hre_Profile.controller");

const ProfileRoute = express.Router();

ProfileRoute.route("/")
  .get(ProfileController.get)
  .post(ProfileController.create);

ProfileRoute.get("/not-yet-contract", ProfileController.NotYet_THrProfile);

//ProfileRoute.get("/position/:id/profiles", ProfileController.getWithPosition);

ProfileRoute.get("/:ID", ProfileController.getByID);

ProfileRoute.put("/:ID", ProfileController.update);

ProfileRoute.patch("/:ID", ProfileController.delete);

module.exports = ProfileRoute;
