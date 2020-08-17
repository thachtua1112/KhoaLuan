
const  Hre_ContractModel = require("../models/Hre_Contract.model")

const  Hre_ProfileModel = require("../models/Hre_Profile.model")

const Att_TimeKeepingGroup = require("../models/Att_TimeKeepingGroup.model")


module.exports.get = async (req,res) =>{
  try{
    return res.json({message:"GET SALARY"})    
  }
  catch(err)
  {
    res.sendStatus(403)
  }
}



module.exports.create = async (req,res) =>{
    try{
      return res.json({message:"CRATE SALARY"})    
    }
    catch(err)
    {
      res.sendStatus(403)
    }
  }



  module.exports.getListEmployeePayroll = async (req,res,next) =>{
    try{
        const {filter}=req.body;
        const data=await Hre_ProfileModel.find(filter,{ProfileID:1})
        req.ListProfilePayroll=data.map(item=>item.ProfileID)
        next()   
    }
    catch(err)
    {
      res.sendStatus(403)
    }
  }


  
  module.exports.getSalaryListProfilePayroll = async (req,res,next) =>{

    const {KiCong}=req.body

    console.log(KiCong)
    //res.json(KiCong)

    try{
        const data= await Hre_ContractModel.aggregate([
            {
                $match:{
                    ProfileID1:{$in:req.ListProfilePayroll}
                }
            },
            {
            $group:{
                _id: "$ProfileID1" ,
                DateSigned:{$last:"$DateSigned"},
                Salary:{$last : "$Salary"}
            },
        },
        {
            $sort:{
                _id:-1
            }
        },
        {
            $project:{
                _id:0,
                Salary:1,
                ProfileID: "$_id"  
            }
        },
        {
            $lookup:{
                "from": "att_timekeepinggroups",     
                "localField": "ProfileID",     
                "foreignField": "ProfileID",     
                "as": "TimeKeepingGroup"   
            } 
        },
         {
            $match:{
                "TimeKeepingGroup.KiCong": KiCong//{$in:req.ListProfilePayroll}
            }
        },
        { $project: { 
            //"TimeKeepingGroup": 1, 
            ProfileID:1,
            Salary:1,
            //KiCong:"$TimeKeepingGroup.KiCong",
            "TimeKeepingGroup": 1//{ "$arrayElemAt": [ "$TimeKeepingGroup", 0 ] } 
            // "fullName": 1, 
            // "country": 1, 
            // "countryInfo": { "$arrayElemAt": [ "$countryInfo", 0 ] } 
        }
        } ,
       
    ])
        
        req.ProfilAndSalary=data
        next()   
    }
    catch(err)
    {
      res.sendStatus(403)
    }
  }

module.exports.payroll = async (req,res) =>{
    try{
      const {KiCong}=req.body
      console.log(KiCong)
      return res.json({message:"payroll",
      KiCong,
      data:req.ProfilAndSalary})    
    }
    catch(err)
    {
      res.sendStatus(403)
    }
  }



