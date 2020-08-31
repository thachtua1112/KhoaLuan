const newStaffModel = require("../models/NewStaff.model");
const Hre_StopWorkingModel = require("../../../src/api/v1/HumanResourceExecutive/StopWorking/Hre_StopWorking.model")
const Hre_ProfilesModel = require("../models/Hre_Profile.model")
module.exports.Get = async (req, res) => {
  try {
    const filter = req.query;
    const result = await newStaffModel.find(filter);
    return res.json(result);
  } catch (err) {
    res.sendStatus(403);
  }
};

module.exports.CreatByFilesCSV = async (req, res) => {
  try {
    const data = req.body;
    for (i = 0; i < data.length; i++) {
      newStaffModel.create(data[i]);
    }
    const result = await newStaffModel.find();
    return res.status(200).json(result);
  } catch (err) {
    return res.sendStatus(403);
  }
};

module.exports.ApproveToProfiles = async (req, res) => {
  try{
    const StopWorking1 = await Hre_StopWorkingModel.find({IsBlackList:1})
    const StopWorking = await Hre_StopWorkingModel.distinct("ProfileID",{LastStatusSyn:"E_STOP",IsBlackList:1 })
    const HreProfile =  await Hre_ProfilesModel.distinct("IDNo",{ID:{$nin:StopWorking}})
    console.log(StopWorking)
    return res.json(StopWorking1)
  }
  catch(err)
  {
    return res.sendStatus(403)
  }
}