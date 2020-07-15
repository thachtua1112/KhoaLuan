const ContractTypeModel = require("../models/Cat_ContractType.model");

module.exports.getAll = async (req, res) => {
  const result = await ContractTypeModel.find({});
  res.status(200).json(result);
};

module.exports.getByID = async (req, res) => {
  const { ID } = req.params;
  const result = await ContractTypeModel.find({ ID: ID });
  res.status(200).json(result);
};

module.exports.getWithFilter = async (req, res) => {
  const filter = req.query;
  const result = await ContractTypeModel.find(filter);
  res.status(200).json(result);
};

module.exports.update = async (req, res) => {
  const { ID } = req.params;
  const { data } = req.body;
  const result = ContractTypeModel.findOneAndUpdate({ ID: ID }, data);
  res.status(200).json(result);
};

module.exports.create = async (req, res) => {
  const { data } = req.body;
  const result = await ContractTypeModel.create({ data });
  res.status(200).json(result);
};

module.exports.delete = async (req, res) => {
  const { ID } = req.params;

  const result = await ContractTypeModel.findOneAndUpdate(
    { ID: ID },
    { IsDelete: true }
  );
  res.status(200).json(result);
};
