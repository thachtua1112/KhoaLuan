const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Hre_ProfileSchema = new Schema({
  /*
  ID: { type: Schema.Types.String },
  ProfileName: { type: Schema.Types.String },
  NameFamily: { type: Schema.Types.String },
  FirstName: { type: Schema.Types.String },
  NameEnglish: { type: Schema.Types.String },
  CodeEmp: { type: Schema.Types.String },
  CodeTax: { type: Schema.Types.String },
  CodeAttendance: { type: Schema.Types.String },
  StatusSyn: { type: Schema.Types.String },
  DateHire: { type: Schema.Types.Date },
  DateEndProbation: { type: Schema.Types.Date },
  DateQuit: { type: Schema.Types.Date },
  OrgStructureID: { type: Schema.Types.String },
  PositionID: { type: Schema.Types.String },
  DateOfEffect: { type: Schema.Types.Date },
  Gender: { type: Schema.Types.String },
  DateOfBirth: { type: Schema.Types.Date },
  PlaceOfBirth: { type: Schema.Types.String },
  NationalityID: { type: Schema.Types.String },
  EthnicID: { type: Schema.Types.String },
  ReligionID: { type: Schema.Types.String },
  IDNo: { type: Schema.Types.String },
  IDDateOfIssue: { type: Schema.Types.Date },
  IDPlaceOfIssue: { type: Schema.Types.String },
  PassportNo: { type: Schema.Types.String },
  PassportDateOfExpiry: { type: Schema.Types.Date },
  PassportDateOfIssue: { type: Schema.Types.Date },
  PassportPlaceOfIssue: { type: Schema.Types.String },
  Cellphone: { type: Schema.Types.String },
  JobTitleID: { type: Schema.Types.String },
  EducationLevelID: { type: Schema.Types.String },
  ResReasonID: { type: Schema.Types.String },
  MarriageStatus: { type: Schema.Types.String },
  ResignNo: { type: Schema.Types.String },
  UserUpdate: { type: Schema.Types.String },
  UserCreate: { type: Schema.Types.String },
  DateCreate: { type: Schema.Types.Date },
  DateUpdate: { type: Schema.Types.Date },
  DayOfBirth: { type: Schema.Types.Number },
  MonthOfBirth: { type: Schema.Types.Number },
  YearOfBirth: { type: Schema.Types.Number },
  WorkPlaceID: { type: Schema.Types.String },
  DateApplyAttendanceCode: { type: Schema.Types.Date },
  Order: { type: Schema.Types.String },
  PAddress: { type: Schema.Types.String },
  SocialInsPlaceID: { type: Schema.Types.String },
  CompanyID: { type: Schema.Types.String },
  SortID: { type: Schema.Types.Number },
  ProbationTime: { type: Schema.Types.String },
  ProbationTimeUnit: { type: Schema.Types.String },
  DateSenior: { type: Schema.Types.String },
  ReplaceForProfileID: { type: Schema.Types.String },
  ReplaceForReasonID: { type: Schema.Types.String },
  Career: { type: Schema.Types.String },
  StrongPoint: { type: Schema.Types.String },
  HealthStatus: { type: Schema.Types.String },
  Detention: { type: Schema.Types.String },
  JoinForeignOrganization: { type: Schema.Types.String },
  ForeignRelatives: { type: Schema.Types.String },
  SocialInsReserveDate: { type: Schema.Types.String },
  SocialInsDeliveryDate: { type: Schema.Types.String },
  SocialInsAppointmentDate: { type: Schema.Types.String },
  SocialInsNote: { type: Schema.Types.String },
  DateComeBack: { type: Schema.Types.String },
  UsualAllowanceGroupID: { type: Schema.Types.String },
  ProfileMoreInfoID: { type: Schema.Types.String },
  IsNotComputProductSalary: { type: Schema.Types.String },
  DayOfAnnualLeave: { type: Schema.Types.String },
  NoSendMailProbation: { type: Schema.Types.String },
  AreaPostJobWorkID: { type: Schema.Types.String },
  AreaPostJobID: { type: Schema.Types.String },
  Fingercode: { type: Schema.Types.String },
  IDCardCodeAtt: { type: Schema.Types.String },
  StatusItg: { type: Schema.Types.String },
  */
  // ProfileID: { type: Schema.Types.String },
  ID: { type: Schema.Types.String },
  ProfileName: { type: Schema.Types.String },
  NameFamily: { type: Schema.Types.String },
  FirstName: { type: Schema.Types.String },
  NameEnglish: { type: Schema.Types.String },
  CodeEmp: { type: Schema.Types.String },
  CodeTax: { type: Schema.Types.String },
  CodeAttendance: { type: Schema.Types.String },
  StatusSyn: { type: Schema.Types.String },
  DateHire: { type: Schema.Types.Date },
  DateEndProbation: { type: Schema.Types.Date },
  DateQuit: { type: Schema.Types.Date },
  OrgStructureID: { type: Schema.Types.String },
  PositionID: { type: Schema.Types.String },
  DateOfEffect: { type: Schema.Types.Date },
  Gender: { type: Schema.Types.String },
  DateOfBirth: { type: Schema.Types.Date },
  PlaceOfBirth: { type: Schema.Types.String },
  NationalityID: { type: Schema.Types.String },
  EthnicID: { type: Schema.Types.String },
  ReligionID: { type: Schema.Types.String },
  IDNo: { type: Schema.Types.String },
  IDDateOfIssue: { type: Schema.Types.Date },
  IDPlaceOfIssue: { type: Schema.Types.String },
  PassportNo: { type: Schema.Types.String },
  PassportDateOfExpiry: { type: Schema.Types.Date },
  PassportDateOfIssue: { type: Schema.Types.Date },
  PassportPlaceOfIssue: { type: Schema.Types.String },
  Cellphone: { type: Schema.Types.String },
  JobTitleID: { type: Schema.Types.String },
  EducationLevelID: { type: Schema.Types.String },
  ResReasonID: { type: Schema.Types.String },
  MarriageStatus: { type: Schema.Types.String },
  ResignNo: { type: Schema.Types.String },
  UserUpdate: { type: Schema.Types.String },
  UserCreate: { type: Schema.Types.String },
  DateCreate: { type: Schema.Types.Date },
  DateUpdate: { type: Schema.Types.Date },
  DayOfBirth: { type: Schema.Types.Number },
  MonthOfBirth: { type: Schema.Types.Number },
  YearOfBirth: { type: Schema.Types.Number },
  WorkPlaceID: { type: Schema.Types.String },
  DateApplyAttendanceCode: { type: Schema.Types.Date },
  Order: { type: Schema.Types.Number },
  PAddress: { type: Schema.Types.String },
  SocialInsPlaceID: { type: Schema.Types.String },
  CompanyID: { type: Schema.Types.String },
  SortID: { type: Schema.Types.Number },
  ProbationTime: { type: Schema.Types.Number },
  ProbationTimeUnit: { type: Schema.Types.String },
});
Hre_ProfileSchema.virtual("contract", {
  ref: "Hre_Contract",
  localField: "ID",
  foreignField: "ProfileID",
  justOne: true,
});

Hre_ProfileSchema.virtual("Position", {
  ref: "Cat_Position",
  localField: "PositionID",
  foreignField: "ID",
  justOne: true,
});

Hre_ProfileSchema.virtual("OrgStructure", {
  ref: "Cat_OrgStructure",
  localField: "OrgStructureID",
  foreignField: "ID",
  justOne: true,
});

Hre_ProfileSchema.virtual("Unit", {
  ref: "Cat_OrgUnit",
  localField: "OrgStructureID",
  foreignField: "OrgStructureID",
  justOne: true,
});

Hre_ProfileSchema.virtual("ContractType", {
  ref: "Cat_ContractType",
  localField: "ContractTypeID",
  foreignField: "ID",
});

Hre_ProfileSchema.set("toObject", { virtuals: true });
Hre_ProfileSchema.set("toJSON", { virtuals: true });

const Hre_ProfileModel = mongoose.model("Hre_Profile", Hre_ProfileSchema);

module.exports = Hre_ProfileModel;
