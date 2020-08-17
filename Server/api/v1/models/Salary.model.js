const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SalarySchema = new Schema({
 KiCong:{ type: Schema.Types.String },
 EmpCode: { type: Schema.Types.String },
 Salary: { type: Schema.Types.String },
},{timestamps:true});

const SalaryModel = mongoose.model(
  "Salary",
  SalarySchema
);

module.exports = SalaryModel;
