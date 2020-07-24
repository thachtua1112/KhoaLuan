const ProfileFields = [
  { width: 250, field: "ID", title: "id" },
  { width: 250, field: "ProfileName", title: "profilename" },
  { width: 250, field: "NameFamily", title: "namefamily" },
  { width: 250, field: "FirstName", title: "firstname" },
  { width: 250, field: "NameEnglish", title: "nameenglish" },
  { width: 250, field: "ImagePath", title: "imagepath" },
  { width: 250, field: "CodeEmp", title: "codeemp" },
  { width: 250, field: "CodeTax", title: "codetax" },
  //   {
  //     width: 250,
  //     field: "CodeAttendance",

  //     title: "codeattendance",
  //   },
  //   { width: 250, field: "StatusSyn", title: "statussyn" },
  //   { width: 250, field: "DateHire", title: "datehire" },
  //   {
  //     width: 250,
  //     field: "DateEndProbation",

  //     title: "dateendprobation",
  //   },
  //   { width: 250, field: "DateQuit", title: "datequit" },
  //   {
  //     width: 250,
  //     field: "ResignDescription",

  //     title: "resigndescription",
  //   },
  //   { width: 250, field: "CandidateID", title: "candidateid" },
  //   { width: 250, field: "WorkGroupID", title: "workgroupid" },
  //   {
  //     width: 250,
  //     field: "OrgStructureID",

  //     title: "orgstructureid",
  //   },
  //   { width: 250, field: "PositionID", title: "positionid" },
  //   { width: 250, field: "DateOfEffect", title: "dateofeffect" },
  //   { width: 250, field: "CostCentreID", title: "costcentreid" },
  //   { width: 250, field: "LaborType", title: "labortype" },
  //   { width: 250, field: "WorkingPlace", title: "workingplace" },
  //   { width: 250, field: "Supervisor", title: "supervisor" },
  //   {
  //     width: 250,
  //     field: "SocialInsOldNo",

  //     title: "socialinsoldno",
  //   },
  //   { width: 250, field: "SocialInsNo", title: "socialinsno" },
  //   {
  //     width: 250,
  //     field: "SocialInsDateReg",

  //     title: "socialinsdatereg",
  //   },
  //   {
  //     width: 250,
  //     field: "SocialInsIssueDate",

  //     title: "socialinsissuedate",
  //   },
  //   {
  //     width: 250,
  //     field: "SocialInsIssuePlace",

  //     title: "socialinsissueplace",
  //   },
  //   { width: 250, field: "HealthInsNo", title: "healthinsno" },
  //   {
  //     width: 250,
  //     field: "HealthInsIssueDate",

  //     title: "healthinsissuedate",
  //   },
  //   {
  //     width: 250,
  //     field: "HealthInsExpiredDate",

  //     title: "healthinsexpireddate",
  //   },
  //   {
  //     width: 250,
  //     field: "HealthInsIssuePlace",

  //     title: "healthinsissueplace",
  //   },
  //   {
  //     width: 250,
  //     field: "HealthTreatmentPlace",

  //     title: "healthtreatmentplace",
  //   },
  //   {
  //     width: 250,
  //     field: "HealthTreatmentProvince",

  //     title: "healthtreatmentprovince",
  //   },
  //   { width: 250, field: "Gender", title: "gender" },
  //   { width: 250, field: "DateOfBirth", title: "dateofbirth" },
  //   { width: 250, field: "PlaceOfBirth", title: "placeofbirth" },
  //   { width: 250, field: "NationalityID", title: "nationalityid" },
  //   { width: 250, field: "EthnicID", title: "ethnicid" },
  //   { width: 250, field: "ReligionID", title: "religionid" },
  //   { width: 250, field: "BloodType", title: "bloodtype" },
  //   { width: 250, field: "Height", title: "height" },
  //   { width: 250, field: "Weight", title: "weight" },
  //   { width: 250, field: "IDNo", title: "idno" },
  //   { width: 250, field: "IDDateOfIssue", title: "iddateofissue" },
  //   {
  //     width: 250,
  //     field: "IDPlaceOfIssue",

  //     title: "idplaceofissue",
  //   },
  //   { width: 250, field: "PassportNo", title: "passportno" },
  //   {
  //     width: 250,
  //     field: "PassportDateOfExpiry",

  //     title: "passportdateofexpiry",
  //   },
  //   {
  //     width: 250,
  //     field: "PassportDateOfIssue",

  //     title: "passportdateofissue",
  //   },
  //   {
  //     width: 250,
  //     field: "PassportPlaceOfIssue",

  //     title: "passportplaceofissue",
  //   },
  //   { width: 250, field: "Email", title: "email" },
  //   { width: 250, field: "Email2", title: "email2" },
  //   { width: 250, field: "Cellphone", title: "cellphone" },
  //   { width: 250, field: "HomePhone", title: "homephone" },
  //   { width: 250, field: "BusinessPhone", title: "businessphone" },
  //   { width: 250, field: "PAStreet", title: "pastreet" },
  //   { width: 250, field: "PADistrictID", title: "padistrictid" },
  //   { width: 250, field: "PACityID", title: "pacityid" },
  //   { width: 250, field: "TAStreet", title: "tastreet" },
  //   { width: 250, field: "TADistrictID", title: "tadistrictid" },
  //   { width: 250, field: "TACityID", title: "tacityid" },
  //   { width: 250, field: "StatusVerify", title: "statusverify" },
  //   { width: 250, field: "JobTitleID", title: "jobtitleid" },
  //   { width: 250, field: "TagID", title: "tagid" },
  //   { width: 250, field: "LabourNo", title: "labourno" },
  //   {
  //     width: 250,
  //     field: "LabourIssueDate",

  //     title: "labourissuedate",
  //   },
  //   {
  //     width: 250,
  //     field: "PayrollGroupID",

  //     title: "payrollgroupid",
  //   },
  //   { width: 250, field: "LaborBookNo", title: "laborbookno" },
  //   {
  //     width: 250,
  //     field: "LaborBookIssueDate",

  //     title: "laborbookissuedate",
  //   },
  //   { width: 250, field: "RequestDate", title: "requestdate" },
  //   { width: 250, field: "EmpTypeID", title: "emptypeid" },
  //   {
  //     width: 250,
  //     field: "EducationLevelID",

  //     title: "educationlevelid",
  //   },
  //   { width: 250, field: "ResReasonID", title: "resreasonid" },
  //   {
  //     width: 250,
  //     field: "MarriageStatus",

  //     title: "marriagestatus",
  //   },
  //   { width: 250, field: "ResignNo", title: "resignno" },
  //   { width: 250, field: "Forte", title: "forte" },
  //   { width: 250, field: "TrainingSkill", title: "trainingskill" },
  //   {
  //     width: 250,
  //     field: "PromotionCondition",

  //     title: "promotioncondition",
  //   },
  //   {
  //     width: 250,
  //     field: "PromotionRequest",

  //     title: "promotionrequest",
  //   },
  //   {
  //     width: 250,
  //     field: "DeadLineApprove",

  //     title: "deadlineapprove",
  //   },
  //   { width: 250, field: "Notes2", title: "notes2" },
  //   { width: 250, field: "Origin", title: "origin" },
  //   { width: 250, field: "ContactName1", title: "contactname1" },
  //   { width: 250, field: "ContactName2", title: "contactname2" },
  //   {
  //     width: 250,
  //     field: "ContactRelation1",

  //     title: "contactrelation1",
  //   },
  //   {
  //     width: 250,
  //     field: "ContactRelation2",

  //     title: "contactrelation2",
  //   },
  //   { width: 250, field: "ContactPhone1", title: "contactphone1" },
  //   { width: 250, field: "ContactPhone2", title: "contactphone2" },
  //   {
  //     width: 250,
  //     field: "ContactAddress1",

  //     title: "contactaddress1",
  //   },
  //   {
  //     width: 250,
  //     field: "ContactAddress2",

  //     title: "contactaddress2",
  //   },
  //   { width: 250, field: "ServerUpdate", title: "serverupdate" },
  //   { width: 250, field: "ServerCreate", title: "servercreate" },
  //   { width: 250, field: "UserUpdate", title: "userupdate" },
  //   { width: 250, field: "UserCreate", title: "usercreate" },
  //   { width: 250, field: "DateCreate", title: "datecreate" },
  //   { width: 250, field: "DateUpdate", title: "dateupdate" },
  //   { width: 250, field: "UserLockID", title: "userlockid" },
  //   { width: 250, field: "DateLock", title: "datelock" },
  //   { width: 250, field: "IsDelete", title: "isdelete" },
  //   { width: 250, field: "IPCreate", title: "ipcreate" },
  //   { width: 250, field: "IPUpdate", title: "ipupdate" },
  //   { width: 250, field: "biography", title: "biography" },
  //   { width: 250, field: "Notes", title: "notes" },
  //   {
  //     width: 250,
  //     field: "JobTitlePotentinalID",

  //     title: "jobtitlepotentinalid",
  //   },
  //   { width: 250, field: "DateFrom", title: "datefrom" },
  //   { width: 250, field: "DateTo", title: "dateto" },
  //   {
  //     width: 250,
  //     field: "LabourBookPlaceOfIssue",

  //     title: "labourbookplaceofissue",
  //   },
  //   { width: 250, field: "Smoke", title: "smoke" },
  //   { width: 250, field: "TypeOfVehicle", title: "typeofvehicle" },
  //   {
  //     width: 250,
  //     field: "DrivingLisenceNo",

  //     title: "drivinglisenceno",
  //   },
  //   {
  //     width: 250,
  //     field: "StoredDocuments",

  //     title: "storeddocuments",
  //   },
  //   { width: 250, field: "LockerID", title: "lockerid" },
  //   { width: 250, field: "UnEmpInsNo", title: "unempinsno" },
  //   {
  //     width: 250,
  //     field: "UnEmpInsDateReg",

  //     title: "unempinsdatereg",
  //   },
  //   { width: 250, field: "UnEmpInsPlace", title: "unempinsplace" },
  //   { width: 250, field: "ReceiveUnEmp", title: "receiveunemp" },
  //   {
  //     width: 250,
  //     field: "ReceiveSocialIns",

  //     title: "receivesocialins",
  //   },
  //   {
  //     width: 250,
  //     field: "ReceiveSocialInsDate",

  //     title: "receivesocialinsdate",
  //   },
  //   { width: 250, field: "FileStore", title: "filestore" },
  //   { width: 250, field: "FileAttach", title: "fileattach" },
  //   {
  //     width: 250,
  //     field: "HealthTreatmentPlaceCode",

  //     title: "healthtreatmentplacecode",
  //   },
  //   { width: 250, field: "DayOfBirth", title: "dayofbirth" },
  //   { width: 250, field: "MonthOfBirth", title: "monthofbirth" },
  //   { width: 250, field: "YearOfBirth", title: "yearofbirth" },
  //   { width: 250, field: "IsBlackList", title: "isblacklist" },
  //   {
  //     width: 250,
  //     field: "HighSupervisor",

  //     title: "highsupervisor",
  //   },
  //   { width: 250, field: "Notes3", title: "notes3" },
  //   {
  //     width: 250,
  //     field: "IsDrivingLisence",

  //     title: "isdrivinglisence",
  //   },
  //   {
  //     width: 250,
  //     field: "ProbExtendDays",

  //     title: "probextenddays",
  //   },
  //   { width: 250, field: "IsHeadDept", title: "isheaddept" },
  //   { width: 250, field: "IsInsFollowUp", title: "isinsfollowup" },
  //   { width: 250, field: "CommentIns", title: "commentins" },
  //   {
  //     width: 250,
  //     field: "ReceiveHealthIns",

  //     title: "receivehealthins",
  //   },
  //   {
  //     width: 250,
  //     field: "ReceiveHealthInsDate",

  //     title: "receivehealthinsdate",
  //   },
  //   {
  //     width: 250,
  //     field: "UnEmpInsCountMonthOld",

  //     title: "unempinscountmonthold",
  //   },
  //   {
  //     width: 250,
  //     field: "Specialization",

  //     title: "specialization",
  //   },
  //   {
  //     width: 250,
  //     field: "ProbExtendDate",

  //     title: "probextenddate",
  //   },
  //   {
  //     width: 250,
  //     field: "SocialInsSubmitBookDate",

  //     title: "socialinssubmitbookdate",
  //   },
  //   {
  //     width: 250,
  //     field: "SocialInsSubmitBookStatus",

  //     title: "socialinssubmitbookstatus",
  //   },
  //   {
  //     width: 250,
  //     field: "PasswordPaySlip",

  //     title: "passwordpayslip",
  //   },
  //   {
  //     width: 250,
  //     field: "WorkPermitStatus",

  //     title: "workpermitstatus",
  //   },
  //   { width: 250, field: "WorkPermitNo", title: "workpermitno" },
  //   {
  //     width: 250,
  //     field: "WorkPermitInsDate",

  //     title: "workpermitinsdate",
  //   },
  //   {
  //     width: 250,
  //     field: "WorkPermitExpiredDate",

  //     title: "workpermitexpireddate",
  //   },
  //   {
  //     width: 250,
  //     field: "DateOfIssuedTaxCode",

  //     title: "dateofissuedtaxcode",
  //   },
  //   { width: 250, field: "DateQuitSign", title: "datequitsign" },
  //   { width: 250, field: "LocationCode", title: "locationcode" },
  //   { width: 250, field: "SupervisorID", title: "supervisorid" },
  //   {
  //     width: 250,
  //     field: "HighSupervisorID",

  //     title: "highsupervisorid",
  //   },
  //   { width: 250, field: "WorkPlaceID", title: "workplaceid" },
  //   {
  //     width: 250,
  //     field: "PasswordPaySliptDefault",

  //     title: "passwordpaysliptdefault",
  //   },
  //   { width: 250, field: "SikillLevel", title: "sikilllevel" },
  //   {
  //     width: 250,
  //     field: "DateApplyAttendanceCode",

  //     title: "dateapplyattendancecode",
  //   },
  //   { width: 250, field: "FormType", title: "formtype" },
  //   {
  //     width: 250,
  //     field: "PlaceOfIssueID",

  //     title: "placeofissueid",
  //   },
  //   { width: 250, field: "ResonBackList", title: "resonbacklist" },
  //   { width: 250, field: "DatePrepare", title: "dateprepare" },
  //   {
  //     width: 250,
  //     field: "PlaceOfBirthID",

  //     title: "placeofbirthid",
  //   },
  //   {
  //     width: 250,
  //     field: "OrgLineDefaultID",

  //     title: "orglinedefaultid",
  //   },
  //   {
  //     width: 250,
  //     field: "ProducteLineDefaultID",

  //     title: "productelinedefaultid",
  //   },
  //   {
  //     width: 250,
  //     field: "ProvinceInsuranceID",

  //     title: "provinceinsuranceid",
  //   },
  //   {
  //     width: 250,
  //     field: "DateQuitRequest",

  //     title: "datequitrequest",
  //   },
  //   { width: 250, field: "ProfileSign", title: "profilesign" },
  //   {
  //     width: 250,
  //     field: "AddressEmergency",

  //     title: "addressemergency",
  //   },
  //   {
  //     width: 250,
  //     field: "PassportPlaceID",

  //     title: "passportplaceid",
  //   },
  //   { width: 250, field: "VillageID", title: "villageid" },
  //   { width: 250, field: "TAVillageID", title: "tavillageid" },
  //   { width: 250, field: "Order", title: "order" },
  //   { width: 250, field: "MarkColor", title: "markcolor" },
  //   {
  //     width: 250,
  //     field: "IsExistentConcurrentPosition",

  //     title: "isexistentconcurrentposition",
  //   },
  //   { width: 250, field: "PositionRate", title: "positionrate" },
  //   { width: 250, field: "PAddressID", title: "paddressid" },
  //   { width: 250, field: "TAddressID", title: "taddressid" },
  //   {
  //     width: 250,
  //     field: "IsRegisterSocialIns",

  //     title: "isregistersocialins",
  //   },
  //   {
  //     width: 250,
  //     field: "IsRegisterHealthIns",

  //     title: "isregisterhealthins",
  //   },
  //   {
  //     width: 250,
  //     field: "IsRegisterUnEmploymentIns",

  //     title: "isregisterunemploymentins",
  //   },
  //   {
  //     width: 250,
  //     field: "GraduatedLevelID",

  //     title: "graduatedlevelid",
  //   },
  //   { width: 250, field: "ShopID", title: "shopid" },
  //   { width: 250, field: "TCountryID", title: "tcountryid" },
  //   { width: 250, field: "TProvinceID", title: "tprovinceid" },
  //   { width: 250, field: "TDistrictID", title: "tdistrictid" },
  //   { width: 250, field: "TAddress", title: "taddress" },
  //   { width: 250, field: "PCountryID", title: "pcountryid" },
  //   { width: 250, field: "PProvinceID", title: "pprovinceid" },
  //   { width: 250, field: "PDistrictID", title: "pdistrictid" },
  //   { width: 250, field: "PAddress", title: "paddress" },
  //   {
  //     width: 250,
  //     field: "SalaryClassName",

  //     title: "salaryclassname",
  //   },
  //   { width: 250, field: "ReasonDeny", title: "reasondeny" },
  //   { width: 250, field: "StatusHire", title: "statushire" },
  //   { width: 250, field: "SalaryClassID", title: "salaryclassid" },
  //   { width: 250, field: "IsHoldSal", title: "isholdsal" },
  //   { width: 250, field: "UserCreateID", title: "usercreateid" },
  //   { width: 250, field: "TypeSuspense", title: "typesuspense" },
  //   { width: 250, field: "MonthHoldSal", title: "monthholdsal" },
  //   {
  //     width: 250,
  //     field: "ContractTypeID",

  //     title: "contracttypeid",
  //   },
  //   { width: 250, field: "TypeOfStop", title: "typeofstop" },
  //   { width: 250, field: "Settlement", title: "settlement" },
  //   {
  //     width: 250,
  //     field: "MonnthSettlement",

  //     title: "monnthsettlement",
  //   },
  //   { width: 250, field: "IsSettlement", title: "issettlement" },
  //   { width: 250, field: "RegionID", title: "regionid" },
  //   {
  //     width: 250,
  //     field: "SocialInsPlaceID",

  //     title: "socialinsplaceid",
  //   },
  //   { width: 250, field: "TypeOfStopID", title: "typeofstopid" },
  //   { width: 250, field: "CodeEmpClient", title: "codeempclient" },
  //   { width: 250, field: "CostSourceID", title: "costsourceid" },
  //   { width: 250, field: "VehicleID", title: "vehicleid" },
  //   { width: 250, field: "ShoeSize", title: "shoesize" },
  //   { width: 250, field: "StopWorkType", title: "stopworktype" },
  //   {
  //     width: 250,
  //     field: "NameContactForEmergency",

  //     title: "namecontactforemergency",
  //   },
  //   {
  //     width: 250,
  //     field: "CellPhoneForEmergency",

  //     title: "cellphoneforemergency",
  //   },
  //   {
  //     width: 250,
  //     field: "IsPeriodicExamination",

  //     title: "isperiodicexamination",
  //   },
  //   { width: 250, field: "AbilityTileID", title: "abilitytileid" },
  //   {
  //     width: 250,
  //     field: "IsTradeUnionist",

  //     title: "istradeunionist",
  //   },
  //   {
  //     width: 250,
  //     field: "TradeUnionistEnrolledDate",

  //     title: "tradeunionistenrolleddate",
  //   },
  //   {
  //     width: 250,
  //     field: "TradeUnionistPositionID",

  //     title: "tradeunionistpositionid",
  //   },
  //   { width: 250, field: "CoatSize", title: "coatsize" },
  //   { width: 250, field: "PantSize", title: "pantsize" },
  //   {
  //     width: 250,
  //     field: "TypeOfTransferID",

  //     title: "typeoftransferid",
  //   },
  //   {
  //     width: 250,
  //     field: "MidSupervisorID",

  //     title: "midsupervisorid",
  //   },
  //   { width: 250, field: "MiddleName", title: "middlename" },
  //   {
  //     width: 250,
  //     field: "NationalityGroupID",

  //     title: "nationalitygroupid",
  //   },
  //   {
  //     width: 250,
  //     field: "EmployeeGroupID",

  //     title: "employeegroupid",
  //   },
  //   {
  //     width: 250,
  //     field: "AddressSecondaryEmergency",

  //     title: "addresssecondaryemergency",
  //   },
  //   {
  //     width: 250,
  //     field: "NameForSecondaryEmergency",

  //     title: "nameforsecondaryemergency",
  //   },
  //   {
  //     width: 250,
  //     field: "CellPhoneForSecondaryEmergency",

  //     title: "cellphoneforsecondaryemergency",
  //   },
  //   {
  //     width: 250,
  //     field: "SubjectGroupID",

  //     title: "subjectgroupid",
  //   },
  //   { width: 250, field: "SubjectID", title: "subjectid" },
  //   {
  //     width: 250,
  //     field: "CostActivityID",

  //     title: "costactivityid",
  //   },
  //   {
  //     width: 250,
  //     field: "ProvinceHospital",

  //     title: "provincehospital",
  //   },
  //   {
  //     width: 250,
  //     field: "EmploymentType",

  //     title: "employmenttype",
  //   },
  //   { width: 250, field: "PositionID1", title: "positionid1" },
  //   { width: 250, field: "PositionID2", title: "positionid2" },
  //   { width: 250, field: "PositionID3", title: "positionid3" },
  //   { width: 250, field: "OldIDNo", title: "oldidno" },
  //   { width: 250, field: "IsTopPosition", title: "istopposition" },
  //   {
  //     width: 250,
  //     field: "CutOffDurationID",

  //     title: "cutoffdurationid",
  //   },
  //   {
  //     width: 250,
  //     field: "JobDescription",

  //     title: "jobdescription",
  //   },
  //   { width: 250, field: "Permission", title: "permission" },
  //   { width: 250, field: "TaskLongTerm", title: "tasklongterm" },
  //   { width: 250, field: "TaskShortTerm", title: "taskshortterm" },
  //   { width: 250, field: "TaxDepartment", title: "taxdepartment" },
  //   { width: 250, field: "CompanyID", title: "companyid" },
  //   { width: 250, field: "Email3", title: "email3" },
  //   { width: 250, field: "Email4", title: "email4" },
  //   { width: 250, field: "Relationship1", title: "relationship1" },
  //   { width: 250, field: "Relationship2", title: "relationship2" },
  //   { width: 250, field: "IsTalent", title: "istalent" },
  //   {
  //     width: 250,
  //     field: "IsNotEnoughHealth",

  //     title: "isnotenoughhealth",
  //   },
  //   { width: 250, field: "IDNoCountryID", title: "idnocountryid" },
  //   {
  //     width: 250,
  //     field: "IDNoProvinceID",

  //     title: "idnoprovinceid",
  //   },
  //   {
  //     width: 250,
  //     field: "IDNoDistrictID",

  //     title: "idnodistrictid",
  //   },
  //   {
  //     width: 250,
  //     field: "IDNoAVillageID",

  //     title: "idnoavillageid",
  //   },
  //   { width: 250, field: "IDNoAddress", title: "idnoaddress" },
  //   { width: 250, field: "SortID", title: "sortid" },
  //   {
  //     width: 250,
  //     field: "PayrollCategoryID",

  //     title: "payrollcategoryid",
  //   },
  //   {
  //     width: 250,
  //     field: "TradeUnionistEndDate",

  //     title: "tradeunionistenddate",
  //   },
  //   { width: 250, field: "DormitoryID", title: "dormitoryid" },
  //   { width: 250, field: "RootProfileID", title: "rootprofileid" },
  //   { width: 250, field: "SpecialAreaID", title: "specialareaid" },
  //   { width: 250, field: "DatehireNew", title: "datehirenew" },
  //   {
  //     width: 250,
  //     field: "UnitStructureID",

  //     title: "unitstructureid",
  //   },
  //   { width: 250, field: "IDCard", title: "idcard" },
  //   {
  //     width: 250,
  //     field: "IDCardDateOfIssue",

  //     title: "idcarddateofissue",
  //   },
  //   {
  //     width: 250,
  //     field: "IDCardPlaceOfIssue",

  //     title: "idcardplaceofissue",
  //   },
  //   {
  //     width: 250,
  //     field: "HealthTreatmentPlaceID",

  //     title: "healthtreatmentplaceid",
  //   },
  //   { width: 250, field: "OtherReason", title: "otherreason" },
  //   { width: 250, field: "ProbationTime", title: "probationtime" },
  //   {
  //     width: 250,
  //     field: "ProbationTimeUnit",

  //     title: "probationtimeunit",
  //   },
  //   { width: 250, field: "DateSenior", title: "datesenior" },
  //   {
  //     width: 250,
  //     field: "ReplaceForProfileID",

  //     title: "replaceforprofileid",
  //   },
  //   {
  //     width: 250,
  //     field: "ReplaceForReasonID",

  //     title: "replaceforreasonid",
  //   },
  //   { width: 250, field: "Career", title: "career" },
  //   { width: 250, field: "StrongPoint", title: "strongpoint" },
  //   { width: 250, field: "HealthStatus", title: "healthstatus" },
  //   { width: 250, field: "Detention", title: "detention" },
  //   {
  //     width: 250,
  //     field: "JoinForeignOrganization",

  //     title: "joinforeignorganization",
  //   },
  //   {
  //     width: 250,
  //     field: "ForeignRelatives",

  //     title: "foreignrelatives",
  //   },
  //   {
  //     width: 250,
  //     field: "SocialInsReserveDate",

  //     title: "socialinsreservedate",
  //   },
  //   {
  //     width: 250,
  //     field: "SocialInsDeliveryDate",

  //     title: "socialinsdeliverydate",
  //   },
  //   {
  //     width: 250,
  //     field: "SocialInsAppointmentDate",

  //     title: "socialinsappointmentdate",
  //   },
  //   { width: 250, field: "SocialInsNote", title: "socialinsnote" },
  //   { width: 250, field: "DateComeBack", title: "datecomeback" },
  //   {
  //     width: 250,
  //     field: "UsualAllowanceGroupID",

  //     title: "usualallowancegroupid",
  //   },
  //   {
  //     width: 250,
  //     field: "ProfileMoreInfoID",

  //     title: "profilemoreinfoid",
  //   },
  //   {
  //     width: 250,
  //     field: "IsNotComputProductSalary",

  //     title: "isnotcomputproductsalary",
  //   },
  //   {
  //     width: 250,
  //     field: "DayOfAnnualLeave",

  //     title: "dayofannualleave",
  //   },
  //   {
  //     width: 250,
  //     field: "NoSendMailProbation",

  //     title: "nosendmailprobation",
  //   },
  //   {
  //     width: 250,
  //     field: "AreaPostJobWorkID",

  //     title: "areapostjobworkid",
  //   },
  //   { width: 250, field: "AreaPostJobID", title: "areapostjobid" },
  //   { width: 250, field: "Fingercode", title: "fingercode" },
  //   { width: 250, field: "IDCardCodeAtt", title: "idcardcodeatt" },
  //   { width: 250, field: "StatusItg", title: "statusitg" },
];
//const defaultProfilefields = [];
export { ProfileFields };
