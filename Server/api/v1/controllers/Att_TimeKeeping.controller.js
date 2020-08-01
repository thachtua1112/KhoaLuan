const Att_TimeKeepingModel = require("../models/Att_TimeKeeping.model");

//du lieu cham cong
module.exports.get = async (req, res) => {
  try {
    const result = await Att_TimeKeepingModel.find({});
    return res.json({
      ms: "GET",
      data: result,
    });
  } catch (err) {
    console.log(err);
    return res.sendStatus(403);
  }
};

module.exports.calculate = async (req, res) => {
  try {
    const { filter } = req.body;
    const result = await Att_TimeKeepingModel.find(filter);
    const resultUpdate = await Att_TimeKeepingModel.findOneAndUpdate(
      {
        //_id:DataTransferItem._id,
        DateKeeping: new Date("2014-01-01T17:00:00.000+00:00"),
        ProfileID: "3BB7E648-5829-41CA-BD9E-57708396EF5B",
      },
      {
        Total: 10000, //item.TimeOut.getTime() - item.TimeIn.getTime(),
        Status: "DA_TINH_CONG",
      },
      { new: true }
    );

    //console.log(resultUpdate);
    return res.json({
      ms: "POST",
      //data: result,
      dataUpdate: resultUpdate,
    });
  } catch (err) {
    console.log(err);
    return res.sendStatus(403);
  }
};

module.exports.getAll = async (req, res) => {
  try {
    const result = await Hre_ProfileModel.find({});
    return res.status(200).json(result);
  } catch (err) {
    return res.sendStatus(403);
  }
};

module.exports.getWithFilter = async (req, res) => {
  try {
    const filter = req.query;
    const result = await Hre_ProfileModel.find(filter);
    return res.status(200).json(result);
  } catch (err) {
    return res.sendStatus(403);
  }
};

module.exports.update = async (req, res) => {
  try {
    const { ID } = req.params;
    const { data } = req.body;
    const result = Hre_ProfileModel.findOneAndUpdate({ ID: ID }, data);
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
