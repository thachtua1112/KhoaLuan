const StopWorkingModel = require("../models/Hre_StopWorking.model");

module.exports.getAll = async (req, res) => {
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
    const { ID } = req.params;
    const result = await StopWorkingModel.find({ ID: ID });
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
    const result = await StopWorkingModel.find(filter);
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
    const { data } = req.body;
    const result = await StopWorkingModel.create({ data });
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
    const result = await StopWorkingModel.findOneAndUpdate(
      { ID: ID },
      { IsDelete: true }
    );
    res.status(200).json(result);
  }
  catch(err)
  {
    return res.sendStatus(403)
  }
};
