const express = require("express");
const ProfileRoute = require("./Hre_Profile.route");
const T_ProfileRoute = require("./T_Hre_Profile.route");
const StopWorking = require("./Hre_StopWorking.route");
const WorkHistory = require("./Hre_WorkHistory.route");
const PositionRoute = require("./Cat_Position.route");
const OrgUnitRoute = require("./Cat_OrgUnit.route");
const OrgStructureRoute = require("./Cat_OrgStructure.route");
const ContractTypeRoute = require("./Cat_ContractType.route");
const WorkHistoryRoute = require("./Hre_WorkHistory.route");
const StopWorkingRoute = require("./Hre_StopWorking.route");

const routeAPI = express.Router();
routeAPI.use("/v1/positions", PositionRoute);
routeAPI.use("/v1/profiles", ProfileRoute);
routeAPI.use("/v1/t-profiles", T_ProfileRoute);
routeAPI.use("/v1/org-structures", OrgStructureRoute);
routeAPI.use("/v1/org-units", OrgUnitRoute);
routeAPI.use("/v1/work-history", WorkHistoryRoute);
routeAPI.use("/v1/stop-working", StopWorkingRoute);
routeAPI.use("/v1/contract-type", ContractTypeRoute);

module.exports = routeAPI;
