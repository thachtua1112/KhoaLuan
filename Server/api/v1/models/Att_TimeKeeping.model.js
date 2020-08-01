const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Att_TimeKeepingSchema = new Schema({
  ProfileID: { type: Schema.Types.String, required: true },
  DateKeeping: { type: Schema.Types.Date, required: true },
  TimeIn: { type: Schema.Types.Date },
  TimeOut: { type: Schema.Types.Date },
  TimeKeepingType: { type: Schema.Types.String },
  Description: { type: Schema.Types.String },
  Total: {
    type: Schema.Types.Number,
    default: () => {
      if (this.TimeIn && this.TimeOut) return this.TimeOut - this.TimeIn;
      return;
    },
  },
  Status: {
    type: Schema.Types.String,
    default: () => {
      if (this.Total) return "DA_TINH_CONG";
      return "CHUA_TINH_CONG";
    },
  },

});
const Att_TimeKeepingModel = mongoose.model(
  "Att_TimeKeeping",
  Att_TimeKeepingSchema
);

module.exports = Att_TimeKeepingModel;

