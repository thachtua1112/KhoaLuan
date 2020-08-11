const Hre_ProfileQualificationModel = require ('../modelsnew/models/Hre_ProfileQualification.model')

module.exports.get = async (req, res) => {
  try {
    const filter = req.query;
    const result = await Hre_ProfileQualificationModel.find(filter);
    return res.status(200).json(result);
  } catch (err) {
    return res.sendStatus(403);
  }
};    
module.exports.getByID = async (req, res) => {
    try {
      const { ID } = req.params;
      const result = await Hre_ProfileQualificationModel.find({ ProfileID1: ID });
      return res.status(200).json(result);
    } catch (err) {
      return res.sendStatus(403);
    }
  };    