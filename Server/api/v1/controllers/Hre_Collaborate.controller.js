const Hre_CollaborateModel = require("../models/Hre_Collaborate.model");
const Hre_ProfileModel = require ('../models/Hre_Profile.model')
const Hre_ContractModel = require ('../models/Hre_Contract.model')

module.exports.getAll = async (req, res) => {
  try {
    const result = await Hre_CollaborateModel.find({});
    return res.status(200).json(result);
  } catch (err) {
    return res.sendStatus(403);
  }
};

module.exports.SelectStaffCollaborate1= async function(req,res){
  try{
      const Collaborate = await Hre_CollaborateModel.find({Status: {$in:["Chuẩn bị công tác","Đang công tác"]}}).distinct("ProfileID");
      const result = await Hre_ProfileModel.find({ProfileID:
          { $nin:  Collaborate }
      })
      return res.json(result)
  }
  catch(err)
  {
     return res.sendStatus(403)
  }
}
module.exports.SelectStaffCollaborate= async function(req,res){
  try {
    const Collaborate = await Hre_CollaborateModel.find({Status: {$in:["Chuẩn bị công tác","Đang công tác"]}})
    .distinct("ProfileID");
    const contract = await Hre_ContractModel.aggregate([
      {
         $sort: { 
            ProfileID1: 1, 
            DateEnd: 1,
            DateSigned:1,
            DateStart:1
          }
      },
      {
        $group:{
          _id:"$ProfileID1",
          DateSigned:{ $last: "$DateSigned" },
          DateStart:{ $last: "$DateStart" },
          DateEnd:{ $last: "$DateEnd" },
        }
      },
      {
        $lookup: {
          from: 'hre_profiles',
          localField: '_id',
          foreignField: 'ProfileID',
          as: 'profiles',
        }
      },
      {
        $match:{
          DateEnd:{$gt: new Date()},
          'profiles.ProfileID': { $nin:  Collaborate }
        }
      },
      {
        $project:{
          profiles:{"$arrayElemAt":["$profiles",0]},
          _id:0
        }
      }
     ])
     // await contract.limit(10)
      return res.json(contract)
    }
    catch(err)
    {
      console.log(err)
      res.sendStatus(403)
    }
} 

module.exports.UpdateStatus = async (req, res,next) => {
  try{
    await Hre_CollaborateModel.updateMany({Status:{$in:["Chuẩn bị công tác"]},DateStart:{$lte: new Date()}}
    ,{Status:"Đang công tác"})
    next()
  }
  catch(err)
  {
    res.sendStatus(403)
  }
}
module.exports.get = async (req, res) => {
  try {
    const filter = req.query;
    const result = await Hre_CollaborateModel.find(filter);
    return res.status(200).json(result);
  } catch (err) {
    return res.sendStatus(403);
  }
};
module.exports.getByID = async (req, res) => {
  try {
    const { ID } = req.params;
    const result = await Hre_CollaborateModel.find({ ID: ID });
    return res.status(200).json(result);
  } catch (err) {
    return res.sendStatus(403);
  }
};



module.exports.update = async (req, res) => {
  try {
    const { ID } = req.params;
    const { data } = req.body;
    const result = Hre_CollaborateModel.findOneAndUpdate({ ID: ID }, data);
    return res.status(200).json(result);
  } catch (err) {
    return res.sendStatus(403);
  }
};

module.exports.create = async (req, res) => {
  try {
    const  data  = req.body;
    console.log("data",data)
    const result = await Hre_CollaborateModel.create( data );
    return res.status(200).json(result);
  } catch (err) {
   // console.log(err)
    return res.sendStatus(403);
  }
};

module.exports.delete = async (req, res) => {
  try {
    const { ID } = req.params;
    const result = await Hre_CollaborateModel.findOneAndUpdate(
      { ID: ID },
      { IsDelete: true }
    );
    return res.status(200).json(result);
  } catch (err) {
    return res.sendStatus(403);
  }
};
