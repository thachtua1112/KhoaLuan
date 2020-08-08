const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewStaffSchema = new Schema
({
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
    Gender: { type: Schema.Types.String },
    DateOfBirth: { type: Schema.Types.Date },
    PlaceOfBirth: { type: Schema.Types.String },
    IDNo: { type: Schema.Types.String },
    IDDateOfIssue: { type: Schema.Types.Date },
    IDPlaceOfIssue: { type: Schema.Types.String },
    PassportNo: { type: Schema.Types.String },
    PassportDateOfExpiry: { type: Schema.Types.Date },
    PassportDateOfIssue: { type: Schema.Types.Date },
    PassportPlaceOfIssue: { type: Schema.Types.String },
    Cellphone: { type: Schema.Types.String },
    DateOfEffect: { type: Schema.Types.Date },
    PAddress: { type: Schema.Types.String },
    DayOfBirth: { type: Schema.Types.Number },
    MonthOfBirth: { type: Schema.Types.Number },
    YearOfBirth: { type: Schema.Types.Number },
    MarriageStatus: { type: Schema.Types.String },

    NationalityID: { type: Schema.Types.String },
    EthnicID: { type: Schema.Types.String },
    ReligionID: { type: Schema.Types.String },

    UserUpdate: { type: Schema.Types.String },
    UserCreate: { type: Schema.Types.String },
    DateCreate: { type: Schema.Types.Date },
    DateUpdate: { type: Schema.Types.Date },
 
    WorkPlaceID: { type: Schema.Types.String },
    DateApplyAttendanceCode: { type: Schema.Types.Date },
    Order: { type: Schema.Types.String },
 
});
const NewStaffModel = mongoose.model("New_Hre_Profiles", NewStaffSchema);

module.exports = NewStaffModel;
