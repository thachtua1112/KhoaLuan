const newStaffModel = require('../models/NewStaff.model')

module.exports.GetAll = async (req,res) =>{
    const result = await newStaffModel.find({});
    return res.json(result)
}

module.exports.CreatByFilesCSV = async (req,res) =>{
    try{
        const  data  = req.body;
        console.log(data.length);
        let files;
        for (i=0; i<data.length;i++)
        {
            console.log("ada",i)
            files=data[i];
            console.log(files)
            newStaffModel.create( files )
        }
        const result = await newStaffModel.find();
        return res.status(200).json(result);
      }
      catch(err)
      {
        return res.sendStatus(403)
      }
}