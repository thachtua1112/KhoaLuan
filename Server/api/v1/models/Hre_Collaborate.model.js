const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Hre_CollaborateSchema = new Schema({
  ProfileID: { type: Schema.Types.String },
  CodeEmp: { type: Schema.Types.String },
  ProfileName: { type: Schema.Types.String },
  Status: { type: Schema.Types.String },
  Reason:{ type: Schema.Types.String },
  DateCreate:{ type: Schema.Types.Date },
  DateUpdate:{ type: Schema.Types.Date },
  DateSignature: { type: Schema.Types.Date },
  DateEnd: { type: Schema.Types.Date },
  DateStart: { type: Schema.Types.Date },
  Time:{ type: Schema.Types.Number },
  PositionName: { type: Schema.Types.String },
  E_UNIT:{ type: Schema.Types.String },//công ty
  E_UNIT_CODE: { type: Schema.Types.String },
  E_DIVISION: { type: Schema.Types.String },// chi nhánh
  E_DIVISION_CODE: { type: Schema.Types.String },
  E_DEPARTMENT: { type: Schema.Types.String },// phòng ban
  E_DEPARTMENT_CODE: { type: Schema.Types.String }, 
  E_TEAM:{ type: Schema.Types.String },//bộ phận
  E_TEAM_CODE:{ type: Schema.Types.String },
  E_SECTION: { type: Schema.Types.String },//Tổ công tác
  E_SECTION_CODE: { type: Schema.Types.String },
});

const Hre_CollaborateModel = mongoose.model("Hre_Collaborate", Hre_CollaborateSchema);

module.exports = Hre_CollaborateModel;
