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
        const contract = await Hre_ContractModel.distinct("ProfileID1");
        const result = await Hre_ProfileModel.find({ProfileID:
            { $in:  contract }
        })
        return res.json(result
        )
    }
    catch(err)
    {
       return res.sendStatus(403)
    }
  }

module.exports.HreContract= async function(req,res){
    try{
        const contract = await Hre_ContractModel.distinct("ProfileID1");
        const NotYet = await Hre_ProfileModel.find({ProfileID:
            { $in:  contract }
        })
        return res.json({
          result:NotYet
        })
    }
    catch(err)
    {
       return res.sendStatus(403)
    }
  }

module.exports.Expire_Contract= async function(req,res){
  try{
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth()+1;
    const day = today.getDate();
    const contract = await Hre_ContractModel.find({DateEnd:{$lte: `${year}'/'${month}'/'${day}`}})
    .populate({
      path: "contract",
      //justOne: true,
    });
    const contract1= await Hre_ContractModel.aggregate([
      {
      $lookup: {
        from: 'hre_profiles',
        localField: 'ProfileID1',
        foreignField: 'ProfileID',
        as: 'profiles'
      }
    }
  ])
    return res.json(contract1)
  }
  catch(err)
  {
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
    const { data } = req.body;
    const result = await Hre_ContractModel.create({ data });
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
