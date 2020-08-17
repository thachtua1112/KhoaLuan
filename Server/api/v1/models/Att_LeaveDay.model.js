const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Att_LeaveDaySchema = new Schema({
  DateLeave:{type: Schema.Types.String },
  ProfileID: { type: Schema.Types.String },
  LeaveDayType: { type: Schema.Types.String },

  UserRegister: { type: Schema.Types.String },
  DateRegister: { type: Schema.Types.String },
  Comment: { type: Schema.Types.String },

  UserApprove: { type: Schema.Types.String },
  DateApprove: { type: Schema.Types.String },
  CommentApprove: { type: Schema.Types.String },
 
  UserCanel: { type: Schema.Types.String },
  DateCancel: { type: Schema.Types.String },
  CommentCancel: { type: Schema.Types.String },
  
  UserUpdate: { type: Schema.Types.String },
  UserCreate: { type: Schema.Types.String },
},{timestamps:true});

const Att_LeaveDayModel = mongoose.model("Att_LeaveDay", Att_LeaveDaySchema);

module.exports = Att_LeaveDayModel;
