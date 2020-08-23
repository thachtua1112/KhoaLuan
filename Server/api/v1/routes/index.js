const express = require("express");

const ProfileRoute = require("./Hre_Profile.route");
const Hre_CollaborateRoute = require("./Hre_Collaborate.route");
const PositionRoute = require("./Cat_Position.route");
const OrgUnitRoute = require("./Cat_OrgUnit.route");
const OrgStructureRoute = require("./Cat_OrgStructure.route");
const ContractTypeRoute = require("./Cat_ContractType.route");
const WorkHistoryRoute = require("./Hre_WorkHistory.route");
const StopWorkingRoute = require("./Hre_StopWorking.route");
const HreContractRoute = require("./Hre_Contract.route");

const TimeKeepingDayRoute = require("./Att_TimeKeepingDay.route");

const TimeKeepingGroupRoute = require("./Att_TimeKeepingGroup.route");
const SalaryRoute = require("./Att_Salary.route");
const NewStaffRoute = require("./NewStaff.route");
const ProfileQualificationRoute = require("./Hre_ProfileQualification.route");

const routeAPI = express.Router();
routeAPI.use("/positions", PositionRoute);
routeAPI.use("/profiles", ProfileRoute);
//routeAPI.use("/t-profiles", T_ProfileRoute);
routeAPI.use("/hre-collaborates", Hre_CollaborateRoute);

routeAPI.use("/org-structures", OrgStructureRoute);
routeAPI.use("/org-units", OrgUnitRoute);
routeAPI.use("/work-histories", WorkHistoryRoute);
routeAPI.use("/stop-workings", StopWorkingRoute);
routeAPI.use("/contract-types", ContractTypeRoute);
routeAPI.use("/hre-contract", HreContractRoute);
routeAPI.use("/new-staff", NewStaffRoute);
routeAPI.use("/profile-qualification", ProfileQualificationRoute);

routeAPI.use("/timekeeping-days", TimeKeepingDayRoute);

routeAPI.use("/timekeeping-groups", TimeKeepingGroupRoute);

routeAPI.use("/salarys",SalaryRoute)

module.exports = routeAPI;
