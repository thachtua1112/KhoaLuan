const Att_TimeKeepingGroupModel = require("../models/Att_TimeKeepingGroup.model");

const Att_TimeKeepingModel = require("../models/Att_TimeKeeping.model");

const Hre_ProfileModel = require("../models/Hre_Profile.model");

///tong hop cong nhan vien

module.exports.synthesisTimeKeeping = async (req, res) => {
  const { ProfileID } = req.params;
  const { KiCong } = req.query;
  const date = new Date(KiCong);
  const DateFrom = new Date(date);
  const DateTo = new Date(date);
  DateTo.setMonth(date.getMonth() + 1);
  const synthesisTimeKeeping = await Att_TimeKeepingModel.aggregate([
    {
      $match: {
        DateKeeping: { $gt: DateFrom, $lt: DateTo },
        ProfileID: ProfileID,
      },
    },
    {
      $group: {
        Sum: {
          $sum: "$Total",
        },
      },
    },
  ]);

  res.json({ ms: "DA_TONG_HOP", data: synthesisTimeKeeping });
};

//get du lieu cham cong
module.exports.get = async (req, res) => {
  try {
    const result = await Att_TimeKeepingGroupModel.find();
    return res.json({
      ms: "GET TIMEKEEPING GROUP",
      data: result,
    });
  } catch (err) {
    console.log(err);
    return res.sendStatus(403);
  }
};

module.exports.update = async (req, res) => {
  try {
    return res.json({
      ms: "UPDATE TIMEKEEPING GROUP",
      //data: result,
    });
  } catch (err) {
    console.log(err);
    return res.sendStatus(403);
  }
};

module.exports.calculate = async (req, res) => {
  try {
    const { KiCong, ...filter } = req.body;

    const date = new Date(KiCong);
    const DateFrom = new Date(date);
    const DateTo = new Date(date);
    DateTo.setMonth(date.getMonth() + 1);

    console.log(DateFrom, DateTo);

    ///get list profile tổng hợp cong
    const listProfile = await Hre_ProfileModel.find(filter, {
      ProfileID: 1,
    });

    const listProfileID = listProfile.map((item) => {
      return item.ProfileID;
    });

    const listTimeKeeping = await Att_TimeKeepingModel.aggregate([
      {
        $match: {
          DateKeeping: { $gt: DateFrom, $lt: DateTo },
          ProfileID: { $in: listProfileID },
        },
      },
      {
        $group: {
          _id: "$ProfileID",
          Sum: {
            $sum: "$Total",
          },
        },
      },
    ]);

    /// thêm tông hợp công vào csdl

    let listTimeKeepingCalculate = [];

    for (let index = 0; index < listTimeKeeping.length; index++) {
      const data = await Att_TimeKeepingGroupModel.findOneAndUpdate(
        { ProfileID: listTimeKeeping[index]._id, KiCong: date },
        {
          ProfileID: listTimeKeeping[index]._id,
          KiCong: date,
          UnSabbaticalLeave: 0,
          SabbaticalLeave: 0,
          TotalKeepingReality: listTimeKeeping[index].Sum,
          SumKeeping: listTimeKeeping[index].Sum,
        },
        { upsert: true, new: true }
      );

      listTimeKeepingCalculate.push(data);
    }

    return res.json({
      ms: "OK",
      data: listTimeKeepingCalculate,
    });
  } catch (err) {
    console.log(err);
    return res.sendStatus(403);
  }
};
