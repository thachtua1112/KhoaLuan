const ObjectID =require("mongoose").Types.ObjectId
const StopWorkingModel = require("../models/Hre_StopWorking.model");


module.exports.get = async (req, res) => {
  try{
    const filter=req.query;
    if(filter.DateStop){
      if(filter.DateStop.$gt){
        filter.DateStop.$gt=new Date(filter.DateStop.$gt)
      }
      if(filter.DateStop.$lte){
        filter.DateStop.$lte=new Date(filter.DateStop.$lte)
      }
    }
    const result=await StopWorkingModel.aggregate([
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
        ProfileName:{ "$arrayElemAt": [ "$Profile.ProfileName", 0 ] },
        OrgStructureID:{ "$arrayElemAt": [ "$Profile.OrgStructureID", 0 ] }  
      }
    },
    {
      $lookup:{
        from: "cat_orgstructures",
        localField:"OrgStructureID",
        foreignField:"ID",
        as: "OrgStructure"
      }
    },
    {
      $addFields:{
        OrgStructureName:{ "$arrayElemAt": [ "$OrgStructure.OrgStructureName", 0 ] }  
      }
    },
    {
      $match:filter
    },
    {
      $project:{
        OrgStructure:0,
        Profile:0,
      }
    }
  ])
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
    const  data  = req.body;
    const result = await StopWorkingModel.findOneAndUpdate({_id:ID}, data,{new:true});
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
        ProfileName:{ "$arrayElemAt": [ "$Profile.ProfileName", 0 ] } 
      }
    },
    {
      $project:{
        Profile:0,
      }
    }
  ])
    return res.status(200).json({data:resultData}); 
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
        ProfileName:{ "$arrayElemAt": [ "$Profile.ProfileName", 0 ] } 
      }
    },
    {
      $project:{
        Profile:0,
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
