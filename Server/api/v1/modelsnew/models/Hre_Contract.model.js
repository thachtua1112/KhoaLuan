const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Hre_ContractSchema = new Schema({
  ID: { type: Schema.Types.String },
ProfileID: { type: Schema.Types.String },
ProfileID1: { type: Schema.Types.String },
ContractNo: { type: Schema.Types.String },
ContractTypeID: { type: Schema.Types.String },
DateSigned: { type: Schema.Types.Date },
DateStart: { type: Schema.Types.Date },
DateEnd: { type: Schema.Types.Date },
PositionID: { type: Schema.Types.String },
Salary: { type: Schema.Types.Number },
UserUpdate: { type: Schema.Types.String },
UserCreate: { type: Schema.Types.String },
DateCreate: { type: Schema.Types.Date },
DateUpdate: { type: Schema.Types.Date },
JobTitleID: { type: Schema.Types.String },
CurenncyID: { type: Schema.Types.String },
JobDescription: { type: Schema.Types.String },
Status: { type: Schema.Types.String },
CompanyID: { type: Schema.Types.String },
IDNo: { type: Schema.Types.String },
IDDateOfIssue: { type: Schema.Types.Date },
IDPlaceOfIssue: { type: Schema.Types.String },
PCountryID: { type: Schema.Types.String },
PAddress: { type: Schema.Types.String },
SortID: { type: Schema.Types.Number },
ContractStatus: { type: Schema.Types.String },
OrgStructureID: { type: Schema.Types.String },
});

const Hre_ContractModel = mongoose.model("Hre_Contract", Hre_ContractSchema);

module.exports = Hre_ContractModel;
