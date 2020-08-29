const express = require("express");

const ClassCat_OrgStructureTreeController = require("./Cat_OrgStructureTree.controller");

const OrgStructureTreeController = new ClassCat_OrgStructureTreeController();

const OrgStructureTreeRoute = express.Router();

OrgStructureTreeRoute.route("/")
  .get(OrgStructureTreeController.get)
  //.post(OrgStructureTreeController.create)
  .put()
  .patch()
  .delete();

// OrgStructureTreeRoute.route("/:ID")
//   .get(OrgStructureTreeController.getByID)
//   .post()
//   .put(OrgStructureTreeController.update)
//   .patch()
//   .delete(OrgStructureTreeController.delete);

OrgStructureTreeRoute.route("/:RootID/profiles").get(
  OrgStructureTreeController.getProfiles,
);

OrgStructureTreeRoute.route("/:RootID")
  .get(OrgStructureTreeController.getByRootID)
  .post()
  .put(OrgStructureTreeController.updateByRootID)
  .patch()
  .delete(OrgStructureTreeController.deleteByRootID);

module.exports = OrgStructureTreeRoute;
