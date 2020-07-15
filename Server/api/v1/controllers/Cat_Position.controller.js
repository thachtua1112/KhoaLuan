const PositionModel = require("../models/Cat_Position.model");

module.exports.getAll = async (req, res) => {
  const result = await PositionModel.find({});
  res.status(200).json(result);
};

module.exports.getByID = async (req, res) => {
  const { ID } = req.params;
  const result = await PositionModel.find({ ID: ID });
  res.status(200).json(result);
};

module.exports.getWithFilter = async (req, res) => {
  const filter = req.query;
  const result = await PositionModel.find(filter);
  res.status(200).json(result);
};

module.exports.update = async (req, res) => {
  const { ID } = req.params;
  const { data } = req.body;
  const result = PositionModel.findOneAndUpdate({ ID: ID }, data);
  res.status(200).json(result);
};

module.exports.create = async (req, res) => {
  const { data } = req.body;
  const result = await PositionModel.create({ data });
  res.status(200).json(result);
};

module.exports.delete = async (req, res) => {
  const { ID } = req.params;

  const result = await PositionModel.findOneAndUpdate(
    { ID: ID },
    { IsDelete: true }
  );
  res.status(200).json(result);
};
