const Att_TimeKeepingGroupModel = require("../models/Att_TimeKeepingGroup.model");

const Att_TimeKeepingDayModel = require("../models/Att_TimeKeepingDay.model");

const Hre_ProfileModel = require("../models/Hre_Profile.model");


//get du lieu tong hop cong
module.exports.get = async (req, res) => {
  try {
    const filter = req.query;
    const result = await Att_TimeKeepingGroupModel.aggregate([
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
          ProfileName:{ "$arrayElemAt": [ "$Profile.ProfileName", 0 ] } ,
          CodeEmp:{ "$arrayElemAt": [ "$Profile.CodeEmp", 0 ] },
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
        $project:{
          OrgStructure:0,
          Profile:0
        }
      },
      {
        $match:filter
      },
    ])

   
    return res.json({
      ms: "GET TIMEKEEPING GROUP",
      data: result,
    });
  } catch (err) {
    console.log(err);
    return res.sendStatus(403);
  }
};

module.exports.update = async (req, res) => {
  try{
    const { ID } = req.params;
    console.log("dang o day",ID)
    const  data  = req.body;
    const result = await Att_TimeKeepingGroupModel.findOneAndUpdate({_id:ID}, {...data},{new:true});
    const resultData=await Att_TimeKeepingGroupModel.aggregate([{
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

module.exports.delete = async (req, res) => {
  try{
    const { ID } = req.params;
    const result = await Att_TimeKeepingGroupModel.findByIdAndDelete(ID);
    res.status(200).json(result);
  }
  catch(err)
  {
    return res.sendStatus(403)
  }
};


module.exports.synthesis = async (req, res) => {
  try {
    const { KiCong,...filter}=req.body

    const dateKiCong=new Date(KiCong||new Date(`${("0" +(new Date().getMonth()+1)).slice(-2)}/01/${new Date().getFullYear()}`))
  
    const strKiCong=`${("0" +(dateKiCong.getMonth()+1)).slice(-2)}/${dateKiCong.getFullYear()}`

    
    const TimeFrom=new Date(dateKiCong)
    const TimeTo=new Date(dateKiCong);
    TimeTo.setMonth(new Date(dateKiCong).getMonth()+1)

   await Hre_ProfileModel.aggregate([
      {
        $match:filter       
      },
      {
        $project:{
          _id:0,
          ProfileID:1
        }
      },
      {
        $lookup:{
          from: "att_timekeepings",
          localField:"ProfileID",
          foreignField:"ProfileID",
          as: "TimeKeepingDay"
        }
      },
      {
        $match:{
          "TimeKeepingDay.DateKeeping":{ $gte:TimeFrom,$lt:TimeTo }
        }
      },
      {
        "$addFields": {
            KiCong:strKiCong,
            SumKeeping: {
                $reduce: {
                    input: "$TimeKeepingDay",
                    initialValue: 0,
                    in: { $add : ["$$value", "$$this.Total"] }
                }
            }
        }
      },
      {
        $project:{      
          KiCong:1,        
          ProfileID:1,
          SumKeeping:1
        }
      },
      {
        $lookup:{
          from: "att_leavedays",
          localField:"ProfileID",
          foreignField:"ProfileID",
          as: "LeaveDay"
        }
      },
      {
        $addFields: {
          Year :dateKiCong.getFullYear(),
          Month:dateKiCong.getMonth()+1,
          UnSabbaticalLeave:{   
            $multiply:[{ $size:{
              $filter: {
             input: "$LeaveDay",
             as: "leaveday",
             cond: { $eq: [ "$$leaveday.LeaveDayType", "KHONG_PHEP" ] }
              }}},
              8*60*60*1000],     
          },
          SabbaticalLeave:{
            $multiply:[{ $size:{
              $filter: {
             input: "$LeaveDay",
             as: "leaveday",
             cond: { $eq: [ "$$leaveday.LeaveDayType", "CO_PHEP" ] }
              }}},
              8*60*60*1000],     
          },
        }
      },
      {
        $project:{
          LeaveDay:0,
        }
      },
      {
        $addFields:{
          TotalKeepingReality:{
            $add:["$SumKeeping","$SabbaticalLeave"]
          }
        }
      },
     
      { 
        $merge:{
          into:"att_timekeepinggroups",
          on:["ProfileID","KiCong"],
          whenMatched:"replace",
          whenNotMatched:"insert"
        },
       
      },
    ])
   

    const data=  await Hre_ProfileModel.aggregate([
      {
        $match:filter
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
        $lookup:{
          from: "att_timekeepinggroups",
          localField:"ProfileID",
          foreignField:"ProfileID",
          as: "TimeKeepingGroup"
        }
      },
      {
        $match:{
          "TimeKeepingGroup.KiCong":strKiCong
        }
      },
      {
        $project:{
          _id:0,
          ProfileID:1,
          ProfileName:1,
          CodeEmp:1,
          OrgStructureName:{ $arrayElemAt: [ "$OrgStructure.OrgStructureName", 0 ] },
          TimeKeepingGroup:{ $arrayElemAt: [ "$TimeKeepingGroup", 0 ] },
        }
      },
      {
        $project:{
          _id:"$TimeKeepingGroup._id",
          ProfileID:1,
          ProfileName:1,
          CodeEmp:1,
          OrgStructureName:1,
          KiCong:"$TimeKeepingGroup.KiCong",
          Year:"$TimeKeepingGroup.Year",
          Month:"$TimeKeepingGroup.Month",
          SumKeeping:"$TimeKeepingGroup.SumKeeping",
          UnSabbaticalLeave:"$TimeKeepingGroup.UnSabbaticalLeave",
          SabbaticalLeave:"$TimeKeepingGroup.SabbaticalLeave",
          TotalKeepingReality:"$TimeKeepingGroup.TotalKeepingReality",
          TotalKeepingReality:"$TimeKeepingGroup.TotalKeepingReality",
          Description:"$TimeKeepingGroup.Description",
        }
      },
    ])

   res.json({
     message:"TONG_HOP_CONG",
     data
    })
  } catch (err) {
    console.log(err);
    return res.sendStatus(403);
  }
};