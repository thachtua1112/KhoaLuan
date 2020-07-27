const express = require("express");

const {
  requiresLogin,
  requiresLogout,
} = require("../middleware/authentication.middleware");

const authenticationController = require("../controllers/authentication.controller");

const authenticationRoute = express.Router();

authenticationRoute.get(
  "/login",
  //requiresLogout,
  authenticationController.login
);

authenticationRoute.get(
  "/logout",
  //requiresLogin,
  authenticationController.logout
);

authenticationRoute.get(
  "/check-logged",
  //requiresLogin,
  authenticationController.checkLogged
);

authenticationRoute.get("/register", authenticationController.register);

module.exports = authenticationRoute;
