const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Cat_OrgUnitSchema = new Schema({
  ID: { type: Schema.Types.String },
  OrgstructureID: { type: Schema.Types.String },
  E_COMPANY: { type: Schema.Types.String },
  E_BRANCH: { type: Schema.Types.String },
  E_UNIT: { type: Schema.Types.String },
  E_DIVISION: { type: Schema.Types.String },
  E_DEPARTMENT: { type: Schema.Types.String },
  E_TEAM: { type: Schema.Types.String },
  E_SECTION: { type: Schema.Types.String },
  E_OU_L8: { type: Schema.Types.String },
  E_OU_L9: { type: Schema.Types.String },
  E_OU_L10: { type: Schema.Types.String },
  E_OU_L11: { type: Schema.Types.String },
  E_OU_L12: { type: Schema.Types.String },
  E_COMPANY_CODE: { type: Schema.Types.String },
  E_BRANCH_CODE: { type: Schema.Types.String },
  E_UNIT_CODE: { type: Schema.Types.String },
  E_DIVISION_CODE: { type: Schema.Types.String },
  E_DEPARTMENT_CODE: { type: Schema.Types.String },
  E_TEAM_CODE: { type: Schema.Types.String },
  E_SECTION_CODE: { type: Schema.Types.String },
  E_OU_L8_CODE: { type: Schema.Types.String },
  E_OU_L9_CODE: { type: Schema.Types.String },
  E_OU_L10_CODE: { type: Schema.Types.String },
  E_OU_L11_CODE: { type: Schema.Types.String },
  E_OU_L12_CODE: { type: Schema.Types.String },
  ServerUpdate: { type: Schema.Types.String },
  ServerCreate: { type: Schema.Types.String },
  UserUpdate: { type: Schema.Types.String },
  UserCreate: { type: Schema.Types.String },
  DateCreate: { type: Schema.Types.String },
  DateUpdate: { type: Schema.Types.String },
  UserLockID: { type: Schema.Types.String },
  DateLock: { type: Schema.Types.String },
  IsDelete: { type: Schema.Types.String },
  IPCreate: { type: Schema.Types.String },
  IPUpdate: { type: Schema.Types.String },
  E_COMPANY_E: { type: Schema.Types.String },
  E_BRANCH_E: { type: Schema.Types.String },
  E_UNIT_E: { type: Schema.Types.String },
  E_DIVISION_E: { type: Schema.Types.String },
  E_DEPARTMENT_E: { type: Schema.Types.String },
  E_TEAM_E: { type: Schema.Types.String },
  E_SECTION_E: { type: Schema.Types.String },
  SortID: { type: Schema.Types.String },
  OrgParent1: { type: Schema.Types.String },
  OrgParent2: { type: Schema.Types.String },
  OrgParentCode1: { type: Schema.Types.String },
  OrgParentCode2: { type: Schema.Types.String },
  OrgParentEN1: { type: Schema.Types.String },
  OrgParentEN2: { type: Schema.Types.String },
});

const Cat_OrgUnitModel = mongoose.model("Cat_OrgUnit", Cat_OrgUnitSchema);

module.exports = Cat_OrgUnitModel;
