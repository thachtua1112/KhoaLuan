const ProfileFields = [
  { _style: { width: "300px" }, key: "ID", label: "id" },
  { _style: { width: "300px" }, key: "ProfileName", label: "profilename" },
  { _style: { width: "300px" }, key: "NameFamily", label: "namefamily" },
  { _style: { width: "300px" }, key: "FirstName", label: "firstname" },
  { _style: { width: "300px" }, key: "NameEnglish", label: "nameenglish" },
  { _style: { width: "300px" }, key: "ImagePath", label: "imagepath" },
  { _style: { width: "300px" }, key: "CodeEmp", label: "codeemp" },
  { _style: { width: "300px" }, key: "CodeTax", label: "codetax" },
  {
    _style: { width: "300px" },
    key: "CodeAttendance",
    label: "codeattendance",
  },
  { _style: { width: "300px" }, key: "StatusSyn", label: "statussyn" },
  { _style: { width: "300px" }, key: "DateHire", label: "datehire" },
  {
    _style: { width: "300px" },
    key: "DateEndProbation",
    label: "dateendprobation",
  },
  { _style: { width: "300px" }, key: "DateQuit", label: "datequit" },
  {
    _style: { width: "300px" },
    key: "ResignDescription",

    label: "resigndescription",
  },
  { _style: { width: "300px" }, key: "CandidateID", label: "candidateid" },
  { _style: { width: "300px" }, key: "WorkGroupID", label: "workgroupid" },
  {
    _style: { width: "300px" },
    key: "OrgStructureID",

    label: "orgstructureid",
  },
  { _style: { width: "300px" }, key: "PositionID", label: "positionid" },
  { _style: { width: "300px" }, key: "DateOfEffect", label: "dateofeffect" },
  { _style: { width: "300px" }, key: "CostCentreID", label: "costcentreid" },
  { _style: { width: "300px" }, key: "LaborType", label: "labortype" },
  { _style: { width: "300px" }, key: "WorkingPlace", label: "workingplace" },
  { _style: { width: "300px" }, key: "Supervisor", label: "supervisor" },
  {
    _style: { width: "300px" },
    key: "SocialInsOldNo",

    label: "socialinsoldno",
  },
  { _style: { width: "300px" }, key: "SocialInsNo", label: "socialinsno" },
  {
    _style: { width: "300px" },
    key: "SocialInsDateReg",

    label: "socialinsdatereg",
  },
  {
    _style: { width: "300px" },
    key: "SocialInsIssueDate",

    label: "socialinsissuedate",
  },
  {
    _style: { width: "300px" },
    key: "SocialInsIssuePlace",

    label: "socialinsissueplace",
  },
  { _style: { width: "300px" }, key: "HealthInsNo", label: "healthinsno" },
  {
    _style: { width: "300px" },
    key: "HealthInsIssueDate",

    label: "healthinsissuedate",
  },
  {
    _style: { width: "300px" },
    key: "HealthInsExpiredDate",

    label: "healthinsexpireddate",
  },
  {
    _style: { width: "300px" },
    key: "HealthInsIssuePlace",

    label: "healthinsissueplace",
  },
  {
    _style: { width: "300px" },
    key: "HealthTreatmentPlace",

    label: "healthtreatmentplace",
  },
  {
    _style: { width: "300px" },
    key: "HealthTreatmentProvince",

    label: "healthtreatmentprovince",
  },
  { _style: { width: "300px" }, key: "Gender", label: "gender" },
  { _style: { width: "300px" }, key: "DateOfBirth", label: "dateofbirth" },
  { _style: { width: "300px" }, key: "PlaceOfBirth", label: "placeofbirth" },
  { _style: { width: "300px" }, key: "NationalityID", label: "nationalityid" },
  { _style: { width: "300px" }, key: "EthnicID", label: "ethnicid" },
  { _style: { width: "300px" }, key: "ReligionID", label: "religionid" },
  { _style: { width: "300px" }, key: "BloodType", label: "bloodtype" },
  { _style: { width: "300px" }, key: "Height", label: "height" },
  { _style: { width: "300px" }, key: "Weight", label: "weight" },
  { _style: { width: "300px" }, key: "IDNo", label: "idno" },
  { _style: { width: "300px" }, key: "IDDateOfIssue", label: "iddateofissue" },
  {
    _style: { width: "300px" },
    key: "IDPlaceOfIssue",

    label: "idplaceofissue",
  },
  { _style: { width: "300px" }, key: "PassportNo", label: "passportno" },
  {
    _style: { width: "300px" },
    key: "PassportDateOfExpiry",

    label: "passportdateofexpiry",
  },
  {
    _style: { width: "300px" },
    key: "PassportDateOfIssue",

    label: "passportdateofissue",
  },
  {
    _style: { width: "300px" },
    key: "PassportPlaceOfIssue",

    label: "passportplaceofissue",
  },
  { _style: { width: "300px" }, key: "Email", label: "email" },
  { _style: { width: "300px" }, key: "Email2", label: "email2" },
  { _style: { width: "300px" }, key: "Cellphone", label: "cellphone" },
  { _style: { width: "300px" }, key: "HomePhone", label: "homephone" },
  { _style: { width: "300px" }, key: "BusinessPhone", label: "businessphone" },
  { _style: { width: "300px" }, key: "PAStreet", label: "pastreet" },
  { _style: { width: "300px" }, key: "PADistrictID", label: "padistrictid" },
  { _style: { width: "300px" }, key: "PACityID", label: "pacityid" },
  { _style: { width: "300px" }, key: "TAStreet", label: "tastreet" },
  { _style: { width: "300px" }, key: "TADistrictID", label: "tadistrictid" },
  { _style: { width: "300px" }, key: "TACityID", label: "tacityid" },
  { _style: { width: "300px" }, key: "StatusVerify", label: "statusverify" },
  { _style: { width: "300px" }, key: "JoblabelID", label: "joblabelid" },
  { _style: { width: "300px" }, key: "TagID", label: "tagid" },
  { _style: { width: "300px" }, key: "LabourNo", label: "labourno" },
  {
    _style: { width: "300px" },
    key: "LabourIssueDate",

    label: "labourissuedate",
  },
  {
    _style: { width: "300px" },
    key: "PayrollGroupID",

    label: "payrollgroupid",
  },
  { _style: { width: "300px" }, key: "LaborBookNo", label: "laborbookno" },
  {
    _style: { width: "300px" },
    key: "LaborBookIssueDate",

    label: "laborbookissuedate",
  },
  { _style: { width: "300px" }, key: "RequestDate", label: "requestdate" },
  { _style: { width: "300px" }, key: "EmpTypeID", label: "emptypeid" },
  {
    _style: { width: "300px" },
    key: "EducationLevelID",

    label: "educationlevelid",
  },
  { _style: { width: "300px" }, key: "ResReasonID", label: "resreasonid" },
  {
    _style: { width: "300px" },
    key: "MarriageStatus",

    label: "marriagestatus",
  },
  { _style: { width: "300px" }, key: "ResignNo", label: "resignno" },
  { _style: { width: "300px" }, key: "Forte", label: "forte" },
  { _style: { width: "300px" }, key: "TrainingSkill", label: "trainingskill" },
  {
    _style: { width: "300px" },
    key: "PromotionCondition",

    label: "promotioncondition",
  },
  {
    _style: { width: "300px" },
    key: "PromotionRequest",

    label: "promotionrequest",
  },
  {
    _style: { width: "300px" },
    key: "DeadLineApprove",

    label: "deadlineapprove",
  },
  { _style: { width: "300px" }, key: "Notes2", label: "notes2" },
  { _style: { width: "300px" }, key: "Origin", label: "origin" },
  { _style: { width: "300px" }, key: "ContactName1", label: "contactname1" },
  { _style: { width: "300px" }, key: "ContactName2", label: "contactname2" },
  {
    _style: { width: "300px" },
    key: "ContactRelation1",

    label: "contactrelation1",
  },
  {
    _style: { width: "300px" },
    key: "ContactRelation2",

    label: "contactrelation2",
  },
  { _style: { width: "300px" }, key: "ContactPhone1", label: "contactphone1" },
  { _style: { width: "300px" }, key: "ContactPhone2", label: "contactphone2" },
  {
    _style: { width: "300px" },
    key: "ContactAddress1",

    label: "contactaddress1",
  },
  {
    _style: { width: "300px" },
    key: "ContactAddress2",

    label: "contactaddress2",
  },
  { _style: { width: "300px" }, key: "ServerUpdate", label: "serverupdate" },
  { _style: { width: "300px" }, key: "ServerCreate", label: "servercreate" },
  { _style: { width: "300px" }, key: "UserUpdate", label: "userupdate" },
  { _style: { width: "300px" }, key: "UserCreate", label: "usercreate" },
  { _style: { width: "300px" }, key: "DateCreate", label: "datecreate" },
  { _style: { width: "300px" }, key: "DateUpdate", label: "dateupdate" },
  { _style: { width: "300px" }, key: "UserLockID", label: "userlockid" },
  { _style: { width: "300px" }, key: "DateLock", label: "datelock" },
  { _style: { width: "300px" }, key: "IsDelete", label: "isdelete" },
  { _style: { width: "300px" }, key: "IPCreate", label: "ipcreate" },
  { _style: { width: "300px" }, key: "IPUpdate", label: "ipupdate" },
  { _style: { width: "300px" }, key: "biography", label: "biography" },
  { _style: { width: "300px" }, key: "Notes", label: "notes" },
  {
    _style: { width: "300px" },
    key: "JoblabelPotentinalID",

    label: "joblabelpotentinalid",
  },
  { _style: { width: "300px" }, key: "DateFrom", label: "datefrom" },
  { _style: { width: "300px" }, key: "DateTo", label: "dateto" },
  {
    _style: { width: "300px" },
    key: "LabourBookPlaceOfIssue",

    label: "labourbookplaceofissue",
  },
  { _style: { width: "300px" }, key: "Smoke", label: "smoke" },
  { _style: { width: "300px" }, key: "TypeOfVehicle", label: "typeofvehicle" },
  {
    _style: { width: "300px" },
    key: "DrivingLisenceNo",

    label: "drivinglisenceno",
  },
  {
    _style: { width: "300px" },
    key: "StoredDocuments",

    label: "storeddocuments",
  },
  { _style: { width: "300px" }, key: "LockerID", label: "lockerid" },
  { _style: { width: "300px" }, key: "UnEmpInsNo", label: "unempinsno" },
  {
    _style: { width: "300px" },
    key: "UnEmpInsDateReg",

    label: "unempinsdatereg",
  },
  { _style: { width: "300px" }, key: "UnEmpInsPlace", label: "unempinsplace" },
  { _style: { width: "300px" }, key: "ReceiveUnEmp", label: "receiveunemp" },
  {
    _style: { width: "300px" },
    key: "ReceiveSocialIns",

    label: "receivesocialins",
  },
  {
    _style: { width: "300px" },
    key: "ReceiveSocialInsDate",

    label: "receivesocialinsdate",
  },
  { _style: { width: "300px" }, key: "FileStore", label: "filestore" },
  { _style: { width: "300px" }, key: "FileAttach", label: "fileattach" },
  {
    _style: { width: "300px" },
    key: "HealthTreatmentPlaceCode",

    label: "healthtreatmentplacecode",
  },
  { _style: { width: "300px" }, key: "DayOfBirth", label: "dayofbirth" },
  { _style: { width: "300px" }, key: "MonthOfBirth", label: "monthofbirth" },
  { _style: { width: "300px" }, key: "YearOfBirth", label: "yearofbirth" },
  { _style: { width: "300px" }, key: "IsBlackList", label: "isblacklist" },
  {
    _style: { width: "300px" },
    key: "HighSupervisor",

    label: "highsupervisor",
  },
  { _style: { width: "300px" }, key: "Notes3", label: "notes3" },
  {
    _style: { width: "300px" },
    key: "IsDrivingLisence",

    label: "isdrivinglisence",
  },
  {
    _style: { width: "300px" },
    key: "ProbExtendDays",

    label: "probextenddays",
  },
  { _style: { width: "300px" }, key: "IsHeadDept", label: "isheaddept" },
  { _style: { width: "300px" }, key: "IsInsFollowUp", label: "isinsfollowup" },
  { _style: { width: "300px" }, key: "CommentIns", label: "commentins" },
  {
    _style: { width: "300px" },
    key: "ReceiveHealthIns",

    label: "receivehealthins",
  },
  {
    _style: { width: "300px" },
    key: "ReceiveHealthInsDate",

    label: "receivehealthinsdate",
  },
  {
    _style: { width: "300px" },
    key: "UnEmpInsCountMonthOld",

    label: "unempinscountmonthold",
  },
  {
    _style: { width: "300px" },
    key: "Specialization",

    label: "specialization",
  },
  {
    _style: { width: "300px" },
    key: "ProbExtendDate",

    label: "probextenddate",
  },
  {
    _style: { width: "300px" },
    key: "SocialInsSubmitBookDate",

    label: "socialinssubmitbookdate",
  },
  {
    _style: { width: "300px" },
    key: "SocialInsSubmitBookStatus",

    label: "socialinssubmitbookstatus",
  },
  {
    _style: { width: "300px" },
    key: "PasswordPaySlip",

    label: "passwordpayslip",
  },
  {
    _style: { width: "300px" },
    key: "WorkPermitStatus",

    label: "workpermitstatus",
  },
  { _style: { width: "300px" }, key: "WorkPermitNo", label: "workpermitno" },
  {
    _style: { width: "300px" },
    key: "WorkPermitInsDate",

    label: "workpermitinsdate",
  },
  {
    _style: { width: "300px" },
    key: "WorkPermitExpiredDate",

    label: "workpermitexpireddate",
  },
  {
    _style: { width: "300px" },
    key: "DateOfIssuedTaxCode",

    label: "dateofissuedtaxcode",
  },
  { _style: { width: "300px" }, key: "DateQuitSign", label: "datequitsign" },
  { _style: { width: "300px" }, key: "LocationCode", label: "locationcode" },
  { _style: { width: "300px" }, key: "SupervisorID", label: "supervisorid" },
  {
    _style: { width: "300px" },
    key: "HighSupervisorID",

    label: "highsupervisorid",
  },
  { _style: { width: "300px" }, key: "WorkPlaceID", label: "workplaceid" },
  {
    _style: { width: "300px" },
    key: "PasswordPaySliptDefault",

    label: "passwordpaysliptdefault",
  },
  { _style: { width: "300px" }, key: "SikillLevel", label: "sikilllevel" },
  {
    _style: { width: "300px" },
    key: "DateApplyAttendanceCode",

    label: "dateapplyattendancecode",
  },
  { _style: { width: "300px" }, key: "FormType", label: "formtype" },
  {
    _style: { width: "300px" },
    key: "PlaceOfIssueID",

    label: "placeofissueid",
  },
  { _style: { width: "300px" }, key: "ResonBackList", label: "resonbacklist" },
  { _style: { width: "300px" }, key: "DatePrepare", label: "dateprepare" },
  {
    _style: { width: "300px" },
    key: "PlaceOfBirthID",

    label: "placeofbirthid",
  },
  {
    _style: { width: "300px" },
    key: "OrgLineDefaultID",

    label: "orglinedefaultid",
  },
  {
    _style: { width: "300px" },
    key: "ProducteLineDefaultID",

    label: "productelinedefaultid",
  },
  {
    _style: { width: "300px" },
    key: "ProvinceInsuranceID",

    label: "provinceinsuranceid",
  },
  {
    _style: { width: "300px" },
    key: "DateQuitRequest",

    label: "datequitrequest",
  },
  { _style: { width: "300px" }, key: "ProfileSign", label: "profilesign" },
  {
    _style: { width: "300px" },
    key: "AddressEmergency",

    label: "addressemergency",
  },
  {
    _style: { width: "300px" },
    key: "PassportPlaceID",

    label: "passportplaceid",
  },
  { _style: { width: "300px" }, key: "VillageID", label: "villageid" },
  { _style: { width: "300px" }, key: "TAVillageID", label: "tavillageid" },
  { _style: { width: "300px" }, key: "Order", label: "order" },
  { _style: { width: "300px" }, key: "MarkColor", label: "markcolor" },
  {
    _style: { width: "300px" },
    key: "IsExistentConcurrentPosition",

    label: "isexistentconcurrentposition",
  },
  { _style: { width: "300px" }, key: "PositionRate", label: "positionrate" },
  { _style: { width: "300px" }, key: "PAddressID", label: "paddressid" },
  { _style: { width: "300px" }, key: "TAddressID", label: "taddressid" },
  {
    _style: { width: "300px" },
    key: "IsRegisterSocialIns",

    label: "isregistersocialins",
  },
  {
    _style: { width: "300px" },
    key: "IsRegisterHealthIns",

    label: "isregisterhealthins",
  },
  {
    _style: { width: "300px" },
    key: "IsRegisterUnEmploymentIns",

    label: "isregisterunemploymentins",
  },
  {
    _style: { width: "300px" },
    key: "GraduatedLevelID",

    label: "graduatedlevelid",
  },
  { _style: { width: "300px" }, key: "ShopID", label: "shopid" },
  { _style: { width: "300px" }, key: "TCountryID", label: "tcountryid" },
  { _style: { width: "300px" }, key: "TProvinceID", label: "tprovinceid" },
  { _style: { width: "300px" }, key: "TDistrictID", label: "tdistrictid" },
  { _style: { width: "300px" }, key: "TAddress", label: "taddress" },
  { _style: { width: "300px" }, key: "PCountryID", label: "pcountryid" },
  { _style: { width: "300px" }, key: "PProvinceID", label: "pprovinceid" },
  { _style: { width: "300px" }, key: "PDistrictID", label: "pdistrictid" },
  { _style: { width: "300px" }, key: "PAddress", label: "paddress" },
  {
    _style: { width: "300px" },
    key: "SalaryClassName",

    label: "salaryclassname",
  },
  { _style: { width: "300px" }, key: "ReasonDeny", label: "reasondeny" },
  { _style: { width: "300px" }, key: "StatusHire", label: "statushire" },
  { _style: { width: "300px" }, key: "SalaryClassID", label: "salaryclassid" },
  { _style: { width: "300px" }, key: "IsHoldSal", label: "isholdsal" },
  { _style: { width: "300px" }, key: "UserCreateID", label: "usercreateid" },
  { _style: { width: "300px" }, key: "TypeSuspense", label: "typesuspense" },
  { _style: { width: "300px" }, key: "MonthHoldSal", label: "monthholdsal" },
  {
    _style: { width: "300px" },
    key: "ContractTypeID",

    label: "contracttypeid",
  },
  { _style: { width: "300px" }, key: "TypeOfStop", label: "typeofstop" },
  { _style: { width: "300px" }, key: "Settlement", label: "settlement" },
  {
    _style: { width: "300px" },
    key: "MonnthSettlement",

    label: "monnthsettlement",
  },
  { _style: { width: "300px" }, key: "IsSettlement", label: "issettlement" },
  { _style: { width: "300px" }, key: "RegionID", label: "regionid" },
  {
    _style: { width: "300px" },
    key: "SocialInsPlaceID",

    label: "socialinsplaceid",
  },
  { _style: { width: "300px" }, key: "TypeOfStopID", label: "typeofstopid" },
  { _style: { width: "300px" }, key: "CodeEmpClient", label: "codeempclient" },
  { _style: { width: "300px" }, key: "CostSourceID", label: "costsourceid" },
  { _style: { width: "300px" }, key: "VehicleID", label: "vehicleid" },
  { _style: { width: "300px" }, key: "ShoeSize", label: "shoesize" },
  { _style: { width: "300px" }, key: "StopWorkType", label: "stopworktype" },
  {
    _style: { width: "300px" },
    key: "NameContactForEmergency",

    label: "namecontactforemergency",
  },
  {
    _style: { width: "300px" },
    key: "CellPhoneForEmergency",

    label: "cellphoneforemergency",
  },
  {
    _style: { width: "300px" },
    key: "IsPeriodicExamination",

    label: "isperiodicexamination",
  },
  { _style: { width: "300px" }, key: "AbilityTileID", label: "abilitytileid" },
  {
    _style: { width: "300px" },
    key: "IsTradeUnionist",

    label: "istradeunionist",
  },
  {
    _style: { width: "300px" },
    key: "TradeUnionistEnrolledDate",

    label: "tradeunionistenrolleddate",
  },
  {
    _style: { width: "300px" },
    key: "TradeUnionistPositionID",

    label: "tradeunionistpositionid",
  },
  { _style: { width: "300px" }, key: "CoatSize", label: "coatsize" },
  { _style: { width: "300px" }, key: "PantSize", label: "pantsize" },
  {
    _style: { width: "300px" },
    key: "TypeOfTransferID",

    label: "typeoftransferid",
  },
  {
    _style: { width: "300px" },
    key: "MidSupervisorID",

    label: "midsupervisorid",
  },
  { _style: { width: "300px" }, key: "MiddleName", label: "middlename" },
  {
    _style: { width: "300px" },
    key: "NationalityGroupID",

    label: "nationalitygroupid",
  },
  {
    _style: { width: "300px" },
    key: "EmployeeGroupID",

    label: "employeegroupid",
  },
  {
    _style: { width: "300px" },
    key: "AddressSecondaryEmergency",

    label: "addresssecondaryemergency",
  },
  {
    _style: { width: "300px" },
    key: "NameForSecondaryEmergency",

    label: "nameforsecondaryemergency",
  },
  {
    _style: { width: "300px" },
    key: "CellPhoneForSecondaryEmergency",

    label: "cellphoneforsecondaryemergency",
  },
  {
    _style: { width: "300px" },
    key: "SubjectGroupID",

    label: "subjectgroupid",
  },
  { _style: { width: "300px" }, key: "SubjectID", label: "subjectid" },
  {
    _style: { width: "300px" },
    key: "CostActivityID",

    label: "costactivityid",
  },
  {
    _style: { width: "300px" },
    key: "ProvinceHospital",

    label: "provincehospital",
  },
  {
    _style: { width: "300px" },
    key: "EmploymentType",

    label: "employmenttype",
  },
  { _style: { width: "300px" }, key: "PositionID1", label: "positionid1" },
  { _style: { width: "300px" }, key: "PositionID2", label: "positionid2" },
  { _style: { width: "300px" }, key: "PositionID3", label: "positionid3" },
  { _style: { width: "300px" }, key: "OldIDNo", label: "oldidno" },
  { _style: { width: "300px" }, key: "IsTopPosition", label: "istopposition" },
  {
    _style: { width: "300px" },
    key: "CutOffDurationID",

    label: "cutoffdurationid",
  },
  {
    _style: { width: "300px" },
    key: "JobDescription",

    label: "jobdescription",
  },
  { _style: { width: "300px" }, key: "Permission", label: "permission" },
  { _style: { width: "300px" }, key: "TaskLongTerm", label: "tasklongterm" },
  { _style: { width: "300px" }, key: "TaskShortTerm", label: "taskshortterm" },
  { _style: { width: "300px" }, key: "TaxDepartment", label: "taxdepartment" },
  { _style: { width: "300px" }, key: "CompanyID", label: "companyid" },
  { _style: { width: "300px" }, key: "Email3", label: "email3" },
  { _style: { width: "300px" }, key: "Email4", label: "email4" },
  { _style: { width: "300px" }, key: "Relationship1", label: "relationship1" },
  { _style: { width: "300px" }, key: "Relationship2", label: "relationship2" },
  { _style: { width: "300px" }, key: "IsTalent", label: "istalent" },
  {
    _style: { width: "300px" },
    key: "IsNotEnoughHealth",

    label: "isnotenoughhealth",
  },
  { _style: { width: "300px" }, key: "IDNoCountryID", label: "idnocountryid" },
  {
    _style: { width: "300px" },
    key: "IDNoProvinceID",

    label: "idnoprovinceid",
  },
  {
    _style: { width: "300px" },
    key: "IDNoDistrictID",

    label: "idnodistrictid",
  },
  {
    _style: { width: "300px" },
    key: "IDNoAVillageID",

    label: "idnoavillageid",
  },
  { _style: { width: "300px" }, key: "IDNoAddress", label: "idnoaddress" },
  { _style: { width: "300px" }, key: "SortID", label: "sortid" },
  {
    _style: { width: "300px" },
    key: "PayrollCategoryID",

    label: "payrollcategoryid",
  },
  {
    _style: { width: "300px" },
    key: "TradeUnionistEndDate",

    label: "tradeunionistenddate",
  },
  { _style: { width: "300px" }, key: "DormitoryID", label: "dormitoryid" },
  { _style: { width: "300px" }, key: "RootProfileID", label: "rootprofileid" },
  { _style: { width: "300px" }, key: "SpecialAreaID", label: "specialareaid" },
  { _style: { width: "300px" }, key: "DatehireNew", label: "datehirenew" },
  {
    _style: { width: "300px" },
    key: "UnitStructureID",

    label: "unitstructureid",
  },
  { _style: { width: "300px" }, key: "IDCard", label: "idcard" },
  {
    _style: { width: "300px" },
    key: "IDCardDateOfIssue",

    label: "idcarddateofissue",
  },
  {
    _style: { width: "300px" },
    key: "IDCardPlaceOfIssue",

    label: "idcardplaceofissue",
  },
  {
    _style: { width: "300px" },
    key: "HealthTreatmentPlaceID",

    label: "healthtreatmentplaceid",
  },
  { _style: { width: "300px" }, key: "OtherReason", label: "otherreason" },
  { _style: { width: "300px" }, key: "ProbationTime", label: "probationtime" },
  {
    _style: { width: "300px" },
    key: "ProbationTimeUnit",

    label: "probationtimeunit",
  },
  { _style: { width: "300px" }, key: "DateSenior", label: "datesenior" },
  {
    _style: { width: "300px" },
    key: "ReplaceForProfileID",

    label: "replaceforprofileid",
  },
  {
    _style: { width: "300px" },
    key: "ReplaceForReasonID",

    label: "replaceforreasonid",
  },
  { _style: { width: "300px" }, key: "Career", label: "career" },
  { _style: { width: "300px" }, key: "StrongPoint", label: "strongpoint" },
  { _style: { width: "300px" }, key: "HealthStatus", label: "healthstatus" },
  { _style: { width: "300px" }, key: "Detention", label: "detention" },
  {
    _style: { width: "300px" },
    key: "JoinForeignOrganization",

    label: "joinforeignorganization",
  },
  {
    _style: { width: "300px" },
    key: "ForeignRelatives",

    label: "foreignrelatives",
  },
  {
    _style: { width: "300px" },
    key: "SocialInsReserveDate",

    label: "socialinsreservedate",
  },
  {
    _style: { width: "300px" },
    key: "SocialInsDeliveryDate",

    label: "socialinsdeliverydate",
  },
  {
    _style: { width: "300px" },
    key: "SocialInsAppointmentDate",

    label: "socialinsappointmentdate",
  },
  { _style: { width: "300px" }, key: "SocialInsNote", label: "socialinsnote" },
  { _style: { width: "300px" }, key: "DateComeBack", label: "datecomeback" },
  {
    _style: { width: "300px" },
    key: "UsualAllowanceGroupID",

    label: "usualallowancegroupid",
  },
  {
    _style: { width: "300px" },
    key: "ProfileMoreInfoID",

    label: "profilemoreinfoid",
  },
  {
    _style: { width: "300px" },
    key: "IsNotComputProductSalary",

    label: "isnotcomputproductsalary",
  },
  {
    _style: { width: "300px" },
    key: "DayOfAnnualLeave",

    label: "dayofannualleave",
  },
  {
    _style: { width: "300px" },
    key: "NoSendMailProbation",

    label: "nosendmailprobation",
  },
  {
    _style: { width: "300px" },
    key: "AreaPostJobWorkID",

    label: "areapostjobworkid",
  },
  { _style: { width: "300px" }, key: "AreaPostJobID", label: "areapostjobid" },
  { _style: { width: "300px" }, key: "Fingercode", label: "fingercode" },
  { _style: { width: "300px" }, key: "IDCardCodeAtt", label: "idcardcodeatt" },
  { _style: { width: "300px" }, key: "StatusItg", label: "statusitg" },
];
const defaultProfileFields = [
  { _style: { width: "100px" }, key: "CodeEmp", label: "Mã nhân viên" },
  { _style: { width: "200px" }, key: "ProfileName", label: "Tên nhân viên" },
  {
    _style: { width: "300px" },
    key: "OrgStructureID",

    label: "Phòng ban",
  },
  { _style: { width: "150px" }, key: "Position", label: "Chức vụ" },
  { _style: { width: "100px" }, key: "StatusSyn", label: "Trạng thái" },
];
export { ProfileFields, defaultProfileFields };
