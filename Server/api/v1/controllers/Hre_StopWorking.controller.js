const ObjectID =require("mongoose").Types.ObjectId
const StopWorkingModel = require("../models/Hre_StopWorking.model");


module.exports.get = async (req, res) => {
  try{
    const result = await StopWorkingModel.find({});
    return res.status(200).json(result);
  }
  catch(err)
  {
    return res.sendStatus(403)
  }
};

module.exports.getByID = async (req, res) => {
  try{
    const { _id } = req.params;
    const result = await StopWorkingModel.findById(_id);
    return res.status(200).json(result);   
  }
  catch(err)
  {
    return res.sendStatus(403)
  }
};



module.exports.update = async (req, res) => {
  try{
    const { ID } = req.params;
    const { data } = req.body;
    const result = StopWorkingModel.findOneAndUpdate({ ID: ID }, data);
    return res.status(200).json(result);  
  }
  catch(err)
  {
    return res.sendStatus(403)
  }
};

module.exports.create = async (req, res) => {
  try{
    const  data  = req.body;
    const result = await StopWorkingModel.create({...data,Status:"CHUA_DUYET"});
    const resultData=await StopWorkingModel.aggregate([{
      $match:result
    },
    {
      $lookup:{
        from: "hre_profiles",
        localField:"CodeEmp",
        foreignField:"CodeEmp",
        as: "Profile"
      }
    },
    {
      $addFields:{
        ProfileName:"$Profile.ProfileName"
      }
    },
    {
      $project:{
        Profile:0,
        //"ProfileName": { "$arrayElemAt": [ "$ProfileName", 0 ] } 
      }
    }
  ])
    return res.status(200).json({data:resultData}); 
  }
  catch(err)
  {
    console.log(err)
    return res.sendStatus(403)
  }
};

module.exports.delete = async (req, res) => {
  try{
    const { _id } = req.params;
    const result = await StopWorkingModel.findById(
      _id
    );
    res.status(200).json(result);
  }
  catch(err)
  {
    return res.sendStatus(403)
  }
};
