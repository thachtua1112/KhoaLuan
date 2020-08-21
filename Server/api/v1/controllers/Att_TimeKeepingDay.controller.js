const Att_TimeKeepingDayModel = require("../models/Att_TimeKeepingDay.model");
const Hre_ProfileModel = require("../models/Hre_Profile.model");


//Them ddu llieu cham cong
module.exports.create = async (req, res) => {
  try{
    const  {CodeEmp,...data}  = req.body;
    const Profile= await Hre_ProfileModel.findOne({CodeEmp:CodeEmp})
    const result = await Att_TimeKeepingDayModel.create({...data,ProfileID:Profile.ProfileID,TimeKeepingType:"BANG_TAY",Status:"CHUA_TINH_CONG"});
    const resultData=await Att_TimeKeepingDayModel.aggregate([{
      $match:result
    },
    {
      $lookup:{
        from: "hre_profiles",
        localField:"ProfileID",
        foreignField:"ProfileID",
        as: "Profile"
      }
    },
    {
      $addFields:{
        ProfileName:{ "$arrayElemAt": [ "$Profile.ProfileName", 0 ] },
        CodeEmp:{ "$arrayElemAt": [ "$Profile.CodeEmp", 0 ] } 
      }
    },
    {
      $project:{
        Profile:0,
      }
    }
  ])
    return res.status(200).json({data:resultData[0]}); 
  }
  catch(err)
  {
    console.log(err)
    return res.sendStatus(403)
  }
};

module.exports.update = async (req, res) => {
  try{
    const { ID } = req.params;
    const  data  = req.body;
    const result = await Att_TimeKeepingDayModel.findOneAndUpdate({_id:ID}, {...data,Status:"CHUA_TINH_CONG"},{new:true});
    const resultData=await Att_TimeKeepingDayModel.aggregate([{
      $match:result
    },
    {
      $lookup:{
        from: "hre_profiles",
        localField:"ProfileID",
        foreignField:"ProfileID",
        as: "Profile"
      }
    },
    {
      $addFields:{
        ProfileName:{ "$arrayElemAt": [ "$Profile.ProfileName", 0 ] },
        CodeEmp:{ "$arrayElemAt": [ "$Profile.CodeEmp", 0 ] } ,
      }
    },
    {
      $project:{
        Profile:0,
      }
    }
  ])
    return res.status(200).json({data:resultData[0]}); 
  }
  catch(err)
  {
    return res.sendStatus(403)
  }
};

//get du lieu cham cong
module.exports.get = async (req, res) => {
  try {
 
    const {Status,DateKeeping ,...filterProfile } =  req.query;
    const {OrgStructureID,ProfileName, CodeEmp,...filterTimeKeeping } =  req.query;

    if(filterTimeKeeping.DateKeeping){
      if(filterTimeKeeping.DateKeeping["$gte"]){
        filterTimeKeeping.DateKeeping["$gte"]=new Date(filterTimeKeeping.DateKeeping["$gte"])
      }
      if(filterTimeKeeping.DateKeeping["$lte"]){
        filterTimeKeeping.DateKeeping["$lte"]=new Date(filterTimeKeeping.DateKeeping["$lte"])
      }
    }
    
    const data= await Hre_ProfileModel.aggregate([
      {
        $match:filterProfile
      },
      {
        $project:{
          _id:0,
          CodeEmp:1,
          ProfileName:1,
          ProfileID:1,
          OrgStructureID:1
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
        $project:{     
          CodeEmp:1,
          ProfileName:1,
          ProfileID:1,
          OrgStructureName:{ $arrayElemAt: [ "$OrgStructure.OrgStructureName", 0 ] },
        }
      },
      {
        $lookup:{
          from: "att_timekeepings",
          localField:"ProfileID",
          foreignField:"ProfileID",
          as: "TimeKeeping"
        }
      },
      {$unwind:{path:"$TimeKeeping",preserveNullAndEmptyArrays: true}},
    
      {
        $project:{     
          CodeEmp:1,
          ProfileName:1,
          OrgStructureName:1,
          _id:"$TimeKeeping._id",
          DateKeeping:"$TimeKeeping.DateKeeping",
          TimeKeepingType:"$TimeKeeping.TimeKeepingType",
          TimeIn:"$TimeKeeping.TimeIn",
          TimeOut:"$TimeKeeping.TimeOut",
          Description:"$TimeKeeping.Description",
          Status:"$TimeKeeping.Status",
          Total:"$TimeKeeping.Total",
        }
      },
      {
        $match:filterTimeKeeping
      },
    ])
    return res.json({
      ms: "GET TIME KEEPING DAY",
      data
    });
  } catch (err) {
    console.log(err);
    return res.sendStatus(403);
  }
};



module.exports.import=async(req,res)=>{
  try {
  const dataImport=req.body.map(item=>{
      return {...item,DateKeeping:new Date(item.DateKeeping),TimeIn:new Date(item.TimeIn),TimeOut:new Date(item.TimeOut),Status:"CHUA_TINH_CONG",TimeKeepingType:"BANG_TAY"}
  })
   await Att_TimeKeepingDayModel.insertMany(dataImport)
    res.json({ms:"IMPORT_THANH_CONG"})
  } catch (error) {
    console.log(error)
    res.json(403)
  }
 
}



module.exports.delete = async (req, res) => {
  try{
    const { ID } = req.params;
    const result = await Att_TimeKeepingDayModel.findByIdAndDelete(ID);
    res.status(200).json(result);
  }
  catch(err)
  {
    return res.sendStatus(403)
  }
};


module.exports.calculate=async(req,res)=>{
  try {
    const {listCalculate}=req.body
  await Att_TimeKeepingDayModel.update({ _id:{ $in:listCalculate}},[
    {$set:{
      Total: {$subtract:["$TimeOut","$TimeIn"]},
      Status:"DA_TINH_CONG"
    }}
  ], {multi: true})

  res.json({ms:"FINISHED"})
  } catch (error) {
    console.log(error)
    res.json(403)
  }
}



