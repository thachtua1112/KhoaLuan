const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Att_TimeKeepingGroupSchema = new Schema({
  KiCong: { type: Schema.Types.Date, required },
  Year: {
    type: Schema.Types.Number,
    default: function () {
      return this.KiCong.getFullYear();
    },
  },
  Month: {
    type: Schema.Types.Number,
    default: function () {
      return this.KiCong.getMonth();
    },
  },
  ProfileID: { type: Schema.Types.String, required },
  UnSabbaticalLeave: { type: Schema.Types.Number },
  SabbaticalLeave: { type: Schema.Types.Number },
  TotalKeepingReality: { type: Schema.Types.Number },
  SumKeeping: { type: Schema.Types.Number },
  Description: { type: Schema.Types.String },
});

const Att_TimeKeepingGroupModel = mongoose.model(
  "Att_TimeKeepingGroup",
  Att_TimeKeepingGroupSchema
);

module.exports = Att_TimeKeepingGroupModel;
