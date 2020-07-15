const express = require("express");
const ProfileRoute = require("./profile.route");

const routeAPI = express.Router();

routeAPI.use("/v1/profiles", ProfileRoute);

module.exports = routeAPI;
