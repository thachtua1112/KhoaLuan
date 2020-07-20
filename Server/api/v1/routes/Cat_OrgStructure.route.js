const express = require("express");

const OrgStructureController = require("../controllers/Cat_OrgStructure.controller");

const OrgStructureRoute = express.Router();

OrgStructureRoute.get("/", OrgStructureController.getAll);

OrgStructureRoute.get("/tree", OrgStructureController.getStructureTree);

OrgStructureRoute.get(
  "/list-structures",
  OrgStructureController.getListStructure
);

OrgStructureRoute.get("/filter", OrgStructureController.getWithFilter);

OrgStructureRoute.get("/:ID", OrgStructureController.getByID);

OrgStructureRoute.post("/", OrgStructureController.create);

OrgStructureRoute.put("/:ID", OrgStructureController.update);

OrgStructureRoute.patch("/:ID", OrgStructureController.delete);

module.exports = OrgStructureRoute;
