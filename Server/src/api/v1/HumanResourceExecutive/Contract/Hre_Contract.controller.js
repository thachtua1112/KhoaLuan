const mongoose = require("mongoose");
//const Hre_ContractModel = require("./Hre_Contract.model"); //Model Current Folder
const Hre_ContractModel = require("../../../../../api/v1/models/Hre_Contract.model"); //Model Outside Folder
const BaseController = require("../../utils/BaseController");

class Hre_ContractController extends BaseController {
  constructor(Model = {}) {
    if (Model.schema instanceof mongoose.Schema) {
      super(Model);
      return this;
    }
    super(Hre_ContractModel);
  }
}

module.exports = Hre_ContractController;
