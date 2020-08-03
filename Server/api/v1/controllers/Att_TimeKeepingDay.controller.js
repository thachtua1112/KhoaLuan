const Att_TimeKeepingModel = require("../models/Att_TimeKeeping.model");

//Them ddu llieu cham cong
module.exports.create = async (req, res) => {
  console.log(" timmkeeping create");

  
  try {const data = req.body;
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
  console.log("get timmkeeping");
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
