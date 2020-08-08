const Hre_ProfileModel = require("../models/Hre_Profile.model");
const Hre_ContractModel = require("../models/Hre_Contract.model");

//nhân viên chưa có hợp đồng
module.exports.NotYet_THrProfile = async function (req, res) {
  try {
    const contract = await Hre_ContractModel.distinct("ProfileID1");
    const NotYet = await Hre_ProfileModel.find({
      ProfileID: { $nin: contract },
    });
    return res.json({
      result: NotYet,
    });
  } catch (err) {
    return res.sendStatus(403);
  }
};

module.exports.get = async (req, res) => {
  try {
    const filter = req.query;
    const result = await Hre_ProfileModel.find(filter)
      .populate({
        path: "OrgStructure",
        select: { _id: 0, OrgStructureName: 1, Code: 1 },
        justOne: true,
      })
      .populate({
        path: "Position",
        select: { PositionName: 1 },
        justOne: true,
      });
    return res.status(200).json(result);
  } catch (err) {
    return res.sendStatus(403);
  }
};

module.exports.getByID = async (req, res) => {
  try {
    const { ID } = req.params;
    const result = await Hre_ProfileModel.find({ CodeEmp: ID });
    return res.status(200).json(result);
  } catch (err) {
    return res.sendStatus(403);
  }
};

module.exports.update = async (req, res) => {
  try {
    const { ID } = req.params;
    const data = req.body;
    const result = await Hre_ProfileModel.findOneAndUpdate({ ID: ID }, data, {
      new: true,
    });
    return res.status(200).json(result);
  } catch (err) {
    return res.sendStatus(403);
  }
};

module.exports.create = async (req, res) => {
  try {
    const { data } = req.body;
    const result = await Hre_ProfileModel.create({ data });
    return res.status(200).json(result);
  } catch (err) {
    return res.sendStatus(403);
  }
};

module.exports.delete = async (req, res) => {
  try {
    const { ID } = req.params;
    const result = await Hre_ProfileModel.findOneAndUpdate(
      { ID: ID },
      { IsDelete: true }
    );
    return res.status(200).json(result);
  } catch (err) {
    return res.sendStatus(403);
  }
};
