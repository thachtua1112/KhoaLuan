const Hre_ContractModel = require("../../models/Hre_Contract.model");
const Hre_ProfileModel = require("../../models/Hre_Profile.model")
module.exports.getAll = async (req, res) => {
  try{
    const result = await Hre_ContractModel.find();
    return res.status(200).json(result);
  }
  catch(err)
  {
    return res.sendStatus(403)
  }
};

module.exports.NotYet_HreContract= async function(req,res){
    try{
        const {page} = req.query
        const filter =req.query
        const contract = await Hre_ContractModel.distinct("ProfileID");
        //const result = await Hre_ProfileModel.find({ID:{ $nin:  contract }})//.limit(10).skip(parseInt(page))
        const result = await Hre_ProfileModel.aggregate([
          {
            $match:filter
          },
          {
            $match:{ 
              //DateQuit:"null",
              ID:{ $nin:  contract },
              StatusSyn:"E_HIRE"
            }
          }
        ]).limit(200)
        return res.json(result)
    }
    catch(err)
    {
       return res.sendStatus(403)
    }
  }

module.exports.HistoryById= async function(req,res){
    try{
      const { ID } = req.params;
      const contract = await Hre_ContractModel.aggregate([
       {
        $match:{
          ProfileID:ID
        }
      },
       {
         $lookup: {
           from: 'hre_profiles',
           localField: 'ProfileID',
           foreignField: 'ID',
           as: 'profiles',
         }
       }
      
      ])
       return res.json(contract)
     }
     catch(err)
     {
       console.log(err)
       res.sendStatus(403)
     }
  }
  // module.exports.Contract= async function(req,res){
  //   try{
  //     const result = await Hre_ProfileModel.find({DateEnd:{$gt: new Date()}})
  //     return res.json(result
  //   )
  //   }
  //   catch(err)
  //   {
  //     res.sendStatus(403)
  //   }
  // }
 
  module.exports.HreContract= async function(req,res){
    try {
      const filter=req.query
      console.log(filter)
      const contract = await Hre_ContractModel.aggregate([
        {
           $sort: { 
              ProfileID: 1, 
              DateEnd: 1,
              DateSigned:1,
              DateStart:1
            }
        },
        {
          $group:{
            _id:"$ProfileID",
            DateSigned:{ $last: "$DateSigned" },
            DateStart:{ $last: "$DateStart" },
            DateEnd:{ $last: "$DateEnd" },
          }
        },
        {
          $lookup: {
            from: 'hre_profiles',
            localField: '_id',
            foreignField: 'ID',
            as: 'profiles',
          }
        },
        {
          $addFields:{
            ProfileName:{ "$arrayElemAt": [ "$profiles.ProfileName", 0 ] },
            CodeEmp:{ "$arrayElemAt": [ "$profiles.CodeEmp", 0 ] },
            OrgStructureID:{ "$arrayElemAt": [ "$profiles.OrgStructureID", 0 ] } ,
            Gender:{ "$arrayElemAt": [ "$profiles.Gender", 0 ] } ,
            IDNo:{ "$arrayElemAt": [ "$profiles.IDNo", 0 ] } ,
            StatusSyn:{ "$arrayElemAt": [ "$profiles.StatusSyn", 0 ] } ,
            PositionID:{ "$arrayElemAt": [ "$profiles.PositionID", 0 ] } ,
            DateHire:{ "$arrayElemAt": [ "$profiles.DateHire", 0 ] } 
          }
        },
        {
          $match:filter,
        },
        {
          $match:{
            DateEnd:{$gt: new Date()},
            //StatusSyn:"E_HIRE"
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

module.exports.Expire_Contract= async function(req,res){
  try{
    const filter=req.query
   // const contract = await Hre_ContractModel.find({DateEnd:{$gte: new Date()}})
   const contract = await Hre_ContractModel.aggregate([
    {
       $sort: { 
          ProfileID: 1, 
          DateEnd: 1,
          DateSigned:1,
          DateStart:1
        }
    },
    {
      $group:{
        _id:"$ProfileID",
        DateSigned:{ $last: "$DateSigned" },
        DateStart:{ $last: "$DateStart" },
        DateEnd:{ $last: "$DateEnd" },
      }
    },
    {
      $lookup: {
        from: 'hre_profiles',
        localField: '_id',
        foreignField: 'ID',
        as: 'profiles',
      }
    },
    {
      $addFields:{
        ProfileName:{ "$arrayElemAt": [ "$profiles.ProfileName", 0 ] },
        CodeEmp:{ "$arrayElemAt": [ "$profiles.CodeEmp", 0 ] },
        OrgStructureID:{ "$arrayElemAt": [ "$profiles.OrgStructureID", 0 ] } ,
        Gender:{ "$arrayElemAt": [ "$profiles.Gender", 0 ] } ,
        IDNo:{ "$arrayElemAt": [ "$profiles.IDNo", 0 ] } ,
        StatusSyn:{ "$arrayElemAt": [ "$profiles.StatusSyn", 0 ] } ,
        PositionID:{ "$arrayElemAt": [ "$profiles.PositionID", 0 ] } ,
      }
    },
    {
      $match:filter,
    },
    {
      $match:{
        DateEnd:{$lte: new Date()},
        StatusSyn:"E_HIRE"
      }
    }
   ])
    return res.json(contract)
  }
  catch(err)
  {
    console.log(err)
    res.sendStatus(403)
  }
}

module.exports.getByID = async (req, res) => {
  try{
    const { ID } = req.params;
    const result = await Hre_ContractModel.find({ ID: ID });
    return res.status(200).json(result);
  }
  catch(err)
  {
    return res.sendStatus(403)
  }
};

module.exports.getWithFilter = async (req, res) => {
  try{
    const filter = req.query;
    const result = await Hre_ContractModel.find(filter);
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
    const result = Hre_ContractModel.findOneAndUpdate({ ID: ID }, data);
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
    const result = await Hre_ContractModel.create( data );
    return res.status(200).json(result);
  }
  catch(err)
  {
    return res.sendStatus(403)
  }
};

module.exports.delete = async (req, res) => {
  try{
    const { ID } = req.params;
    const result = await Hre_ContractModel.findOneAndUpdate(
      { ID: ID },
      { IsDelete: true }
    );
    return res.status(200).json(result);
  }
  catch(err)
  {
    return res.sendStatus(403)
  }
};
