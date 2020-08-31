const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Hre_StopWorkingSchema = new Schema(
  {
    ProfileID: { type: Schema.Types.String, required: true },
    CodeEmp: { type: Schema.Types.String },
    StopWorkType: { type: Schema.Types.String },
    ResignReason: { type: Schema.Types.String },
    DateStop: { type: Schema.Types.Date, required: true },
    IsBlackList: { type: Schema.Types.String },
    Status: { type: Schema.Types.String },
    Note: { type: Schema.Types.String },
    UserCreate: { type: Schema.Types.String },
    UserUpdate: { type: Schema.Types.String },
    UserApprove: { type: Schema.Types.String },
    DateApprove: { type: Schema.Types.String },

    // PaymentDay: { type: Schema.Types.String },
    // Settlement: { type: Schema.Types.String },
    // DateQuitSign: { type: Schema.Types.String },
    // DateQuitSubmit: { type: Schema.Types.String },
    // UserLockID: { type: Schema.Types.String },
    // DateLock: { type: Schema.Types.String },
  },
  { timestamps: true },
);

const Hre_StopWorkingModel = mongoose.model(
  "Hre_StopWorking",
  Hre_StopWorkingSchema,
);

module.exports = Hre_StopWorkingModel;
