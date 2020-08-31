const mongoose = require("mongoose");

const Hre_StopWorkingModel = require("./Hre_StopWorking.model");
const BaseController = require("../../utils/BaseController");

class Hre_StopWorkingController extends BaseController {
  constructor(Model = {}) {
    if (Model.schema instanceof mongoose.Schema) {
      super(Model);
      return this;
    }
    super(Hre_StopWorkingModel);
  }
}

module.exports = Hre_StopWorkingController;
