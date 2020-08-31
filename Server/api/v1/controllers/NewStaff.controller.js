const newStaffModel = require("../models/NewStaff.model");
const Hre_StopWorkingModel = require("../../../src/api/v1/HumanResourceExecutive/StopWorking/Hre_StopWorking.model")
const Hre_ProfilesModel = require("../models/Hre_Profile.model")
module.exports.Get = async (req, res) => {
  try {
    const filter = req.query;
    const flag = req.newProfile;
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

module.exports.ApproveToProfiles = async (req, res,next) => {
  try{
    const StopWorking = await Hre_StopWorkingModel.distinct("ProfileID",{LastStatusSyn:"E_STOP",IsBlackList:1 })
    const HreProfileIDNo =  await Hre_ProfilesModel.distinct("IDNo",{ID:{$in:StopWorking}})
    const HreProfileName =  await Hre_ProfilesModel.distinct("ProfileName",{ID:{$in:StopWorking}})
    await newStaffModel.updateMany({IDNo:{$in:HreProfileIDNo},ProfileName:{$in:HreProfileName}},{IsBlackList:1})
   // const result = await newStaffModel.find({IDNo:{$in:HreProfileIDNo},ProfileName:{$in:HreProfileName}})

   // req.newProfile=result;
    next();
  //  console.log(StopWorking)
    //return res.json(result)
  }
  catch(err)
  {
    console.log(err)
    return res.sendStatus(403)
  }
}
module.exports.delete = async (req, res) => {
  try {
    const { ID } = req.params;
    const result = await newStaffModel.findOneAndDelete(
      { _id: ID },
      { IsDelete: true },
    );
    return res.status(200).json(result);
  } catch (err) {
    return res.sendStatus(403);
  }
};
module.exports.deleteAll = async (req, res) => {
  try {
    //const { ID } = req.params;
    const result = await newStaffModel.remove( { } );
    return res.status(200).json(result);
  } catch (err) {
    return res.sendStatus(403);
  }
};