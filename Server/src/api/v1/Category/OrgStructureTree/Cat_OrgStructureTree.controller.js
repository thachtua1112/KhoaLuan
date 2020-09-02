const mongoose = require("mongoose");
const httpStatus = require("http-status");
const qs = require("qs");

const Cat_OrgStructureTreeModel = require("./Cat_OrgStructureTree.model"); //Model Current Folder
const Cat_OrgStructureModel = require("../../../../../api/v1/models/Cat_OrgStructure.model"); //Model Outside
const Hre_ProfileModel = require("../../../../../api/v1/models/Hre_Profile.model"); //Model Outside
const BaseController = require("../../utils/BaseController");

const { getTreeDraw } = require("./utils");

class Cat_OrgStructureTreeController extends BaseController {
  constructor(Model = {}) {
    if (Model.schema instanceof mongoose.Schema) {
      super(Model);
      return this;
    }
    super(Cat_OrgStructureTreeModel);
  }

  getListOrgStructureID = async (req, res, next) => {
    try {
      const { RootID } = req.params;

      const OrgStructureTree = await this.Model.findOne(
        {
          rootID: RootID,
        },
        { _id: 0, listID: 1 },
      );

      if (!OrgStructureTree) {
        const Root = await Cat_OrgStructureModel.findOne(
          { ID: RootID },
          {
            ID: 1,
            OrgStructureName: 1,
            Code: 1,
            IsRoot: 1,
          },
        );

        if (!Root) {
          return res.status(httpStatus.RESET_CONTENT).json({
            method: "GET",
            path: req.originalUrl,
            status: "SUCCESS",
            message: "ORGSTRUCTURE NOT EXIST",
          });
        }

        const listOrgStructure = await Cat_OrgStructureModel.find();

        const [Tree, listOrgStructureTree] = getTreeDraw(
          Root,
          listOrgStructure,
        );

        const listOrgStructureID = listOrgStructureTree.map(
          (OrgStructure) => OrgStructure.ID,
        );

        req.query.filters = {
          OrgStructureID: { $in: listOrgStructureID },
          StatusSyn: "E_HIRE",
        };
        req.query.fields = {
          CodeEmp: 1,
          ID: 1,
          ProfileName: 1,
          OrgStructureID: 1,
          OrgStructureName: 1,
          PositionID: 1,
          PositionName: 1,
        };

        next();

        const newOrgStructureTree = {
          rootID: Root.ID,
          listID: listOrgStructureID,
          listOrgStructure: listOrgStructureTree,
          isRoot: Root.IsRoot,
          StructureTree: Tree,
        };
        this.Model.create(newOrgStructureTree);
        return;
      }

      req.query.filters = {
        OrgStructureID: { $in: OrgStructureTree.listID },
        // StatusSyn: "E_HIRE",
      };

      req.query.fields = {
        CodeEmp: 1,
        ID: 1,
        ProfileName: 1,
        OrgStructureID: 1,
        OrgStructureName: 1,
        PositionID: 1,
        PositionName: 1,
      };

      next();
    } catch (error) {
      next(error);
    }
  };

  getByRootID = async (req, res, next) => {
    try {
      const { RootID } = req.params;
      const data = await this.Model.findOne({ rootID: RootID });
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
      const { RootID } = req.params;
      const data = req.body;
      const result = await Hre_ProfileModel.findOneAndUpdate(
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
      const { RootID } = req.params;
      const result = await Hre_ProfileModel.findOneAndRemove({
        RootID: RootID,
      });
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
