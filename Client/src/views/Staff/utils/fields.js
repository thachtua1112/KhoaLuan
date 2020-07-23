const ProfileFields = [
  { width: 300, field: "ID", title: "id" },
  { width: 300, field: "ProfileName", title: "profilename" },
  { width: 300, field: "NameFamily", title: "namefamily" },
  { width: 300, field: "FirstName", title: "firstname" },
  { width: 300, field: "NameEnglish", title: "nameenglish" },
  { width: 300, field: "ImagePath", title: "imagepath" },
  { width: 300, field: "CodeEmp", title: "codeemp" },
  { width: 300, field: "CodeTax", title: "codetax" },
  //   {
  //     width: 300,
  //     field: "CodeAttendance",

  //     title: "codeattendance",
  //   },
  //   { width: 300, field: "StatusSyn", title: "statussyn" },
  //   { width: 300, field: "DateHire", title: "datehire" },
  //   {
  //     width: 300,
  //     field: "DateEndProbation",

  //     title: "dateendprobation",
  //   },
  //   { width: 300, field: "DateQuit", title: "datequit" },
  //   {
  //     width: 300,
  //     field: "ResignDescription",

  //     title: "resigndescription",
  //   },
  //   { width: 300, field: "CandidateID", title: "candidateid" },
  //   { width: 300, field: "WorkGroupID", title: "workgroupid" },
  //   {
  //     width: 300,
  //     field: "OrgStructureID",

  //     title: "orgstructureid",
  //   },
  //   { width: 300, field: "PositionID", title: "positionid" },
  //   { width: 300, field: "DateOfEffect", title: "dateofeffect" },
  //   { width: 300, field: "CostCentreID", title: "costcentreid" },
  //   { width: 300, field: "LaborType", title: "labortype" },
  //   { width: 300, field: "WorkingPlace", title: "workingplace" },
  //   { width: 300, field: "Supervisor", title: "supervisor" },
  //   {
  //     width: 300,
  //     field: "SocialInsOldNo",

  //     title: "socialinsoldno",
  //   },
  //   { width: 300, field: "SocialInsNo", title: "socialinsno" },
  //   {
  //     width: 300,
  //     field: "SocialInsDateReg",

  //     title: "socialinsdatereg",
  //   },
  //   {
  //     width: 300,
  //     field: "SocialInsIssueDate",

  //     title: "socialinsissuedate",
  //   },
  //   {
  //     width: 300,
  //     field: "SocialInsIssuePlace",

  //     title: "socialinsissueplace",
  //   },
  //   { width: 300, field: "HealthInsNo", title: "healthinsno" },
  //   {
  //     width: 300,
  //     field: "HealthInsIssueDate",

  //     title: "healthinsissuedate",
  //   },
  //   {
  //     width: 300,
  //     field: "HealthInsExpiredDate",

  //     title: "healthinsexpireddate",
  //   },
  //   {
  //     width: 300,
  //     field: "HealthInsIssuePlace",

  //     title: "healthinsissueplace",
  //   },
  //   {
  //     width: 300,
  //     field: "HealthTreatmentPlace",

  //     title: "healthtreatmentplace",
  //   },
  //   {
  //     width: 300,
  //     field: "HealthTreatmentProvince",

  //     title: "healthtreatmentprovince",
  //   },
  //   { width: 300, field: "Gender", title: "gender" },
  //   { width: 300, field: "DateOfBirth", title: "dateofbirth" },
  //   { width: 300, field: "PlaceOfBirth", title: "placeofbirth" },
  //   { width: 300, field: "NationalityID", title: "nationalityid" },
  //   { width: 300, field: "EthnicID", title: "ethnicid" },
  //   { width: 300, field: "ReligionID", title: "religionid" },
  //   { width: 300, field: "BloodType", title: "bloodtype" },
  //   { width: 300, field: "Height", title: "height" },
  //   { width: 300, field: "Weight", title: "weight" },
  //   { width: 300, field: "IDNo", title: "idno" },
  //   { width: 300, field: "IDDateOfIssue", title: "iddateofissue" },
  //   {
  //     width: 300,
  //     field: "IDPlaceOfIssue",

  //     title: "idplaceofissue",
  //   },
  //   { width: 300, field: "PassportNo", title: "passportno" },
  //   {
  //     width: 300,
  //     field: "PassportDateOfExpiry",

  //     title: "passportdateofexpiry",
  //   },
  //   {
  //     width: 300,
  //     field: "PassportDateOfIssue",

  //     title: "passportdateofissue",
  //   },
  //   {
  //     width: 300,
  //     field: "PassportPlaceOfIssue",

  //     title: "passportplaceofissue",
  //   },
  //   { width: 300, field: "Email", title: "email" },
  //   { width: 300, field: "Email2", title: "email2" },
  //   { width: 300, field: "Cellphone", title: "cellphone" },
  //   { width: 300, field: "HomePhone", title: "homephone" },
  //   { width: 300, field: "BusinessPhone", title: "businessphone" },
  //   { width: 300, field: "PAStreet", title: "pastreet" },
  //   { width: 300, field: "PADistrictID", title: "padistrictid" },
  //   { width: 300, field: "PACityID", title: "pacityid" },
  //   { width: 300, field: "TAStreet", title: "tastreet" },
  //   { width: 300, field: "TADistrictID", title: "tadistrictid" },
  //   { width: 300, field: "TACityID", title: "tacityid" },
  //   { width: 300, field: "StatusVerify", title: "statusverify" },
  //   { width: 300, field: "JobTitleID", title: "jobtitleid" },
  //   { width: 300, field: "TagID", title: "tagid" },
  //   { width: 300, field: "LabourNo", title: "labourno" },
  //   {
  //     width: 300,
  //     field: "LabourIssueDate",

  //     title: "labourissuedate",
  //   },
  //   {
  //     width: 300,
  //     field: "PayrollGroupID",

  //     title: "payrollgroupid",
  //   },
  //   { width: 300, field: "LaborBookNo", title: "laborbookno" },
  //   {
  //     width: 300,
  //     field: "LaborBookIssueDate",

  //     title: "laborbookissuedate",
  //   },
  //   { width: 300, field: "RequestDate", title: "requestdate" },
  //   { width: 300, field: "EmpTypeID", title: "emptypeid" },
  //   {
  //     width: 300,
  //     field: "EducationLevelID",

  //     title: "educationlevelid",
  //   },
  //   { width: 300, field: "ResReasonID", title: "resreasonid" },
  //   {
  //     width: 300,
  //     field: "MarriageStatus",

  //     title: "marriagestatus",
  //   },
  //   { width: 300, field: "ResignNo", title: "resignno" },
  //   { width: 300, field: "Forte", title: "forte" },
  //   { width: 300, field: "TrainingSkill", title: "trainingskill" },
  //   {
  //     width: 300,
  //     field: "PromotionCondition",

  //     title: "promotioncondition",
  //   },
  //   {
  //     width: 300,
  //     field: "PromotionRequest",

  //     title: "promotionrequest",
  //   },
  //   {
  //     width: 300,
  //     field: "DeadLineApprove",

  //     title: "deadlineapprove",
  //   },
  //   { width: 300, field: "Notes2", title: "notes2" },
  //   { width: 300, field: "Origin", title: "origin" },
  //   { width: 300, field: "ContactName1", title: "contactname1" },
  //   { width: 300, field: "ContactName2", title: "contactname2" },
  //   {
  //     width: 300,
  //     field: "ContactRelation1",

  //     title: "contactrelation1",
  //   },
  //   {
  //     width: 300,
  //     field: "ContactRelation2",

  //     title: "contactrelation2",
  //   },
  //   { width: 300, field: "ContactPhone1", title: "contactphone1" },
  //   { width: 300, field: "ContactPhone2", title: "contactphone2" },
  //   {
  //     width: 300,
  //     field: "ContactAddress1",

  //     title: "contactaddress1",
  //   },
  //   {
  //     width: 300,
  //     field: "ContactAddress2",

  //     title: "contactaddress2",
  //   },
  //   { width: 300, field: "ServerUpdate", title: "serverupdate" },
  //   { width: 300, field: "ServerCreate", title: "servercreate" },
  //   { width: 300, field: "UserUpdate", title: "userupdate" },
  //   { width: 300, field: "UserCreate", title: "usercreate" },
  //   { width: 300, field: "DateCreate", title: "datecreate" },
  //   { width: 300, field: "DateUpdate", title: "dateupdate" },
  //   { width: 300, field: "UserLockID", title: "userlockid" },
  //   { width: 300, field: "DateLock", title: "datelock" },
  //   { width: 300, field: "IsDelete", title: "isdelete" },
  //   { width: 300, field: "IPCreate", title: "ipcreate" },
  //   { width: 300, field: "IPUpdate", title: "ipupdate" },
  //   { width: 300, field: "biography", title: "biography" },
  //   { width: 300, field: "Notes", title: "notes" },
  //   {
  //     width: 300,
  //     field: "JobTitlePotentinalID",

  //     title: "jobtitlepotentinalid",
  //   },
  //   { width: 300, field: "DateFrom", title: "datefrom" },
  //   { width: 300, field: "DateTo", title: "dateto" },
  //   {
  //     width: 300,
  //     field: "LabourBookPlaceOfIssue",

  //     title: "labourbookplaceofissue",
  //   },
  //   { width: 300, field: "Smoke", title: "smoke" },
  //   { width: 300, field: "TypeOfVehicle", title: "typeofvehicle" },
  //   {
  //     width: 300,
  //     field: "DrivingLisenceNo",

  //     title: "drivinglisenceno",
  //   },
  //   {
  //     width: 300,
  //     field: "StoredDocuments",

  //     title: "storeddocuments",
  //   },
  //   { width: 300, field: "LockerID", title: "lockerid" },
  //   { width: 300, field: "UnEmpInsNo", title: "unempinsno" },
  //   {
  //     width: 300,
  //     field: "UnEmpInsDateReg",

  //     title: "unempinsdatereg",
  //   },
  //   { width: 300, field: "UnEmpInsPlace", title: "unempinsplace" },
  //   { width: 300, field: "ReceiveUnEmp", title: "receiveunemp" },
  //   {
  //     width: 300,
  //     field: "ReceiveSocialIns",

  //     title: "receivesocialins",
  //   },
  //   {
  //     width: 300,
  //     field: "ReceiveSocialInsDate",

  //     title: "receivesocialinsdate",
  //   },
  //   { width: 300, field: "FileStore", title: "filestore" },
  //   { width: 300, field: "FileAttach", title: "fileattach" },
  //   {
  //     width: 300,
  //     field: "HealthTreatmentPlaceCode",

  //     title: "healthtreatmentplacecode",
  //   },
  //   { width: 300, field: "DayOfBirth", title: "dayofbirth" },
  //   { width: 300, field: "MonthOfBirth", title: "monthofbirth" },
  //   { width: 300, field: "YearOfBirth", title: "yearofbirth" },
  //   { width: 300, field: "IsBlackList", title: "isblacklist" },
  //   {
  //     width: 300,
  //     field: "HighSupervisor",

  //     title: "highsupervisor",
  //   },
  //   { width: 300, field: "Notes3", title: "notes3" },
  //   {
  //     width: 300,
  //     field: "IsDrivingLisence",

  //     title: "isdrivinglisence",
  //   },
  //   {
  //     width: 300,
  //     field: "ProbExtendDays",

  //     title: "probextenddays",
  //   },
  //   { width: 300, field: "IsHeadDept", title: "isheaddept" },
  //   { width: 300, field: "IsInsFollowUp", title: "isinsfollowup" },
  //   { width: 300, field: "CommentIns", title: "commentins" },
  //   {
  //     width: 300,
  //     field: "ReceiveHealthIns",

  //     title: "receivehealthins",
  //   },
  //   {
  //     width: 300,
  //     field: "ReceiveHealthInsDate",

  //     title: "receivehealthinsdate",
  //   },
  //   {
  //     width: 300,
  //     field: "UnEmpInsCountMonthOld",

  //     title: "unempinscountmonthold",
  //   },
  //   {
  //     width: 300,
  //     field: "Specialization",

  //     title: "specialization",
  //   },
  //   {
  //     width: 300,
  //     field: "ProbExtendDate",

  //     title: "probextenddate",
  //   },
  //   {
  //     width: 300,
  //     field: "SocialInsSubmitBookDate",

  //     title: "socialinssubmitbookdate",
  //   },
  //   {
  //     width: 300,
  //     field: "SocialInsSubmitBookStatus",

  //     title: "socialinssubmitbookstatus",
  //   },
  //   {
  //     width: 300,
  //     field: "PasswordPaySlip",

  //     title: "passwordpayslip",
  //   },
  //   {
  //     width: 300,
  //     field: "WorkPermitStatus",

  //     title: "workpermitstatus",
  //   },
  //   { width: 300, field: "WorkPermitNo", title: "workpermitno" },
  //   {
  //     width: 300,
  //     field: "WorkPermitInsDate",

  //     title: "workpermitinsdate",
  //   },
  //   {
  //     width: 300,
  //     field: "WorkPermitExpiredDate",

  //     title: "workpermitexpireddate",
  //   },
  //   {
  //     width: 300,
  //     field: "DateOfIssuedTaxCode",

  //     title: "dateofissuedtaxcode",
  //   },
  //   { width: 300, field: "DateQuitSign", title: "datequitsign" },
  //   { width: 300, field: "LocationCode", title: "locationcode" },
  //   { width: 300, field: "SupervisorID", title: "supervisorid" },
  //   {
  //     width: 300,
  //     field: "HighSupervisorID",

  //     title: "highsupervisorid",
  //   },
  //   { width: 300, field: "WorkPlaceID", title: "workplaceid" },
  //   {
  //     width: 300,
  //     field: "PasswordPaySliptDefault",

  //     title: "passwordpaysliptdefault",
  //   },
  //   { width: 300, field: "SikillLevel", title: "sikilllevel" },
  //   {
  //     width: 300,
  //     field: "DateApplyAttendanceCode",

  //     title: "dateapplyattendancecode",
  //   },
  //   { width: 300, field: "FormType", title: "formtype" },
  //   {
  //     width: 300,
  //     field: "PlaceOfIssueID",

  //     title: "placeofissueid",
  //   },
  //   { width: 300, field: "ResonBackList", title: "resonbacklist" },
  //   { width: 300, field: "DatePrepare", title: "dateprepare" },
  //   {
  //     width: 300,
  //     field: "PlaceOfBirthID",

  //     title: "placeofbirthid",
  //   },
  //   {
  //     width: 300,
  //     field: "OrgLineDefaultID",

  //     title: "orglinedefaultid",
  //   },
  //   {
  //     width: 300,
  //     field: "ProducteLineDefaultID",

  //     title: "productelinedefaultid",
  //   },
  //   {
  //     width: 300,
  //     field: "ProvinceInsuranceID",

  //     title: "provinceinsuranceid",
  //   },
  //   {
  //     width: 300,
  //     field: "DateQuitRequest",

  //     title: "datequitrequest",
  //   },
  //   { width: 300, field: "ProfileSign", title: "profilesign" },
  //   {
  //     width: 300,
  //     field: "AddressEmergency",

  //     title: "addressemergency",
  //   },
  //   {
  //     width: 300,
  //     field: "PassportPlaceID",

  //     title: "passportplaceid",
  //   },
  //   { width: 300, field: "VillageID", title: "villageid" },
  //   { width: 300, field: "TAVillageID", title: "tavillageid" },
  //   { width: 300, field: "Order", title: "order" },
  //   { width: 300, field: "MarkColor", title: "markcolor" },
  //   {
  //     width: 300,
  //     field: "IsExistentConcurrentPosition",

  //     title: "isexistentconcurrentposition",
  //   },
  //   { width: 300, field: "PositionRate", title: "positionrate" },
  //   { width: 300, field: "PAddressID", title: "paddressid" },
  //   { width: 300, field: "TAddressID", title: "taddressid" },
  //   {
  //     width: 300,
  //     field: "IsRegisterSocialIns",

  //     title: "isregistersocialins",
  //   },
  //   {
  //     width: 300,
  //     field: "IsRegisterHealthIns",

  //     title: "isregisterhealthins",
  //   },
  //   {
  //     width: 300,
  //     field: "IsRegisterUnEmploymentIns",

  //     title: "isregisterunemploymentins",
  //   },
  //   {
  //     width: 300,
  //     field: "GraduatedLevelID",

  //     title: "graduatedlevelid",
  //   },
  //   { width: 300, field: "ShopID", title: "shopid" },
  //   { width: 300, field: "TCountryID", title: "tcountryid" },
  //   { width: 300, field: "TProvinceID", title: "tprovinceid" },
  //   { width: 300, field: "TDistrictID", title: "tdistrictid" },
  //   { width: 300, field: "TAddress", title: "taddress" },
  //   { width: 300, field: "PCountryID", title: "pcountryid" },
  //   { width: 300, field: "PProvinceID", title: "pprovinceid" },
  //   { width: 300, field: "PDistrictID", title: "pdistrictid" },
  //   { width: 300, field: "PAddress", title: "paddress" },
  //   {
  //     width: 300,
  //     field: "SalaryClassName",

  //     title: "salaryclassname",
  //   },
  //   { width: 300, field: "ReasonDeny", title: "reasondeny" },
  //   { width: 300, field: "StatusHire", title: "statushire" },
  //   { width: 300, field: "SalaryClassID", title: "salaryclassid" },
  //   { width: 300, field: "IsHoldSal", title: "isholdsal" },
  //   { width: 300, field: "UserCreateID", title: "usercreateid" },
  //   { width: 300, field: "TypeSuspense", title: "typesuspense" },
  //   { width: 300, field: "MonthHoldSal", title: "monthholdsal" },
  //   {
  //     width: 300,
  //     field: "ContractTypeID",

  //     title: "contracttypeid",
  //   },
  //   { width: 300, field: "TypeOfStop", title: "typeofstop" },
  //   { width: 300, field: "Settlement", title: "settlement" },
  //   {
  //     width: 300,
  //     field: "MonnthSettlement",

  //     title: "monnthsettlement",
  //   },
  //   { width: 300, field: "IsSettlement", title: "issettlement" },
  //   { width: 300, field: "RegionID", title: "regionid" },
  //   {
  //     width: 300,
  //     field: "SocialInsPlaceID",

  //     title: "socialinsplaceid",
  //   },
  //   { width: 300, field: "TypeOfStopID", title: "typeofstopid" },
  //   { width: 300, field: "CodeEmpClient", title: "codeempclient" },
  //   { width: 300, field: "CostSourceID", title: "costsourceid" },
  //   { width: 300, field: "VehicleID", title: "vehicleid" },
  //   { width: 300, field: "ShoeSize", title: "shoesize" },
  //   { width: 300, field: "StopWorkType", title: "stopworktype" },
  //   {
  //     width: 300,
  //     field: "NameContactForEmergency",

  //     title: "namecontactforemergency",
  //   },
  //   {
  //     width: 300,
  //     field: "CellPhoneForEmergency",

  //     title: "cellphoneforemergency",
  //   },
  //   {
  //     width: 300,
  //     field: "IsPeriodicExamination",

  //     title: "isperiodicexamination",
  //   },
  //   { width: 300, field: "AbilityTileID", title: "abilitytileid" },
  //   {
  //     width: 300,
  //     field: "IsTradeUnionist",

  //     title: "istradeunionist",
  //   },
  //   {
  //     width: 300,
  //     field: "TradeUnionistEnrolledDate",

  //     title: "tradeunionistenrolleddate",
  //   },
  //   {
  //     width: 300,
  //     field: "TradeUnionistPositionID",

  //     title: "tradeunionistpositionid",
  //   },
  //   { width: 300, field: "CoatSize", title: "coatsize" },
  //   { width: 300, field: "PantSize", title: "pantsize" },
  //   {
  //     width: 300,
  //     field: "TypeOfTransferID",

  //     title: "typeoftransferid",
  //   },
  //   {
  //     width: 300,
  //     field: "MidSupervisorID",

  //     title: "midsupervisorid",
  //   },
  //   { width: 300, field: "MiddleName", title: "middlename" },
  //   {
  //     width: 300,
  //     field: "NationalityGroupID",

  //     title: "nationalitygroupid",
  //   },
  //   {
  //     width: 300,
  //     field: "EmployeeGroupID",

  //     title: "employeegroupid",
  //   },
  //   {
  //     width: 300,
  //     field: "AddressSecondaryEmergency",

  //     title: "addresssecondaryemergency",
  //   },
  //   {
  //     width: 300,
  //     field: "NameForSecondaryEmergency",

  //     title: "nameforsecondaryemergency",
  //   },
  //   {
  //     width: 300,
  //     field: "CellPhoneForSecondaryEmergency",

  //     title: "cellphoneforsecondaryemergency",
  //   },
  //   {
  //     width: 300,
  //     field: "SubjectGroupID",

  //     title: "subjectgroupid",
  //   },
  //   { width: 300, field: "SubjectID", title: "subjectid" },
  //   {
  //     width: 300,
  //     field: "CostActivityID",

  //     title: "costactivityid",
  //   },
  //   {
  //     width: 300,
  //     field: "ProvinceHospital",

  //     title: "provincehospital",
  //   },
  //   {
  //     width: 300,
  //     field: "EmploymentType",

  //     title: "employmenttype",
  //   },
  //   { width: 300, field: "PositionID1", title: "positionid1" },
  //   { width: 300, field: "PositionID2", title: "positionid2" },
  //   { width: 300, field: "PositionID3", title: "positionid3" },
  //   { width: 300, field: "OldIDNo", title: "oldidno" },
  //   { width: 300, field: "IsTopPosition", title: "istopposition" },
  //   {
  //     width: 300,
  //     field: "CutOffDurationID",

  //     title: "cutoffdurationid",
  //   },
  //   {
  //     width: 300,
  //     field: "JobDescription",

  //     title: "jobdescription",
  //   },
  //   { width: 300, field: "Permission", title: "permission" },
  //   { width: 300, field: "TaskLongTerm", title: "tasklongterm" },
  //   { width: 300, field: "TaskShortTerm", title: "taskshortterm" },
  //   { width: 300, field: "TaxDepartment", title: "taxdepartment" },
  //   { width: 300, field: "CompanyID", title: "companyid" },
  //   { width: 300, field: "Email3", title: "email3" },
  //   { width: 300, field: "Email4", title: "email4" },
  //   { width: 300, field: "Relationship1", title: "relationship1" },
  //   { width: 300, field: "Relationship2", title: "relationship2" },
  //   { width: 300, field: "IsTalent", title: "istalent" },
  //   {
  //     width: 300,
  //     field: "IsNotEnoughHealth",

  //     title: "isnotenoughhealth",
  //   },
  //   { width: 300, field: "IDNoCountryID", title: "idnocountryid" },
  //   {
  //     width: 300,
  //     field: "IDNoProvinceID",

  //     title: "idnoprovinceid",
  //   },
  //   {
  //     width: 300,
  //     field: "IDNoDistrictID",

  //     title: "idnodistrictid",
  //   },
  //   {
  //     width: 300,
  //     field: "IDNoAVillageID",

  //     title: "idnoavillageid",
  //   },
  //   { width: 300, field: "IDNoAddress", title: "idnoaddress" },
  //   { width: 300, field: "SortID", title: "sortid" },
  //   {
  //     width: 300,
  //     field: "PayrollCategoryID",

  //     title: "payrollcategoryid",
  //   },
  //   {
  //     width: 300,
  //     field: "TradeUnionistEndDate",

  //     title: "tradeunionistenddate",
  //   },
  //   { width: 300, field: "DormitoryID", title: "dormitoryid" },
  //   { width: 300, field: "RootProfileID", title: "rootprofileid" },
  //   { width: 300, field: "SpecialAreaID", title: "specialareaid" },
  //   { width: 300, field: "DatehireNew", title: "datehirenew" },
  //   {
  //     width: 300,
  //     field: "UnitStructureID",

  //     title: "unitstructureid",
  //   },
  //   { width: 300, field: "IDCard", title: "idcard" },
  //   {
  //     width: 300,
  //     field: "IDCardDateOfIssue",

  //     title: "idcarddateofissue",
  //   },
  //   {
  //     width: 300,
  //     field: "IDCardPlaceOfIssue",

  //     title: "idcardplaceofissue",
  //   },
  //   {
  //     width: 300,
  //     field: "HealthTreatmentPlaceID",

  //     title: "healthtreatmentplaceid",
  //   },
  //   { width: 300, field: "OtherReason", title: "otherreason" },
  //   { width: 300, field: "ProbationTime", title: "probationtime" },
  //   {
  //     width: 300,
  //     field: "ProbationTimeUnit",

  //     title: "probationtimeunit",
  //   },
  //   { width: 300, field: "DateSenior", title: "datesenior" },
  //   {
  //     width: 300,
  //     field: "ReplaceForProfileID",

  //     title: "replaceforprofileid",
  //   },
  //   {
  //     width: 300,
  //     field: "ReplaceForReasonID",

  //     title: "replaceforreasonid",
  //   },
  //   { width: 300, field: "Career", title: "career" },
  //   { width: 300, field: "StrongPoint", title: "strongpoint" },
  //   { width: 300, field: "HealthStatus", title: "healthstatus" },
  //   { width: 300, field: "Detention", title: "detention" },
  //   {
  //     width: 300,
  //     field: "JoinForeignOrganization",

  //     title: "joinforeignorganization",
  //   },
  //   {
  //     width: 300,
  //     field: "ForeignRelatives",

  //     title: "foreignrelatives",
  //   },
  //   {
  //     width: 300,
  //     field: "SocialInsReserveDate",

  //     title: "socialinsreservedate",
  //   },
  //   {
  //     width: 300,
  //     field: "SocialInsDeliveryDate",

  //     title: "socialinsdeliverydate",
  //   },
  //   {
  //     width: 300,
  //     field: "SocialInsAppointmentDate",

  //     title: "socialinsappointmentdate",
  //   },
  //   { width: 300, field: "SocialInsNote", title: "socialinsnote" },
  //   { width: 300, field: "DateComeBack", title: "datecomeback" },
  //   {
  //     width: 300,
  //     field: "UsualAllowanceGroupID",

  //     title: "usualallowancegroupid",
  //   },
  //   {
  //     width: 300,
  //     field: "ProfileMoreInfoID",

  //     title: "profilemoreinfoid",
  //   },
  //   {
  //     width: 300,
  //     field: "IsNotComputProductSalary",

  //     title: "isnotcomputproductsalary",
  //   },
  //   {
  //     width: 300,
  //     field: "DayOfAnnualLeave",

  //     title: "dayofannualleave",
  //   },
  //   {
  //     width: 300,
  //     field: "NoSendMailProbation",

  //     title: "nosendmailprobation",
  //   },
  //   {
  //     width: 300,
  //     field: "AreaPostJobWorkID",

  //     title: "areapostjobworkid",
  //   },
  //   { width: 300, field: "AreaPostJobID", title: "areapostjobid" },
  //   { width: 300, field: "Fingercode", title: "fingercode" },
  //   { width: 300, field: "IDCardCodeAtt", title: "idcardcodeatt" },
  //   { width: 300, field: "StatusItg", title: "statusitg" },
];
//const defaultProfilefields = [];
export { ProfileFields };
