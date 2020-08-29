const mongoose = require("mongoose");
const Cat_OrgStructureTreeModel = require("./Cat_OrgStructureTree.model"); //Model Current Folder
const BaseController = require("../../utils/BaseController");

class Cat_OrgStructureTreeController extends BaseController {
  constructor(Model = {}) {
    if (Model.schema instanceof mongoose.Schema) {
      super(Model);
      return this;
    }
    super(Cat_OrgStructureTreeModel);
  }

  getProfiles = async (req, res, next) => {
    try {
      res.json("GET LIST PROFILE");
    } catch (error) {
      next(error);
    }
  };

  getByRootID = async (req, res, next) => {
    try {
      const { RootID } = req.params;
      const data = await this.Model.findOne({ RootID: RootID });
      res.json({
        method: "GET",
        path: req.originalUrl,
        message: "GET ORGSTRUCTURE TREE BY ROOT ID",
        status: "SUCCESS",
        data,
      });
    } catch (error) {
      next(error);
    }
  };

  updateByRootID = async (req, res, next) => {
    try {
      const { RootID } = res.params;
      const data = req.body;
      const result = await this.Model.findOneAndUpdate(
        { RootID: RootID },
        data,
        {
          new: true,
        },
      );
      res.json({
        method: "PUT",
        path: req.originalUrl,
        message: "UPDATE ORGSTRUCTURE TREE BY ROOT ID",
        status: "SUCCESS",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };

  deleteByRootID = async (req, res, next) => {
    try {
      const { RootID } = res.params;
      const result = await this.Model.findOneAndRemove({ RootID: RootID });
      res.json({
        method: "DELETE",
        path: req.originalUrl,
        message: "DELETE ORGSTRUCTURE TREE BY ROOT ID",
        status: "SUCCESS",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = Cat_OrgStructureTreeController;
