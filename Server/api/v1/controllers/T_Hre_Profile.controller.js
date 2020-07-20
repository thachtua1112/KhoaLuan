const T_ProfileModel = require("../models/T_Hre_Profile.model");

module.exports.getAll = async (req, res) => {
  try{
    const result = await T_ProfileModel.find({});
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
    const result = await T_ProfileModel.find({ ID: ID });
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
    const result = await T_ProfileModel.find(filter);
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
    const result = T_ProfileModel.findOneAndUpdate({ ID: ID }, data);
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
    const result = await T_ProfileModel.create({ data });
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
    const result = await T_ProfileModel.findOneAndUpdate(
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
