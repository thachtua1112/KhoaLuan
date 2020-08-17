const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Att_TimeKeepingGroupSchema = new Schema({
  ProfileID: { type: Schema.Types.String, required: true },
  KiCong: { type: Schema.Types.String, required: true },
  Month: {
    type: Schema.Types.Number,
    default: function () {
      return parseInt(this.KiCong.split("/")[0]);
    },
  },
  Year: {
    type: Schema.Types.Number,
    default: function () {
      return parseInt(this.KiCong.split("/")[1]);
    },
  },
  UnSabbaticalLeave: { type: Schema.Types.Number },
  SabbaticalLeave: { type: Schema.Types.Number },
  TotalKeepingReality: { type: Schema.Types.Number },
  SumKeeping: { type: Schema.Types.Number },
  Description: { type: Schema.Types.String },
});

Att_TimeKeepingGroupSchema.index({ProfileID: 1, KiCong: 1}, {unique: true})

const Att_TimeKeepingGroupModel = mongoose.model(
  "Att_TimeKeepingGroup",
  Att_TimeKeepingGroupSchema
);

module.exports = Att_TimeKeepingGroupModel;
