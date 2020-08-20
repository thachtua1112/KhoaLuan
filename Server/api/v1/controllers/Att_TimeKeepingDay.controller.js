const Att_TimeKeepingDayModel = require("../models/Att_TimeKeepingDay.model");
const Hre_ProfileModel = require("../models/Hre_Profile.model");


//Them ddu llieu cham cong
module.exports.create = async (req, res) => {
  try {
    const data = req.body;
    const result = await Att_TimeKeepingDayModel.create(data);
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
    const result = await Att_TimeKeepingDayModel.findOneAndUpdate(
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



module.exports.delete=async(req,res)=>{
  res.json("DELETE")
}


module.exports.calculate=async(req,res)=>{
  res.json("calculate")
}



