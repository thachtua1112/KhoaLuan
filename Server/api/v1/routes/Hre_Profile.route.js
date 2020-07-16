const express = require("express");

const ProfileController = require("../controllers/Hre_Profile.controller");

const ProfileRoute = express.Router();

ProfileRoute.get("/profiles", ProfileController.getAll);

//ProfileRoute.get("/position/:id/profiles", ProfileController.getWithPosition);

ProfileRoute.get("/profiles/filter", ProfileController.getWithFilter);

ProfileRoute.get("/profiles/:ID", ProfileController.getByID);

ProfileRoute.post("/profiles/", ProfileController.create);

ProfileRoute.put("/profiles/:ID", ProfileController.update);

ProfileRoute.patch("/profiles/:ID", ProfileController.delete);

module.exports = ProfileRoute;
