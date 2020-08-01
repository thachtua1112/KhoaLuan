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
    default: function () {
      if (!this.TimeOut || !this.TimeIn) return 0;
      return this.TimeOut - this.TimeIn;
    },
  },
  Status: {
    type: Schema.Types.String,
    // default: function () {
    //   if (0 !== this.Total) return "DA_TINH_CONG";
    //   return "CHUA_TINH_CONG";
    // },
    default: "CHUA_TINH_CONG",
  },
  // TotalHours: {
  //   type: Schema.Types.Number,
  //   default: function () {
  //     if (this.Total)
  //       return Math.round((this.Total / (1000 * 60 * 60)) * 10) / 10;
  //     return;
  //   },
  // },
  // TotalDay: {
  //   type: Schema.Types.Number,
  //   default: function () {
  //     if (this.TotalHours)
  //       return Math.round((this.TotalHours / 24) * 100) / 100;
  //     return;
  //   },
  // },
});

Att_TimeKeepingSchema.pre("findOneAndUpdate", async function (next) {
  // const { TimeOut, TimeIn } = this._update;
  // this.set({ Total: new Date(TimeOut) - new Date(TimeIn) });
  next();
});

Att_TimeKeepingSchema.post("findOneAndUpdate", async function (doc) {
  const { TimeOut, TimeIn } = this._update.$set;
  //cap nhat Total
  //console.log("POST", this);
  if (doc.TimeOut !== TimeOut || doc.TimeIn !== TimeIn) {
    await this.model.updateOne(
      { _id: doc._id },
      {
        Total:
          new Date(TimeOut ? TimeOut : doc.TimeOut) -
          new Date(TimeIn ? TimeIn : doc.TimeIn),
      }
    );
  }
});

const Att_TimeKeepingModel = mongoose.model(
  "Att_TimeKeeping",
  Att_TimeKeepingSchema
);

module.exports = Att_TimeKeepingModel;
