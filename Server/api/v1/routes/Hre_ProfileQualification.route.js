const express = require("express");

const Hre_ProfileQualification = require("../controllers/Hre_ProfileQualification.controller");

const ProfileQualificationRoute = express.Router();
ProfileQualificationRoute.get('/:ID',Hre_ProfileQualification.getByID)

module.exports = ProfileQualificationRoute;
