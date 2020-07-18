import React from "react";

const OrgStructurePage = React.lazy(() => import("../OrgStructurePage"));

const staffRoute = [
  {
    path: "/org-structure",
    name: "OrgStructure",
    component: OrgStructurePage,
    exact: true,
  },
];

export default staffRoute;
