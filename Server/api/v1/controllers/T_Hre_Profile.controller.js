const T_ProfileModel = require("../models/T_Hre_Profile.model");

module.exports.getAll = async (req, res) => {
  const result = await T_ProfileModel.find({});
  res.status(200).json(result);
};

module.exports.getByID = async (req, res) => {
  const { ID } = req.params;
  const result = await T_ProfileModel.find({ ID: ID });
  res.status(200).json(result);
};

module.exports.getWithFilter = async (req, res) => {
  const filter = req.query;
  const result = await T_ProfileModel.find(filter);
  res.status(200).json(result);
};

module.exports.update = async (req, res) => {
  const { ID } = req.params;
  const { data } = req.body;
  const result = T_ProfileModel.findOneAndUpdate({ ID: ID }, data);
  res.status(200).json(result);
};

module.exports.create = async (req, res) => {
  const { data } = req.body;
  const result = await T_ProfileModel.create({ data });
  res.status(200).json(result);
};

module.exports.delete = async (req, res) => {
  const { ID } = req.params;

  const result = await T_ProfileModel.findOneAndUpdate(
    { ID: ID },
    { IsDelete: true }
  );
  res.status(200).json(result);
};
