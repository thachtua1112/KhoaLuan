const OrgStructureModel = require("../models/Cat_OrgStructure.model");
const Cat_OrgStructureModel = require("../models/Cat_OrgStructure.model");

const { drawStructureTree, getListStructure } = require("../utils");

module.exports.getStructureTree = async (req, res) => {
  const { ID } = req.query;
  const listOrg = await Cat_OrgStructureModel.find();
  const listOrgStructure = listOrg.map((item) => {
    const { ID, OrgStructureName, ParentID } = item;
    return { ID, OrgStructureName, ParentID };
  });

  const Tree = drawStructureTree(listOrgStructure, ID);

  res.json(Tree);
};

module.exports.getListStructure = async (req, res) => {
  const { ID } = req.query;
  const listOrg = await Cat_OrgStructureModel.find();
  const listOrgStructure = listOrg.map((item) => {
    const { ID, OrgStructureName, ParentID } = item;
    return { ID, OrgStructureName, ParentID };
  });

  const Tree = drawStructureTree(listOrgStructure, ID);

  const listUnit = getListStructure(Tree);
  res.json(listUnit);
};

module.exports.getAll = async (req, res) => {
  try{
    const result = await OrgStructureModel.find({});
    return res.status(200).json(result);
  }
  catch(err)
  {
    return res.sendStatus(403)
  }
};

module.exports.getByID = async (req, res) => {
  try{
    const { ID } = req.params;
    const result = await OrgStructureModel.find({ ID: ID });
    return res.status(200).json(result);
  }
  catch(err)
  {
    return res.sendStatus(403)
  }
};

module.exports.getWithFilter = async (req, res) => {
  try{
    const filter = req.query;
    const result = await OrgStructureModel.find(filter);
    return res.status(200).json(result);   
  }
  catch(err)
  {
    return res.sendStatus(403)
  }
};

module.exports.update = async (req, res) => {
  try{
    const { ID } = req.params;
    const { data } = req.body;
    const result = OrgStructureModel.findOneAndUpdate({ ID: ID }, data);
    return res.status(200).json(result); 
  }
  catch(err)
  {
    return res.sendStatus(403)
  }
};

module.exports.create = async (req, res) => {
  try{
    const { data } = req.body;
    const result = await OrgStructureModel.create({ data });
    return res.status(200).json(result); 
  }
  catch(err)
  {
    return res.sendStatus(403)
  }
};

module.exports.delete = async (req, res) => {
  try{
    const { ID } = req.params;

    const result = await OrgStructureModel.findOneAndUpdate(
      { ID: ID },
      { IsDelete: true }
    );
    return res.status(200).json(result);
  }
  catch(err)
  {
    return res.sendStatus(403)
  }
};
