const OrgStructureModel = require("../models/Cat_OrgStructure.model");

module.exports.getAll = async (req, res) => {
  const result = await OrgStructureModel.find({});
  res.status(200).json(result);
};

module.exports.getByID = async (req, res) => {
  const { ID } = req.params;
  const result = await OrgStructureModel.find({ ID: ID });
  res.status(200).json(result);
};

module.exports.getWithFilter = async (req, res) => {
  const filter = req.query;
  const result = await OrgStructureModel.find(filter);
  res.status(200).json(result);
};

module.exports.update = async (req, res) => {
  const { ID } = req.params;
  const { data } = req.body;
  const result = OrgStructureModel.findOneAndUpdate({ ID: ID }, data);
  res.status(200).json(result);
};

module.exports.create = async (req, res) => {
  const { data } = req.body;
  const result = await OrgStructureModel.create({ data });
  res.status(200).json(result);
};

module.exports.delete = async (req, res) => {
  const { ID } = req.params;

  const result = await OrgStructureModel.findOneAndUpdate(
    { ID: ID },
    { IsDelete: true }
  );
  res.status(200).json(result);
};
