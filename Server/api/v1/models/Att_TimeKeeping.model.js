const mongoose = require("mongoose");
const TimeKeepingRoute = require("../routes/Att_TimeKeeping.route");
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
  // TotalHours: {
  //   type: Schema.Types.Number,
  //   default: () => {
  //     if (this.Total)
  //       return Math.round((this.Total / (1000 * 60 * 60)) * 10) / 10;
  //     return;
  //   },
  // },
  // TotalDay: {
  //   type: Schema.Types.Number,
  //   default: () => {
  //     if (this.TotalHours) return Math.round(this.TotalHours * 100) / 100;
  //     return;
  //   },
  // },
});
Att_TimeKeepingSchema.pre("save", (doc) => {
  console.log("dang o day", doc);
});
const Att_TimeKeepingModel = mongoose.model(
  "Att_TimeKeeping",
  Att_TimeKeepingSchema
);

module.exports = Att_TimeKeepingModel;
