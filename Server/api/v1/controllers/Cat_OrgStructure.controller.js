const OrgStructureModel = require("../models/Cat_OrgStructure.model");

const ProfilesModel = require("../models/Hre_Profile.model");

const { drawStructureTree, getListOrg } = require("../utils");

module.exports.getStructureTree = async (req, res) => {
  try {
    const { OrgStructureID } = req.params;
    console.log("ID", OrgStructureID);
    const listOrgStructure = await OrgStructureModel.find({});
    const listOrgStructureMin = listOrgStructure.map((item) => {
      const { ID, OrgStructureName, ParentID } = item;
      return { ID, OrgStructureName, ParentID };
    });

    const Tree = drawStructureTree(listOrgStructureMin, OrgStructureID);

    console.log(drawStructureTree(listOrgStructureMin, OrgStructureID));

    return res.json(Tree);
  } catch (err) {
    return res.sendStatus(403);
  }
};

module.exports.getListOrg = async (req, res) => {
  try {
    const { OrgStructureID } = req.params;
    const listOrgStructure = await OrgStructureModel.find();
    const listOrgStructureMin = listOrgStructure.map((item) => {
      const { ID, OrgStructureName, ParentID } = item;
      return { ID, OrgStructureName, ParentID };
    });

    const Tree = drawStructureTree(listOrgStructureMin, OrgStructureID);

    const listOrg = getListOrg(Tree);
    return res.json(listOrg);
  } catch (err) {
    return res.sendStatus(403);
  }
};

module.exports.getListProfile = async (req, res) => {
  try {
    const { OrgStructureID } = req.params;
    const listOrgStructure = await OrgStructureModel.find();
    const listOrgStructureMin = listOrgStructure.map((item) => {
      const { ID, OrgStructureName, ParentID } = item;
      return { ID, OrgStructureName, ParentID };
    });

    const Tree = drawStructureTree(listOrgStructureMin, OrgStructureID);

    const listOrg = getListOrg(Tree);

    const ListProfile = await ProfilesModel.find({
      OrgStructureID: { $in: listOrg },
    });

    return res.json(ListProfile);
  } catch (err) {
    return res.sendStatus(403);
  }
};

module.exports.getOrgStructure = async (req, res) => {
  try {
    const { OrgStructureID } = req.params;
    const result = await OrgStructureModel.find(
      !OrgStructureID ? {} : { ID: OrgStructureID }
    );

    return res.status(200).json(result);
  } catch (err) {
    return res.sendStatus(403);
  }
};

module.exports.getWithFilter = async (req, res) => {
  try {
    const filter = req.query;
    const result = await OrgStructureModel.find(filter);
    return res.status(200).json(result);
  } catch (err) {
    return res.sendStatus(403);
  }
};

module.exports.create = async (req, res) => {
  try {
    const { data } = req.body;
    const result = await OrgStructureModel.create({ data });
    return res.status(200).json(result);
  } catch (err) {
    return res.sendStatus(403);
  }
};

module.exports.update = async (req, res) => {
  try {
    const { ID } = req.params;
    const { data } = req.body;
    const result = OrgStructureModel.findOneAndUpdate({ ID: ID }, data);
    return res.status(200).json(result);
  } catch (err) {
    return res.sendStatus(403);
  }
};

module.exports.delete = async (req, res) => {
  try {
    const { ID } = req.params;

    const result = await OrgStructureModel.findOneAndUpdate(
      { ID: ID },
      { IsDelete: true }
    );
    return res.status(200).json(result);
  } catch (err) {
    return res.sendStatus(403);
  }
};
