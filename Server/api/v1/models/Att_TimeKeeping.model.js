const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Att_TimeKeepingSchema = new Schema({
  ProfileID: { type: Schema.Types.String, required },
  DateKeeping: { type: Schema.Types.Date, required },
  TypeKeeping: { type: Schema.Types.Date, required },
  TimeIn: { type: Schema.Types.Date },
  TimeOut: { type: Schema.Types.Date },
  TimeKeepingType: { type: Schema.Types.String },
  Description: { type: Schema.Types.String },
  Status: { type: Schema.Types.String, default: "CHUA_TONG_HOP" },
  Total: { type: Schema.Types.Number },
});

const Att_TimeKeepingModel = mongoose.model(
  "Att_TimeKeeping",
  Att_TimeKeepingSchema
);

module.exports = Att_TimeKeepingModel;
