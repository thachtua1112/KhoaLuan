const OrgUnitModel = require("../models/Cat_OrgUnit.model");

module.exports.getAll = async (req, res) => {
  const result = await OrgUnitModel.find({});
  res.status(200).json(result);
};

module.exports.getByID = async (req, res) => {
  const { ID } = req.params;
  const result = await OrgUnitModel.find({ ID: ID });
  res.status(200).json(result);
};

module.exports.getWithFilter = async (req, res) => {
  const filter = req.query;
  const result = await OrgUnitModel.find(filter);
  res.status(200).json(result);
};

module.exports.update = async (req, res) => {
  const { ID } = req.params;
  const { data } = req.body;
  const result = OrgUnitModel.findOneAndUpdate({ ID: ID }, data);
  res.status(200).json(result);
};

module.exports.create = async (req, res) => {
  const { data } = req.body;
  const result = await OrgUnitModel.create({ data });
  res.status(200).json(result);
};

module.exports.delete = async (req, res) => {
  const { ID } = req.params;

  const result = await OrgUnitModel.findOneAndUpdate(
    { ID: ID },
    { IsDelete: true }
  );
  res.status(200).json(result);
};
