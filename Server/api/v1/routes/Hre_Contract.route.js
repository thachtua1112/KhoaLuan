const express = require("express");
const HreContractRoute = express.Router();
const HreContractController = require ('../controllers/addnew/Hre_Contract')

HreContractRoute.get("/", HreContractController.getAll);

HreContractRoute.get("/not-yet-contract", HreContractController.NotYet_HreContract);

HreContractRoute.get("/contract", HreContractController.HreContract);


//HreContractRoute.get("/position/:id/profiles", ProfileController.getWithPosition);

HreContractRoute.get("/filter", HreContractController.getWithFilter);

HreContractRoute.get("/expires", HreContractController.Expire_Contract);

HreContractRoute.get("/:ID", HreContractController.getByID);

HreContractRoute.post("/", HreContractController.create);

HreContractRoute.put("/:ID", HreContractController.update);

HreContractRoute.patch("/:ID", HreContractController.delete);

module.exports = HreContractRoute;
