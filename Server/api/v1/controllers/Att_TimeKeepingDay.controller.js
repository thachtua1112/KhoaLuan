const Att_TimeKeepingModel = require("../models/Att_TimeKeeping.model");

//Them ddu llieu cham cong
module.exports.create = async (req, res) => {
  try {
    const data = req.body;
    const result = await Att_TimeKeepingModel.create(data);
    //console.log(result);
    return res.json({
      ms: "GET",
      data: result,
    });
  } catch (err) {
    console.log(err);
    return res.sendStatus(403);
  }
};

module.exports.update = async (req, res) => {
  console.log(" timmkeeping UPDATE");

  const data = req.body;
  const { _id } = req.params;
  try {
    const result = await Att_TimeKeepingModel.findOneAndUpdate(
      _id,
      {
        ...data,
        //Total: 100,
      }
      //{ rawResult: true }
    );
    console.log(result);
    return res.json({
      ms: "PUT",
      data: result,
    });
    res.json({ update: _id });
  } catch (err) {
    console.log(err);
    return res.sendStatus(403);
  }
};

//get du lieu cham cong
module.exports.get = async (req, res) => {
  try {
    const { OrgStructureID, ProfileName, CodeEmp, ...filter } = req.query;
    console.log("FILTER", filter);
    const result = await Att_TimeKeepingModel.find(filter).populate({
      path: "Profile",
      match: {
        SortID: 156075,
      },
      select: { _id: 0, ProfileName: 1, CodeEmp: 1, OrgStructureID: 1 },
    });
    console.log("RESULT", result);
    return res.json({
      ms: "GET TIME KEEPING DAY",
      data: result,
    });
  } catch (err) {
    console.log(err);
    return res.sendStatus(403);
  }
};

//tinh ngay cong
module.exports.calculateTimeKeeping = async (req, res) => {
  try {
    const { listCalculate } = req.body;
    const listCalculateResult = [];
    for (let index = 0; index < listCalculate.length; index++) {
      const element = listCalculate[index];
      const data = await Att_TimeKeepingModel.findOneAndUpdate(
        { _id: element._id },
        {
          Total: new Date(element.TimeOut) - new Date(element.TimeIn),
          Status: "DA_TINH_CONG",
        },
        { new: true }
      );
      listCalculateResult.push(data);
    }

    res.json({ ms: "TINH CONG", data: listCalculateResult });
  } catch (err) {
    console.log(err);
    return res.sendStatus(403);
  }
};
