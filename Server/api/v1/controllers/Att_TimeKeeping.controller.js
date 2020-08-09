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

//tinh ngay cong
module.exports.calculateTimeKeepingDay = async (req, res) => {
  try {
    console.log("calculateTimeKeepingDay");
    res.json({ ms: "TINH NGAY CONG" });
  } catch (err) {
    console.log(err);
    return res.sendStatus(403);
  }
};
